import axios from "axios";

const API_BASE_URL = "http://localhost:5001/api";

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});

// Hero Section
export const fetchHero = async (userId) => {
  try {
    const response = await axiosInstance.get("/hero?userId=hardcoded-user-id-123", { params: { userId } });
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const postHero = async (data, userId) => {
  try {
    const response = await axiosInstance.post("/hero?userId=hardcoded-user-id-123", { ...data, userId });
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const updateHero = async (id, data, userId) => {
  try {
    const response = await axiosInstance.put(`/hero/${id}`, {
      ...data,
      userId,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const deleteHero = async (id, userId) => {
  try {
    const response = await axiosInstance.delete(`/hero/${id}`, {
      data: { userId },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Gallery Section
export const fetchGallery = async (userId) => {
  try {
    const response = await axiosInstance.get("/gallery?userId=hardcoded-user-id-123", {
      params: { userId },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const postGallery = async (data, userId) => {
  try {
    const response = await axiosInstance.post("/gallery?userId=hardcoded-user-id-123", { ...data, userId });
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const updateGallery = async (id, data, userId) => {
  try {
    const response = await axiosInstance.put(`/gallery/${id}`, {
      ...data,
      userId,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const deleteGallery = async (id, userId) => {
  try {
    const response = await axiosInstance.delete(`/gallery/${id}`, {
      data: { userId },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Location Section
export const fetchLocations = async (userId) => {
  try {
    const response = await axiosInstance.get("/location?userId=hardcoded-user-id-123", {
      params: { userId },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const postLocation = async (data, userId) => {
  try {
    const response = await axiosInstance.post("/location?userId=hardcoded-user-id-123", { ...data, userId });
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const updateLocation = async (id, data, userId) => {
  try {
    const response = await axiosInstance.put(`/location/${id}`, {
      ...data,
      userId,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const deleteLocation = async (id, userId) => {
  try {
    const response = await axiosInstance.delete(`/location/${id}`, {
      data: { userId },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

// FAQ Section
export const fetchFAQ = async (userId) => {
  try {
    const response = await axiosInstance.get("/faq?userId=hardcoded-user-id-123", { params: { userId } });
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const postFAQ = async (data, userId) => {
  try {
    const response = await axiosInstance.post("/faq?userId=hardcoded-user-id-123", { ...data, userId });
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const updateFAQ = async (id, data, userId) => {
  try {
    const response = await axiosInstance.put(`/faq/${id}`, { ...data, userId });
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const deleteFAQ = async (id, userId) => {
  try {
    const response = await axiosInstance.delete(`/faq/${id}`, {
      data: { userId },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Nav Section
export const fetchNav = async () => {
  try {
    const response = await axiosInstance.get("/nav?userId=hardcoded-user-id-123");
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const postNav = async (data) => {
  try {
    const response = await axiosInstance.post("/nav?userId=hardcoded-user-id-123", data);
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
export const fetchFooter = async (userId) => {
  try {
    const response = await axiosInstance.get("/footer?userId=hardcoded-user-id-123", { params: { userId } });
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const postFooter = async (data, userId) => {
  try {
    const response = await axiosInstance.post("/footer?userId=hardcoded-user-id-123", { ...data, userId });
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const updateFooter = async (id, data, userId) => {
  try {
    const response = await axiosInstance.put(`/footer/${id}`, {
      ...data,
      userId,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const deleteFooter = async (id, userId) => {
  try {
    const response = await axiosInstance.delete(`/footer/${id}`, {
      data: { userId },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Data (General)
export const fetchData = async (userId) => {
  try {
    const response = await axiosInstance.get("/data?userId=hardcoded-user-id-123", { params: { userId } });
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const postData = async (data, userId) => {
  try {
    const response = await axiosInstance.post("/data?userId=hardcoded-user-id-123", { ...data, userId });
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const updateData = async (id, data, userId) => {
  try {
    const response = await axiosInstance.put(`/data/${id}`, {
      ...data,
      userId,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const deleteData = async (id, userId) => {
  try {
    const response = await axiosInstance.delete(`/data/${id}`, {
      data: { userId },
    });
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
