const contactPage = () => {
  const container = document.getElementById('content');
  const contact = document.createElement('div');
  contact.classList.add('contact');

  const form = document.createElement('form');
  const about = document.createElement('div');
  const resImg = document.createElement('img');
  const street = document.createElement('p');
  const numphone = document.createElement('h2');
  const formTitle = document.createElement('p');
  const message = document.createElement('input');
  const email = document.createElement('input');
  const number = document.createElement('input');
  const send = document.createElement('input');

  formTitle.textContent = "Contact Pablo's Pizza";
  formTitle.classList.add('formTitle');
  about.classList.add('about');
  message.type = 'text';
  message.placeholder = 'Your message here';
  message.classList.add('message');
  email.type = 'email';
  email.placeholder = 'email@example.com';
  email.classList.add('message');

  number.type = 'number';
  number.placeholder = 'Phone number';
  number.classList.add('message');

  send.type = 'submit';

  send.value = 'Send';
  send.classList.add('buton');

  about.appendChild(resImg);
  resImg.src = '../image/restaurant.jpg';
  resImg.classList.add('resImg');

  street.textContent = 'Come a visit us! in Street ********** Av.************';
  street.classList.add('street');

  numphone.textContent = 'Phone: ********** or **********';
  numphone.classList.add('numphone');

  about.appendChild(street);
  about.appendChild(numphone);

  form.appendChild(formTitle);
  form.appendChild(message);
  form.appendChild(email);
  form.appendChild(number);
  form.appendChild(send);

  contact.appendChild(form);
  contact.appendChild(about);
  container.appendChild(contact);
};

export default contactPage;
