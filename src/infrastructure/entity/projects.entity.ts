import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Field, ObjectType } from '@nestjs/graphql';
import { IProject } from './interface/project.interface';
import { TodoEntity } from './todo.entity';

@Entity({ name: 'projects' })
@ObjectType()
export class ProjectEntity extends BaseEntity implements IProject {
  @Field(() => String)
  @Column({ type: 'varchar', length: 128 })
  title: string;

  @OneToMany(() => TodoEntity, (todo) => todo.project)
  todos?: TodoEntity[];
}
