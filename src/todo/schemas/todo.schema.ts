import { Schema } from 'mongoose'

export const TodoSchema = new Schema({
    title: String,
    description: String,
    status: Boolean,
    createdAt: { type: Date, default: Date.now}
})