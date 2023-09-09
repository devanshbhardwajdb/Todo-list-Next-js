import { Schema, model, models } from "mongoose";


const TodoSchema = new Schema ({
    creator:{
        type: Schema.Types.ObjectId,
        ref: 'User',

    },
    title:{
        type: String,
        required :[true,"Name is required."],
    },

    description:{
        type:String,
        required:[true,"Description is required."],
    },
    email:{
        type:String,
        required:[true,"Email is required."],
    }
    
});

const Todo = models.Todo || model('Todo', TodoSchema);

export default Todo;