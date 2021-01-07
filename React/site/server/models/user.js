import moment from "moment";
import mongoos from "mongoose";

//Create Schema
const UserSchema = new mongoos.Schema({
    name: {
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    role: {
        type: String,
        enum:["MainJuin", "SubJuin", "User"],
        default: "User",
    },
    register_date: {
        type: Date,
        default: moment().format("YYYY-MM-DD hh:mm")
    },
    comments: [
        {
            post_id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "posts",
            },
            comment_id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "comments",
            },
        },
    ],
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "posts",
        },
    ],
});

const User = mongoos.model("user", UserSchema);

export default User;