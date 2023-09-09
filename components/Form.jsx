import React from 'react'

const Form = ({ setFormData, handleSubmit, formData }) => {
    return (
        <div className='font-livvic  flex flex-col gap-8 w-full p-8 rounded-xl border border-gray-200 backdrop-blur-md items-start justify-center bg-gray-200'>
            <h4 className='font-bold text-2xl'>ADD TODO</h4>
            <form className='flex flex-col gap-4 w-full' onSubmit={handleSubmit}>
                
                <label  className='flex flex-col gap-2 w-full'>
                    <span className=' font-semibold text-base '>
                        Title

                    </span>
                    <input

                        value={formData.title}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        type='text'
                        placeholder='Enter the title'
                        required
                        className=' cursor-text px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-green-600 focus:shadow-sm focus:shadow-green-600 '
                    />
                </label>
                <label className='flex flex-col gap-2 w-full'>
                    <span className=' font-semibold text-base '>
                        Description

                    </span>
                    <input

                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        type='text'
                        placeholder='Enter the description'
                        required
                        className=' cursor-text px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-green-600 focus:shadow-sm focus:shadow-green-600 '
                    />
                </label>
                <label className='flex flex-col gap-2 w-full'>
                    <span className=' font-semibold text-base '>
                        Email

                    </span>
                    <input

                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        type='email'
                        placeholder='Enter the email'
                        required
                        className=' cursor-text px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-green-600 focus:shadow-sm focus:shadow-green-600 '
                    />
                </label>
                
                <button type='submit' className='bg-green-400 text-lg font-semibold hover:scale-[98%] duration-300 hover:shadow-lg hover:shadow-green-600 py-2 rounded-lg mt-5'>Add</button>
            </form>
        </div>
    )
}

export default Form
