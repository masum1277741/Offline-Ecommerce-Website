const product = [
    {
        id: 0,
        image: 'images/c1.png',
        title: 'Half-sleeve t-shirt(deepgray)',
        price: 50,
    },
     {
        id: 1,
         image: 'images/c11.png',
        title: 'Formal-Shirt',
        price: 60,
    },
     {
        id: 2,
        image: 'images/c3.jpg',
        title: 'Black T-Shirt',
        price: 70,
    },
     {
        id: 3,
        image: 'images/c4.jfif',
        title: 'Blue T-shirt',
        price: 80,
    },
     {
        id: 4,
        image: 'images/c5.jfif',
        title: 'Full-sleeve shirt',
        price: 90,
    },
     {
        id: 5,
        image: 'images/c6.png',
        title: 'half-sleeve t-shirt',
        price: 100,
    },
     {
        id: 6,
        image: 'images/c7.png',
        title: 'Shirt',
        price: 110,
    },
     {
        id: 7,
        image: 'images/c8.jpg',
        title: 'Red-Shirt',
        price: 120,
    },
     {
        id: 8,
        image: 'images/c12.png',
        title: 'Formal-shirt',
        price: 130,
    }
];
   type="text/javascript">
        function search() {
            let filter = document.getElementById('find').value.toUpperCase();
            let item = document.querySelectorAll('.product');
            let l = document.getElementsByTagName('h4');
            for (var i = 0; i <= l.length; i++) {
                let a = item[i].getElementsByTagName('h4')[0];
                let value = a.innerHTML || a.innerText || a.textContent;
                if (value.toUpperCase().indexOf(filter) > -1) {
                    item[i].style.display = "";
                }
                else {
                    item[i].style.display = "none";
                }
            }
        }
   
const categories = [...new Set(product.map((item) => { return item }))]
let i = 0;
document.getElementById('root').innerHTML = categories.map((item) => {
    var { image, title, price } = item;
    return (
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
            <div class='bottom'>
                <p>${title}</p>
                <h2>$ ${price}.00</h2>` +
        "<button onclick='addtocart(" + (i++) + ")'>Add to cart</button>" +
        `</div>
                </div>`
    )
}).join('')
var cart = [];
function addtocart(a) {
    cart.push({ ...categories[a] });
    displaycart();
}

function delElement(a) {
    cart.splice(a, 1);
    displaycart();
}
function displaycart() {
    let j = 0, total = 0;
    document.getElementById("count").innerHTML = cart.length;
    document.getElementById('cartItem').innerHTML = cart.length;

    if (cart.length == 0) {
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ " + 0 + ".00";
    }
    else {
        document.getElementById("cartItem").innerHTML = cart.map((items) => {
            var { image, title, price } = items;
            total = total + price;
            document.getElementById("total").innerHTML = "$ " + total + ".00";
            return (
                `<div class='cart-item'>
                <div class='row-img'>
                <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size:15px;'>$ ${price}.00</h2>` +
                "<i class='fa-solid fa-trash' onclick='delElement(" + (j++) + ")'></i></div>"
            );
        }).join('');
    }
}
