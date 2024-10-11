import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskEntity } from 'src/infrastructure/entity/task.entity';
import { TaskResolver } from './task.resolver';
import { TaskService } from './task.service';
import { ItemEntity } from 'src/infrastructure/entity/item.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TaskEntity, ItemEntity])],
  providers: [TaskResolver, TaskService],
})
export class TaskModule {}
