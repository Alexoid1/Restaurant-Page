export function menuNav(){
let container=document.getElementById('content');    
let navbar=document.createElement('nav');

navbar.style.color='#007a43';
navbar.style.background='white';
navbar.style.position='fixed';
navbar.style.width='100%';
navbar.style.height='60px';

function hover (e){
    e.target.style.background='#007a43';
    e.target.style.color='white'
}

function hoverend (e){
    e.target.style.color='#007a43';
    e.target.style.background='white';
}


let ul=document.createElement('ul');
ul.style.width='40%';

ul.style.listStyle='none';
ul.style.marginTop='0px'
ul.style.display='flex';
ul.style.flexDirection='row';
ul.style.justifyContent='space-between';
ul.style.alignItems='center';
let li1=document.createElement('li');

li1.addEventListener('mouseover',hover)
li1.addEventListener('mouseout',hoverend)
li1.textContent='Home';
li1.style.padding='15px 10px';
li1.style.fontSize='20px';
li1.style.fontWeight='bolder';
li1.style.borderRadius='20px';
let li2=document.createElement('li');
let li3=document.createElement('li');
li2.addEventListener('mouseover',hover)
li2.addEventListener('mouseout',hoverend)
li3.addEventListener('mouseover',hover)
li3.addEventListener('mouseout',hoverend)
li2.textContent='Menu';
li2.style.fontSize='20px';
li2.style.fontWeight='bolder';
li2.style.borderRadius='20px';
li2.style.padding='15px 10px';
li3.textContent='About';
li3.style.fontSize='20px';
li3.style.fontWeight='bolder';
li3.style.padding='15px 10px';
li3.style.borderRadius='20px';

ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);
navbar.appendChild(ul);
container.appendChild(navbar);
}

