import { InputType, Field } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateProjectInput {
  @IsString()
  @IsNotEmpty()
  @Field()
  title: string;
}

@InputType()
export class UpdateProjectInput {
  @IsString()
  @IsNotEmpty()
  @Field()
  id: string;

  @IsString()
  @IsNotEmpty()
  @Field()
  title: string;
}

@InputType()
export class RemoveProjectInput {
  @IsString()
  @IsNotEmpty()
  @Field()
  id: string;
}
