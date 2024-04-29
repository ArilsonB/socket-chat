import Usecase from '../user/use-case/use-case';

export default class SendMessageUseCase implements Usecase {
  constructor(private readonly messageRepository: any) { }

  async execute() {
    return true;
  }
}
