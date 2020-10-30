import {menuNav} from './navbar.js'
import {homePage} from './home.js'
import {footerPage} from './footer.js'
document.body.style.margin='0';
document.body.style.padding='0';
document.body.style.boxSizing='border-box'
let container=document.getElementById('content');

container.style.maxWidth="1600px";
container.style.width="100%";
container.style.height="100%";
container.style.background='#007a43';

menuNav();

homePage();

footerPage();







  

