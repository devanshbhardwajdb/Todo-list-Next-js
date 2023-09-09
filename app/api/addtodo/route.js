import Todo from "@models/todo";
import { connectToDB } from "@utils/database";

export const POST = async (request) => {
    const { title,description,email} = await request.json();

    try {
        
        await connectToDB();
        const newTodo = new Todo({ title,description,email});

        await newTodo.save();
        return new Response(JSON.stringify(newTodo), { status: 201 })
    } catch (error) {
        return new Response("Failed to create a new Todo", { status: 500 });
    }
}