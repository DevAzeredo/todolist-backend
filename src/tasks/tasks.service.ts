import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskEntity } from 'src/entities/task.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TasksService {
    constructor(
        @InjectRepository(TaskEntity)
        private readonly taskRepository: Repository<TaskEntity>,
      ) {}

      async create(task: TaskEntity): Promise<TaskEntity> {
        return this.taskRepository.save(task);
      }
    
      async update(task: TaskEntity): Promise<TaskEntity | undefined> {
        await this.taskRepository.update(task.id, task);
        return this.taskRepository.findOne({ where: { id: task.id } });
      }
    
      async remove(id: string): Promise<void> {
        await this.taskRepository.delete(id);
      }
      async findAll(): Promise<TaskEntity[]> {
        return this.taskRepository.find();
      }
    
}
