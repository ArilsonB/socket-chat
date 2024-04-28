import Usecase from './use-case';

export default class SendMessageUseCase implements Usecase {
  constructor(private readonly messageRepository: any) { }

  async execute() {
    return true;
  }
}
