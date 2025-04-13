import { api } from '../../apis';

export const useGetData = () => {
  const getFood = async () => {
    try {
      const response = await api.get('/categories.php');
      return response.data.categories;
    } catch (error) {
      console.log({ error });
      return error; 
    }
  };

  return {
    getFood,
  };
};