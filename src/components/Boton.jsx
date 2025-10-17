export const Boton = ({texto,color}) =>{
    const estilos={
        backgroundColor:color,
        color:"white",
    };
    const saludar =() =>{
        alert("Boton clikeado");

    };
    return (
        <button style={estilos} onClick={saludar}>
            {texto}
        </button>
        );
}