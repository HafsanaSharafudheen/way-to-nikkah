var data = ["India (+91)","UAE (+971)"];
$(document).ready(function(){

    var select = document.getElementById("inputPhone");

    for (let i = 0; i < data.length; i++) {
       
        var option = document.createElement("option");    
        option.value = i+1;
        option.text = data[i];
    
        select.appendChild(option);
        
    }

    document.getElementById('signup-form').addEventListener('submit', function(event) {
        event.preventDefault(); 
        alert('Form submitted!'); 
      });
});



  