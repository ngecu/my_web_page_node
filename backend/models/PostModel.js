
import mongoose from 'mongoose'




const postSchema = mongoose.Schema(
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
      },
      category: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Category',
      },
      title: {
        type: String,
        required: true,
      },
    
      image: {
        type: String,
        required: true,
      },
      body: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        // required: true,
      },
      published: {
        type: Boolean,
        // required: true,
        default:false
      },
   
    },
    {
      timestamps: true,
    }
  )
  
  const Post = mongoose.model('Post', postSchema)
  
  export default Post