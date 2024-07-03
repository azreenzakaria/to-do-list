import { Field, GraphQLISODateTime, ObjectType } from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { IBase } from './interface/base.interface';

@ObjectType()
export class BaseEntity implements IBase {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column({ type: 'varchar', length: 50 })
  @Field(() => String, { name: 'created_by' })
  createdBy: string;

  @CreateDateColumn()
  @Field(() => GraphQLISODateTime, { name: 'created_date_time' })
  createdDateTime: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  @Field(() => String, { nullable: true })
  modified_by?: string;

  @UpdateDateColumn()
  @Field(() => GraphQLISODateTime, {
    name: 'updated_date_time',
    nullable: true,
  })
  updatedDateTime?: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  @Field(() => String, { name: 'deleted_by', nullable: true })
  deletedBy?: string;

  @DeleteDateColumn()
  @Field(() => GraphQLISODateTime, {
    name: 'deleted_date_time',
    nullable: true,
  })
  deletedDateTime?: string;
}
