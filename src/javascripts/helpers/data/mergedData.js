import { deleteBook, getSingleBook } from './bookData';
import { getSingleAuthor } from './authorData';

const viewBookDetails = (bookFirebaseKey) => {
  getSingleBook(bookFirebaseKey)
    .then((response) => {
      getSingleAuthor(response.author_id)
        .then((authorObject) => {
          resolve({ authorObject, ...bookObject});
        });
    }).catch(reject);
};

// const viewBookDetails = (firebaseKey) => (async () => {
//   const book = await getSingleBook(firebaseKey);
//   const author = await getSingleAuthor(book.author_id);
//   return ({ author, ...book });
// })().catch(console.warn);

const deleteAuthorBooks = (authorId) => new Promise((resolve, reject) => {
  getAuthorBooks(authorId).then((authorsBookArray) => {
    const deleteBooks = authorsBookArray.map((book) => deleteBook(book.firebaseKey));

    console.warn(deleteBooks);

    Promise.all([...deleteBooks]).then(() => resolve(deleteSingleAuthor(authorId)));
  }).catch(reject);
});

export { viewBookDetails, deleteAuthorBooks };
