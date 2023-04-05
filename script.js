function clicar() {
   var data = new Date()
   var ano = data.getFullYear()
   var fano = document.getElementById('txtano')
   var res = document.querySelector('div#res')

   if (fano.value.length == 0 || Number (fano.value) > ano){
      window.alert`Houve um [erro] tente novamente!`
   } else {
      var fsex = document.getElementsByName('radiosex')
      var idade = ano - Number(fano.value)
      var gênero = ''
      var idade1 = ''
       if (fsex [0].checked) {
          gênero = 'Homem'
   
       if (idade >= 0 && idade < 10) {
          idade1 = 'criança'
       } else if (idade < 21) {
         idade1 = 'jovem'
       } else if ( idade < 50) {
         idade1 = 'adulto'
       } else {
         idade1 = 'idoso'
       }
       
       } else if (fsex [1].checked)
         gênero = 'Mulher'
         if (idade >= 0 && idade < 10) {
            idade1 = 'criança'
         } else if (idade < 21) {
           idade1 = 'jovem'
         } else if ( idade < 50) {
           idade1 = 'adulto'
         } else {
           idade1 = 'idoso'
         }
         res.innerHTML = `Você tem: ${idade} anos. É ${idade1}. E é ${gênero}.`
      
   }
   
}