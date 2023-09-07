import React from 'react'

const Editform = ({ setTodo,  handleSubmit, todo }) => {
    return (
        <div className='font-livvic  flex flex-col gap-8 w-full p-8 rounded-xl border border-gray-200 backdrop-blur-md items-start justify-center bg-gray-200'>
            <h4 className='font-bold text-2xl'>EDIT TODO</h4>
            <form className='flex flex-col gap-4 w-full' onSubmit={handleSubmit}>
                
                <label  className='flex flex-col gap-2 w-full'>
                    <span className=' font-semibold text-base '>
                        Title

                    </span>
                    <input

                        defaultValue={todo.title}
                        onChange={(e) => setTodo({ ...todo, title: e.target.value })}
                        type='text'
                        placeholder='Enter the title of your todo'
                        required
                        className=' cursor-text px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-green-600 focus:shadow-sm focus:shadow-green-600'
                    />
                </label>
                <label className='flex flex-col gap-2 w-full'>
                    <span className=' font-semibold text-base '>
                        Description

                    </span>
                    <input

                        defaultValue={todo.description}
                        onChange={(e) => setTodo({ ...todo, description: e.target.value })}
                        type='text'
                        placeholder='Enter the description of your todo'
                        required
                        className=' cursor-text px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-green-600 focus:shadow-sm focus:shadow-green-600'
                    />
                </label>
                
                <button type='submit' className='bg-green-400 text-lg font-semibold hover:scale-[98%] duration-300 hover:shadow-lg hover:shadow-green-600 py-2 rounded-lg mt-5'>Edit</button>
            </form>
        </div>
    )
}

export default Editform
