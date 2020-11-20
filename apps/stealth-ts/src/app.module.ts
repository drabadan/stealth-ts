import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StealthApiModule } from '@app/stealth-api';
import { StealthApiController } from './stealth-api/stealth-api.controller';

@Module({
  imports: [StealthApiModule],
  controllers: [AppController, StealthApiController],
  providers: [AppService],
})
export class AppModule { }
