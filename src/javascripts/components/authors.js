// FIXME: STUDENTS show your authors

const showAuthors = (array) => {
  document.querySelector('#store').innerHTML = '';
  // CREATE A BUTTON TO ADD BOOKS
  document.querySelector('#add-button').innerHTML = '<button type="button" class="btn btn-primary">Add An Author</button>';

  array.forEach((item) => {
    console.warn(item);
    console.warn("yo somethin' wrong");
    // FIXME: STUDENTS create cards for your authors
    document.querySelector('#store').innerHTML += `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${item.first_name} ${item.last_name}</h5>
      <p class="auth-email">${item.email}</p>
      <button class="edit-auth-${item.firebaseKey}">Edit/button>
      <button class="delete-auth-${item.firebaseKey}">Delete</button>
    </div>
  </div>`;
  });
};

const emptyAuthors = () => {
  document.querySelector('#store').innerHTML = '<h1>No Authors</h1>';
};

export { showAuthors, emptyAuthors };
