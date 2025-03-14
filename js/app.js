document.getElementById('formularioRegistro').addEventListener('submit', function(){
    event.preventDefault(); // Evita que el formulario se envíe

    // Obtener valores de los campos
    const nombre = document.getElementById('nombre').value.trim();
    const cuenta = document.getElementById('cuenta').value.trim();
    const charla = document.getElementById('charla').value.trim();
    const cupo = document.getElementById('cupo').value.trim();

    // Validar que los campos no estén vacíos
    if (!nombre || !cuenta || !charla) {
        alert('Todos los campos son obligatorios');
        return;
        //agreguen los campos que hacen falta
    }

    // Crear un objeto con los datos del alumno
    const alumno = {
        //agrega los que haga falta del formulario
        id: Date.now(), // Usamos la fecha actual como ID único, opcional
        nombre: nombre,
        cuenta: cuenta,
        charla: charla,
        cupo: cupo
    };

    // Guardar en localStorage

    if (localStorage.getItem('panelistas') === null) {
        let panelistas = [];
        panelistas.push(alumno);
        localStorage.setItem('panelistas', JSON.stringify(panelistas));
    } else {
        let panelistas = JSON.parse(localStorage.getItem('panelistas'));
        panelistas.push(alumno);
        localStorage.setItem('panelistas', JSON.stringify(panelistas));
    }

    // Mostrar mensaje que sí se guardó
    alert('Registro realizado con éxito');

    // Resetear el formulario
    document.getElementById('formularioRegistro').reset();

    // Mostrar el objeto en la consola
    console.log('Alumno registrado:', alumno);
    //haz un console log de lo que hay en localstorage
});