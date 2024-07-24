import ErrorComponent from '../components/errorComponent/ErrorComponent'
import { useRouteError } from 'react-router-dom'

function ErrorPage() {
    const error = useRouteError();

    return (
        <ErrorComponent
            message={error.statusText || error.message}
        />
    )
}

export default ErrorPage