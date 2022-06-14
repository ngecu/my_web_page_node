import mongoose from 'mongoose'
import { String } from 'mongoose/lib/schema/index'


const commentSchema = new mongoose.Schema({
  text: {
       type: String,
       trim: true,
       required: true
    },
 date: {
       type: Date,
       default: Date.now
    },
// each comment can only relates to one blog, so it's not in array
 post: {
       type: mongoose.Schema.Types.ObjectId,
       ref: 'Post'
    }
  })

const Comment = mongoose.model('Comment', commentSchema)

export default Comment
