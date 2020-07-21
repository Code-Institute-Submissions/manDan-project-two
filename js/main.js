console.log("working");

// to show cart

(function(){ 

const cartinfo = document.getElementById('cart-info');
const cart = document.getElementById('cart');

cartinfo.addEventListener("click", function()
{ cart.classList.toggle("show-cart");
});
})()

// add item to cart function

(function(){

    const cartBtn = document.querySelectorAll('.store-item-icon');

    cartBtn.forEach(fuction(btn){
        btn.addEventListener('click',function(event){
           // console.log(event.target);

    if(event.target.parentElement.classList.contains("store-item-icon"))
           {
           let fullpath =
                  event.target.parentElement.previousElementSiblig.src;
        let pos = fullpath.indexOf("img") + 3;

        let partPath = fullPath.slice(pos);

        const item= {};
        item.img = `img-csrt${partPath}`;

        let name = event.target.parentElement.parentElement.nextElementSiblig.children[0].children[0].textContent;
        item.name=name;
        let price= event.target.parentElement.parentElement.nextElementSiblig.children[0].children[1].textContent;

        let finalPrice = price.slice(1).trim();

        item.price=finalPrice;






const cartItem = document.createElement('div');
   
       cartItem.classList(// "classlist"// );

       cartItem.innerHTML = `
       
       <img src="${item.img}" class="img-fluid rounded-circle" id="item-img" alt="">
       <div class="item-text">
       <p id= "cart-item-title" class="font-weight-bold mb-0"> ${item.name}</p>
       <span>$</span>
       <span id="cart-item-price" class="cart-item-price"
       class="mb-0">${item.price}</span>
       </div>
       <a href="#" id='cart-item-remove' class="cart-item-remove">
       <i class="fas fa-trash"></i>
       </a>
    
       `;

       // select cart

       const cart= document.getElementById("cart");
       const total= document.querySelector(".cart-total-container");

       cart.insertBefore(cartItem,total);
       alert("item added to the cart");
       showTotals();

            }
        });
    });

    // show total

    function showTotal (){

        const total = [];
        const items = document.querySelectorAll(".cart-item-price");

        items.forEach(function(item){total.push(item.textContent);
        });

        const totalMoney = total.reduce(function(toatl,item){
            total += item;
            return total;
        },0)

        const finalMoney= totalMoney.toFixed(2);

        document.getElementById('cart-total').textContent= finalMoney;
        document.querySelector('.item-total').textContent= finalMoney;
        document.getElementById('item-count').textContent= total.length;
    }

})();