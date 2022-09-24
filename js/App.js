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
let mood = 'create';
let temp ;

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

    };
    if ((title.value && taxes.value && discount.value && ads.value && count.value && price.value && category.value) != '') {

        // let create = datapro.every(({title : _title}) => {
        //     return (!(_title === title.value))
        // });
        // if(create) {
        //     datapro.push(newpro);
        // }else {
        //     alert("Kosamk");
        // }



        // let create = datapro.every((x) => {
        //     return (!(x.title === title.value))
        // });
        // if(create) {
        //     datapro.push(newpro);
        // }else {
        //     alert("Kosamk");
        // }


        // let create = datapro.every((x) => (!(x.title === title.value)));
        // if(create) {
        //     datapro.push(newpro);
        // }else {
        //     alert("Kosamk");
        // }


        // let found = false;
        // for(let x of datapro) {
        //     if(x.title === title.value) {
        //         found = true;
        //     }
        // }

        // if(found) {
        //     alert("KOsamk");
        // }else {
        //     datapro.push(newpro);
        // }


        // // for (let i = 0; i < datapro.length; i++)
        // {
        //     if (title.value == datapro[i].title )
        //     {
        //         console.log("يبنى ده موجود")
        //         clearData();
        //     }
        //     else {
        //         datapro.push(newpro);

        //     }

        // }
        if (mood === 'create' )
        {
            if (newpro.count > 1 )
            {
                for (let i=0 ; i<newpro.count ; i++)
                {
                    datapro.push(newpro);
    
                }
    
             } else {
                    datapro.push(newpro);
    
                }
        }
        else {
            datapro[temp]= newpro;
            mood = 'create';
            submit.innerHTML='Create';
            count.style.display = 'block';

        }
      
        
        console.log(datapro);
        localStorage.setItem('product', JSON.stringify(datapro));
        ShowData();
        clearData()
    }
    else {
        alert("please recheck");
    }

}

function ShowData() {
    let table = '';
    for (let i = 0; i < datapro.length; i++) {
        table += `
       <tr>
       <td>${i}</td>
       <td>${datapro[i].title}</td>
       <td>${datapro[i].price}</td>
       <td>${datapro[i].taxes}</td>
       <td>${datapro[i].ads}</td>
       <td>${datapro[i].discount}</td>
       <td>${datapro[i].total}</td>
       <td>${datapro[i].category}</td>

       <td><button onclick="update(${i})" id="update">Update</button></td>
       <td><button onclick="DeleteData(${i})" id="delete">delete</button></td>
   </tr>`
    }
    document.getElementById('tbody').innerHTML = table;
    let btnDelete = document.getElementById('deleteAll');
    if (datapro.length > 0) {
        btnDelete.innerHTML = `<button onclick="DeleteAll()" id="deleteall">DeleteAll ${datapro.length} </button>`
    }

  

}
ShowData()

//save localstorage


//clear inputs

function clearData() {
    title.value = '';
    ads.value = '';
    discount.value = '';
    taxes.value = '';
    total.innerHTML = '';
    category.value = '';
    price.value = '';
    count.value = '';


}

function DeleteAll ()
{
    localStorage.clear();
    datapro.splice(0);
    ShowData();
}



// function clearData() {

// }

// count

//delete
function DeleteData(i) {
    datapro.splice(i, 1);
    localStorage.product = JSON.stringify(datapro);
    ShowData();
}


//updata 
function  update (i)
{
    title.value = datapro[i].title;
    price.value = datapro[i].price;
    taxes.value = datapro[i].taxes;
    ads.value = datapro[i].ads;
    category.value = datapro[i].category;
    title.value = datapro[i].title;
    discount.value = datapro[i].discount;
    count.value = datapro[i].count;
    count.style.display='none';
    gettotal ();
    submit.innerHTML= 'UPDATE'
    mood = 'update';
    temp=i;
    // datapro[i].push ();


 } 


// search

//clean

// function to check if the Data you entered have entered before so recall false 


