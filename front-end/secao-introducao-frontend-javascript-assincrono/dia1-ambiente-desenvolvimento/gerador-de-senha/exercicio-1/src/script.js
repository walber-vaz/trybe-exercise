import './style.css';
import validator from 'validator';

const form = document.querySelector('[data-js="form"]');
const name = document.querySelector('[data-js="name"]');
const sobrenome = document.querySelector('[data-js="sobrenome"]');
const username = document.querySelector('[data-js="username"]');
const email = document.querySelector('[data-js="email"]');
const passsword = document.querySelector('[data-js="senha"]');

const setError = (input, msg) => {
  const control = input.parentElement;
  const small = control.querySelector('small');

  small.innerText = msg;
  control.className = 'control error';
}

const setSuccess = (input) => {
  const control = input.parentElement;
  control.className = 'control success';
}

const checks = () => {
  const inputs = {
    nome: validator.isAlpha(name.value),
    lastname: validator.isAlpha(sobrenome.value),
    user: validator.isAlphanumeric(username.value),
    email: validator.isEmail(email.value),
    pwd: validator.isAlphanumeric(passsword.value)
  }
  if (!inputs.nome) {
    setError(name, 'O campo nome e obrigatório.');
  } else {
    setSuccess(name);
  }

  if (!inputs.lastname) {
    setError(sobrenome, 'O campo sobrenome e obrigatório.');
  } else {
    setSuccess(sobrenome);
  }

  if (!inputs.user) {
    setError(username, 'O campo username e obrigatório.');
  } else {
    setSuccess(username);
  }

  if (!inputs.pwd) {
    setError(passsword, 'O senha e obrigatório.');
  } else if (passsword.value.length < 8) {
    setError(passsword, 'Senha deve contem 8 caracteres no mínimo.')
  } else {
    setSuccess(passsword);
  }

  if (!inputs.email) {
    setError(email, 'O e-mail e obrigatório');
  } else {
    setSuccess(email);
  }

  const forms = form.querySelectorAll('.control')
  const isValidForm = [...forms].every((form) => form.className === 'control success');

  if (isValidForm) alert('O formulário 100% valido');
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  checks();
});
