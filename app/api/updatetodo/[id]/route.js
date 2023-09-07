import Todo from "@models/todo";
import { connectToDB } from "@utils/database";

export const PATCH = async (request,{params}) => {
    
    const { title,description} = await request.json();
    

    try {
        console.log("main try block mein hun")
        await connectToDB();
        const updatedTodo = await Todo.findById(params.id);
        console.log("yerha hmai",updatedTodo)

        updatedTodo.title = title;
        updatedTodo.description = description;

        await updatedTodo.save();

        
        return new Response(JSON.stringify(updatedTodo), { status: 200, } );
    } catch (error) {
        return new Response("Failed to update the Todo", { status: 500 });
    }
}