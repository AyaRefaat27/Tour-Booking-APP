import Tour from "../models/Tour.js";

// Create New Tour
export const createTour = async (req, res) => {
  const newTour = new Tour(req.body);

  try {
    const savedTour = await newTour.save();

    res.status(200).json({
      success: true,
      message: "Successfully Created",
      data: savedTour,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to Create! Try Again",
    });
  }
};

//Update Tour
export const updateTour = async (req, res) => {
  const id = req.params.id;
  try {
    const updatedTour = await Tour.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Successfully Updated",
      data: updateTour,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to Update!",
    });
  }
};

//Delete Tour
export const deleteTour = async (req, res) => {
  const id = req.params.id;
  try {
    await Tour.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Successfully Deleted",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to Delete!",
    });
  }
};

//Get Single Tour
export const getSingleTour = async (req, res) => {
  const id = req.params.id;
  try {
    const tour = await Tour.findById(id).populate("reviews");

    res.status(200).json({
      success: true,
      message: "Successfully Find The Tour",
      data: tour,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "Not Found!",
    });
  }
};

//Get All Tour
export const getAllTours = async (req, res) => {
  // For Pagination
  const page = parseInt(req.query.page);

  try {
    const tours = await Tour.find({})
      .populate("reviews")
      .skip(page * 8)
      .limit(8);
    res.status(200).json({
      success: true,
      message: "Successfully Find All Tours",
      count: tours.length,
      data: tours,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "Not Found!",
    });
  }
};

// Get Tour by Search

export const getTourBySearch = async (req, res) => {
  const city = new RegExp(req.query.city, "i");
  const distance = parseInt(req.query.distance);
  const maxGroupSize = parseInt(req.query.maxGroupSize);

  try {
    const tours = await Tour.find({
      city,
      distance: { $gte: distance },
      maxGroupSize: { $gte: maxGroupSize },
      //gte => greater than equal
    }).populate("reviews");

    res.status(200).json({
      success: true,
      message: "Successfully Find The Tour",
      data: tours,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "Not Found!",
    });
  }
};

//Get Featured Tour
export const getFeaturedTours = async (req, res) => {
  try {
    const tours = await Tour.find({ featured: true })
      .populate("reviews")
      .limit(8);
    res.status(200).json({
      success: true,
      count: tours.length,
      message: "Successfully Find The Tour",
      data: tours,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "Not Found!",
    });
  }
};

//Get Tour Counts
export const getTourCount = async (req, res) => {
  try {
    const tourCount = await Tour.estimatedDocumentCount();
    res.status(200).json({ success: true, data: tourCount });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed To Fetch" });
  }
};
