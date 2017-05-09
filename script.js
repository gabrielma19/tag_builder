document.addEventListener("DOMContentLoaded", init)


function init(){
  var form = document.querySelector('#form-js')

  form.addEventListener('submit', function(e){
    console.log(form.elements)  
    e.preventDefault()
 })
 
}
