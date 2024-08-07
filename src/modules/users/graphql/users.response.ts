import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class GetUserResponse {
  @Field()
  message: string;
}

@ObjectType()
export class LogInResponse {
  @Field()
  id: string;

  @Field()
  email: string;

  @Field()
  accessToken: string;

  @Field()
  refreshToken: string;
}

@ObjectType()
export class SignInResponse {
  @Field()
  message: string;
}
