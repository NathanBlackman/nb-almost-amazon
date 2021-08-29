import checkLoginStatus from './helpers/router';
import { showAuthors, emptyAuthors } from './components/authors';

import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';

const init = () => {
  checkLoginStatus();
  showAuthors();
  emptyAuthors();
};

init();
