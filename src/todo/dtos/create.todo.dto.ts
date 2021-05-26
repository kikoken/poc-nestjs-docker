export class CreateTodoDto {
    title: string;
    description: string;
    state: boolean;
    createAt?: Date;
}