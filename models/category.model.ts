import { Schema, model } from 'mongoose';
// Interfaces
import { CategoryProps } from '../interfaces/interfaces';

const CategorySchema = new Schema<CategoryProps>({
  name: {
    type: String,
    required: [ true, 'The name is mandatory' ],
  },
	code: {
		type: String,
		required: true,
    unique: true
	},
  status: {
    type: Boolean,
    default: true,
    required: true
  },
	img: {
		type: String
	},
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }	
});

CategorySchema.methods.toJSON = function() {
  const { __v, _id, ...category } = this.toObject();
  category.id = _id;
  return category;
}

export default model<CategoryProps>( 'Category', CategorySchema );
