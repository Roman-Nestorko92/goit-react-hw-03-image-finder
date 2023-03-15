const KEY = '33632271-865dceae4afc82cedaa0ea243';
const URL = 'https://pixabay.com/api/';
const FILTER = '&image_type=photo&orientation=horizontal&per_page=12';

function fetchImages(query, page = 1) {
  return fetch(`${URL}?q=${query}&page=${page}&key${KEY}${FILTER}`).then(
    response => response.json()
  );
}

export default fetchImages;
