let customers = [];

function removeFromTable(i){
    delete customers[i];

    populateTable();
}

function populateTable(){
    const tbody = document.querySelector('#customersTable tbody');

    tbody.innerHTML = '';

    for (const i in customers){

        const c = customers[i];
        
        let anchor = document.createElement('a');

        anchor.href = '#';
        anchor.className = 'btn btn-danger btn-sm';
        anchor.textContent = 'Delete';
        anchor.onclick = function(e) {
            e.preventDefault();

        };
  
        
        const actionsTdId = `action${i}`;
        const anchorId = `anchor${i}`;
       
        tbody.innerHTML +=
        `<tr>
        <td>${c.startdate}</td>
        <td>${c.enddate}</td>
        <td>${c.first}</td>
        <td>${c.last}</td>
        <td>${c.UserID}</td>
        <td>${c.hierarchy}</td>
        <td>${c.email}</td>
        <td id='${actionsTdId}'>
            <a href='#' class='btn btn-danger btn-sm action-delete' id='${anchorId}'>Delete</a>
                </td>
        </tr>`;
    
    
    }

    const actions = document.getElementsByClassName('action-delete');
    
    for (let i = 0; i <actions.length; i++){
        const actionAnchor = actions.item(i);

        actionAnchor.onclick = 
        
        function(e) {
                e.preventDefault();
    
                customers.splice(i,1);
    
                populateTable();
        };
    }
};

function onsubmit(e){
    e.preventDefault();

    const startdate = document.getElementById('startdate').value;
    const enddate = document.getElementById('enddate').value;
    const first = document.getElementById('first').value;
    const last = document.getElementById('last').value;
    const hierarchy = document.getElementById('hierarchy').value;
    const address = document.getElementById('address').value;
    const address2 = document.getElementById('address2').value;
    const postalcode = document.getElementById('postalcode').value;
    const telphone = document.getElementById('telphone').value;
    const email = document.getElementById('email').value;

    const city = document.getElementById('city').value;
    const province = document.getElementById('province').value;

    //UserID
    const UserID = document.getElementById('UserID').value;




        //Basic User Display Info

        const customer = { startdate, enddate, first, last, UserID, hierarchy, email};

        customers.push(customer);

        populateTable();

        output0.innerHTML = '<h1>' + '<b>' +'<u>' + 'Registration Summary: ' +'</u>' + '</b>'+ '</h1>';

        output1.innerHTML = '<p>' + '<b>'+'First Name: ' + '</b>'+ first +'</p>';
        output2.innerHTML = '<p>' + '<b>'+'Last Name: ' + '</b>'+ last +'</p>';
        output15.innerHTML = '<p>' + '<b>'+'UserID: ' + '</b>'+ UserID +'</p>';
        output9.innerHTML = '<p>' + '<b>'+'Hierarchy: ' + '</b>'+ hierarchy +'</p>';
        
        output3.innerHTML = '<p>' + '<b>'+'Address: ' + '</b>'+ address +'</p>';
        output4.innerHTML = '<p>' + '<b>'+'Address 2: ' + '</b>'+ address2 +'</p>';
    
        output5.innerHTML = '<p>' + '<b>'+'City: ' + '</b>'+ city +'</p>';
        output6.innerHTML = '<p>' + '<b>'+'Province: ' + '</b>'+ province +'</p>';
        output7.innerHTML = '<p>' + '<b>'+'Postal Code: ' + '</b>'+ postalcode +'</p>';
    
        output8.innerHTML = '<p>' + '<b>'+'Telphone: ' + '</b>'+ telphone +'</p>';

        //UserID
        

        //Customer Array (Delete Functions)

        output10.innerHTML = '<h1>' + '<b>' +'<u>' + 'Register User Into Database: ' +'</u>' + '</b>'+ '</h1>';
}
myform.onsubmit = onsubmit;


//Assets
function checkbox(){
  
    var checkboxes = document.getElementsByName('assets');
    var checkboxesChecked = [];
    // loop over them all
    for (var i=0; i<checkboxes.length; i++) {
       // And stick the checked ones onto an array...
       if (checkboxes[i].checked) {
          checkboxesChecked.push(checkboxes[i].value);
       }
       output17.innerHTML = '<p>' + '<b>'+'Assets: ' + '</b>'+ checkboxesChecked +'</p>';
    }
  }
