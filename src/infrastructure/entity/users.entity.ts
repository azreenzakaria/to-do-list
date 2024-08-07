import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Field, ObjectType } from '@nestjs/graphql';
import { IUser } from './interface/user.interface';

@Entity({ name: 'users' })
@ObjectType()
export class UserEntity extends BaseEntity implements IUser {
  @Field(() => String)
  @Column({ type: 'varchar', length: 128 })
  username: string;

  @Field(() => String)
  @Column({ type: 'varchar', length: 128 })
  email: string;

  @Field(() => String, { nullable: true })
  @Column({ name: 'refresh_token', type: 'text', nullable: true })
  refreshToken?: string;
}
