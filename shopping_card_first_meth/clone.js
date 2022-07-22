import arr  from '../modules/db.js';
import { wrap, btn_show, btn_all, item_num, basket_box } from '../modules/vars.js';
let card = [];

//Btn fro show all
btn_all.onclick = () => {
     reload(arr)
     console.log('all')
}
// Btn for show 5 el
btn_show.onclick = () => {
     let data = arr.slice(0, 5)
     reload(data)
     console.log('5', data)
}


// Function for Item of Product
reload(arr)
function reload (el) {

     wrap.innerHTML = "";

     for (let item of el) {
          let div = document.createElement('div');
          let img = document.createElement('img');
          let box_content_text = document.createElement('div');
          let title = document.createElement('h4');
          let desc = document.createElement('p');
          let box_icons = document.createElement('div');
          let icons_num = document.createElement('p');
          let icons_price = document.createElement('p');
          let icons_star = document.createElement('p');
          let button = document.createElement('button');
          let smb_dol = document.createElement('img');
          let smb_star = document.createElement('img');
          let smb_num = document.createElement('img');
          let id;
          let category;


          //class
          div.classList.add('box_content');
          box_content_text.classList.add('box_content_text')
          title.classList.add('title');
          desc.classList.add('desc');
          box_icons.classList.add('box_icons')
          icons_num.classList.add('icons_num')
          icons_price.classList.add('icons_price')
          icons_star.classList.add('icons_star')
          smb_dol.classList.add('smb_dol')
          smb_star.classList.add('smb_star')
          smb_num.classList.add('smb_num')
          button.classList.add('btn')

          //innerHtml
          id = item.id
          category = item.category
          img.src = item.image;
          img.alt = 'Image';
          title.innerHTML = item.title;
          desc.innerHTML = item.description;
          icons_num.innerHTML = item.rating.count;
          icons_price.innerHTML = item.price;
          icons_star.innerHTML = item.rating.rate;
          smb_dol.src = 'img/dol.svg';
          smb_star.src = 'img/star.svg';
          smb_num.src = 'img/box.svg';
          button.innerHTML = 'В избранное';


          //append
          div.append(img, box_content_text)
          box_content_text.append(title, desc, box_icons, button)
          box_icons.append(smb_dol, icons_price, smb_star, icons_star, smb_num, icons_num)
          wrap.append(div)


          button.onclick = () => {
               button.classList.toggle('active')
               console.log(card)

               if (button.classList.contains('active')) {
                    button.innerHTML = 'Добавлено';
                    item.count = 1
                    card.push(item)
                    icons_num.innerHTML = item.rating.count - 1;
               } else {
                    button.innerHTML = 'В избранное';
                    card.map((value) => { if (value.id == item.id) { card.pop(item) } })
                    icons_num.innerHTML = item.rating.count;
               }
               item_num.innerHTML = card.length;
               reloadBasket(card, basket_box)

          }

     }
}

function reloadBasket (arr, place) {
     place.innerHTML = "";

     for (const item of arr) {
          place.innerHTML += `
               <div class="box_content"><img src="${item.image}" alt="Image">
                    <div class="box_content_text" id="${item.id}">
                         <h4 class="title">${item.title}</h4>
                         <p class="desc">${item.description}</p>
                         <div class="box_icons"><img class="smb_dol" src="img/dol.svg">
                              <p class="icons_price">${item.price}</p><img class="smb_star" src="img/star.svg">
                              <p class="icons_star">${item.rating.rate}</p><img class="smb_num" src="img/box.svg">
                              <p class="icons_num">${item.rating.count}</p>
                         </div>
                         <div class="box_items_num" id="${item.id}">
                              <button data-count="dec" class="dec">-</button>
                              <span class="num_items">${item.count}</span>
                              <button data-count="inc" class="inc">+</button>
                         </div>
                         <button class="del">Remove</button>
                    </div>
               </div>
          `
     }

     let countBtns = document.querySelectorAll('button[data-count]')

     countBtns.forEach(el => {
          el.onclick = () => {
               let key = el.getAttribute('data-count')
               let id = el.parentNode.id
               console.log(key)
               if (key == 'dec') {
                    decrement(id)
               } else {
                    increment(id)
               }

          }
     })

     // Delete element
     let removes = document.querySelectorAll('.del')
     removes.forEach(item => {
          item.onclick = () => {
               let id = item.parentNode.id
               deleteItem(id)
          }
     })
     

     

}
// Function for Deleting
let deleteItem = (id) => {
     card = card.filter(item => item.id !== +id)

     reloadBasket(card, basket_box)
     reload(arr)
}
function increment (id) {
     let finded = card.find(item => item.id === +id)
     finded.count++

     reloadBasket(card, basket_box)
}
function decrement (id) {
     let finded = card.find(item => item.id === +id)
     finded.count--

     if (finded.count === 0) {
          deleteItem(id)
     }

     reloadBasket(card, basket_box)
}


// To show baskets
let basket_show = document.querySelector('.basket_btn')
let basket_hide = document.querySelector('.close')
let basket_main = document.querySelector('.basket_main');

basket_show.onclick = () => {
     basket_main.style.display = 'block'
}
basket_hide.onclick = () => {
     basket_main.style.display = 'none'
}

