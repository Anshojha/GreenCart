import User from "../models/User.js";

// Update user cart data =>  /api/cart/update

export const updateCart = async(req , res) => {
    try {
        const { userId , cartItems } =  req.body;
        await User.findByIdAndUpdate(userId , {cartItems})
        res.status(200).json({success : true , message : "Cartitems updated"})
    } catch (error) {
        console.log(error.message)
        res.status(400).json({success : false, message : error.message})
    }
}