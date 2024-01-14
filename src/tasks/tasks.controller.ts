import { Controller, Get,Post, Put, Delete, Param, Body } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TaskEntity } from 'src/entities/task.entity';

@Controller('tasks')
export class TasksController {
    constructor(private readonly tasksService: TasksService) { }
    @Get()
    async findAll(): Promise<TaskEntity[]> {
        return this.tasksService.findAll();
    }

    @Post()
  async create(@Body() task: TaskEntity[]): Promise<TaskEntity[]> {
    console.log('entrou aqui aaa');
    console.log(task);
    return this.tasksService.create(task);
  }

  @Put()
  async update(@Body() task: TaskEntity[]): Promise<TaskEntity[] | undefined> {
    return this.tasksService.update(task);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.tasksService.remove(id);
  }
}

