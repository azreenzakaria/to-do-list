import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './infrastructure/database/database.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { UsersModule } from './modules/users/users.module';
import { TaskModule } from './modules/projects/projects.module';
import { ItemModule } from './modules/todos/todos.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: 'schema.gql',
    }),
    DatabaseModule,
    UsersModule,
    TaskModule,
    ItemModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
