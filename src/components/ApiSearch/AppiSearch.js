import axios from 'axios';
export { getImages };

const API_KEY = '30633743-fecdcb797cf8e375f7471d26b';

axios.defaults.baseURL = `https://pixabay.com/api/`;

async function getImages(query = 'world', page = 1) {
  const response = await axios.get(
    `?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response;
}
