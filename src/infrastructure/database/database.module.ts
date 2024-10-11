import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../entity/users.entity';
import { TaskEntity } from '../entity/task.entity';
import { ItemEntity } from '../entity/item.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: (config: ConfigService) => ({
        type: 'mysql',
        host: config.getOrThrow('DATABASE_HOST'),
        port: config.getOrThrow('DATABASE_PORT'),
        database: config.getOrThrow('DATABASE_NAME'),
        username: config.getOrThrow('DATABASE_USERNAME'),
        password: config.getOrThrow('DATABASE_PASSWORD'),
        entities: [UserEntity, TaskEntity, ItemEntity],
        autoLoadEntities: false,
        synchronize: false,
      }),
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule {}
