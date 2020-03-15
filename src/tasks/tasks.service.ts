import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskRepository } from './task.repository';
import { Task } from './task.entity';
import { TaskStatus } from './task-status.enum';
@Injectable()
export class TasksService {
    constructor(
        @InjectRepository(TaskRepository)
        private taskRepositoy: TaskRepository,
    
    ) {}
    // getAllTasks(): Task[]{
    //     return this.tasks;
    // }

    // getTasksWithFilters(filterDto: GetTasksFilterDto): Task[]{
    //     const { status, search } = filterDto;

    //     let tasks = this.getAllTasks();

    //     if(status) {
    //         tasks = tasks.filter(task => task.status === status);
    //     }
    //     if (search) {
    //         tasks = tasks.filter(task => 
    //             task.title.includes(search) ||
    //             task.description.includes(search),
    //         );
    //     }
        
    //     return tasks;
    // }

    async getTaskById(id: number): Promise<Task>{
        const found = await this.taskRepositoy.findOne(id);
       if(!found){
            throw new NotFoundException(`Task With ID "${id}"`);
        }
        return found;
    }

    async createTasks(createTasksDto: CreateTaskDto): Promise<Task>{
        return this.taskRepositoy.createTask(createTasksDto);
    }

    async deleteTask(id: number): Promise<void>{
        const result = await this.taskRepositoy.delete(id);
        
        if (result.affected === 0){
            throw new NotFoundException(`Task with ID "${id}" not found`);
        } 
    }
    // createTasks(createTasksDto: CreateTaskDto): Task{
    //     const { title , description } = createTasksDto
    //     const task: Task = {
    //         id:uuid(),
    //         title,
    //         description,
    //         status: TaskStatus.OPEN
    //     };
    //     this.tasks.push(task)
    //     return task;
    // }

    // deleteTask(id:string): void {
    //     const found = this.getTaskById(id);
    //     this.tasks = this.tasks.filter(task => task.id !== found.id);
    // }

    // updateTaskStatus(id: string, status: TaskStatus): Task{
    //     const task = this.getTaskById(id);
    //     task.status = status;
    //     return task;
    // }
}
