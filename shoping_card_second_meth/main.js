import arr  from '../modules/db.js';
import { wrap, btn_show, btn_all, item_num, basket } from '../modules/vars.js';
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
          smb_dol.src = '../img/dol.svg ';
          smb_star.src = '../img/star.svg';
          smb_num.src = '../img/box.svg';
          button.innerHTML = 'В избранное';


          //append
          div.append(img, box_content_text)
          box_content_text.append(title, desc, box_icons, button)
          box_icons.append(smb_dol, icons_price, smb_star, icons_star, smb_num, icons_num)
          wrap.append(div)


          button.onclick = () => {
               button.classList.toggle('active')

               if (button.classList.contains('active')) {
                    button.innerHTML = 'Добавлено';
                    card.push(item)
                    icons_num.innerHTML = item.rating.count - 1;

               } else {
                    button.innerHTML = 'В избранное';
                    card.map((value) => { if (value.id == item.id) { card.pop(item) } })
                    icons_num.innerHTML = item.rating.count;
               }
               item_num.innerHTML = card.length;
               reloadBasket(card, basket, icons_num)
               console.log(card);
          }

     }
}

function reloadBasket (arr, place, icons_num) {
     place.innerHTML = '';

     for (const item of arr) {
          //Vars
          let basket_box = document.createElement('div'),
               box_left = document.createElement('div'),
               box_midle = document.createElement('div'),
               box_right = document.createElement('div'),
               box_left_img = document.createElement('img'),
               box_midle_title = document.createElement('h3'),
               category = document.createElement('p'),
               small = document.createElement('small'),
               box_midle_dec = document.createElement('p'),
               box_midle_icons = document.createElement('div'),
               smb_dol = document.createElement('img'),
               smb_star = document.createElement('img'),
               smb_num = document.createElement('img'),
               product_price = document.createElement('p'),
               product_star = document.createElement('p'),
               product_num = document.createElement('p'),
               box_count = document.createElement('div'),
               price = document.createElement('span'),
               count_item = document.createElement('span'),
               dec = document.createElement('button'),
               inc = document.createElement('button'),
               remove = document.createElement('button'),
               total = item.price,
               oldPrc = item.price;
          
               //Ading Classes
               basket_box.classList.add('basket_box');
               box_left.classList.add('box_left');
               box_midle.classList.add('box_midle');
               box_right.classList.add('box_right');
               category.classList.add('category');
               box_midle_title.classList.add('box_midle_title');
               box_midle_dec.classList.add('box_midle_dec');
               box_midle_icons.classList.add('box_midle_icons');
               smb_dol.classList.add('smb_dol');
               smb_star.classList.add('smb_star');
               smb_num.classList.add('smb_num');
               product_price.classList.add('product_price');
               product_star.classList.add('product_star');
               product_num.classList.add('product_num');
               price.classList.add('price');
               box_count.classList.add('box_count');
               count_item.classList.add('count_item');
               dec.classList.add('dec');
               inc.classList.add('inc');
               remove.classList.add('remove');



          // Set  Value 
          box_left_img.alt = 'Products Image';
          box_left_img.src = item.image;
          box_midle_title.innerHTML = item.title;
          box_midle_dec.innerHTML = item.description;
          product_price.innerHTML = item.price;
          product_star.innerHTML = item.rating.rate;
          let new_count = product_num.innerHTML = item.rating.count -1;
          price.innerHTML = `$${oldPrc}`;
          small.innerHTML = item.category     
          category.innerHTML = 'Category: ';
          smb_dol.src = '../img/dol.svg ';
          smb_star.src = '../img/star.svg';
          smb_num.src = '../img/box.svg';
          dec.innerHTML = '-';
          inc.innerHTML = '+';
          remove.innerHTML = 'Remove';
          let count = count_item.innerHTML = 1;
        
          //Append
          box_count.append(dec, count_item, inc)
          box_midle_icons.append(smb_dol, product_price, smb_star, product_star, smb_num, product_num)
          box_right.append(price, box_count, remove)
          box_midle.append(category, box_midle_title, box_midle_dec, box_midle_icons)
          box_left.append(box_left_img)
          basket_box.append(box_left, box_midle, box_right)
          basket_box.cloneNode(true);
          place.append(basket_box);
          
          // Increment of Products
          inc.onclick = () => {
               count++;
               new_count--;
               total += oldPrc;
               price.innerHTML = `$ ${total.toFixed(2)}`;
               product_num.innerHTML = new_count;
               icons_num.innerHTML = new_count;
               count_item.innerHTML = count;
               if (new_count == 0) {
                    inc.disabled = true;
                    inc.classList.add('hide');
               } else {
                    inc.disabled = false;
                   
               }
          }
          dec.onclick = () => {
               count--;
               new_count++;
               total -= item.price
               price.innerHTML = `$ ${total.toFixed(2)}`;
               product_num.innerHTML = new_count;
               count_item.innerHTML = count;
               console.log(count);
               if (count == 0) {
                    dec.disabled = true;
                    dec.classList.add('hide');
                    var g = document.querySelector('#basket');
                    removeArr(g)
               } else {
                    dec.disabled = false;

               }
          }
          remove.onclick = () => {
               var g = document.querySelector('#basket');
               removeArr(g)
          }

     }

     function removeArr (indexItem) {
          let leng = indexItem.children.length;
          for (var i = 0; i < leng; i++) {
               (function (index) {
                    indexItem.children[i].onclick = function () {
                         card.splice(index, 1);
                         console.log(card);
                         reloadBasket(card, basket)
                    }
               })(i);
          }
     }
     

     // if (card.length == 0) {
     //      clone.remove(arguments)
     //      basket_box.innerHTML = '';
     // } else {
     //      basket_box.append(clone);
     // }

     // btn_remove.onclick = () => {
     //      clone.remove()
     //      card.forEach((value) => card.pop(value))
     //      console.log(card);
     //      button.innerHTML = 'В избранное';
     //      button.classList.remove('active')
     //      item_num.innerHTML = card.length;
     // }
     // inc_btn.onclick = () => {
     //      console.log('inc');
     // }
     // dec_btn.onclick = () => {
     //      console.log('dec');
     // }
}
