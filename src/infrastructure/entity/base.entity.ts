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

  @Field(() => String)
  @Column({ name: 'created_by', type: 'varchar', length: 50 })
  createdBy: string;

  @Field(() => GraphQLISODateTime)
  @CreateDateColumn({ name: 'created_date_time' })
  createdDateTime: string;

  @Field(() => String, { nullable: true })
  @Column({ name: 'modified_by', type: 'varchar', length: 50, nullable: true })
  modifiedBy?: string;

  @Field(() => GraphQLISODateTime, { nullable: true })
  @UpdateDateColumn({ name: 'updated_date_time', nullable: true })
  updatedDateTime?: string;

  @Field(() => String, { nullable: true })
  @Column({ name: 'deleted_by', type: 'varchar', length: 50, nullable: true })
  deletedBy?: string;

  @Field(() => GraphQLISODateTime, { nullable: true })
  @DeleteDateColumn({ name: 'deleted_date_time' })
  deletedDateTime?: string;
}
