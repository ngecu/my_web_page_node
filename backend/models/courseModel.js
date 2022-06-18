
import mongoose from 'mongoose'

const reviewSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    required:false,
  },
  
  {
    timestamps: true,
  }
)


const courseSchema = mongoose.Schema(
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
      },
      name: {
        type: String,
        required: true,
      },
      image: {
        type: String,
        required: true,
      },
      category: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Category',
      },
      description: {
        type: String,
        required: true,
      },
      reviews: [reviewSchema],
      rating: {
        type: Number,
        required: true,
        default: 0,
      },
      numReviews: {
        type: Number,
        required: true,
        default: 0,
      },
      price: {
        type: Number,
        required: true,
        default: 0,
      },
      coursePosts:[
        {type: mongoose.Schema.Types.ObjectId,
            ref: 'Coursepost'
        }
    ],
    comments:[
      {type: mongoose.Schema.Types.ObjectId,
          ref: 'commentsCoursePost'
      }
  ],

    },
    {
      timestamps: true,
    }
  )
  
  const Course = mongoose.model('Course', courseSchema)
  
  export default Course