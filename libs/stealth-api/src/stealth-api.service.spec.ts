import { Test, TestingModule } from '@nestjs/testing';
import { StealthApiService } from './stealth-api.service';

describe('StealthApiService', () => {
  let service: StealthApiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StealthApiService],
    }).compile();

    service = module.get<StealthApiService>(StealthApiService);
  });

  it('should be defined', () => {
    service.initClient();
    expect(service).toBeDefined();
  });
});
