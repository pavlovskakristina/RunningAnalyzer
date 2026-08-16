import { Outlet, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './WelcomePage.css';

function WelcomePage() {
    const navigate = useNavigate();
    const [name, setName] = useState(""); // Zmienna do przechowywania imienia użytkownika

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Data saved");
        localStorage.setItem("userName", name);
        localStorage.setItem("CompletedSetup", "true"); // Zapisujemy, że setup jest zakończony
        navigate("/", { replace: true });  // Przekierowujemy użytkownika na stronę główną
    };

    return (
        <div className="welcome-container">
            <h1 className="welcome-heading">Hello, let's get to know each other better.</h1>
            <p className="welcome-text">Before you start, tell us a bit about yourself.</p>

            <form onSubmit={handleSubmit} className="welcome-form">
                {/* FORMULARZ */}
                <div>
                    <label htmlFor="name" className="welcome-label">Name:</label>
                    <input
                        id="name"
                        type="text"
                        value={name} // Łączymy input ze zmienna
                        onChange={(e) => setName(e.target.value)} // Aktualizujemy stan przy każdym wciśnięciu klawisza
                        required
                        className="welcome-input"
                    />
                </div>
                <button type="submit" className="welcome-button">
                    Okay
                </button>
            </form>
            <Outlet />
        </div>
    )
}

export default WelcomePage;