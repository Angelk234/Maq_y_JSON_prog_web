window.addEventListener("load", function () {

    
    let nombre = prompt('ingresa tu nombre','N/A');
    if (nombre === 'Angel'){
        const div = document.getElementById('pTabla');

        if (localStorage.getItem('panelistas') === null) {
            const vacio = this.document.createElement('a')
            vacio.style.fontSize = "40px";
            vacio.text = "Aún no hay panelistas registrados";
            div.appendChild(vacio);
        } else {
            createTable(div);
        }
    } else {
        const div = document.getElementById('pTabla');
        const vacio = this.document.createElement('a');
        const img = this.document.createElement('img');
        img.src = "../imgs/bola-amarilla.jpg";
        img.style.width = "180px";
        img.style.height = "180px";
        vacio.style.fontSize = "40px";
        vacio.className = "text-danger";
        vacio.style.textDecoration = "none";
        vacio.text = "No tienes permiso para entrar";
        div.appendChild(vacio);
        div.appendChild(img);
    }
    
});


function createTable(div) {
    const panelistas = JSON.parse(localStorage.getItem('panelistas'));

    const table = this.document.createElement('table');
    const headT = this.document.createElement('thead');
    const headTR = this.document.createElement('tr');
    const nameTH = this.document.createElement('th');
    const charlaTH = this.document.createElement('th');
    const cupoTH = this.document.createElement('th');
    const bodyT = this.document.createElement('tbody');

    let name = document.createTextNode("Nombre del panelista");
    let talk = document.createTextNode("Charla que imparte");
    let quota = document.createTextNode("Cupo");

    table.className += "table table-hover";

    table.appendChild(headT);
    headT.appendChild(headTR);

    nameTH.appendChild(name);
    charlaTH.appendChild(talk);
    cupoTH.appendChild(quota);

    headTR.appendChild(nameTH);
    headTR.appendChild(charlaTH);
    headTR.appendChild(cupoTH);


    panelistas.forEach((element) => {
    const elementTR = this.document.createElement('tr');
    const nameTD = this.document.createElement('td');
    const charlaTD = this.document.createElement('td');
    const cupoTD = this.document.createElement('td');

    let name = document.createTextNode(element.nombre);
    let talk = document.createTextNode(element.charla);
    let quota = document.createTextNode(element.cupo);
    
    nameTD.appendChild(name);
    charlaTD.appendChild(talk);
    cupoTD.appendChild(quota);

    elementTR.appendChild(nameTD);
    elementTR.appendChild(charlaTD);
    elementTR.appendChild(cupoTD);

    bodyT.appendChild(elementTR);
    });
    table.appendChild(bodyT);
    div.appendChild(table);

}