import { Document } from 'mongoose'

export class ITodo extends Document {
    id: string;
    title: string;
    description: string;
    state: boolean;
    createAt?: Date;
}