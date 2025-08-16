export function loadCart(){
const cart = localStorage.getItem("cart");
    if(cart){
        return JSON.parse(cart);
    }
    return [];



}

export function addToCart(productId,qty){


const cart = loadCart()

const index = cart.findIndex(

(item)=>{
return item.productId === productId

}


)

if(index == -1){
    cart.push({productId, qty})
}

else{

const newQty = cart[index].qty = cart[index].qty + qty;
if(newQty <= 0 ){
cart.splice(index, 1);

}

else{
cart[index].qty = newQty;
}


}

saveCart(cart);

}


export function saveCart(cart){

localStorage.setItem("cart", JSON.stringify(cart));

}

export function clearCart(){
localStorage.removeItem("cart");


}