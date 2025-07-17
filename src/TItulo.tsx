function Titulo() {

const nombre = "Rafael";

if (nombre) {
    return <h1>Hola {nombre}</h1>;
}
return <h1>Hola Desconocido</h1>;

}

export default Titulo;