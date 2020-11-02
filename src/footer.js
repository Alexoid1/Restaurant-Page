export function footerPage(){
    let container=document.getElementById('content');
    let footer=document.createElement('footer');
    let fpar=document.createElement('p');
    let fcontact=document.createElement('a');
    let flinked=document.createElement('a');
    
    fpar.textContent='Made by Alexoid.';
    fcontact.textContent='GitHub';
    fcontact.href='https://github.com/Alexoid1';
    flinked.textContent='LinkedIn';
    flinked.href='https://www.linkedin.com/in/pablo-alexis-zambrano-coral-7a614a189/';

    

    footer.appendChild(fpar);
    footer.appendChild(flinked);
    footer.appendChild(fcontact);
    container.appendChild(footer);
    
}