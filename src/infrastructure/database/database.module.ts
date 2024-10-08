import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../entity/users.entity';
import { ProjectEntity } from '../entity/projects.entity';
import { TodoEntity } from '../entity/todo.entity';

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
        entities: [UserEntity, ProjectEntity, TodoEntity],
        autoLoadEntities: false,
        synchronize: false,
      }),
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule {}
