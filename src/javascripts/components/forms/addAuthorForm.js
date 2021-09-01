const addAuthorForm = (obj = {}) => {
  document.querySelector('#store').innerHTML = '';
  document.querySelector('#add-button').innerHTML = '';
  document.querySelector('#form-container').innerHTML = `
      <form id="submit-author-form" class="mb-4">
        <div class="form-group">
          <label for="first-name">First Name</label>
          <input type="text" class="form-control" id="first-name" aria-describedby="authorFirstName" placeholder="Enter First Name" value="${obj.first_name || ''}" required>
        </div>
        <div class="form-group">
          <label for="last-name">Last Name</label>
          <input type="text" class="form-control" id="last-name" placeholder="Enter Last Name" value="${obj.last_name || ''}" required>
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="text" class="form-control" id="email" placeholder="Enter Email" value="${obj.email || ''}" required>
        </div>
        <button type="submit" id="submit-author" class="btn btn-primary">Submit Author</button>
      </form>`;
};

export default addAuthorForm;
