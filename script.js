const form = document.getElementById("transactionForm");
form.addEventListener("submit", function(event){
  event.preventDefault();
  let transactionFormData = new FormData(form);
  let trasactionTableRef = document.getElementById("transactionTable");
  trasactionTableRef.insertRow(-1)//posición donde se va a aagregar a fila
})