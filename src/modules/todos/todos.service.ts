import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TodoEntity } from 'src/infrastructure/entity/todo.entity';
import { Repository } from 'typeorm';
import { CreateTodoResponse, GetTodosResponse } from './graphql/todos.response';
import { ITodoList } from './dto/todos.dto';
import { CreateTodoInput, RemoveTodoInput } from './graphql/todos.input';
import { ProjectEntity } from 'src/infrastructure/entity/projects.entity';
import { SYSTEM } from 'src/constants';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(TodoEntity)
    private readonly todoRepo: Repository<TodoEntity>,
    @InjectRepository(ProjectEntity)
    private readonly projectRepo: Repository<TodoEntity>,
  ) {}

  async getTodos(): Promise<GetTodosResponse> {
    try {
      const todoData = await this.todoRepo.find({
        order: { updatedDateTime: 'DESC' },
      });
      if (todoData.length === 0) throw new Error('No Todo Found!');
      const todoArray: ITodoList[] = todoData.map(
        ({ id, title, description, priority, isDone, dueDate, remarks }) => ({
          id,
          title,
          description,
          priority,
          isDone,
          dueDate,
          remarks,
        }),
      );
      return { result: todoArray };
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  }

  async createTodo(input: CreateTodoInput): Promise<CreateTodoResponse> {
    try {
      const { id, title, description, priority, isDone, dueDate, remarks } =
        input;

      // Validation the id of the project
      const projectData = await this.projectRepo.findOneBy({ id });
      if (!projectData)
        throw new Error('No project available. Please contact support!');

      // Then add the record
      const newTodo = new TodoEntity();
      newTodo.createdBy = SYSTEM;
      newTodo.title = title;
      newTodo.description = description;
      newTodo.priority = priority;
      newTodo.isDone = isDone;
      newTodo.dueDate = dueDate;
      newTodo.remarks = remarks;
      newTodo.project = projectData;
      await this.todoRepo.save(newTodo);

      return { message: 'A Todo have been created successfully.' };
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  }

  async updateTodo(input: CreateTodoInput): Promise<CreateTodoResponse> {
    try {
      const { id, title, description, priority, isDone, dueDate, remarks } =
        input;

      // Validation the id of the todo
      const todoData = await this.todoRepo.findOneBy({ id });
      if (!todoData)
        throw new Error('Data is not available. Please contact support!');

      // Update the record
      todoData.title = title;
      todoData.description = description;
      todoData.priority = priority;
      todoData.isDone = isDone;
      todoData.dueDate = dueDate;
      todoData.remarks = remarks;
      await this.todoRepo.save(todoData);

      return { message: 'A Todo have been updated successfully.' };
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  }

  async removeTodo(input: RemoveTodoInput): Promise<CreateTodoResponse> {
    try {
      // Validate the id of todo
      const todoData = await this.todoRepo.findOneBy({
        id: input.id,
      });
      if (!todoData)
        throw new Error('Data is not available. Please contact support');

      // Update the record
      todoData.deletedBy = SYSTEM;
      todoData.deletedDateTime = new Date().toISOString();
      await this.todoRepo.save(todoData);

      return { message: 'A Todo have been deleted successfully.' };
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  }
}
