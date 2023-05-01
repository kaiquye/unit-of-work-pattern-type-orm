import * as bcrypt from 'bcrypt';
import { IPasswordHash } from './interfaces/password-hash-interfaces';
class PasswordHashUtil extends IPasswordHash {
  async compare(password: string, hash: string): Promise<boolean> {
    return await bcrypt.compare(password, hash);
  }

  async generate(password: string): Promise<string> {
    return await bcrypt.hash(password, this.salt);
  }
}

export default new PasswordHashUtil();
