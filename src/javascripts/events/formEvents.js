import { showBooks } from "../components/books";

const createBookSubmitEvent = (e) => {
  console.warn('CLICKED SUBMIT BOOK', e.target.id);
  const formData = {
    author_id: document.querySelector('#author').value,
    firebaseKey: document.querySelector('#firebaseKey'),
    image: document.querySelector('#image').value,
    price: Number(document.querySelector('#price').value),
    sale: document.querySelector('#sale').checked,
    title: document.querySelector('#title').value
  };
  createBook(formData).then(allBooks) => showBooks(allBooks));
};

export default createBookSubmitEvent;
