const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');

function readFormData(form) {
  const message = form.message.value.trim();
  const email = form.email.value.trim();
  return {
    email,
    message,
  };
}

form.addEventListener('input', event => {
  const data = readFormData(event.currentTarget);
  const jsonData = JSON.stringify(data);
  localStorage.setItem(STORAGE_KEY, jsonData);
});

function getLocalStorageData() {
 
  const rowData = localStorage.getItem(STORAGE_KEY);
  const data = JSON.parse(rowData);
  return data;
}

if (getLocalStorageData() !== null) {
  
  form.email.value = getLocalStorageData().email;
  form.message.value = getLocalStorageData().message;
}

form.addEventListener('submit', event => {
  event.preventDefault(); 
  const email = event.target.elements.email.value;
  const message = event.target.elements.message.value;

  if (email === '' || message === '') {
    
    return alert('All form fields must be filled in');
  }
  if (getLocalStorageData() !== null) {
    
    console.log(getLocalStorageData());
  }

  localStorage.removeItem(STORAGE_KEY); 
  form.reset(); 
});