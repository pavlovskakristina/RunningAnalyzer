import { Outlet, useNavigate } from 'react-router-dom';

function WelcomePage() {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Dane zapisane!"); 
        localStorage.setItem("hasCompletedSetup", "true"); // Zapisujemy, że setup jest zakończony
        navigate("/", { replace: true });  // Przekierowujemy użytkownika na stronę główną
    };

    return (
        <div style={{ padding: '50px', textAlign: 'center' }}>
            <h1>Hello, let's get to know each other better.</h1>
            <p>Before you start, tell us a bit about yourself.</p>

            <form onSubmit={handleSubmit}>
                {/* FORMULARZ */}
                <div>
                    <label>Name: <input type="text" required /></label>
                </div>
                <button type="submit" style={{ marginTop: '20px' }}>
                    Okay
                </button>
            </form>
            <Outlet />
        </div>
    )
}

export default WelcomePage;