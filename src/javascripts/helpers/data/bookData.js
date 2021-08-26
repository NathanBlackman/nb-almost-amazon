import axios from 'axios';
import firebaseConfig from '../../../api/apiKeys';
// API CALLS FOR BOOKS

const dbUrl = firebaseConfig.databaseURL;

// GET BOOKS
const getBooks = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/books.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

// DELETE BOOK
// CREATE BOOK
const createBook = () => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/books.json`, newBookData)
    .then((response) => {
      const firebaseKey = response.data.name;
      axios.patch(`${dbUrl}/books/${firebaseKey}`, firebaseKey);
      .then(() => getBooks().then(allBooks) => resolve(allBooks));
    });
    .catch((errors) => reject(errors))
});
// UPDATE BOOK
// SEARCH BOOKS

export { getBooks, createBook };
