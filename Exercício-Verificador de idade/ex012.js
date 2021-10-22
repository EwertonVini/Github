function verificar() {
            var data = new Date()
            var ano = data.getFullYear()
            var fano = document.getElementById('txtano')
            var res = document.querySelector('div#res')
    
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO!] Verifique os dados e tente novamente')
    } else {
            var fsex = document.getElementsByName('radsex')    //Nome do input
            var idade = ano - Number(fano.value) 
            var genero = ''
            var img = document.createElement('img')
        img.setAttribute('id', 'foto')   // Criação de id sem usar html
        
        if (fsex[0].checked) {
            genero = 'Homem'
                                                                //Idade dos Homens
                if (idade >=0 && idade < 10) {
                    img.setAttribute('src', 'criança.png')
                } else if (idade < 20) {
                    img.setAttribute('src', 'joveem.png')
                } else if(idade < 50) {
                    img.setAttribute('src', 'adulto.png')
                } else {
                    img.setAttribute('src', 'idosos.png')
                }
        } else if (fsex[1].checked){
            genero = 'Mulher'
                                                                //Idade das Mulheres
                if (idade >=0 && idade < 10) {
                    img.setAttribute('src', 'bebe.png')
                } else if (idade < 20) {
                    img.setAttribute('src', 'jovem.png')
                } else if(idade < 50) {
                    img.setAttribute('src', 'aadulta.png')
                } else {
                    img.setAttribute('src', 'idosa.png')
                }
        }
                                                                
        res.style.textAlign = 'center'                           //Estilo do alinhamento
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`          // Dados
        res.appendChild(img)     
    }

}