//Registrar ServiceWorker
if(navigator.serviceWorker) navigator.serviceWorker.register("./sw.js")

const domContainer = document.getElementById("root")
const Contador = () => {
    const [numero, setNumero] = React.useState(0)
    const aumentar = () => setNumero(numero+1)
    const disminuir = () => setNumero(numero-1)
    return(
        <div>
            <h1 className={numero<0 ? "menor" : "mayor"}>Contador: {numero}</h1>
            <hr/>
            <button onClick={aumentar}>Aumentar</button>
            <button onClick={disminuir}>Disminuir</button>
        </div>
    )
}

ReactDOM.render(<Contador/>, domContainer)