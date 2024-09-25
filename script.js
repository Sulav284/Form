const form = document.querySelector('form');
const name = document.querySelector('#name');
const mail = document.querySelector('#mail');
const number = document.querySelector('#number');
const message = document.querySelector('#message');
const button = document.querySelector('button');

emailjs.init('HFNchOYwNZh9UBohi');

form.addEventListener('submit', (e) =>{
  e.preventDefault();
  button.innerHTML = 'Sending...';
  const Details = {
    from_name: name.value,
    from_email: mail.value,
    message: message.value,
    number : number.value
  };

  emailjs.send('service_t284', 'template_llslcf8', Details).then((res)=>{alert("success");button.innerHTML = "Send"},(err)=>{alert("error")});

});
