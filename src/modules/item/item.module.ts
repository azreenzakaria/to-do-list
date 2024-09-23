import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemEntity } from 'src/infrastructure/entity/item.entity';
import { ItemResolver } from './item.resolver';
import { ItemService } from './item.service';
import { TaskEntity } from 'src/infrastructure/entity/task.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ItemEntity, TaskEntity])],
  providers: [ItemResolver, ItemService],
})
export class ItemModule {}
