// get element here

let creditBtn = document.querySelector('#creditbtn');

let debitBtn = document.querySelector('#debitbtn');
let description = document.querySelector('#text');
let amount = document.querySelector('#amount');
let totalBalance = document.querySelector('#total_balance');


let itemListContainer = document.querySelector('.item-list-container');

// object have value store
let data = {
   totalAmount: 0,
    
}

// buttons click handel here

creditBtn.addEventListener('click', function(e) {

    let currentDescription = getDescription()
    let currentAmount = getAmount()

  

    creditItem(currentAmount,currentDescription)
    data.totalAmount += currentAmount;
    totalBalance.innerHTML = data.totalAmount
    



  

}, false);

debitBtn.addEventListener('click', function(e) {
    let currentDescription = getDescription()
    let currentAmount = getAmount()
    debitItem(currentAmount,currentDescription)

    data.totalAmount -= currentAmount;
    totalBalance.innerHTML = data.totalAmount

   
}, false);


function getDescription(){
    if(description.value === ""){
        alert("Please Enter Description")
        return
    }
    else{
        let desc = description.value
        description.value = ""
        return desc;
    }
}

function getAmount(){
    if(amount.value === ""){
        alert("Please Enter Amount value")
        return
    }
    else{
        let amnt = amount.value
        amount.value = ""
        return parseInt(amnt)
    }
}

function debitItem(debitAmount, debitDescription){
    let item = document.createElement('div')
    item.classList.add('item')
    item.innerHTML = `<div class="item-text">
    <p>${debitDescription}</p>
    <p>RS: - ${debitAmount}</p>
  </div>
  <div class="debit">D</div>`

  itemListContainer.appendChild(item)
}
function creditItem(creditAmount, creditDescription){
    let item = document.createElement('div')
    item.classList.add('item')
    item.innerHTML = `<div class="item-text">
    <p>${creditDescription}</p>
    <p>RS: + ${creditAmount}</p>
  </div>
  <div class="credit">D</div>`
  itemListContainer.appendChild(item)

}