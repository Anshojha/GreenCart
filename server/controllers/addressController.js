import Address from "../models/Address.js";
import User from "../models/User.js";





// Add address -> /api/address/add

export const addAddress = async (req, res) => {
  try {
    const { address, userId } = req.body;
    await Address.cerate(...address, userId);

    res
      .status(200)
      .json({ success: true, message: "Address added Successfully !!" });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ success: false, message: error.message });
  }
};




// getAddress -> /api/address/get

export const getAddress = async (req, res) => {
  try {
    const { userId } = req.body;
    const address = await Address.findById({ userId });
    res.status(200).json({ success: true, address });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ success: false, message: error.message });
  }
};



