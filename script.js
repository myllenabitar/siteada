function validaCampos(nome, email, telefone) {
    return (nome != "" && email != "" && telefone != "")
  }
  
  function validaFormulario(){
  
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;
  
  
    if(validaCampos(nome, email, telefone)) {
      alert("Prontinho! você receberá as novidades por email.")
      return;
    } 
    
    alert("Por favor, preencha os campos nome e email.")
     
   }
  