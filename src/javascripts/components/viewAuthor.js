const viewAuthor = (obj) => {
  document.querySelector('#store').innerHTML = '';
  document.querySelector('#add-button').innerHTML = '';
  document.querySelector('#form-container').innerHTML = '';
  document.querySelector('#view').innerHTML = '';

  document.querySelector('#view').innerHTML += `
      <div class="mt-5 d-flex flex-wrap">
       <div class="d-flex flex-column">
         <h2>${obj.first_name} ${obj.last_name}</h2>
         <h4>${obj.email}</h4>
           <i id="edit-author-btn--${obj.firebaseKey}" class="fas fa-edit btn btn-info"></i>
           <i id="delete-author--${obj.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
         </div>
       </div>
       <div class="text-white ms-5 details">
         <h5>${obj.title} by ${obj.author_id}</h5>
         <p>${obj.description || ''}</p>
         <hr>
         <p>${obj.sale ? `<span class="badge bg-info sale-badge"><i class="fa fa-bell" aria-hidden="true"></i> Sale</span> 
           $${obj.price}` : `$${obj.price}`}</p>      
          </div>
        </div>`;
};

export default viewAuthor;
