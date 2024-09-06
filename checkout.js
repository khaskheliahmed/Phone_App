const getData = localStorage.getItem("itemArr");
const itemArr = JSON.parse(getData);
console.log(itemArr);



const phones = document.querySelector('#phones');
const totalAmount = document.querySelector('#total-amount');

function renderphones(){
    let total = 0;
    if(itemArr != null && itemArr.length > 0){
        for(let i = 0; i < itemArr.length; i++){
            total += itemArr[i].price * itemArr[i].quantity
            console.log(itemArr[i].price , itemArr[i].quantity)
           
            phones.innerHTML += `
            <div class="border border-light rounded m-5 p-3">
            <h1>Model: ${itemArr[i].brand + ' ' + itemArr[i].model}</h1>
             <h3> Quantity : ${itemArr[i].quantity}

             <h4>Quantity:
            <button class="btn btn-primary" onclick="addQuantity(${i})">+</button>
             ${itemArr[i].quantity}
             <button class="btn btn-primary" onclick="lessQuantity(${i})">-</button>
           </h4>
            
            <h1>Price: ${itemArr[i].price * itemArr[i].quantity}</h1>
            <button class="btn btn-danger" onclick="deleteItem(${i})">delete</button>
            </div>

            `
        }
        totalAmount.innerHTML = `Total Amount = ${total}`
    }
    else{
        phones.innerHTML = `
        <h3 class="text-center">No Item Found...</h3>
        `
    }
}

renderphones()

function addQuantity(i){
    phones.innerHTML = '';
    itemArr[i].quantity += 1
    renderphones();
}

function lessQuantity(i){
    phones.innerHTML = ''
    if(itemArr[i].quantity = 1){
        itemArr.splice(i , 1);
    }else{
        itemArr[i].quantity -= 1
    }
    renderphones()
}

function deleteItem(i){
    phones.innerHTML = ''
    itemArr.splice(i , 1);
    totalAmount.innerHTML = ''
    renderphones()
}















 
