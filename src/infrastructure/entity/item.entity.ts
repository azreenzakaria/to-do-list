import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Field, GraphQLISODateTime, ObjectType } from '@nestjs/graphql';
import { IItem } from './interface/item.interface';
import { TaskEntity } from './task.entity';

@Entity({ name: 'item' })
@ObjectType()
export class ItemEntity extends BaseEntity implements IItem {
  @Field(() => String)
  @Column({ type: 'varchar', length: 128 })
  name: string;

  @Field(() => Boolean)
  @Column({ name: 'is_completed', type: 'boolean' })
  isCompleted: boolean;

  @ManyToOne(() => TaskEntity, (task) => task.items)
  @JoinColumn({ name: 'task_id' })
  task?: TaskEntity;
}
