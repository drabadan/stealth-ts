import { Module } from '@nestjs/common';
import { StealthApiService } from './stealth-api.service';
import { StealthSocket } from './stealth-socket';

export const STEALTH_INITIAL_PORT = { slug: 'STEALTH_INITIAL_PORT', default: 47602 };

@Module({
  providers: [
    StealthApiService,
    {
      provide: 'STEALTH_INITIAL_PORT', useValue: STEALTH_INITIAL_PORT.default,
    },
    StealthSocket
  ],
  exports: [StealthApiService, StealthSocket],
})
export class StealthApiModule { }
