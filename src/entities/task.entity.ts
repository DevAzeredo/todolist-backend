import { Entity, Column, ObjectIdColumn, ObjectId } from 'typeorm';

@Entity('tasks')
export class TaskEntity {
  @ObjectIdColumn()
  id: ObjectId;

  @Column()
  description: string;

  @Column({ default: false })
  completed: boolean;
}