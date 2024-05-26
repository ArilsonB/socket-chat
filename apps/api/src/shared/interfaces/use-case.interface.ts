interface UseCase<TDto, TData> {
  execute(data: TDto): Promise<TData>;
}
