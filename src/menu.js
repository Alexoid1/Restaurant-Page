const menuPage = () => {
  const container = document.getElementById('content');
  const menu1 = document.createElement('div');
  const combo1 = document.createElement('div');
  const combo2 = document.createElement('div');
  const combo3 = document.createElement('div');
  const combo4 = document.createElement('div');
  const combo5 = document.createElement('div');
  const combo6 = document.createElement('div');
  const combo7 = document.createElement('div');
  const combo8 = document.createElement('div');
  const concombo1 = document.createElement('div');
  const concombo2 = document.createElement('div');
  const concombo3 = document.createElement('div');
  const concombo4 = document.createElement('div');
  const concombo5 = document.createElement('div');
  const concombo6 = document.createElement('div');
  const concombo7 = document.createElement('div');
  const concombo8 = document.createElement('div');
  const comImg1 = document.createElement('img');
  const comImg2 = document.createElement('img');
  const comImg3 = document.createElement('img');
  const comImg4 = document.createElement('img');
  const comImg5 = document.createElement('img');
  const comImg6 = document.createElement('img');
  const comImg7 = document.createElement('img');
  const comImg8 = document.createElement('img');
  const comboH1 = document.createElement('h3');
  const comboUl1 = document.createElement('ul');
  const combol1 = document.createElement('li');
  const combol11 = document.createElement('li');
  const combol12 = document.createElement('li');
  const comboC1 = document.createElement('p');
  const comboH2 = document.createElement('h3');
  const comboUl2 = document.createElement('ul');
  const combol2 = document.createElement('li');
  const combol21 = document.createElement('li');
  const combol22 = document.createElement('li');
  const comboC2 = document.createElement('p');
  const comboH3 = document.createElement('h3');
  const comboUl3 = document.createElement('ul');
  const combol3 = document.createElement('li');
  const combol32 = document.createElement('li');
  const comboC3 = document.createElement('p');
  const comboH4 = document.createElement('h3');
  const comboUl4 = document.createElement('ul');
  const combol4 = document.createElement('li');
  const combol41 = document.createElement('li');
  const combol42 = document.createElement('li');
  const comboC4 = document.createElement('p');
  const comboH5 = document.createElement('h3');
  const comboUl5 = document.createElement('ul');
  const combol5 = document.createElement('li');
  const combol51 = document.createElement('li');
  const combol52 = document.createElement('li');
  const comboC5 = document.createElement('p');
  const comboH6 = document.createElement('h3');
  const comboUl6 = document.createElement('ul');
  const combol6 = document.createElement('li');
  const combol61 = document.createElement('li');
  const combol62 = document.createElement('li');
  const comboC6 = document.createElement('p');
  const comboH7 = document.createElement('h3');
  const comboUl7 = document.createElement('ul');
  const combol7 = document.createElement('li');
  const combol71 = document.createElement('li');
  const combol72 = document.createElement('li');
  const comboC7 = document.createElement('p');
  const comboH8 = document.createElement('h3');
  const comboUl8 = document.createElement('ul');
  const combol8 = document.createElement('li');
  const combol81 = document.createElement('li');
  const combol82 = document.createElement('li');
  const comboC8 = document.createElement('p');

  menu1.classList.add('menu1');

  container.appendChild(menu1);

  combo1.classList.add('combo1');
  concombo1.classList.add('concombo1');
  comImg1.classList.add('comImg');
  comImg1.src = '../image/combo1.png';
  combo1.appendChild(concombo1);
  concombo1.appendChild(comImg1);

  comboH1.textContent = 'Combo Master';
  comboH1.classList.add('comboH1');
  combol1.textContent = 'Medium Pizza, Dacotta Chesse, Mushrooms, Salami';
  combol11.textContent = 'Poland Salad, Potatoes, Mayonnaise, Apple, Chard';
  combol12.textContent = '2 Drinks';
  comboC1.textContent = '14.99$';
  comboC1.classList.add('comboC1');

  combo1.appendChild(comboH1);
  combo1.appendChild(comboUl1);
  comboUl1.appendChild(combol1);
  comboUl1.appendChild(combol11);
  comboUl1.appendChild(combol12);
  combo1.appendChild(comboC1);

  combo2.classList.add('combo1');
  concombo2.classList.add('concombo1');
  comImg2.classList.add('comImg');
  comImg2.src = '../image/combo2.png';

  combo2.appendChild(concombo2);
  concombo2.appendChild(comImg2);

  comboH2.textContent = 'Awesome Combo';
  comboH2.classList.add('comboH1');
  combol2.textContent = 'Family Pizza, Ham, Meat, Salami, Parmesan cheese';
  combol21.textContent = 'Family Pizza, pineapple, Dacotta Chesse, Mushrooms, Salami';
  combol22.textContent = '2L Drinks';
  comboC2.textContent = '19.99$';
  comboC2.classList.add('comboC1');

  combo2.appendChild(comboH2);
  combo2.appendChild(comboUl2);
  comboUl2.appendChild(combol2);
  comboUl2.appendChild(combol21);
  comboUl2.appendChild(combol22);
  combo2.appendChild(comboC2);

  combo3.classList.add('combo1');

  concombo3.classList.add('concombo1');
  comImg3.classList.add('comImg');
  comImg3.src = '../image/combo3.png';

  combo3.appendChild(concombo3);
  concombo3.appendChild(comImg3);

  comboH3.textContent = 'Personal Combo';
  comboH3.classList.add('comboH1');
  combol3.textContent = 'Pizza, Ham, Meat, Salami, Parmesan cheese, cumin';
  combol32.textContent = 'Drink';
  comboC3.textContent = '9.99$';
  comboC3.classList.add('comboC1');

  combo3.appendChild(comboH3);
  combo3.appendChild(comboUl3);
  comboUl3.appendChild(combol3);
  comboUl3.appendChild(combol32);
  combo3.appendChild(comboC3);

  combo4.classList.add('combo1');

  concombo4.classList.add('concombo1');
  comImg4.classList.add('comImg');
  comImg4.src = '../image/combo4.png';

  combo4.appendChild(concombo4);
  concombo4.appendChild(comImg4);

  comboH4.textContent = 'Super Combo';
  comboH4.classList.add('comboH1');
  combol4.textContent = 'Medium Pizza, Ham, Meat, Salami, Parmesan cheese';
  combol41.textContent = 'Medium Pizza, pineapple, Dacotta Chesse, Mushrooms, Salami';
  combol42.textContent = '2 Drinks';
  comboC4.textContent = '17.99$';
  comboC4.classList.add('comboC1');

  combo4.appendChild(comboH4);
  combo4.appendChild(comboUl4);
  comboUl4.appendChild(combol4);
  comboUl4.appendChild(combol41);
  comboUl4.appendChild(combol42);
  combo4.appendChild(comboC4);

  combo5.classList.add('combo1');
  concombo5.classList.add('concombo1');

  comImg5.classList.add('comImg');
  comImg5.src = '../image/combo4.png';
  combo5.appendChild(concombo5);
  concombo5.appendChild(comImg5);

  comboH5.textContent = 'Super Combo';
  comboH5.classList.add('comboH1');
  combol5.textContent = 'Medium Pizza, Ham, Meat, Salami, Parmesan cheese';
  combol51.textContent = 'Medium Pizza, pineapple, Dacotta Chesse, Mushrooms, Salami';
  combol52.textContent = '2 Drinks';
  comboC5.textContent = '17.99$';
  comboC5.classList.add('comboC1');

  combo5.appendChild(comboH5);
  combo5.appendChild(comboUl5);
  comboUl5.appendChild(combol5);
  comboUl5.appendChild(combol51);
  comboUl5.appendChild(combol52);
  combo5.appendChild(comboC5);

  combo6.classList.add('combo1');
  concombo6.classList.add('concombo1');
  comImg6.classList.add('comImg');
  comImg6.src = '../image/combo3.png';

  combo6.appendChild(concombo6);
  concombo6.appendChild(comImg6);

  comboH6.textContent = 'Personal Combo';
  comboH6.classList.add('comboH1');
  combol6.textContent = 'Pizza, Ham, Meat, Salami, Parmesan cheese, cumin';
  combol62.textContent = 'Drink';
  comboC6.textContent = '9.99$';
  comboC6.classList.add('comboC1');

  combo6.appendChild(comboH6);
  combo6.appendChild(comboUl6);
  comboUl6.appendChild(combol6);
  comboUl6.appendChild(combol61);
  comboUl6.appendChild(combol62);
  combo6.appendChild(comboC6);

  combo7.classList.add('combo1');
  concombo7.classList.add('concombo1');
  comImg7.classList.add('comImg');
  comImg7.src = '../image/combo2.png';

  combo7.appendChild(concombo7);
  concombo7.appendChild(comImg7);

  comboH7.textContent = 'Awesome Combo';
  comboH7.classList.add('comboH1');
  combol7.textContent = 'Family Pizza, Ham, Meat, Salami, Parmesan cheese';
  combol71.textContent = 'Family Pizza, pineapple, Dacotta Chesse, Mushrooms, Salami';
  combol72.textContent = '2L Drinks';
  comboC7.textContent = '19.99$';
  comboC7.classList.add('comboC1');

  combo7.appendChild(comboH7);
  combo7.appendChild(comboUl7);
  comboUl7.appendChild(combol7);
  comboUl7.appendChild(combol71);
  comboUl7.appendChild(combol72);
  combo7.appendChild(comboC7);

  combo8.classList.add('combo1');
  concombo8.classList.add('concombo1');
  comImg8.classList.add('comImg');
  comImg8.src = '../image/combo1.png';

  combo8.appendChild(concombo8);
  concombo8.appendChild(comImg8);

  comboH8.textContent = 'Combo Master';
  comboH8.classList.add('comboH1');
  combol8.textContent = 'Medium Pizza, Dacotta Chesse, Mushrooms, Salami';
  combol81.textContent = 'Poland Salad, Potatoes, Mayonnaise, Apple, Chard';
  combol82.textContent = '2 Drinks';
  comboC8.textContent = '14.99$';
  comboC8.classList.add('comboC1');

  combo8.appendChild(comboH8);
  combo8.appendChild(comboUl8);
  comboUl8.appendChild(combol8);
  comboUl8.appendChild(combol81);
  comboUl8.appendChild(combol82);
  combo8.appendChild(comboC8);

  menu1.appendChild(combo1);
  menu1.appendChild(combo2);
  menu1.appendChild(combo3);
  menu1.appendChild(combo4);
  menu1.appendChild(combo5);
  menu1.appendChild(combo6);
  menu1.appendChild(combo7);
  menu1.appendChild(combo8);
};

export default menuPage;
