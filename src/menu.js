export function menuPage(){
    let container=document.getElementById('content');
    let menu1=document.createElement('div');
        
    menu1.style.height='580px';
    menu1.style.background='red';

    menu1.style.display='flex';
    menu1.style.alignItems='center';
    menu1.style.justifyContent='center';

    container.appendChild(menu1);
    
}