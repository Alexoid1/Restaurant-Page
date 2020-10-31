
export function homePage(){
    
    let container=document.getElementById('content');

    let home=document.createElement('div');
    home.classList.add('home');
    container.appendChild(home)

    let parr=document.createElement('p');
    parr.classList.add('parr')
    
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

    branch.classList.add('branch')
    
    logo1.appendChild(img1);
    img1.classList.add('img1');
    img1.src='../image/tt.jpg';

    logo2.appendChild(img2);
    img2.classList.add('img1');
    img2.src='../image/chesse.jpg';
    
    logo3.appendChild(img3);
    img3.classList.add('img1');
    img3.src='../image/org.jpg';
    
    logo4.appendChild(img4);
    img4.classList.add('img1');
    img4.src='../image/chef.jpg';

    branch.appendChild(logo1);
    branch.appendChild(logo2);
    branch.appendChild(logo3);
    branch.appendChild(logo4);
    container.appendChild(branch);
    
}