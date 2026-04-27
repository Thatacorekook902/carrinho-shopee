//quais açoes meu carrinho pode fazer 

//casos de uso
//✅ -> adicionar item no carrinho
async function addItem(userCart , item) {
    userCart.push(item);
}

//-> calcular o total do carrinho
async function calculateTotal(useCart) {
   return userCart.reduce((total, item) => total + item.subtotal(), 0);
}

//-> deletar item do carrinho 
async function deleteItem(userCart, name) {

}

//-> remover um item- diminui um item
async function removeItem(usercart, index) {

}

export {
    addItem,
    calculateTotal,
    deleteItem,
    removeItem,
}
