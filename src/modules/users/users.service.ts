import { Injectable } from '@nestjs/common';
import { LogInInput, SignInInput } from './graphql/users.input';
import { LogInResponse, SignInResponse } from './graphql/users.response';
import { decrypt, validatePassword } from 'src/utilities/utility';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class UserService {
  constructor(private readonly configService: ConfigService) {}

  async auth(logInInput: LogInInput): Promise<LogInResponse> {
    try {
      const { email, password } = logInInput;

      // const email2 = await this.repository.findAll();
      // console.log('------------------------------', email2);

      const password1 = 'U2FsdGVkX1+rdP+VrnpuNhwjn68QaAw6cgXE2IuVWyY=';
      const secret_key = 'b7d1f43e8a2f6b0378972e1c3f9087b8';

      const decryptedPassword: string = decrypt(password1, secret_key);

      console.log('password', password);
      console.log('secret_key', this.configService.getOrThrow('SECRET_KEY'));
      console.log('decryptedPassword', decryptedPassword);

      const checkPassword = validatePassword(decryptedPassword);
      if (!checkPassword)
        throw new Error(
          'The password must be at least 8 characters long and a combination of uppercase letters, lowercase letters, numbers, and symbols',
        );

      // Then, compare the password with input and the DB.

      return {
        id: '1',
        email,
        accessToken: '1',
        refreshToken: '2',
      };
    } catch (err) {
      console.log(err);
      throw new Error(err);
    }
  }

  async signIn(signInInput: SignInInput): Promise<SignInResponse> {
    try {
      const { email, password } = signInInput;

      // validate email, check in db if exist or not, if exist throw an error

      // Front-End need to match the passwords then will send to us only one
      const checkPassword = validatePassword(password);
      if (!checkPassword)
        throw new Error(
          'The password must be at least 8 characters long and a combination of uppercase letters, lowercase letters, numbers, and symbols',
        );

      // Add the user to DB

      return { message: 'You have successfully registered!' };
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  }
}
