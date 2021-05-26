import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose'
import { CreateTodoDto } from './dtos/create.todo.dto';
import { UpdateTodoDto } from './dtos/update.todo.dto';
import { ITodo } from './interfaces/todo.interface';

@Injectable()
export class TodoService {
    constructor(@InjectModel('Todo') private readonly todoModel: Model<ITodo>) {}

    async getAll(): Promise <ITodo[]> {
        return await this.todoModel.find()
    }

    async getOne(id: string) {
        return await this.todoModel.findById(id)
    }

    async create(todoDto: CreateTodoDto) {
        const todo = new this.todoModel(todoDto)
        return await todo.save()
    }

    async update(id: string, todoDto: UpdateTodoDto) {
        return await this.todoModel.findByIdAndUpdate(id, todoDto, { new: true})
    }

    async delete(id: string) {
        return await this.todoModel.findByIdAndDelete(id)
    }
}
