import Booking from "../models/Booking.js";

//create new booking
export const createBooking = async (req, res) => {
  const newBooking = new Booking(req.body);
  try {
    const savedBooking = await newBooking.save();
    res.status(200).json({
      success: true,
      message: "Your Tour is Booked.",
      data: savedBooking,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Sorry! There is an internal server error, Please Try Again.",
    });
  }
};

//get single booking
export const getSingleBooking = async (req, res) => {
  const id = req.params.id;

  try {
    const book = await Booking.findById(id);

    res
      .status(200)
      .json({ success: true, message: "Successful Booking", date: book });
  } catch (error) {
    res.status(404).json({ success: false, message: "Not Found!" });
  }
};

//get all bookings
export const getAllBooking = async (req, res) => {
  try {
    const bookings = await Booking.find();
    res
      .status(200)
      .json({ success: true, message: "Successful Bookings", date: bookings });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Sorry! There is an internal server error, Please Try Again.",
    });
  }
};
