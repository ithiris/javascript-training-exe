document.getElementById('button').addEventListener('click',loadData);

function loadData(){

    // create an xhr Object

    const xhr= new XMLHttpRequest();


  //  console.log(xhr.readyState);

    // open


    xhr.open('GET','data.txt',true);


    xhr.onload=function(){
        if(this.status==200){
            document.getElementById('output').innerHTML=`<h1>${this.responseText}</h1>`;
        }
    }

/*
    xhr.onreadystatechange = function(){

        console.log(this.readyState);
        if(this.status== 200 && this.readyState==4){
            console.log(this.responseText);

        }
    }
    */
    xhr.send();
    
    // readystate values
    // 0: request not initialised 
    // 1: server connection established
    // 2: request Recieved
    // 3: Processing Request
    // 4: Request finished and Response is ready

}