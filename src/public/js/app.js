const  transportador  = require('/src/controllers/email.js');






const envio=() => {   
  const nome = document.querySelector('[name="nome"]').value;
  const email = document.querySelector('[name="email"]').value;

  console.log(nome);
  console.log(email);

  console.log(transportador);


  

  // Aqui você pode processar os dados (por exemplo, enviá-los por e-mail)
  // ou fazer outras ações necessárias.  
}
