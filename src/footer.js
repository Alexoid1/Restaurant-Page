/* eslint-disable import/prefer-default-export */
export function footerPage() {
  const container = document.getElementById('content');
  const footer = document.createElement('footer');
  const fpar = document.createElement('p');
  const fcontact = document.createElement('a');

  fpar.textContent = 'Made by Alexoid.';
  fcontact.textContent = 'GitHub';
  fcontact.href = 'https://github.com/Alexoid1';

  footer.appendChild(fpar);
  footer.appendChild(fcontact);
  container.appendChild(footer);
}