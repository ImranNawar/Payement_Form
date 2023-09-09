import axios from 'axios';

const searchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID _6BxmIaoA4_E59wZFWYzf_2cfbVSZo7S-QMrnuDcLJE'
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;