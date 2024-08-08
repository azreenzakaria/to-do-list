import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoEntity } from 'src/infrastructure/entity/todo.entity';
import { TodoResolver } from './todos.resolver';
import { TodosService } from './todos.service';
import { ProjectEntity } from 'src/infrastructure/entity/projects.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TodoEntity, ProjectEntity])],
  providers: [TodoResolver, TodosService],
})
export class TodosModule {}
