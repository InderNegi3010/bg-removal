import { Webhook } from "svix";
import userModel from "../models/userModel.js";

// API Controller Function to Manage Clerk User with database
// https://localhost:4000/api/user/webhooks
const clerkWebhooks = async (req, res) => {
  try {
    // create a Svix instance with clerk webhook secret
    const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

    await whook.verify(JSON.stringify(req.body), {
      "svix-id": req.headers["svix-id"],
      "svix-timestamp": req.headers["svix-timestamp"],
      "svix-signature": req.headers["svix-signature"],
    });

    const { data, type } = req.body;

    switch (type) {
      case "user.created":
        {
          const userData = {
            clerkId: data.id,
            email: data.email_addresses[0].email_address,
            photo: data.image_url,
            firstName: data.first_name,
            lastName: data.last_name,
          };

          await userModel.create(userData);
          res.json({ success: true, message: "User Created Successfully" });
        }

        break;

      case "user.updated":
        {
          const userData = {
            email: data.email_addresses[0].email_address,
            photo: data.image_url,
            firstName: data.first_name,
            lastName: data.last_name,
          };

          await userModel.findOneAndUpdate({ clerkId: data.id }, userData);
          res.json({ success: true, message: "User Updated Successfully" });
        }
        break;

      case "user.deleted":
        {
          await userModel.findOneAndDelete({ clerkId: data.id });
          res.json({ success: true, message: "User Deleted Successfully" });
        }

        break;
    }
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

const userCredits = async (req, res) => {
  try {
    const clerkId = req.clerkId;
    const userData = await userModel.findOne({ clerkId });

    res.json({ success: true, credits: userData.creditBalance });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

