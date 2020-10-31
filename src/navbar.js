
import {homePage} from './home.js';
import {footerPage} from './footer.js';
import {menuPage} from './menu.js'
export function menuNav(){

    let container=document.getElementById('content');    
    let navbar=document.createElement('nav');
    navbar.classList.add('navbar');
    
    let ul=document.createElement('ul');
    ul.classList.add('ulnav')
     
    let li1=document.createElement('li');
    li1.textContent='Home';
    
    let li2=document.createElement('li');
    li2.textContent='Menu';

    let li3=document.createElement('li');
    li3.textContent='About';

    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);
    navbar.appendChild(ul);
    container.appendChild(navbar);

    li1.addEventListener('click',function(){
        container.innerHTML='';
        menuNav();
        homePage();
        footerPage();
    });
    
    li2.addEventListener('click',function(){
        container.innerHTML='';
        menuNav();
        menuPage();
        footerPage();
    });

}

