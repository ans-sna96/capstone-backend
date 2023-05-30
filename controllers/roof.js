import Roof from '../models/Roof.js';

export const updateStatus = async (req, res) => {
  try {
    const userId = req.user.id;
    const prevData = await Roof.findOne({ userId });
    const { status, controller } = req.body;
    if (!prevData) {
      await new Roof({ userId, status, controller }).save();
      return res.status(201).json({ msg: 'Created new Data' });
    }
    const prevStatus = await Roof.findById(prevData._id);

    if (!prevStatus) {
      return res.status(404).json({ msg: 'Data Not Found' });
    }

    if (status == prevStatus.status && controller === prevStatus.controller) {
      return res.status(200).json({ msg: 'the condition is still the same ' });
    }

    const data = await Roof.updateOne(
      { _id: prevStatus._id },
      {
        $set: {
          status,
          controller,
        },
      }
    );
    return res.status(200).json({ msg: 'Data successfully updated' });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};
export const updateStatusNoAuth = async (req, res) => {
  try {
    const userId = req.params.userId;
    const prevData = await Roof.findOne({ userId });
    const { status, controller } = req.body;
    if (!prevData) {
      await new Roof({ userId, status, controller }).save();
      return res.status(201).json({ msg: 'Created new Data' });
    }
    const prevStatus = await Roof.findById(prevData._id);

    if (!prevStatus) {
      return res.status(404).json({ msg: 'Data Not Found' });
    }

    if (status == prevStatus.status && controller === prevStatus.controller) {
      return res.status(200).json({ msg: 'the condition is still the same ' });
    }

    const data = await Roof.updateOne(
      { _id: prevStatus._id },
      {
        $set: {
          status,
          controller,
        },
      }
    );
    return res.status(200).json({ msg: 'Data successfully updated' });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

export const getStatus = async (req, res) => {
  try {
    const userId = req.user.id;
    const status = await Roof.findOne({ userId }).lean();

    if (!status) {
      return res.status(404).json({ msg: 'Data not found' });
    }
    delete status._id;
    delete status.userId;
    return res.status(200).json(status);
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

export const getStatusNoAuth = async (req, res) => {
  try {
    const userId = req.params.userId;
    const status = await Roof.findOne({ userId }).lean();

    if (!status) {
      return res.status(404).json({ msg: 'Data not found' });
    }
    delete status._id;
    delete status.userId;
    return res.status(200).json({ status: status.status });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

export const postStatus = async (req, res) => {
  try {
    const userId = req.user.id;
    const { status, controller } = req.body;
    const newStatus = new Roof({ userId, status, controller });

    const savedStatus = await newStatus.save();
    return res.status(200).json(savedStatus);
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};
