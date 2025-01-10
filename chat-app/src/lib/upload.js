import axios from "axios";

const upload = async (img) => {
  if (!img) {
    alert("Please select an image first!");
    return null;
  }

  const formData = new FormData();
  formData.append("file", img);
  formData.append("upload_preset", "chat-app"); // Replace with your upload preset
  formData.append("cloud_name", "dl3vva17o"); // Replace with your cloud name

  try {
    const response = await axios.post(
      `https://api.cloudinary.com/v1_1/dl3vva17o/image/upload`, // Replace with your Cloudinary URL
      formData
    );

    // Get the uploaded image URL
    const uploadedImageUrl = response.data.secure_url;

    console.log("Uploaded Image URL:", uploadedImageUrl);

    return uploadedImageUrl; // Return the URL for further use
  } catch (error) {
    console.error("Error uploading image to Cloudinary:", error);
    return null;
  }
};

export default upload;
