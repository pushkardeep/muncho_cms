import React, { useState, useEffect } from "react";
import {
  fetchGallery,
  postGallery,
  updateGallery,
  uploadImageToMuncho,
  // deleteGalleryImage,
} from "../../api";

// Inline CrossIcon component for Vite compatibility
const CrossIcon = (props) => (
  <svg
    width={props.width || 16}
    height={props.height || 16}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5 5L15 15M15 5L5 15"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

// Components
import TabHeading from "../Common/TabHeading";
import ImgUploader from "../Common/ImgUploader";
import SmButton from "../Common/SmButton";

function Gallery() {
  const [galleryData, setGalleryData] = useState({
    title: "",
    subtitle: "",
    images: [],
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const getGallery = async () => {
      setLoading(true);
      try {
        const data = await fetchGallery();
        if (data) setGalleryData(data);
      } catch (err) {
        setError("Failed to fetch gallery data");
      } finally {
        setLoading(false);
      }
    };
    getGallery();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setGalleryData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    setLoading(true);
    setError(null);
    setSuccess(false);
    try {
      await postGallery(galleryData);
      setSuccess(true);
    } catch (err) {
      setError("Failed to save gallery data");
    } finally {
      setLoading(false);
      setTimeout(() => setSuccess(false), 2000);
    }
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setLoading(true);
    setError(null);
    try {
      const path = "trial/kalpit/gallery";
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdGFmZl9pZCI6MTEsImlhdCI6MTc1MDE3MTE2MCwiZXhwIjoxNzUwNzc1OTYwfQ.k3LyoJkZdXCbR5OQkgD9Ujqvh5EbeXLctn0olPGfj1Y";
      console.log("Bearer token used for upload:", token); // <-- Console the token
      const fileUrl = await uploadImageToMuncho(file, path, token);
      setGalleryData((prev) => ({
        ...prev,
        images: [...(prev.images || []), { src: fileUrl, alt: path }],
      }));
    } catch (err) {
      setError("Image upload failed");
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteImage = async (idx) => {
    // if (!galleryData._id) return;
    // setLoading(true);
    // setError(null);
    // try {
    //   const updatedGallery = await deleteGalleryImage(galleryData._id, idx);
    //   setGalleryData(updatedGallery);
    // } catch (err) {
    //   setError("Failed to delete image");
    // } finally {
    //   setLoading(false);
    // }
  };

  return (
    <div className="w-full h-full min-h-fit flex flex-col justify-start items-center gap-10 overflow-hidden relative pb-20">
      {/* Headings  */}
      <TabHeading title={"Gallery"} />
      {/* Gallery Section */}
      <div className="w-full flex flex-col justify-center items-center gap-3">
        <div className="w-full flex flex-col justify-center items-center leading-7">
          <h1 className="inter_med text-black text-[32px] tracking-[-2px]">
            {galleryData.title || "Title will be here"}
          </h1>
          <h4 className="inter_reg text-[#4D4D4D] text-[12px]">
            {galleryData.subtitle || "Sub heading will be here"}
          </h4>
        </div>
        <div className="w-[500px] grid grid-cols-3 gap-2">
          {/* Render images if available */}
          {galleryData.images && galleryData.images.length > 0
            ? [
                ...galleryData.images.map((img, idx) => (
                  <div key={idx} className="relative">
                    <img
                      src={img.src}
                      alt={img.alt || `gallery-img-${idx}`}
                      className="bg-[#F8F7FA] aspect-square object-cover"
                    />
                    <button
                      className="absolute top-1 right-1 bg-red-500 rounded-full p-1 shadow hover:bg-red-600 text-white transition-colors"
                      style={{ zIndex: 2 }}
                      onClick={() => handleDeleteImage(idx)}
                      aria-label="Delete image"
                      disabled={loading}
                    >
                      <CrossIcon width={16} height={16} />
                    </button>
                  </div>
                )),
                galleryData.images.length < 9 && (
                  <ImgUploader
                    key="uploader"
                    styles="bg-[#F8F7FA] aspect-square"
                    onChange={handleImageUpload}
                  />
                ),
              ]
            : Array.from({ length: 9 }).map((_, idx) => (
                <ImgUploader
                  key={idx}
                  styles="bg-[#F8F7FA] aspect-square"
                  onChange={handleImageUpload}
                />
              ))}
        </div>
      </div>
      {/* Editing Part  */}
      <div className="w-full h-fit flex flex-col justify-center items-start gap-3 overflow-hidden relative">
        <div className="w-full h-fit flex justify-between items-center gap-3">
          <h3 className="poppins_med text-[#201F33] text-[14px]">Edit</h3>
          <SmButton
            title={loading ? "Saving..." : success ? "Saved!" : "Save"}
            onClick={handleSave}
            disabled={loading}
          />
        </div>
        {error && <div className="text-red-500 text-sm">{error}</div>}
        {/* Inputs  */}
        <div className="w-full h-fit flex justify-between items-center gap-3">
          {/* Text Inputs */}
          <input
            className="poppins_reg w-full text-[14px] text-[#5C5C7A] placeholder:text-[#5C5C7A] focus:outline-none px-2 py-3"
            type="text"
            name="title"
            placeholder="Write Title here"
            value={galleryData.title}
            onChange={handleInputChange}
          />
          <input
            className="poppins_reg w-full text-[14px] text-[#5C5C7A] placeholder:text-[#5C5C7A] focus:outline-none px-2 py-3"
            type="text"
            name="subtitle"
            placeholder="Write Sub heading here"
            value={galleryData.subtitle}
            onChange={handleInputChange}
          />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
