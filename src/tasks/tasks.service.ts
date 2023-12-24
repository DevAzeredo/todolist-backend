import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from 'src/entities/task.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TasksService {
    constructor(
        @InjectRepository(Task)
        private readonly taskRepository: Repository<Task>,
      ) {}

      async create(task: Task): Promise<Task> {
        return this.taskRepository.save(task);
      }
    
      async update(task: Task): Promise<Task | undefined> {
        await this.taskRepository.update(task.id, task);
        return this.taskRepository.findOne({ where: { id: task.id } });
      }
    
      async remove(id: string): Promise<void> {
        await this.taskRepository.delete(id);
      }
      async findAll(): Promise<Task[]> {
        return this.taskRepository.find();
      }
    
}
