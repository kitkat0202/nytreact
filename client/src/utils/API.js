import axios from 'axios';

const flowers = '4c1347cedf20413fa73f911b723202c4';
const queryUrlBase = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=' + flowers + '&q=';

export default {
  nytSearch: function(queryTerms) {
    return axios.get(`${queryUrlBase}${queryTerms}`);
  },
  getSavedArticles: function() {
    return axios.get('/api/saved/');
  },
  deleteArticle: function(id) {
    return axios.delete('/api/saved/' + id);
  },
  saveArticle: function(articleData) {
    return axios.post('/api/saved', articleData);
  }
};
