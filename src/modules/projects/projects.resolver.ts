import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ProjectEntity } from 'src/infrastructure/entity/projects.entity';
import {
  CreateProjectResponse,
  GetProjectsResponse,
  RemoveProjectResponse,
  UpdateProjectResponse,
} from './graphql/projects.response';
import { ProjectsService } from './projects.service';
import { IProjectResolver } from './interface/projects.interface';
import {
  CreateProjectInput,
  RemoveProjectInput,
  UpdateProjectInput,
} from './graphql/projects.input';

@Resolver(() => ProjectEntity)
export class ProjectResolver implements IProjectResolver {
  constructor(private readonly projectsService: ProjectsService) {}

  @Query(() => GetProjectsResponse)
  async getProject(): Promise<GetProjectsResponse> {
    return await this.projectsService.getProject();
  }

  @Mutation(() => CreateProjectResponse)
  async createProject(
    @Args('createProjectInput') createProjectInput: CreateProjectInput,
  ): Promise<CreateProjectResponse> {
    return await this.projectsService.createProject(createProjectInput);
  }

  @Mutation(() => UpdateProjectResponse)
  async updateProject(
    @Args('updateProjectInput') updateProjectInput: UpdateProjectInput,
  ): Promise<UpdateProjectResponse> {
    return await this.projectsService.updateProject(updateProjectInput);
  }

  @Mutation(() => RemoveProjectResponse)
  async removeProject(
    @Args('removeProjectInput') removeProjectInput: RemoveProjectInput,
  ): Promise<RemoveProjectResponse> {
    return await this.projectsService.removeProject(removeProjectInput);
  }
}
