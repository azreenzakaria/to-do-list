import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectEntity } from 'src/infrastructure/entity/projects.entity';
import { ProjectResolver } from './projects.resolver';
import { ProjectsService } from './projects.service';

@Module({
  imports: [TypeOrmModule.forFeature([ProjectEntity])],
  providers: [ProjectResolver, ProjectsService],
})
export class ProjectsModule {}
