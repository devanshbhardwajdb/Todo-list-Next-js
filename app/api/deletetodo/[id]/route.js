import Todo from "@models/todo";
import { connectToDB } from "@utils/database";

export const DELETE = async (request,{params}) => {
    
    
    

    try {
        
        await connectToDB();
        await Todo.findByIdAndRemove(params.id);

        
        return new Response("Todo deletedsuccesfully", { status: 200, } );
    } catch (error) {
        return new Response("Failed to update the Todo", { status: 500 });
    }
}