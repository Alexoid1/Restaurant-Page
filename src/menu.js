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

    
    menu1.style.height='680px';
    menu1.style.padding='90px 40px 0';
    menu1.style.display='grid';
    menu1.style.gridTemplateColumns='1fr 1fr 1fr 1fr';
    menu1.style.gridGap='40px';

    container.appendChild(menu1);

    combo1.style.height='450px';
    combo1.style.color='white';
    combo1.style.fontFamily='Arial';
    concombo1.style.width='100%';
    concombo1.style.height='200px';
    concombo1.style.background='white';
    concombo1.style.borderRadius='15px';
    concombo1.style.overflow='hidden';
    comImg1.style.width='100%';
    comImg1.src='../image/combo1.png';
    combo1.appendChild(concombo1);
    concombo1.appendChild(comImg1);
    
    comboH1.textContent='Combo Master';
    comboH1.style.textAlign='center';
    combol1.textContent='Medium Pizza, Dacotta Chesse, Mushrooms, Salami';
    combol1_1.textContent='Poland Salad, Potatoes, Mayonnaise, Apple, Chard';
    combol1_2.textContent='2 Drinks';
    comboC1.textContent='14.99$';
    comboC1.style.fontWeight='bolder';
    comboC1.style.fontSize='27px';
    comboC1.style.textAlign='center';
    combol1_1.style.marginTop='10px';
    combol1_2.style.marginTop='10px';

    combo1.appendChild(comboH1);
    combo1.appendChild(comboUl1);
    comboUl1.appendChild(combol1);
    comboUl1.appendChild(combol1_1);
    comboUl1.appendChild(combol1_2);
    combo1.appendChild(comboC1);

    combo2.style.height='450px';
    combo2.style.color='white';
    combo2.style.fontFamily='Arial';
    
    concombo2.style.width='100%';
    concombo2.style.height='200px';
    concombo2.style.background='white';
    concombo2.style.borderRadius='15px';
    concombo2.style.overflow='hidden';
    comImg2.style.width='100%';
    comImg2.src='../image/combo2.png';

    combo2.appendChild(concombo2);
    concombo2.appendChild(comImg2);

    comboH2.textContent="Awesome Combo";
    comboH2.style.textAlign='center';
    combol2.textContent='Family Pizza, Ham, Meat, Salami, Parmesan cheese';
    combol2_1.textContent='Family Pizza, pineapple, Dacotta Chesse, Mushrooms, Salami';
    combol2_2.textContent='2L Drinks';
    comboC2.textContent='19.99$';
    comboC2.style.fontWeight='bolder';
    comboC2.style.fontSize='27px';
    comboC2.style.textAlign='center';
    combol2_1.style.marginTop='10px';
    combol2_2.style.marginTop='10px';

    combo2.appendChild(comboH2);
    combo2.appendChild(comboUl2);
    comboUl2.appendChild(combol2);
    comboUl2.appendChild(combol2_1);
    comboUl2.appendChild(combol2_2);
    combo2.appendChild(comboC2);

    combo3.style.height='450px';
    combo3.style.color='white';
    combo3.style.fontFamily='Arial';

    concombo3.style.width='100%';
    concombo3.style.height='200px';
    concombo3.style.background='white';
    concombo3.style.borderRadius='15px';
    concombo3.style.overflow='hidden';
    comImg3.style.width='100%';
    comImg3.src='../image/combo3.png';

    combo3.appendChild(concombo3);
    concombo3.appendChild(comImg3);

    comboH3.textContent="Personal Combo";
    comboH3.style.textAlign='center';
    combol3.textContent='Pizza, Ham, Meat, Salami, Parmesan cheese, cumin';
    combol3_2.textContent='Drink';
    comboC3.textContent='9.99$';
    comboC3.style.fontWeight='bolder';
    comboC3.style.fontSize='27px';
    comboC3.style.textAlign='center';
    combol3_1.style.marginTop='10px';
    combol3_2.style.marginTop='10px';

    combo3.appendChild(comboH3);
    combo3.appendChild(comboUl3);
    comboUl3.appendChild(combol3);
    comboUl3.appendChild(combol3_2);
    combo3.appendChild(comboC3);

    combo4.style.height='450px';
    combo4.style.color='white';
    combo4.style.fontFamily='Arial';

    concombo4.style.width='100%';
    concombo4.style.height='200px';
    concombo4.style.background='white';
    concombo4.style.borderRadius='15px';
    concombo4.style.overflow='hidden';
    comImg4.style.width='100%';
    comImg4.src='../image/combo4.png';

    combo4.appendChild(concombo4);
    concombo4.appendChild(comImg4);

    comboH4.textContent="Super Combo";
    comboH4.style.textAlign='center';
    combol4.textContent='Medium Pizza, Ham, Meat, Salami, Parmesan cheese';
    combol4_1.textContent='Medium Pizza, pineapple, Dacotta Chesse, Mushrooms, Salami';
    combol4_2.textContent='2 Drinks';
    comboC4.textContent='17.99$';
    comboC4.style.fontWeight='bolder';
    comboC4.style.fontSize='27px';
    comboC4.style.textAlign='center';
    combol4_1.style.marginTop='10px';
    combol4_2.style.marginTop='10px';

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