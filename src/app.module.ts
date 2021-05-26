import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TodoModule } from './todo/todo.module';

const MONGOURL = process.env.MONGO_URL || 'localhost'

@Module({
  imports: [
    TodoModule,
    MongooseModule.forRoot(`mongodb://${MONGOURL}:27017/tododb`, { useNewUrlParser: true })
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
