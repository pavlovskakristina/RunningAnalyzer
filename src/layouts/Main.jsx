import { Outlet, useLoaderData } from "react-router-dom";
import { fetchData } from "../helpers";

// Loaader function 
export function mainLoader() {
    const userName = fetchData('userName');
    return {userName};
}


const Main = () => {
    const {userName} = useLoaderData()

    return (
        <div>
            <Outlet />
        </div>
    )
}

export default Main
