import { Link, Outlet } from "react-router-dom";
import Footer from "./Footer";
import { getItem } from "../utils/localStorage";

// ROUTER 
export default function RootLayout() {
    const userName = getItem("profile")?.userName ?? "";

    return (
        <>
            <nav className="Navigation" style={{ display: "flex", gap: "15px", padding: "10px", borderBottom: "1px solid black" }}>
                <div>
                    <Link to="/">Home</Link> | {" "}
                    <Link to="/dashboard">Dashboard</Link> | {" "}
                    <Link to="/example">Example</Link>
                </div>

                <div style={{ marginLeft: "auto", fontWeight: "bold" }}>
                    Hello, {userName}!
                </div>
            </nav>
            <Outlet />
            <Footer />
        </>
    );
}
