import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StealthApiModule, StealthApiService } from '@app/stealth-api';

describe('AppController', () => {
  let appController: AppController;
  let stealthService: StealthApiService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [StealthApiModule],
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
    stealthService = app.get<StealthApiService>(StealthApiService);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
