import Todo from "@models/todo";
import { connectToDB } from "@utils/database";

export const GET = async () => {
    try {
        
        await connectToDB();
        const todos = await Todo.find();
        // console.log(todos);
        return new Response(JSON.stringify(todos), { status: 201, headers: {'Content-Type': 'application/json'} })
    } catch (error) {
        console.error(error); // Log the actual error for debugging
        return new Response("Failed to retrieve todos", { status: 500, headers: {'Content-Type': 'text/plain'} });
    }
}
