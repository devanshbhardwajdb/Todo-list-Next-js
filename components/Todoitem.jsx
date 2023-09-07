
import Link from "next/link"


const Todoitem = ({ todos, handleDelete }) => {
    if (todos.length!==0) {
        return (

            <div className='font-livvic  flex flex-col gap-4'>

                {todos.map(todo => (
                    <div className='flex flex-col bg-gray-200 p-5 rounded-lg gap-2 '>

                        <h2 key={todo.id} className='font-bold '>{todo.title}</h2>
                        <h2 key={todo.id}>{todo.description}</h2>
                        <div className='flex gap-3 text-white mt-5'>
                            <Link href={`/Edittodo/${todo._id}`}>
                                <button className='px-3 py-2 bg-green-700  rounded-md  font-medium hover:scale-[98%] duration-300 hover:shadow-lg hover:shadow-green-600' >Edit</button>
                            </Link>
                            <form onSubmit={(e) => handleDelete(e)}>
                                <input type="hidden" name="id" id="id" value={todo._id} />
                                <button className='px-3 py-2 bg-red-700 rounded-md font-medium hover:scale-[98%] duration-300 hover:shadow-lg hover:shadow-red-600' type="submit">Delete</button>
                            </form>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
    else {
        return (
            <div>
                No Todos to display
            </div>
        )
    }
}

export default Todoitem
