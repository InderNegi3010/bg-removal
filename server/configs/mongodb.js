import mongoose from "mongoose";

const connectDB = async () => {
    try {
        mongoose.connection.on("connected", () => {
            console.log("✅ Database Connected");
        });

        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "bg-removal",
        });
    } catch (err) {
        console.error("❌ Database connection error:", err);
        process.exit(1);
    }
};

export default connectDB;
