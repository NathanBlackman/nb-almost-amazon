import { showBooks } from '../components/books';
import addBookForm from '../components/forms/addBookForm';
import { createBook, deleteBook, getSingleBook } from '../helpers/data/bookData';
import addAuthorForm from '../components/forms/addAuthorForm';
import { showAuthors } from '../components/authors';
import { createAuthor } from '../helpers/data/authorData';

const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // CLICK EVENT FOR DELETING A BOOK
    if (e.target.id.includes('delete-book')) {
      if (window.confirm('Want to delete?')) {
        console.warn('CLICKED DELETE BOOK', e.target.id);
        const [, id] = e.target.id.split('--');

        deleteBook(id).then(showBooks);
      }
    }

    // CLICK EVENT FOR SHOWING FORM FOR ADDING A BOOK
    if (e.target.id.includes('add-book-btn')) {
      console.warn('CLICKED ADD BOOK BUTTON', e.target.id);
      addBookForm();
    }

    // CLICK EVENT FOR SUBMITTING FORM FOR ADDING A BOOK
    if (e.target.id.includes('submit-book')) {
      e.preventDefault();
      const bookObject = {
        title: document.querySelector('#title').value,
        image: document.querySelector('#image').value,
        price: document.querySelector('#price').value,
        sale: document.querySelector('#sale').value,
        author_id: document.querySelector('#author_id').value
      };

      createBook(bookObject).then((booksArray) => showBooks(booksArray));
    }

    // CLICK EVENT FOR SHOWING MODAL FORM FOR ADDING A BOOK
    if (e.target.id.includes('edit-book-btn')) {
      console.warn('CLICKED EDIT BOOK', e.target.id);
      const [, id] = e.target.id.split('--');
      getSingleBook(id).then((bookObj) => addBookForm(bookObj));
    }

    // CLICK EVENT FOR EDITING/UPDATING A BOOK
    if (e.target.id.includes('update-book')) {
      console.warn('CLICKED EDIT BOOK', e.target.id);
    }

    // ADD CLICK EVENT FOR DELETING AN AUTHOR
    // ADD CLICK EVENT FOR SHOWING FORM FOR ADDING AN AUTHOR
    if (e.target.id.includes('add-author-button')) {
      console.warn('CLICKED ADD AUTHOR BUTTON', e.target.id);
      addAuthorForm();
    }
    // ADD CLICK EVENT FOR SUBMITTING FORM FOR ADDING AN AUTHOR
    if (e.target.id.includes('submit-author')) {
      e.preventDefault();
      const authorsObject = {
        first_name: document.querySelector('#first-name').value,
        last_name: document.querySelector('#last-name').value,
        email: document.querySelector('#email').value
      };
      createAuthor(authorsObject).then((authorsArray) => showAuthors(authorsArray));
      document.querySelector('#submit-author-form').reset();
    }
    // ADD CLICK EVENT FOR EDITING AN AUTHOR
  });
};

export default domEvents;
