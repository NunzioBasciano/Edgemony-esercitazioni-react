import { useRouteError } from "react-router-dom";


function ErrorPage() {

    // Chiamata della funzione useRouteError per ottenere l'oggetto errore della rotta corrente.
    const error = useRouteError();

    console.error(error);

    return (
        <div>
            <h1>Ops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            {/* Mostra lo status text o il messaggio dell'errore, se disponibile. */}
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    )
}

export default ErrorPage