export default class ApplicationError extends Error {
  constructor(
    public status: number,
    public message: string,
  ) {
    super();
    this.name = this.constructor.name;
  }
}
