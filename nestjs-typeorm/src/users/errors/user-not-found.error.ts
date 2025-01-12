export class UserNotFoundError extends Error {
  constructor(id: number) {
    super(`User ${id} not found`);
    this.name = `user-not-found`;
  }
}
