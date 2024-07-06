import { Test, TestingModule } from '@nestjs/testing';
import { UserRepository } from '@api/core/repositories/user.repository';
import { CreateUserUseCase } from './create-user.use-case';
import { User } from '@api/core/domain/entities/user.entity';

describe('CreateUserUseCase', () => {
  let createUserUseCase: CreateUserUseCase;
  let userRepository: UserRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CreateUserUseCase,
        {
          provide: UserRepository,
          useValue: {
            create: jest.fn(),
          },
        },
      ],
    }).compile();

    createUserUseCase = module.get<CreateUserUseCase>(CreateUserUseCase);
    userRepository = module.get<UserRepository>(UserRepository);
  });

  it('should create a user with the name "João"', async () => {
    const mockUser = new User();
    mockUser.name = 'João';

    jest.spyOn(userRepository, 'create').mockReturnValue(mockUser);

    const result = await createUserUseCase.execute();

    expect(userRepository.create).toHaveBeenCalledWith(mockUser);
    expect(result).toEqual(mockUser);
  });
});
