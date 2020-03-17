'use strict';
const element = document.querySelector('#element');
const firstDogImage = 'https://images.dog.ceo/breeds/chihuahua/n02085620_1205.jpg';
const firstDogName = 'Dina';

const secondDogImage = 'https://images.dog.ceo/breeds/malamute/n02110063_642.jpg';
const secondDogName = 'Luna';

const thirdDogImage = 'https://images.dog.ceo/breeds/chihuahua/n02085620_3409.jpg';
const thirdDogName = 'Lana';

element.innerHTML=`
<ul> <li> <img  width="60px" src=${firstDogImage}> <p>${firstDogName}</p> </li>
            <li><img  width="60px" src=${secondDogImage}> <p>${secondDogName}</p> </li>
            <li><img width="60px" src=${thirdDogImage} alt=""> <p>${thirdDogName}</p> </li>
        </ul>`;
        