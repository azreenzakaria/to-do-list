import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Field, ObjectType } from '@nestjs/graphql';
import { ITask } from './interface/project.interface';
import { ItemEntity } from './todo.entity';

@Entity({ name: 'task' })
@ObjectType()
export class TaskEntity extends BaseEntity implements ITask {
  @Field(() => String)
  @Column({ type: 'varchar', length: 128 })
  name: string;

  @OneToMany(() => ItemEntity, (item) => item.task)
  items?: ItemEntity[];
}
