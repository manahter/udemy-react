import axios from 'axios';

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', 
        {
            headers: {
                Authorization: 'Client-ID ljDW0pgz4P7yZH1mK4MOkbXujkAeGSfkNwJ5ZB4FzF0',
            },
            params: {
                query: term,
            },
        });
    return response.data.results;
};

export default searchImages;