import { StealthApiService } from '@app/stealth-api';
import { StealthSocket } from '@app/stealth-api/stealth-socket';
import { Controller, Get, Query, Req } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('stealth')
@Controller('api/v1/stealth-api')
export class StealthApiController {
  constructor(
    private readonly stealthService: StealthApiService,
    private stealthSocket: StealthSocket) { }

  @Get('connect')
  connect(@Req() request: Request): void {
    this.stealthService.connect();
  }

  @Get('stealth-method')
  sendScriptMethod(@Req() request: Request,
    @Query('buffer') buffer: string
  ): string | void {
    if (buffer) {
      return this.stealthSocket.sendBuffer(buffer);
    } else {
      return 'Wrong method key!';
    }
  }
}
