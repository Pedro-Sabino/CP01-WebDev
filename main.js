function calcular() {
   
    const inicioHora = parseInt(document.getElementById('horaIni').value);
    const inicioMinuto = parseInt(document.getElementById('minIni').value);
    const fimHora = parseInt(document.getElementById('horaFim').value);
    const fimMinuto = parseInt(document.getElementById('minFim').value);

    const inicioEmMinutos = (inicioHora * 60) + inicioMinuto;
    const fimEmMinutos = (fimHora * 60) + fimMinuto;
    let diferencaMinutos = fimEmMinutos - inicioEmMinutos;

    if (diferencaMinutos < 0) {
        diferencaMinutos += 24 * 60; //24 horas > minutos
    }

    //  horas > minutos de novo
    const horasDuracao = Math.floor(diferencaMinutos / 60);
    const minutosDuracao = diferencaMinutos % 60;

    //  tela 
    document.getElementById('horas').textContent = horasDuracao.toString().padStart(2, '0');
    document.getElementById('minutos').textContent = minutosDuracao.toString().padStart(2, '0');
}