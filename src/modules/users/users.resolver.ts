import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserEntity } from 'src/infrastructure/entity/users.entity';
import { IUserResolver } from './interface/users.interface';
import { GetUserInput, LogInInput, SignInInput } from './graphql/users.input';
import {
  GetUserResponse,
  LogInResponse,
  SignInResponse,
} from './graphql/users.response';
import { UserService } from './users.service';

@Resolver(() => UserEntity)
export class UserResolver implements IUserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => GetUserResponse)
  async getUser(
    @Args('getUserInput') getUserInput: GetUserInput,
  ): Promise<GetUserResponse> {
    return { message: 'Success' };
  }

  @Mutation(() => LogInResponse)
  async logIn(
    @Args('logInInput') logInInput: LogInInput,
  ): Promise<LogInResponse> {
    return await this.userService.auth(logInInput);
  }

  @Mutation(() => SignInResponse)
  async signIn(
    @Args('signInInput') signInInput: SignInInput,
  ): Promise<SignInResponse> {
    return await this.userService.signIn(signInInput);
  }
}
