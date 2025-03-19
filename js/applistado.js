window.addEventListener("load", function () {
    const div = document.getElementById('pTabla');

    if (localStorage.getItem('panelistas') === null) {
        const vacio = this.document.createElement('a')
        vacio.style.fontSize = "40px";
        vacio.text = "Aún no hay panelistas registrados";
        div.appendChild(vacio);
    } else {
        createTable(div);
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