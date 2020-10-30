export function footerPage(){
    let container=document.getElementById('content');
    let footer=document.createElement('footer');
    let fpar=document.createElement('p');
    let fcontact=document.createElement('a');
    let flinked=document.createElement('a');
    
    footer.style.width='100%';
    footer.style.height='100px';
    fpar.textContent='Made by Alexoid.';
    fpar.style.fontSize='15px';
    fpar.style.fontFamily='Arial';
    fpar.style.fontWeight='bold';
    fpar.style.color='white';
    fcontact.textContent='GitHub';
    fcontact.style.textDecoration='none';
    fcontact.href='https://github.com/Alexoid1';
    flinked.textContent='LinkedIn';
    flinked.style.marginRight='10px'
    flinked.style.textDecoration='none';
    flinked.href='https://www.linkedin.com/in/pablo-alexis-zambrano-coral-7a614a189/';

    footer.style.textAlign='center';
    

    footer.appendChild(fpar);
    footer.appendChild(flinked);
    footer.appendChild(fcontact);
    container.appendChild(footer);
    
}