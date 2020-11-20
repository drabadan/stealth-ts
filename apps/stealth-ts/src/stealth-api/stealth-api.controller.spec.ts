import { Test, TestingModule } from '@nestjs/testing';
import { StealthApiController } from './stealth-api.controller';

describe('StealthApiController', () => {
  let controller: StealthApiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StealthApiController],
    }).compile();

    controller = module.get<StealthApiController>(StealthApiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
