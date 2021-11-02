const form = document.querySelector('.feedback-form');
const inputData = {};

console.log(form.elements);
form.addEventListener('input', e => {
  e.preventDefault();

  const formData = new FormData(form);

  console.log(formData);
  formData.forEach(data => console.log(data));
  formData.forEach((email, message) => console.log(email, message));
});
form.addEventListener('change', e => {
  console.log(e.target.name);
  console.log(e.target.value);
  inputData[e.target.name] = e.target.value;
  console.log(inputData);
});
