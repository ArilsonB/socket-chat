import Usecase from 'src/application/user/use-case/use-case';

export default class SendMessageUseCase implements Usecase {
  constructor(private readonly messageRepository: any) { }

  async execute() {
    return true;
  }
}