document.getElementById('loan-form').addEventListener('submit', function(e){


    document.getElementById('loading').style.display='block';


    e.preventDefault();

    setTimeout(calculateResults,2000);
});

function calculateResults(){
  console.log('calculating');
 
    //UI vars
     const amount = document.getElementById('amount');
     const interest = document.getElementById('interest');
     const years= document.getElementById('years');
     const monthlyPayment=document.getElementById('monthly-payment');
     const totalPayment = document.getElementById('Total-payment');
     const totalInterest = document.getElementById('Total-interest');

     const principal = parseFloat(amount.value);
     const calculatedInterest = parseFloat(interest.value) / 100 /  12;
     const calculatedPayments= parseFloat(years.value)*12;


     //calculate monthly payment
      const x= Math.pow(1 + calculatedInterest,calculatedPayments);
      const monthly = (principal*x*calculatedInterest)/(x-1);

      if(isFinite(monthly)){
          monthlyPayment.value=monthly.toFixed(2);
          totalPayment.value=(monthly*calculatedPayments).toFixed(2);
          totalInterest.value=((monthly*calculatedPayments)-principal).toFixed(2);

          document.getElementById('results').style.display='block';

          document.getElementById('loading').style.display='none';

      } else {
          showError('please check ur number');
      }

    


}

function showError(error){


const errorDiv=document.createElement('div');

const card= document.querySelector('.card');

const heading = document.querySelector('.heading');


errorDiv.className = 'alert alert-danger';


errorDiv.appendChild(document.createTextNode(error));


card.insertBefore(errordiv,heading);

setTimeout(clearInterval,3000);





}
