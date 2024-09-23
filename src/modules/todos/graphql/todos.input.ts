import { InputType, Field } from '@nestjs/graphql';
import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class GetItemInput {
  @IsString()
  @IsNotEmpty()
  @Field()
  taskId: string;
}

@InputType()
export class CreateItemInput {
  @IsString()
  @Field()
  id?: string;

  @IsString()
  @Field()
  taskId?: string;

  @IsString()
  @IsNotEmpty()
  @Field()
  name: string;

  @IsBoolean()
  @IsNotEmpty()
  @Field()
  isCompleted: boolean;
}

@InputType()
export class RemoveItemInput {
  @IsString()
  @IsNotEmpty()
  @Field()
  id: string;
}
