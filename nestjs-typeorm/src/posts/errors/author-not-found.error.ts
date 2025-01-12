export class AuthorNotFoundError extends Error {
  constructor() {
    super(`Author not found`);
    this.name = `author-not-found`;
  }
}
