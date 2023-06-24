import { axiosClient } from '../apiClient';

export const getAllBlogs = (category) => {
  const q = category === null || category === '' ? '' : category.toLowerCase();
  return axiosClient.get(`/blogs?category=${q}`);
};

export const getBlog = (id) => {
  return axiosClient.get(`/blogs/${id}`);
};

export const addBlog = (data, userId) => {
  return axiosClient.post(`/blogs/${userId}`, data);
};

export const updateBlog = (data, blogId, userId) => {
  return axiosClient.put(`/blogs/${blogId}/${userId}`, data);
};

export const incrementViews = (blogId, userId) => {
  return axiosClient.put(`/blogs/views-increment/${blogId}/${userId}`);
};

export const deleteBlog = (blogId, userId) => {
  return axiosClient.delete(`/blogs/${blogId}/${userId}`);
};
