import { Navigate } from "react-router-dom";
import { getItem } from "../utils/localStorage";

// Redirects to /welcome until the user has completed the setup (profile in LocalStorage)
export default function RequireRegistration({ children }) {
    const profile = getItem("profile");

    if (!profile?.completedSetup) {
        return <Navigate to="/welcome" replace />;
    }

    return children;
}
