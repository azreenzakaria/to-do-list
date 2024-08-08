import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Field, GraphQLISODateTime, ObjectType } from '@nestjs/graphql';
import { ITodo } from './interface/todo.interface';
import { ProjectEntity } from './projects.entity';

@Entity({ name: 'todo' })
@ObjectType()
export class TodoEntity extends BaseEntity implements ITodo {
  @Field(() => String)
  @Column({ type: 'varchar', length: 128 })
  title: string;

  @Field(() => String, { nullable: true })
  @Column({ type: 'varchar', length: 128, nullable: true })
  description?: string;

  @Field(() => String)
  @Column({ type: 'varchar', length: 128 })
  priority: string;

  @Field(() => Boolean)
  @Column({ name: 'is_done', type: 'boolean' })
  isDone: boolean;

  @Field(() => GraphQLISODateTime, { nullable: true })
  @Column({ name: 'due_date', nullable: true })
  dueDate?: string;

  @Field(() => String, { nullable: true })
  @Column({ type: 'varchar', length: 128, nullable: true })
  remarks?: string;

  @ManyToOne(() => ProjectEntity, (project) => project.todos)
  @JoinColumn({ name: 'project_id' })
  project?: ProjectEntity;
}
