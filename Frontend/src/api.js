import axios from "axios";

const API_BASE_URL = "http://localhost:5001/api";

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});

// Hero Section
export const fetchHero = async () => {
  try {
    const response = await axiosInstance.get("/hero");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const postHero = async (data) => {
  try {
    const response = await axiosInstance.post("/hero", data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateHero = async (id, data) => {
  try {
    const response = await axiosInstance.put(`/hero/${id}`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Gallery Section
export const fetchGallery = async () => {
  try {
    const response = await axiosInstance.get("/gallery");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const postGallery = async (data) => {
  try {
    const response = await axiosInstance.post("/gallery", data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateGallery = async (id, data) => {
  try {
    const response = await axiosInstance.put(`/gallery/${id}`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteGalleryImage = async (galleryId, imageIdx) => {
  try {
    const response = await axiosInstance.delete(
      `/gallery/${galleryId}/image/${imageIdx}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Location Section
export const fetchLocations = async () => {
  try {
    const response = await axiosInstance.get("/location");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const postLocation = async (data) => {
  try {
    const response = await axiosInstance.post("/location", data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateLocation = async (id, data) => {
  try {
    const response = await axiosInstance.put(`/location/${id}`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteLocation = async (id) => {
  try {
    const response = await axiosInstance.delete(`/location/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// FAQ Section
export const fetchFAQ = async () => {
  try {
    const response = await axiosInstance.get("/faq");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const postFAQ = async (data) => {
  try {
    const response = await axiosInstance.post("/faq", data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateFAQ = async (id, data) => {
  try {
    const response = await axiosInstance.put(`/faq/${id}`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Nav Section
export const fetchNav = async () => {
  try {
    const response = await axiosInstance.get("/nav");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const postNav = async (data) => {
  try {
    const response = await axiosInstance.post("/nav", data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateNav = async (id, data) => {
  try {
    const response = await axiosInstance.put(`/nav/${id}`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Footer Section
export const fetchFooter = async () => {
  try {
    const response = await axiosInstance.get("/footer");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const postFooter = async (data) => {
  try {
    const response = await axiosInstance.post("/footer", data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateFooter = async (id, data) => {
  try {
    const response = await axiosInstance.put(`/footer/${id}`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Data (General)
export const fetchData = async () => {
  try {
    const response = await axiosInstance.get("/data");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const postData = async (data) => {
  try {
    const response = await axiosInstance.post("/data", data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Export or send sectionTabs array
export const sendSectionTabs = async (sectionTabs) => {
  try {
    const response = await axiosInstance.post("/sections", { sectionTabs });
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Upload image to external API and return fileUrl
export const uploadImageToMuncho = async (file, path, token) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("path", path);
  const response = await fetch("https://api.muncho.in/api/file/upload", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });
  const data = await response.json();
  if (data.status && data.fileUrl) {
    return data.fileUrl;
  } else {
    throw new Error(data.message || "Image upload failed");
  }
};
