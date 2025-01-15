export class PostNotFoundError extends Error {
  constructor(id: string) {
    super(`Post ${id} not found`);
    this.name = `post-not-found`;
  }
}
