import { Injectable } from '@nestjs/common';
import { SignUpInput, SignInInput } from './graphql/users.input';
import { SignUpResponse, SignInResponse } from './graphql/users.response';
import { decrypt, validatePassword } from 'src/utilities/utility';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/infrastructure/entity/users.entity';
import { Repository } from 'typeorm';
import { API_RESPONSE_MESSAGE } from 'src/constants';

@Injectable()
export class UserService {
  constructor(
    private readonly configService: ConfigService,
    @InjectRepository(UserEntity)
    private readonly userRepo: Repository<UserEntity>,
  ) {}

  async signUp(input: SignUpInput): Promise<SignUpResponse> {
    try {
      const { email, password } = input;

      // const password1 = 'U2FsdGVkX1+rdP+VrnpuNhwjn68QaAw6cgXE2IuVWyY=';
      // const secret_key = 'b7d1f43e8a2f6b0378972e1c3f9087b8';

      // const decryptedPassword: string = decrypt(password1, secret_key);

      // console.log('password', password);
      // console.log('secret_key', this.configService.getOrThrow('SECRET_KEY'));
      // console.log('decryptedPassword', decryptedPassword);

      // const checkPassword = validatePassword(decryptedPassword);
      // if (!checkPassword)
      //   throw new Error(
      //     'The password must be at least 8 characters long and a combination of uppercase letters, lowercase letters, numbers, and symbols',
      //   );

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

      // validate email, check in db if exist or not
      const registeredEmail = await this.userRepo.findOneBy({
        email: email,
      });
      if (!registeredEmail)
        throw new Error(API_RESPONSE_MESSAGE.userNotRegistered);

      // compare password with the db
      // decrypt the password from the input and db. Then compare it.
      // const passwordMatch = null;
      // if (!passwordMatch)
      //   throw new Error(API_RESPONSE_MESSAGE.passwordNotMatch);

      return { message: 'You have successfully sign in!' };
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  }
}
