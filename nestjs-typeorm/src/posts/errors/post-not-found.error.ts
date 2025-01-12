export class PostNotFoundError extends Error {
  constructor(id: number) {
    super(`Post ${id} not found`);
    this.name = `post-not-found`;
  }
}
