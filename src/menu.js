export function menuPage(){
    let container=document.getElementById('content');
    let menu1=document.createElement('div');
    let combo1=document.createElement('div');
    let combo2=document.createElement('div');
    let combo3=document.createElement('div');
    let combo4=document.createElement('div');
    let concombo1=document.createElement('div');
    let concombo2=document.createElement('div');
    let concombo3=document.createElement('div');
    let concombo4=document.createElement('div');
    let comImg1=document.createElement('img');
    let comImg2=document.createElement('img');
    let comImg3=document.createElement('img');
    let comImg4=document.createElement('img');
    let comboH1=document.createElement('h3');
    let comboUl1=document.createElement('ul')
    let combol1=document.createElement('li');
    let combol1_1=document.createElement('li');
    let combol1_2=document.createElement('li');
    let comboC1=document.createElement('p');
    let comboH2=document.createElement('h3');
    let comboUl2=document.createElement('ul')
    let combol2=document.createElement('li');
    let combol2_1=document.createElement('li');
    let combol2_2=document.createElement('li');
    let comboC2=document.createElement('p');
    let comboH3=document.createElement('h3');
    let comboUl3=document.createElement('ul')
    let combol3=document.createElement('li');
    let combol3_1=document.createElement('li');
    let combol3_2=document.createElement('li');
    let comboC3=document.createElement('p');
    let comboH4=document.createElement('h3');
    let comboUl4=document.createElement('ul')
    let combol4=document.createElement('li');
    let combol4_1=document.createElement('li');
    let combol4_2=document.createElement('li');
    let comboC4=document.createElement('p');

    
    menu1.classList.add('menu1')

    container.appendChild(menu1);

    combo1.classList.add('combo1');
    concombo1.classList.add('concombo1');
    comImg1.classList.add('comImg');
    comImg1.src='../image/combo1.png';
    combo1.appendChild(concombo1);
    concombo1.appendChild(comImg1);
    
    comboH1.textContent='Combo Master';
    comboH1.classList.add('comboH1');
    combol1.textContent='Medium Pizza, Dacotta Chesse, Mushrooms, Salami';
    combol1_1.textContent='Poland Salad, Potatoes, Mayonnaise, Apple, Chard';
    combol1_2.textContent='2 Drinks';
    comboC1.textContent='14.99$';
    comboC1.classList.add('comboC1');
    

    combo1.appendChild(comboH1);
    combo1.appendChild(comboUl1);
    comboUl1.appendChild(combol1);
    comboUl1.appendChild(combol1_1);
    comboUl1.appendChild(combol1_2);
    combo1.appendChild(comboC1);

    combo2.classList.add('combo1');
    concombo2.classList.add('concombo1');
    comImg2.classList.add('comImg');
    comImg2.src='../image/combo2.png';

    combo2.appendChild(concombo2);
    concombo2.appendChild(comImg2);

    comboH2.textContent="Awesome Combo";
    comboH2.classList.add('comboH1');
    combol2.textContent='Family Pizza, Ham, Meat, Salami, Parmesan cheese';
    combol2_1.textContent='Family Pizza, pineapple, Dacotta Chesse, Mushrooms, Salami';
    combol2_2.textContent='2L Drinks';
    comboC2.textContent='19.99$';
    comboC2.classList.add('comboC1');
    

    combo2.appendChild(comboH2);
    combo2.appendChild(comboUl2);
    comboUl2.appendChild(combol2);
    comboUl2.appendChild(combol2_1);
    comboUl2.appendChild(combol2_2);
    combo2.appendChild(comboC2);

    combo3.classList.add('combo1');

    concombo3.classList.add('concombo1');
    comImg3.classList.add('comImg');
    comImg3.src='../image/combo3.png';

    combo3.appendChild(concombo3);
    concombo3.appendChild(comImg3);

    comboH3.textContent="Personal Combo";
    comboH3.classList.add('comboH1');
    combol3.textContent='Pizza, Ham, Meat, Salami, Parmesan cheese, cumin';
    combol3_2.textContent='Drink';
    comboC3.textContent='9.99$';
    comboC3.classList.add('comboC1');
    

    combo3.appendChild(comboH3);
    combo3.appendChild(comboUl3);
    comboUl3.appendChild(combol3);
    comboUl3.appendChild(combol3_2);
    combo3.appendChild(comboC3);

    combo4.classList.add('combo1');

    concombo4.classList.add('concombo1');
    comImg4.classList.add('comImg');
    comImg4.src='../image/combo4.png';

    combo4.appendChild(concombo4);
    concombo4.appendChild(comImg4);

    comboH4.textContent="Super Combo";
    comboH4.classList.add('comboH1');
    combol4.textContent='Medium Pizza, Ham, Meat, Salami, Parmesan cheese';
    combol4_1.textContent='Medium Pizza, pineapple, Dacotta Chesse, Mushrooms, Salami';
    combol4_2.textContent='2 Drinks';
    comboC4.textContent='17.99$';
    comboC4.classList.add('comboC1');
   

    combo4.appendChild(comboH4);
    combo4.appendChild(comboUl4);
    comboUl4.appendChild(combol4);
    comboUl4.appendChild(combol4_1);
    comboUl4.appendChild(combol4_2);
    combo4.appendChild(comboC4);

    menu1.appendChild(combo1);
    menu1.appendChild(combo2);
    menu1.appendChild(combo3);
    menu1.appendChild(combo4);
    
}