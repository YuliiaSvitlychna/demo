export class PostNotDeletedError extends Error {
  constructor() {
    super(`The post you are trying to delete was not found`);
    this.name = `post-not-delete`;
  }
}
