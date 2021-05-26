import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { CreateTodoDto } from './dtos/create.todo.dto';
import { UpdateTodoDto } from './dtos/update.todo.dto';
import { ITodo } from './interfaces/todo.interface';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {

    constructor(private readonly todoService: TodoService) {}

    @Get()
    async getAll(): Promise <ITodo[]> {
        return await this.todoService.getAll();
    }

    @Get(':id')
    async getOne(@Param('id') id: string) {
        return await this.todoService.getOne(id);
    }

    @Post()
    async create(@Body() todoDto: CreateTodoDto) {
        return await this.todoService.create(todoDto)
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() todoDto: UpdateTodoDto) {
        return await this.todoService.update(id, todoDto)
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        return await this.todoService.delete(id)
    }
}
