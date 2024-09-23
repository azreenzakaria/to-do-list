import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskEntity } from 'src/infrastructure/entity/projects.entity';
import { TaskResolver } from './projects.resolver';
import { TaskService } from './projects.service';

@Module({
  imports: [TypeOrmModule.forFeature([TaskEntity])],
  providers: [TaskResolver, TaskService],
})
export class TaskModule {}
