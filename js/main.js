console.log("working");

// to show cart

(function(){ 

const cartinfo = document.getElementById('cart-info');
const cart = document.getElementById('cart');

cartinfo.addEventListener("click", function()
{ cart.classList.toggle("show-cart");
});
})()

// add product to cart function

(function(){

    const cartBtn = document.querySelectorAll('.shop-product-icon');

    cartBtn.forEach(fuction(btn){
        btn.addEventListener('click',function(event){
           // console.log(event.target);

    if(event.target.parentElement.classList.contains("shop-product-icon"))
           {
           let fullpath =
                  event.target.parentElement.previousElementSiblig.src;
        let pos = fullpath.indexOf("img") + 3;

        let partPath = fullPath.slice(pos);

        const product= {};
        product.img = `img-csrt${partPath}`;

        let name = event.target.parentElement.parentElement.nextElementSiblig.children[0].children[0].textContent;
        product.name=name;
        let price= event.target.parentElement.parentElement.nextElementSiblig.children[0].children[1].textContent;

        let finalPrice = price.slice(1).trim();

        product.price=finalPrice;






const cartproduct = document.createElement('div');
   
       cartproduct.classList(// "classlist"// );

       cartproduct.innerHTML = `
       
       <img src="${product.img}" class="img-fluid rounded-circle" id="product-img" alt="">
       <div class="product-text">
       <p id= "cart-product-title" class="font-weight-bold mb-0"> ${product.name}</p>
       <span>$</span>
       <span id="cart-product-price" class="cart-product-price"
       class="mb-0">${product.price}</span>
       </div>
       <a href="#" id='cart-product-remove' class="cart-product-remove">
       <i class="fas fa-trash"></i>
       </a>
    
       `;

       // select cart

       const cart= document.getElementById("cart");
       const total= document.querySelector(".cart-total-container");

       cart.insertBefore(cartproduct,total);
       alert("product added to the cart");
       showTotals();

            }
        });
    });

    // show total

    function showTotal (){

        const total = [];
        const products = document.querySelectorAll(".cart-product-price");

        products.forEach(function(product){total.push(product.textContent);
        });

        const totalMoney = total.reduce(function(toatl,product){
            total += product;
            return total;
        },0)

        const finalMoney= totalMoney.toFixed(2);

        document.getElementById('cart-total').textContent= finalMoney;
        document.querySelector('.product-total').textContent= finalMoney;
        document.getElementById('product-count').textContent= total.length;
    }

})();