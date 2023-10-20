import axios from 'axios';

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID If7p9dALwsgTiFT1RB4_iISzDSxNsK7Tm_xm_DUqNfE'
        },
        params: {
            query: term,
        },
    });

    return response.data.results;
}

export default searchImages;