const card = document.getElementsByClassName("card")
const btnAdd = document.getElementsByClassName("buton_add")
const btnCart = document.querySelector(".btn_cart")
const cartList = document.querySelector(".shopping_cart_list")


class Shopping {
    constructor(title, price, image) {
        this.image = image;
        this.title = title;
        this.price = price;
    }
}

class UI {
    addToCart(shopping) {
        const listItem = document.createElement("div");
        listItem.classList = "list_item";

        listItem.innerHTML =
            `
        <div class="row align-items-center text-white-50">
                      <div class="col-md-3">                        
                        <img src="${shopping.image}" alt="ürün" class="img-fluid">     
                    
                      </div>
                      <div class="col-md-5">
                        <div class="title">${shopping.title}</div>
                      </div>
                      <div class="col-md-2">
                        <div class="price">${shopping.price}</div>
                      </div>
                      <div class="col-md-2">
                        <button class="btn btn-delete"><i class="fa fa-trash text-danger"  aria-hidden="true"></i></button>
                      </div>
                    </div>        
        `
        cartList.appendChild(listItem); //appendChild() => alt eleman olarak ekler

    }

    removeCart() {
        let btnRemove = document.getElementsByClassName("btn-delete");
        let self = this; //yukardaki kod bloğunda this'i kullandığımız için  
        for (let i = 0; i < btnRemove.length; i++) {
            btnRemove[i].addEventListener("click", function () {
                this.parentElement.parentElement.parentElement.remove();
                self.cartCount(); //sepetten silindiğinde countu azaltmak için
            })

        }
    }

    cartCount() {
        let cartListItem = cartList.getElementsByClassName("list_item");
        let itemCount = document.getElementById("item_count");
        itemCount.innerHTML = cartListItem.length;
    }

}

for (let i = 0; i < card.length; i++) {
    btnAdd[i].addEventListener("click", function (e) {
        // console.log(btnAdd[i]); //tıklananı göster
        let title = card[i].getElementsByClassName("card-title")[0].firstChild.textContent;
        let price = card[i].getElementsByClassName("price")[0].textContent;
        let image = card[i].getElementsByClassName("card-img-top")[0].src;
        btnAdd[i].classList.add("disabled");
        btnAdd[i].textContent = "Eklendi";

        let shopping = new Shopping(title, price, image);
        let ui = new UI();

        ui.addToCart(shopping);
        ui.removeCart();
        ui.cartCount();


        e.preventDefault(); //bir sayfaya gitmeyi engeller
    })
}
//cart toggle
function cartToggle() {
    btnCart.addEventListener("click", function () {
        cartList.classList.toggle("d-none");
    })
}
cartToggle();



//Timer
function timer() {
    var saat = new Date();
    document.getElementById("timer_id").innerHTML = saat.toLocaleTimeString();
}
setInterval(timer, 1000);
