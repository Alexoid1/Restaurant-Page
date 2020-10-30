
export function homePage(){

    // function overInOut(img){
    //     img.addEventListener('mouseover',imageHover);
    //     img.addEventListener('mouseout',imageHoverEnd);
    // }
    let container=document.getElementById('content');
    let home=document.createElement('div');
    
    home.style.height='580px';
    home.style.backgroundImage='url(../image/pizza.jpeg)';
    home.style.backgroundSize='cover';
    home.style.display='flex';
    home.style.alignItems='center';
    home.style.justifyContent='center';

    container.appendChild(home)
    let parr=document.createElement('p');
    parr.style.fontFamily='Lobster, Arial';
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
    let img1=document.createElement('img');
    let img2=document.createElement('img');
    let img3=document.createElement('img');
    let img4=document.createElement('img');

    branch.style.width='100%';
    branch.style.height='230px';
    branch.style.display='grid';
    branch.style.gridTemplateColumns='1fr 1fr 1fr 1fr'
    
   
    logo1.appendChild(img1);
    logo1.style.overflow='hidden';
    img1.style.width='100%';
    img1.src='../image/tt.jpg';
    img1.addEventListener('mouseover',imageHover);
    img1.addEventListener('mouseout',imageHoverEnd);
    function imageHover(e){
        e.target.style.transform='scale(1.25)';
    }
    function imageHoverEnd(e){
        e.target.style.transform='scale(1)';
    }

    logo2.appendChild(img2);
    logo2.style.overflow='hidden';
    img2.style.height='100%';
    img2.src='../image/chesse.jpg';
    img2.addEventListener('mouseover',imageHover);
    img2.addEventListener('mouseout',imageHoverEnd);

    logo3.appendChild(img3);
    logo3.style.overflow='hidden';
    img3.style.width='100%';
    img3.src='../image/org.jpg';
    img3.addEventListener('mouseover',imageHover);
    img3.addEventListener('mouseout',imageHoverEnd);
    
    logo4.appendChild(img4);
    logo4.style.overflow='hidden';
    img4.style.height='100%';
    img4.src='../image/chef.jpg';
    img4.addEventListener('mouseover',imageHover);
    img4.addEventListener('mouseout',imageHoverEnd);
    

    branch.appendChild(logo1);
    branch.appendChild(logo2);
    branch.appendChild(logo3);
    branch.appendChild(logo4);
    container.appendChild(branch);
    
}