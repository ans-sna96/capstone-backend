import mongoose from 'mongoose';

const DhtRainSchema = new mongoose.Schema(
  {
    userId: String,
    temperature: Number,
    humidity: Number,
    rainWetAreaPercentage: Number,
    weather: String,
  },
  { timestamps: true }
);

const DhtRain = mongoose.model('DhtRain', DhtRainSchema);

export default DhtRain;
