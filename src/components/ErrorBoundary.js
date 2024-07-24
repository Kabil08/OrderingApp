import { useRouteError } from "react-router-dom";

const ErrorBoundary = () => {
    const error = useRouteError();
    return (
        <div>
            <h1>We are facing a technically difficulty here. Try reloading the page.</h1>
            <h2>{error?.data}</h2>
            <h3>{error?.status} and {error?.statusText}</h3>
        </div>
    )
}

export default ErrorBoundary;