// get total 

let title = document.getElementById('title');
let price = document.getElementById('price');
let taxes = document.getElementById('taxes');
let ads = document.getElementById('ads');
let discount = document.getElementById('discount');
let total = document.getElementById('total');
let count = document.getElementById('count');
let submit = document.getElementById('submit');
let category = document.getElementById('category');

function gettotal() {


    if (price.value != '') {
        let result = (+price.value + +taxes.value + +ads.value) - +discount.value;
        total.innerHTML = result;
        total.style.background = '#040';
    }
    else {
        total.innerHTML = '';
        total.style.background = '#a00d02';
  
    }

}




// create product
let datapro;
if (localStorage.product != null) {
    datapro = JSON.parse(localStorage.product);
}
else {
    datapro = [];
}

submit.onclick = function () {
 
    let newpro = {
        title: title.value,
        price: price.value,
        taxes: taxes.value,
        ads: ads.value,
        discount: discount.value,
        total: total.innerHTML,
        count: count.value,
        category: category.value,

    }
    
    if ( (title.value && taxes.value && discount.value && ads.value && count.value && price.value && category.value ) != '' )
    {
        for (let i = 0; i < datapro.length; i++)
        {
            if (title.value != datapro[i].title )
            {

            }
            else {
                console.log("يبنى ده موجود")
            }
        }
    datapro.push(newpro);
    localStorage.setItem('product', JSON.stringify(datapro));
    clearData ()
    }
    else {
      alert("please recheck");
    }

}



//save localstorage


//clear inputs

 function clearData () {
    title.value = '';
    ads.value = '';
    discount.value = '';
    taxes.value = '';
    total.innerHTML = '';
    category.value = '';
    price.value = '';
    count.value = '';


}

// read

function ShowData() {
     let table = '';
    for (let i = 0; i < datapro.length; i++) {
       table+=`
       <tr>
       <td>${i}</td>
       <td>${datapro[i].title}</td>
       <td>${datapro[i].price}</td>
       <td>${datapro[i].taxes}</td>
       <td>${datapro[i].ads}</td>
       <td>${datapro[i].discount}</td>
       <td>${datapro[i].total}</td>
       <td>${datapro[i].category}</td>

       <td><button id="update">Update</button></td>
       <td><button id="update">delete</button></td>
   </tr>` 
    }
    document.getElementById('tbody').innerHTML = table;
 }
 ShowData()

// function clearData() {

// }

// count

//delete

//update

// search

//clean

// function to check if the Data you entered have entered before so recall false 


