import React, { useState, useEffect } from "react";
import { fetchGallery, postGallery, updateGallery } from "../../api";

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

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      setGalleryData((prev) => ({
        ...prev,
        images: [...(prev.images || []), reader.result],
      }));
    };
    reader.readAsDataURL(file);
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
                  <img
                    key={idx}
                    src={img}
                    alt={`gallery-img-${idx}`}
                    className="bg-[#F8F7FA] aspect-square object-cover"
                  />
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
