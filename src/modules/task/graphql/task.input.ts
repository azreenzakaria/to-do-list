import { InputType, Field } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateTaskInput {
  @IsString()
  @IsNotEmpty()
  @Field()
  name: string;
}

@InputType()
export class UpdateTaskInput {
  @IsString()
  @IsNotEmpty()
  @Field()
  id: string;

  @IsString()
  @IsNotEmpty()
  @Field()
  name: string;
}

@InputType()
export class RemoveTaskInput {
  @IsString()
  @IsNotEmpty()
  @Field()
  id: string;
}
