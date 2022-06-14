import mongoose from 'mongoose'
import { String } from 'mongoose/lib/schema/index'


const commentsCoursePostSchema = new mongoose.Schema({
   user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
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
       ref: 'Coursepost'
    }
  })

const commentsCoursePost = mongoose.model('CommentsCoursePost', commentsCoursePost)

export default commentsCoursePostSchema
