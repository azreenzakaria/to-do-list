import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Field, ObjectType } from '@nestjs/graphql';
import { ITodo } from './interface/todo.interface';

@Entity({ name: 'todo' })
@ObjectType()
export class TodoEntity extends BaseEntity implements ITodo {
  @Field(() => String)
  @Column({ type: 'varchar', length: 128 })
  title: string;

  @Field(() => String, { nullable: true })
  @Column({ type: 'varchar', length: 128, nullable: true })
  description?: string;

  @Field(() => Number)
  @Column({ type: 'varchar', length: 128 })
  priority: number;

  @Field(() => Boolean)
  @Column({ name: 'is_done', type: 'varchar', length: 128 })
  isDone: boolean;

  @Field(() => String, { nullable: true })
  @Column({ name: 'due_date', type: 'varchar', length: 128, nullable: true })
  dueDate?: string;

  @Field(() => String, { nullable: true })
  @Column({ type: 'varchar', length: 128, nullable: true })
  remarks?: string;
}
