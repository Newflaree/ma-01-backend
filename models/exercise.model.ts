import { Schema, model } from 'mongoose';
// Interfaces
import { ExerciseProps } from '../interfaces/interfaces';

const ExerciseSchema = new Schema<ExerciseProps>({
	code: {
		type: String,
		required: true,
    unique: true
	},
	status: {
		type: Boolean,
		required: true,
		default: true
	},
	user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  },
  desc: {
    type: String,
    required: true
  },
  a: {
    type: String,
    required: true
  },
  b: {
    type: String,
    required: true
  },
  c: {
    type: String,
    required: true
  },
  d: {
    type: String,
    required: true
  },
  e: {
    type: String,
    required: true
  },
	correctAlt: {
		type: String,
		required: true
	}
});

ExerciseSchema.methods.toJSON = function() {
  const { __v, _id, ...category } = this.toObject();
  category.id = _id;
  return category;
}

export default model<ExerciseProps>( 'Exercise', ExerciseSchema );
