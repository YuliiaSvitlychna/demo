export class UserNotDeletedError extends Error {
  constructor() {
    super(`The user you are trying to delete was not found`);
    this.name = `user-not-delete`;
  }
}
