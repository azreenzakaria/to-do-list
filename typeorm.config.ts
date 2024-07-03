import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import { DataSource } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

config();
const configService = new ConfigService();

export default new DataSource({
  type: 'mysql',
  host: configService.getOrThrow('DATABASE_HOST'),
  port: configService.getOrThrow<number>('DATABASE_PORT'),
  database: configService.getOrThrow('DATABASE_NAME'),
  username: configService.getOrThrow('DATABASE_USERNAME'),
  password: configService.getOrThrow('DATABASE_PASSWORD'),
  logging: ['query', 'error'],
  migrations: ['dist/migrations/*.js'],
  entities: ['dist/**/*.entity.js'],
  namingStrategy: new SnakeNamingStrategy(),
});
