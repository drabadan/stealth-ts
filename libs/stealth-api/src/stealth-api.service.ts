import { Inject, Injectable, Logger } from "@nestjs/common";
import * as net from 'net';
import { StealthSocket } from "./stealth-socket";

@Injectable()
export class StealthApiService {
  constructor(
    @Inject('STEALTH_INITIAL_PORT') private readonly connectionPort: number,
    private stealthSocket: StealthSocket
  ) { }

  public async connect(): Promise<void> {
    const client = net.createConnection({ port: this.connectionPort }, () => {
      Logger.log('Connecting to Stealth!');
      try {
        const bytes = [0x4, 0x0, 0xef, 0xbe, 0xad, 0xde];
        const arr = new Uint8Array(bytes);
        client.write(arr);
      } catch (err) {
        Logger.error(err);
      }
    });
    client.on('data', (data: Buffer) => {
      if (data && data.readInt8() === 2) {
        let port;
        Logger.log(`Received port: ${(port = data.readUInt16LE(2))}`);
        if (typeof port === 'number') {
          this.stealthSocket.init(port);
        }
      }
      client.end();
    });
  }
}