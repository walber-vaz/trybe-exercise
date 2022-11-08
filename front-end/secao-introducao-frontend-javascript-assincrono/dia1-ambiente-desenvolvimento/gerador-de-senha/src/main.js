import { nanoid } from 'nanoid';
import copy from 'clipboard-copy';
import './styles.css';

const pwdBtnEl = document.querySelector('button');
const displayPwdEl = document.querySelector('h2');

pwdBtnEl.addEventListener('click', () => {
  const randomPwd = nanoid();
  displayPwdEl.innerHTML = randomPwd;
});

displayPwdEl.addEventListener('click', async (event) => {
  await copy(event.target.innerHTML);
  alert('Senha copiada!');
})
