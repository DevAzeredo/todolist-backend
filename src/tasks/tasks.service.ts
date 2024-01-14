import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskEntity } from 'src/entities/task.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TaskEntity)
    private readonly taskRepository: Repository<TaskEntity>,
  ) { }
  async create(tasks: TaskEntity[]): Promise<TaskEntity[]> {
    const createdTasks = await Promise.all(tasks.map(task => this.taskRepository.save(task)));
    return createdTasks;
  }
  async update(task: TaskEntity[]): Promise<TaskEntity[] | undefined> {
     task.forEach(t=> this.taskRepository.update(t.id, t));
     return task
  }

  async remove(id: string): Promise<void> {
    await this.taskRepository.delete(id);
  }
  async findAll(): Promise<TaskEntity[]> {
    return this.taskRepository.find();
  }

}
