import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.model';
import { CreateTaskDto } from './dto/create-task.dto';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService){}


    @Get()
    getAllTasks(): Task[]{
       return this.tasksService.getAllTasks();
    } 

    @Get('/:id')
    getTaskById(@Param('id')id:string){
       return this.tasksService.getTaskById(id);
    } 

    @Post()
    createTasks(@Body() createTasksDto: CreateTaskDto):Task {
        return this.tasksService.createTasks(createTasksDto);
    }

    @Delete('/:id')
    deleteTask(@Param('id') id: string){
        this.tasksService.deleteTask(id);
    }
    
}
