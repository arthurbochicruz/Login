function mostrarEmailSenha() {
       
        let email = document.getElementById('iemail').value; 
        let senha1 = document.getElementById('ipassword').value;
        let senha2 = document.getElementById('ipassword_Two').value;

       if (!email || !senha1 || !senha2) {
        alert("Por favor, preencha todos os campos.");
        return;
      }

      if (senha1 != senha2) {
        alert('As senhas não coincidem. Digite novamente.');
        return;
      }
    
      window.location.href = "https://arthurbochicruz.github.io/..../"
 
}
