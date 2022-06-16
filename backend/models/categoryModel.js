import mongoose from 'mongoose'
import { String } from 'mongoose/lib/schema/index.js'

const categorySchema = mongoose.Schema(
  {
    
    name: {
      type: String,
      // required: true,
    },
    color: {
      type: String,
      // required: true,
    },
    slug: {
      type: String,
    },
    image: {
      type: String,
      // required: true,
    },
  },
  {
    timestamps: true,
  }
)

const Category = mongoose.model('Category', categorySchema)

export default Category
