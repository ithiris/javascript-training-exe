var rIndex,table = document.getElementById("table");



function Employee(name,designation,salary){
    this.name=name;
    this.designation=designation;
    this.salary=salary;
}

 function Ui(){




Ui.prototype.addEmployee=function(employee) {
    const list = document.getElementById('emp-list');
        // create tr element
        const row = document.createElement('tr');
        
        // insert cols
        row.innerHTML=`
        <td>${employee.name}</td>
        <td>${employee.designation}</td>
        <td>${employee.salary}</td>
        <td><a href="#" class="edit" >Edit</a><td>
        <td><a href="#" class="delete">x</a></td>`;

        list.appendChild(row);
}

Ui.prototype.clearField = function(){
    document.getElementById('name').value='';
    document.getElementById('job').value='';
    document.getElementById('salary').value='';

}

 Ui.prototype.deleteEmployee=function(target){

    if(target.className === 'delete'){
        target.parentElement.parentElement.remove();

    }
 }

 Ui.prototype.editEmployee=function(){


            
            for(var i = 1; i < table.rows.length; i++)
            {
                table.rows[i].onclick = function()
                {
                    rIndex = this.rowIndex;
                    console.log(rIndex);
                    
                    document.getElementById("name").value = this.cells[0].innerHTML;
                    document.getElementById("job").value = this.cells[1].innerHTML;
                    document.getElementById("salary").value = this.cells[2].innerHTML;

                    }
  
                

                };

            }      
        

    }
    Ui.prototype.updateEmployee=function ()
    {

      
        
        table.rows[rIndex].cells[0].innerHTML = document.getElementById("name").value;
        table.rows[rIndex].cells[1].innerHTML = document.getElementById("job").value;
        table.rows[rIndex].cells[2].innerHTML = document.getElementById("salary").value;
        
      
    }
        
        
         



// Event Listener

document.getElementById('emp-form').addEventListener('submit',function(e){

    // Get Form Values
    const name=document.getElementById('name').value;
    job=document.getElementById('job').value;
    salary=document.getElementById('salary').value;

    const employee = new Employee(name,job,salary);

    const ui = new Ui();

    // add employee

   ui.addEmployee(employee);

   // clear fields

   ui.clearField();

   // delete employee

   ui.deleteEmployee(e.target);

    e.preventDefault();
});


document.getElementById('emp-list').addEventListener('click',function(e){


    const ui =new Ui();
    // delete employee

   ui.deleteEmployee(e.target);


  
   
    e.preventDefault();
});


document.getElementById('emp-list').addEventListener('click',function(e){

     const ui =new Ui();
    ui.editEmployee();
    e.preventDefault();
})

document.getElementById('update').addEventListener('click',function(e){

    const ui =new Ui();

  
   
    ui.updateEmployee();

   
})