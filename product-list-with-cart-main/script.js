const buttons = document.querySelectorAll('.add-to-cart');


const dessert = document.querySelectorAll('.dessert');
const cart= [];

dessert.forEach( item => {
    const button = item.querySelector('.add-to-cart');
    const name = item.querySelector('.dessert-name').innerText;
    const price = item.querySelector('.dessert-price').innerText;

    button.addEventListener('click', function() {
        button.classList.add('active');

        button.querySelector('.plus').addEventListener('click', function( e ) {
            e.stopPropagation();
        
            const cartItem = {
                name: name,
                price: price
            };

            cart.push(cartItem);
            changeShoppingCart();
        });

    });
});

function changeShoppingCart() {
    const cartElement = document.querySelector('#cart');


    cart.forEach( item => {
        const cartItem = `
        <div class="cart-item">
            <div class="cart-item-name">${item.name}</div>
            <div class="cart-item-price">${item.price}</div>
        </div>`;
        cartElement.innerHTML = cartElement.innerHTML + cartItem;
    });

    

    

    console.log(cartElement);
    

}






// const body = document.querySelector('body');

 

// buttons.forEach( button => {

//     button.addEventListener('click', function() {
       
//     });

//     button.querySelector('.plus').addEventListener('click', function() {
//         console.log('Plus button clicked');
//     });

    
//     // button.addEventListener('mousedown', function() {
//     //     console.log('Button mouse down');    
//     // });
//     // button.addEventListener('mouseup', function() {
//     //     console.log('Button mouse up');    
//     // });

// });

 

    
 
