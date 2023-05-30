import DhtRain from '../models/DhtRain.js';

export const postDhtRain = async (req, res) => {
  try {
    const userId = req.user.id;
    const { temperature, humidity, rainWetAreaPercentage, weather } = req.body;
    const newDhtRain = new DhtRain({
      userId,
      temperature,
      humidity,
      rainWetAreaPercentage,
      weather,
    });
    const savedDhtRain = await newDhtRain.save();
    return res.status(200).json(savedDhtRain);
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

export const updateDhtOnly = async (req, res) => {
  try {
    const userId = req.params.userId;
    const prevData = await DhtRain.findOne({ userId });
    const { temperature, humidity, rainWetAreaPercentage, weather } = req.body;
    if (!prevData) {
      await new DhtRain({
        userId,
        temperature,
        humidity,
        rainWetAreaPercentage,
        weather,
      }).save();
      return res.status(201).json({ msg: 'Created New Data' });
    }
    const data = await DhtRain.updateOne(
      { _id: prevData._id },
      {
        $set: {
          temperature,
          humidity,
          rainWetAreaPercentage,
          weather,
        },
      }
    );
    return res.status(200).json({ msg: 'Data successfully updated' });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

export const updateDhtRain = async (req, res) => {
  try {
    const userId = req.user.id;
    const prevData = await DhtRain.findOne({ userId });
    const { temperature, humidity, rainWetAreaPercentage, weather } = req.body;
    if (!prevData) {
      await new DhtRain({
        userId,
        temperature,
        humidity,
        rainWetAreaPercentage,
        weather,
      }).save();
      return res.status(201).json({ msg: 'Created New Data' });
    }

    const data = await DhtRain.updateOne(
      { _id: prevData._id },
      {
        $set: {
          temperature,
          humidity,
          rainWetAreaPercentage,
          weather,
        },
      }
    );
    return res.status(200).json({ msg: 'Data successfully updated' });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

export const getDhtRain = async (req, res) => {
  try {
    const userId = req.user.id;
    const dhtRain = await DhtRain.findOne({ userId }).lean();
    if (!dhtRain) {
      return res.status(404).json({ msg: 'Data not Found' });
    }
    delete dhtRain._id;
    return res.status(200).json(dhtRain);
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};
