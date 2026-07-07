import { useLoaderData } from "react-router-dom";
import { fetchData } from "../helpers";

// Loaader function 
export function DashboardLoader() {
    const userName = fetchData('userName');
    return {userName};
}


const Dashboard = () => {
    const {userName} = useLoaderData()

    return (
        <div>
            <h1>Dashboard</h1>
        </div>
    )
}

export default Dashboard
