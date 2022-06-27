// function app(){
//     document.getElementById("imgphoto").style.display= "block";
//     document.getElementById("imgjoconde").style.display= "block";
//     document.getElementById("imgtableau").style.display= "block";
    

// };

window.onload = app;

var lien = document.getElementById('parchemin');

lien.addEventListener('click',function(){
    window.location.href = 'https://www.dhnet.be/'
}) ;

lien.addEventListener('mouseover',function(){
    document.body.style.cursor = "pointer"; void 0;
});

