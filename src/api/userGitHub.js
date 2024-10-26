import { axiosClient } from '../lib/axiosClient';

export const getUserByName = async (name) => {
  try {
    const response = await axiosClient.get(`/${name}`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener el Usuario:', error);
    return null;
  }
};
