const fetchImagesWithQuery = (searchQuery, page) => {
  const apiKey = `18743526-4b128e40a70dee342e39fe313`;
  const url = `https://pixabay.com/api/?key=${apiKey}&q=${searchQuery}&page=${page}&image_type=photo&orientation=horizontal&per_page=12`;

  return fetch(url).then(response => response.json());
};
const api = {
  fetchImagesWithQuery,
};
export default api;
