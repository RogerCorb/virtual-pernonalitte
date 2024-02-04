

//const transporte = require('../../controllers/email');

const envio = () => {   
  const nome = document.querySelector('[name="nome"]').value;
  const email = document.querySelector('[name="email"]').value;
  const subject = document.querySelector('[name="subject"]').value;
  const body= document.querySelector('[name="body"]').value;

  console.log(nome);
  console.log(email);
  

  transporte.sendMail({
    from: `${process.env.EMAIL_NAME} <${process.env.EMAIL_FROM}>`,
    to: `${nome} <${email}>`,
    subject: subject,
    text: body
  });

  //module.exports = { envio }

  


  

  // Aqui você pode processar os dados (por exemplo, enviá-los por e-mail)
  // ou fazer outras ações necessárias.  
}
