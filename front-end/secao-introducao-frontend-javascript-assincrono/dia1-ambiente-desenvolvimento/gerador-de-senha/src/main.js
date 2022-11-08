import { nanoid } from 'nanoid';
import './styles.css';

const pwdBtnEl = document.querySelector('button');
const displayPwdEl = document.querySelector('h2');

pwdBtnEl.addEventListener('click', () => {
  const randomPwd = nanoid();
  displayPwdEl.innerHTML = randomPwd;
});
