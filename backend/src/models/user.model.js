import mongoose from 'mongoose'
import monoose, { mongo } from 'mongoose'

const userSchema =  new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    profileImageUrl: {
        type: String,
        default:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNKfj6RsyRZqO4nnWkPFrYMmgrzDmyG31pFQ&s'
    },
    role: {
        type: String,
        enum: ["admin", "user"],
        default: "user"
    },
}, 
{timestamps: true}
) 

const User = mongoose.model("User", userSchema);
export default User;