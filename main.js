let arr = [
     {
          img: 'img/81fPKd-2AYL 1.svg',
          title: 'MEN’S CLOTHING (120)',
          desc: 'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
          icons_num: '120',
          icons_price: '109',
          icons_star: '3,9',
     },
     {
          img: 'img/81fPKd-2AYL 1.svg',
          title: 'MEN’S CLOTHING (120)',
          desc: 'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
          icons_num: '120',
          icons_price: '109',
          icons_star: '3,9',
     },
     {
          img: 'img/81fPKd-2AYL 1.svg',
          title: 'MEN’S CLOTHING (120)',
          desc: 'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
          icons_num: '120',
          icons_price: '109',
          icons_star: '3,9',
     },
     {
          img: 'img/81fPKd-2AYL 1.svg',
          title: 'MEN’S CLOTHING (120)',
          desc: 'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
          icons_num: '120',
          icons_price: '109',
          icons_star: '3,9',
     },
     {
          img: 'img/81fPKd-2AYL 1.svg',
          title: 'MEN’S CLOTHING (120)',
          desc: 'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
          icons_num: '120',
          icons_price: '109',
          icons_star: '3,9',
     },
     {
          img: 'img/81fPKd-2AYL 1.svg',
          title: 'MEN’S CLOTHING (120)',
          desc: 'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
          icons_num: '120',
          icons_price: '109',
          icons_star: '3,9',
     }
]

let wrap = document.querySelector('.box_wrapper')
let btn_show = document.querySelector('button[data-show]')
let btn_all = document.querySelector('button[data-show-all]')
// Function for Item of Product
function boxItem (item) {
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
     let smb_dol = document.createElement('span');
     let smb_star = document.createElement('span');
     let smb_num = document.createElement('span');

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
     img.src = 'img/81fPKd-2AYL 1.svg';
     img.alt = 'Image';
     title.innerHTML = 'MEN’S CLOTHING (120)';
     desc.innerHTML = 'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday';
     icons_num.innerHTML = '120';
     icons_price.innerHTML = '109';
     icons_star.innerHTML = '3,9';
     smb_dol.innerHTML = '$';
     smb_star.innerHTML = '#';
     smb_num.innerHTML = '#';
     button.innerHTML = 'В избранное';


     //append
     div.append(img, box_content_text)
     box_content_text.append(title, desc, box_icons, button)
     box_icons.append(icons_price, icons_star, icons_num)
     icons_price.append(smb_dol)
     icons_star.append(smb_star)
     icons_num.append(smb_num)
     wrap.append(div)
}
for (let item of arr) {
     boxItem(item)
}
btn_all.onclick = () => {
     for (let item of arr) {
          console.log(item)
          boxItem(item)
     }
}
btn_show.onclick = () => {
     for (let item of arr.slice(0, 5)) {
          console.log(item)
          boxItem(item)
     }
}

/////////////////// Function for Basket ///////////////////////
let basket = document.querySelector('.basket');
let basket_btn = document.querySelector('.basket_btn')
//Function
function basketItem () {
     //vars
     let basket_main = document.createElement('div')
     let basket_box = document.createElement('div')
     let close_btn = document.createElement('button')

     //class
     basket_main.classList.add('basket_main');
     basket_box.classList.add('basket_box');
     close_btn.classList.add('close')

     //inerHtml
     close_btn.innerHTML = 'Close'

     //apend 
     basket_main.append(basket_box, close_btn)
     basket.append(basket_main)
}
// Calling function
basketItem()


// Vars for Basket
let basket_main = document.querySelector('.basket_main')
let close_basket = document.querySelector('.close')
let basket_box = document.querySelector('.basket_box')
basket_btn.onclick = () => {
     basket_main.style.display = 'block'
}

close_basket.onclick = () => {
     basket_main.style.display = 'none'   
}


//////////////////////
// Adding item in the basket
let btns = document.querySelectorAll('.btn');
let products = document.querySelectorAll('.box_content')
btns.forEach(function (item, i) {
     item.onclick = () => {

          let cloneItem = products[i].cloneNode(true);
          let btn = cloneItem.querySelector('button')
          btn.remove()
          basket_box.append(cloneItem)

          item.classList.toggle('active')
          if (item.classList.contains('active')) {
               item.innerHTML = 'Добавлено';
          } else {
               item.innerHTML = 'В избранное';
          }
     }
})
