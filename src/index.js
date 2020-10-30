import {menuNav} from './navbar.js'
document.body.style.margin='0';
document.body.style.padding='0';
document.body.style.boxSizing='border-box'
let container=document.getElementById('content');

container.style.maxWidth="1600px";
container.style.width="100%";
container.style.height="100vh";
container.style.background='#007a43';

menuNav();
let home=document.createElement('div');

home.style.height='580px';
home.style.backgroundImage='url(../image/pizza.jpeg)';
home.style.backgroundSize='cover';
home.style.display='flex';
home.style.alignItems='center';
home.style.justifyContent='center';

container.appendChild(home)
let parr=document.createElement('p');
parr.style.fontFamily='Lobster';
parr.style.color='white';
parr.style.fontSize='85px';
parr.style.marginTop='0';
parr.style.textAlign='center'
parr.textContent="Pablo's Pizza the best pizza.";
home.appendChild(parr);

let branch= document.createElement('div');
let logo1=document.createElement('div');
let logo2=document.createElement('div');
let logo3=document.createElement('div');
let logo4=document.createElement('div');

branch.style.width='100%';
branch.style.height='100px';


branch.appendChild(logo1);
branch.appendChild(logo2);
branch.appendChild(logo3);
branch.appendChild(logo4);



  

