const addAuthorForm = () => {
  document.querySelector('#store').innerHTML = '';
  document.querySelector('#add-button').innerHTML = '';
  document.querySelector('#form-container').innerHTML = `
      <form id="submit-author-form" class="mb-4">
        <div class="form-group">
          <label for="first-name">First Name</label>
          <input type="text" class="form-control" id="first-name" aria-describedby="authorFirstName" placeholder="Enter First Name" required>
        </div>
        <div class="form-group">
          <label for="last-name">Last Name</label>
          <input type="text" class="form-control" id="last-name" placeholder="Enter Last Name" required>
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="text" class="form-control" id="email" placeholder="Enter Email" required>
        </div>
        <button type="submit" id="submit-author" class="btn btn-primary">Submit Author</button>
      </form>`;
};

export default addAuthorForm;
