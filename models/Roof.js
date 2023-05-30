import mongoose from 'mongoose';

export const RoofSchema = new mongoose.Schema(
  {
    userId: String,
    status: String,
    controller: String,
  },
  { timestamps: true }
);

const Roof = mongoose.model('Roof', RoofSchema);

export default Roof;
