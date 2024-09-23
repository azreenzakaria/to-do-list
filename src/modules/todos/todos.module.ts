import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemEntity } from 'src/infrastructure/entity/todo.entity';
import { ItemResolver } from './todos.resolver';
import { ItemService } from './todos.service';
import { TaskEntity } from 'src/infrastructure/entity/projects.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ItemEntity, TaskEntity])],
  providers: [ItemResolver, ItemService],
})
export class ItemModule {}
