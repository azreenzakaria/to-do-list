import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Field, ObjectType } from '@nestjs/graphql';
import { IUser } from './interface/user.interface';

@Entity({ name: 'users' })
@ObjectType()
export class UserEntity extends BaseEntity implements IUser {
  @Field(() => String, { name: 'username' })
  @Column({ type: 'varchar', length: 128 })
  username: string;

  @Field(() => String, { name: 'email' })
  @Column({ type: 'varchar', length: 128 })
  email: string;

  @Field(() => String, { name: 'refresh_token' })
  @Column({ type: 'text', nullable: true })
  refreshToken?: string;
}
