import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div className="h-screen text-black text-center flex justify-center items-center">
            <div className="text-xl">
                <h1 className="text-5xl font-bold text-black"> 404 Page not found</h1>
                <Link to='/'><button className="btn btn-outline btn-warning mt-10 capitalize">Go back</button></Link>
            </div>
        </div>
    );
}