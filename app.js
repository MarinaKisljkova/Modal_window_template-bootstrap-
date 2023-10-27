"use strict";




// Пример стартового JavaScript для отключения отправки форм при наличии недопустимых полей
(function () {
  
    
    // Получите все формы, к которым мы хотим применить пользовательские стили проверки Bootstrap
    var forms = document.querySelectorAll('.needs-validation')
  
    // Зацикливайтесь на них и предотвращайте отправку
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })();


 /* let m = document.querySelector('.m');
  $(m).click(function(){
    alert ("Спасибо! Мы перезвоним Вам в ближайшее время.");
  
  });   */ 