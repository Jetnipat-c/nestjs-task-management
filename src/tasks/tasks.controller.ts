import { Controller, Get, Post, Body, Param, Delete, Patch, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task, TaskStatus } from './task.model';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { TaskStatusValidationPipe } from './pipes/task-status-validation.pipe';
@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService){}


    @Get()
    getTasks(@Query() filterDto: GetTasksFilterDto): Task[]{
       if(Object.keys(filterDto).length){
           return this.tasksService.getTasksWithFilters(filterDto);
       }
       else {
           return this.tasksService.getAllTasks();
       }
    } 

    @Get('/:id')
    getTaskById(@Param('id') id:string): Task{
       return this.tasksService.getTaskById(id);
    } 

    @Post()
    @UsePipes(ValidationPipe)
    createTasks(@Body() createTasksDto: CreateTaskDto): Task {
        return this.tasksService.createTasks(createTasksDto);
    }

    @Delete('/:id')
    deleteTask(@Param('id') id: string): void{
        this.tasksService.deleteTask(id);
    }
    
    @Patch('/:id/status')
    updateTaskStatus(
        @Param('id') id: string,
        @Body('status', new TaskStatusValidationPipe) status: TaskStatus
    ): Task{
        console.log('id',id)
        console.log('status',status)
        return this.tasksService.updateTaskStatus(id,status);
    }
}
