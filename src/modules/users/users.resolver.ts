import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { UserEntity } from 'src/infrastructure/entity/users.entity';
import { IUserResolver } from './interface/users.interface';
import { SignUpInput, SignInInput } from './graphql/users.input';
import { SignUpResponse, SignInResponse } from './graphql/users.response';
import { UserService } from './users.service';

@Resolver(() => UserEntity)
export class UserResolver implements IUserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => SignUpResponse)
  async signUp(
    @Args('signUpInput') SignUpInput: SignUpInput,
  ): Promise<SignUpResponse> {
    return await this.userService.signUp(SignUpInput);
  }

  @Mutation(() => SignInResponse)
  async signIn(
    @Args('signInInput') signInInput: SignInInput,
  ): Promise<SignInResponse> {
    return await this.userService.signIn(signInInput);
  }
}
