import Todo from "@models/todo";
import { connectToDB } from "@utils/database";

export const GET = async (req, { params }) => {
  try {
    await connectToDB();

    const todo = await Todo.findById(params.id);

    if (!todo) {
      return new Response("Todo not found", { status: 404, headers: { 'Content-Type': 'text/plain' } });
    }

    return new Response(JSON.stringify(todo), { status: 200, headers: { 'Content-Type': 'application/json' } });
  } catch (error) {
    console.error(error);
    return new Response("Failed to retrieve todo", { status: 500, headers: { 'Content-Type': 'text/plain' } });
  }
};
