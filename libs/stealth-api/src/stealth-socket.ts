import { Injectable, Logger } from '@nestjs/common';
import * as net from 'net';

export enum ConnectionStatusEnum {
  Connected,
  NotConnected,
}

@Injectable()
export class StealthSocket extends net.Socket {
  private _status: ConnectionStatusEnum;
  private _socket: net.Socket;

  init(port: number): void {
    this._socket = net.createConnection({ port }, () => {
      Logger.log('Connected');
      this._status = ConnectionStatusEnum.Connected;
      // init with lang packet
      this.sendBuffer('0,0,0,9,5,0,0,0,4,0,0,0,0');
    });
    this._socket.on('data', this.dataHandler);
    this._socket.on('end', this.endHandler);
  }

  dataHandler(data: Buffer): void {
    Logger.log(data);
  }
  endHandler(): void {
    Logger.log('connection closed...');
    this._status = ConnectionStatusEnum.NotConnected;
  }

  sendBuffer(bufferString: string): string {
    if (this._status === ConnectionStatusEnum.Connected) {

      const bytes = bufferString.split(',').map(el => parseInt(el, 16));
      const arr = Buffer.from(bytes);

      if (this._socket.writable) {
        this._socket.write(arr);
        // Logger.log(arr);
        return arr.toString();
      }
    }
  }
}
