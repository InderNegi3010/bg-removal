import jwt from "jsonwebtoken"

// Middlewear Function to decode jwt to get clerkId
const authUser = async (req , res, next) => {
    try {

        const {token } = req.headers;

        if(!token) {
           return res.json({success:false, message:"Not Authorized Login Again"})
        }

        const token_decode = jwt.decode(token);

        if (!token_decode || !token_decode.clerkId) {
            return res.status(401).json({
                success: false,
                message: "Invalid Token",
            });
        }

        req.clerkId = token_decode.clerkId;

        next()
        
    } catch (error) {
        console.log(error.message);
        res.json({ success: false, message: error.message });
    }
}

export default authUser