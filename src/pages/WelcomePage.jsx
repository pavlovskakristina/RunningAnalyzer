import { Outlet, useNavigate } from 'react-router-dom';
import { useState } from 'react';

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
        <div style={{ padding: '50px', textAlign: 'center' }}>
            <h1>Hello, let's get to know each other better.</h1>
            <p>Before you start, tell us a bit about yourself.</p>

            <form onSubmit={handleSubmit}>
                {/* FORMULARZ */}
                <div>
                    <label>Name: <input
                        type="text"
                        value={name} // Łączymy input ze zmienna
                        onChange={(e) => setName(e.target.value)} // Aktualizujemy stan przy każdym wciśnięciu klawisza
                        required
                        style={{ marginLeft: '10px' }} />
                    </label>
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