const doc = {
    content : document.querySelector('#content'),
    pieceOfProducts: document.querySelector('#pieceOfProducts')
}

const state = {
    products: [],
    cart: []
}
state.products = [
    {id: 1, name: "cpu", price: 0.12 },
    {id: 2, name: "egér", price: 0.12 },
    {id: 3, name: "billentyűzet", price: 0.02 },
    {id: 4, name: "HDD", price: 0.11 },
    {id: 5, name: "sDD", price: 0.13 },
    {id: 6, name: "CD-ROM", price: 0.12 },
    {id: 7, name: "monitor", price: 0.12 },
    {id: 8, name: "pendrive", price: 0.12 },
    {id: 9, name: "elem", price: 0.12 },
    {id: 10, name: "tároló", price: 0.12 },
    {id: 11, name: "cpu", price: 0.12 },
]

var cards = ''
state.products.forEach( prod => {
    
    const card = `
    <div class="card m-2" style="min-width: 14rem; max-width: 14rem">
      <img src="https://picsum.photos/150" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${prod.name}</h5>
        <p class="card-text">${prod.price} (LIT)</p>        
        
        <div class="row">
            <div class="col">
                <button class="btn btn-primary"
                data-id="${prod.id}"
                onclick="addToCart(this)"
                >Kosárba</button>
            </div>
            <div class="col">
                <input type="number"
                class="form-control" value="1">
            </div>
        </div>
      </div>
    </div>
    `
    cards += card
})
doc.content.innerHTML = cards

function addToCart(source) {
    console.log(source.dataset.id)
    console.log(source.parentNode.parentNode.children[1].children[0].value)
    const item = {
        productId: source.dataset.id,
        piece: source.parentNode.parentNode.children[1].children[0].value
    }
    state.cart.push(item)
}

function refreshPage() {
    location.reload()
}

