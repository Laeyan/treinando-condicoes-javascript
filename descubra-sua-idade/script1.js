function verificar() {
   var data = new Date();
   var ano = data.getFullYear();
   var fano = document.querySelector("input#txtano");
   var res = document.getElementById("res");

   if(fano.value.length == 0 || Number(fano.value) > ano){
      alert("[Erro] Verifique os dados e tente novamente");
   }else{
      var fsex = document.getElementsByName('radsex');
      var idade = ano - Number(fano.value);
      var genero = '';
      var img = document.createElement("img");
      img.setAttribute("id", "foto");

      if(fsex[0].checked){
         genero = "Homem";
         if(idade >= 0 && idade < 10){
            //crianca;
            img.setAttribute("src", "crianca-homem.png");
         }else if( idade < 21){
            //jovem;
            img.setAttribute("src", "jovem.png");
         }else if(idade < 58){
            //adulto;
            img.setAttribute("src", "adulto-homem.png");
         }else {
            //idoso;
            img.setAttribute("src", "velho.png");
         }
      }else if(fsex[1].checked){
         genero = "Mulher";
         if(idade >= 0 && idade < 10){
            //crianca;
            img.setAttribute("src", "crianca-mulher.png");
         }else if( idade < 21){
            //jovem;
            img.setAttribute("src", "jovem-mulher.png");
         }else if(idade < 58){
            //adulto;
            img.setAttribute("src", "adulto-mulher.png");
         }else {
            //idoso;
            img.setAttribute("src", "velha.png");
         }
      }
      res.style.textAlign = "center";
      res.innerHTML = `Detectamos ${genero} com ${idade} Anos.`;
      res.appendChild(img);
   }
}
