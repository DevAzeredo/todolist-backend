import { Controller, Get,Post, Put, Delete, Param, Body } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from 'src/entities/task.entity';

@Controller('tasks')
export class TasksController {
    constructor(private readonly tasksService: TasksService) { }
    @Get()
    async findAll(): Promise<Task[]> {
        return this.tasksService.findAll();
    }

    @Post()
  async create(@Body() task: Task): Promise<Task> {
    return this.tasksService.create(task);
  }

  @Put(':id')
  async update(@Body() task: Task): Promise<Task | undefined> {
    return this.tasksService.update(task);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.tasksService.remove(id);
  }
}

