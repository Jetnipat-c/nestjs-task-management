import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.model'
import * as uuid from 'uuid/v1';
import { TasksModule } from './tasks.module';
@Injectable()
export class TasksService {
    private tasks: Task[] = [];

    getAllTasks(): Task[]{
        return this.tasks;
    }

    createTasks(title : string , description: string){
        const task: Task = {
            id:uuid(),
            title,
            description,
            status: TaskStatus.OPEN,
        };
        this.tasks.push(task)
        return task;
    }
}
