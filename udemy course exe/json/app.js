document.getElementById('button1').addEventListener('click',loadCustomer);

function loadCustomer(){


    const xhr = new XMLHttpRequest();

    xhr.open('GET','customer.json',true);

    xhr.onload = function(){

        if (this.status == 200){

            const customer =JSON.parse(this.responseText);

            const output =`
            <ul>
            <li>ID:${customer.id}</li>
            <li>Name:${customer.name}</li>
            <li>Comapny:${customer.company}</li>
            <li>phone:${customer.phone}</li>`;

            document.getElementById('customer').innerHTML = output;
        }
    }
    xhr.send();
}

document.getElementById('button2').addEventListener('click',loadCustomers);

function loadCustomers(){


    const xhr = new XMLHttpRequest();

    xhr.open('GET','customers.json',true);

    xhr.onload = function(){

        if (this.status == 200){

            const customers =JSON.parse(this.responseText);

            let output='';

            customers.forEach(customer => {

                 output +=`
                <ul>
                <li>ID:${customer.id}</li>
                <li>Name:${customer.name}</li>
                <li>Comapny:${customer.company}</li>
                <li>phone:${customer.phone}</li>`;
    
                
            });

           
            document.getElementById('customers').innerHTML = output;
        }
    }
    xhr.send();
}