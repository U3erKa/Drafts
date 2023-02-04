import ApplicationError from "./ApplicationError.js";

export default class NotFoundError extends ApplicationError {
  constructor(public message: string) {
    super(404, message ?? 'Not found');
  }
}
