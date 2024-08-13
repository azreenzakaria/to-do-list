import { InputType, Field } from '@nestjs/graphql';
import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class GetTodoInput {
  @IsString()
  @IsNotEmpty()
  @Field()
  projectId: string;
}

@InputType()
export class CreateTodoInput {
  @IsString()
  @Field()
  id: string;

  @IsString()
  @Field()
  projectId: string;

  @IsString()
  @IsNotEmpty()
  @Field()
  title: string;

  @IsString()
  @Field()
  description?: string;

  @IsString()
  @IsNotEmpty()
  @Field()
  priority: string;

  @IsBoolean()
  @IsNotEmpty()
  @Field()
  isDone: boolean;

  @IsString()
  @IsNotEmpty()
  @Field()
  dueDate?: string;

  @IsString()
  @IsNotEmpty()
  @Field()
  remarks?: string;
}

@InputType()
export class RemoveTodoInput {
  @IsString()
  @IsNotEmpty()
  @Field()
  id: string;
}
