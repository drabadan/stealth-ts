import { Test, TestingModule } from '@nestjs/testing';
import { StealthSocket } from './stealth-socket';

describe('StealthSocket', () => {
  let provider: StealthSocket;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StealthSocket],
    }).compile();

    provider = module.get<StealthSocket>(StealthSocket);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
