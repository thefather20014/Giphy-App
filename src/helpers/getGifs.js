
import PropTypes from 'prop-types';

const getGif = async (categories, lim) => {
    const API_KEY = '2MynF7hU61bkYIZDxSaB22EmCIl33L1r';
    const API_URL = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(categories)}&limit=${lim}&api_key=${API_KEY}`;
    const res = await fetch(API_URL);
    const { data } = await res.json();
    const gifs = data.map(res => {
        return {
            id: res.id,
            image: res.images?.downsized_large.url,
            title: res?.title,
        }
    });

    return gifs;
};

getGif.propTypes = {
    categories: PropTypes.string.isRequired,
    lim: PropTypes.string.isRequired,
}

export default getGif;