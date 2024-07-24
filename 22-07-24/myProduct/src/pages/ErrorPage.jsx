import ErrorComponent from '../components/errorComponent/ErrorComponent'
import { useRouteError } from 'react-router-dom'
import { Link } from 'react-router-dom';


function ErrorPage() {
    const error = useRouteError();

    return (
        <ErrorComponent
            message={error.statusText || error.message}
            children={<Link to={'/'}>Go back home</Link>}
        />
    )
}

export default ErrorPage