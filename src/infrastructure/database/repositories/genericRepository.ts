import { Injectable } from '@nestjs/common';
import { UserEntity } from 'src/infrastructure/entity/users.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GenericRepository {
  constructor(protected readonly repository: Repository<UserEntity>) {}

  findAll(): Promise<UserEntity[]> {
    return this.repository.find();
  }

  findOne(data: any): Promise<UserEntity> {
    return this.repository.findOne(data);
  }
}
