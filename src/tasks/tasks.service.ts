import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.model'
import * as uuid from 'uuid/v1';
import { TasksModule } from './tasks.module';
import { CreateTaskDto } from './dto/create-task.dto';
@Injectable()
export class TasksService {
    private tasks: Task[] = [];

    getAllTasks(): Task[]{
        return this.tasks;
    }

    getTaskById(id:string): Task{
        return this.tasks.find(task => task.id === id);
    }

    createTasks(createTasksDto: CreateTaskDto): Task{
        const { title , description } = createTasksDto
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
