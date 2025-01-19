import { Injectable } from '@nestjs/common';
import { SignUpInput, SignInInput } from './graphql/users.input';
import { SignUpResponse, SignInResponse } from './graphql/users.response';
import { decrypt, validatePassword } from 'src/utilities/utility';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/infrastructure/entity/users.entity';
import { Repository } from 'typeorm';
import { API_RESPONSE_MESSAGE, SYSTEM } from 'src/constants';

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

      const registeredEmail = await this.userRepo.findOneBy({
        email: email,
      });

      if (registeredEmail)
        throw new Error(API_RESPONSE_MESSAGE.userAlreadyRegistered);

      const decryptedPassword = decrypt(
        password,
        this.configService.getOrThrow('SECRET_KEY'),
        this.configService.getOrThrow('SECRET_IV'),
      );
      const checkPassword = validatePassword(decryptedPassword);
      if (!checkPassword)
        throw new Error(API_RESPONSE_MESSAGE.passwordNotValid);

      const newUser = new UserEntity();
      newUser.email = email;
      newUser.password = newUser.password = password;
      newUser.createdBy = SYSTEM;
      await this.userRepo.save(newUser);

      return {
        id: newUser.id,
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

      const registeredEmail = await this.userRepo.findOneBy({
        email: email,
      });
      if (!registeredEmail)
        throw new Error(API_RESPONSE_MESSAGE.userNotRegistered);

      const decryptedPassword = decrypt(
        password,
        this.configService.getOrThrow('SECRET_KEY'),
        this.configService.getOrThrow('SECRET_IV'),
      );

      if (
        decryptedPassword !==
        decrypt(
          registeredEmail.password,
          this.configService.getOrThrow('SECRET_KEY'),
          this.configService.getOrThrow('SECRET_IV'),
        )
      )
        throw new Error(API_RESPONSE_MESSAGE.passwordNotMatch);

      return { message: 'You have successfully sign in!' };
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  }
}
