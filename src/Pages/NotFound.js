import { Link, useRouteError } from "react-router-dom"

export const NotFound = ()=>{
    const error = useRouteError();
    return(
        <div>
            {error.message}
            !oops cant find page go back to <Link to={'/'}>Moviebox !</Link>
        </div>
    )
}