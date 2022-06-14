
import mongoose from 'mongoose'


const coursepostSchema = mongoose.Schema(
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
      },
      course: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'course',
      },
      title: {
        type: String,
        required: true,
      },
      slug: {
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
      published: {
        type: Boolean,
        required: true,
        default:false
      },
   
    },
    {
      timestamps: true,
    }
  )
  
  const Coursepost = mongoose.model('Coursepost', coursepostSchema)
  
  export default Coursepost