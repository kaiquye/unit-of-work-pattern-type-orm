export abstract class IPasswordHash {
  protected salt = 8;
  abstract generate(password: string): Promise<string>;
  abstract compare(password: string, hash: string): Promise<boolean>;
}
