import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProjectEntity } from 'src/infrastructure/entity/projects.entity';
import { Repository } from 'typeorm';
import { IProjectList } from './dto/projects.dto';
import { GetProjectsResponse } from './graphql/projects.response';
import {
  CreateProjectInput,
  RemoveProjectInput,
  UpdateProjectInput,
} from './graphql/projects.input';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(ProjectEntity)
    private readonly projectRepo: Repository<ProjectEntity>,
  ) {}

  async getProject(): Promise<GetProjectsResponse> {
    try {
      const getTitles: ProjectEntity[] = await this.projectRepo.find({
        order: { updatedDateTime: 'DESC' },
      });
      if (getTitles.length === 0) throw new Error('No project found');
      const projectList: IProjectList[] = getTitles.map(({ id, title }) => ({
        id,
        title,
      }));
      return { result: projectList };
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  }

  async createProject(createProjectInput: CreateProjectInput) {
    try {
      const newProject = new ProjectEntity();
      newProject.title = createProjectInput.title;
      newProject.createdBy = 'Azreen';
      await this.projectRepo.save(newProject);
      return { message: 'A project have been created successfully.' };
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  }

  async updateProject(updateProjectInput: UpdateProjectInput) {
    try {
      const { id, title } = updateProjectInput;

      const currentData = await this.projectRepo.findOneBy({
        id: id,
      });

      if (!currentData)
        throw new Error('Data is not available. Please contact support');
      // Updating the record
      currentData.title = title;
      await this.projectRepo.save(currentData);
      return { message: 'A project have been updated successfully.' };
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  }

  async removeProject(removeProjectInput: RemoveProjectInput) {
    try {
      const currentData = await this.projectRepo.findOneBy({
        id: removeProjectInput.id,
      });
      if (!currentData)
        throw new Error('Data is not available. Please contact support');
      // Updating the record
      currentData.deletedBy = 'SYSTEM';
      currentData.deletedDateTime = new Date().toISOString();
      await this.projectRepo.save(currentData);
      return { message: 'A project have been removed successfully.' };
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  }
}
