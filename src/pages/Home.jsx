import React from "react";
import "./Home.css";
import Footer from "./Footer.jsx";
import logo from "../assets/logo.svg";

const features = [
    { title: "Split analysis", text: "See your pace kilometer by kilometer and spot the moment you start to fade." },
    { title: "Fitness trends", text: "Weekly and monthly volume plus pace progress in one clear view." },
    { title: "Routes and elevation", text: "A route map with an elevation profile, so you know where the climb makes the difference." },
];

const steps = [
    { n: "01", title: "Upload a run", text: "Add a GPX or FIT file from your watch. It is read right in your browser." },
    { n: "02", title: "Get the numbers", text: "The app calculates pace, splits and heart rate for you." },
    { n: "03", title: "Build your fitness", text: "Compare workouts and watch your level grow." },
];

const splits = [70, 78, 85, 65, 90, 82, 96, 88, 100, 92];

export default function HomePage() {
    return (
        <div className="ra">
            <header className="hero">
                <div className="wrap">
                    <div style={{ gridColumn: "1 / -1" }}>
                        <nav>
                            <a className="logo" href="#"> 
                                <img src={logo} alt="RunningAnalyzer" />
                            </a>
                            <div className="links">
                                <a href="#features">Features</a>
                                <a href="#how">How it works</a>
                                <a className="btn sm" href="#start">Open the app</a>
                            </div>
                        </nav>
                    </div>

                    <div>
                        <span className="tag">Built for runners only</span>
                        <h1>Every kilometer has its own story.</h1>
                        <p className="lead">
                            Analyze pace, heart rate and progress from every run. 
                            No noise, no other sports – just running.
                        </p>
                       
                        <div className="cta">
                            <a className="btn" href="#start">Upload a run</a>
                            <a className="btn ghost" href="#features">See what it can do</a>
                        </div>
                        <div className="note">No account, no server. Runs are saved in your browser (LocalStorage) and never leave your device.</div>
                    </div>

                    <div className="act" aria-label="Sample run">
                        <h3>Morning 10K</h3>
                        <small>Sunday, 06:45  · Wrocław</small>
                        <svg viewBox="0 0 320 150" role="img" aria-label="Run route">
                            <path d="M20 110 C50 40 90 130 130 70 S200 20 230 80 S290 120 300 40" fill="none" stroke="#ff6b6b" strokeWidth="3" strokeLinecap="round" />
                            <circle cx="20" cy="110" r="5" fill="#2c3e50" />
                            <circle cx="300" cy="40" r="5" fill="#4ecdc4" />
                        </svg>
                        <div className="stats">
                            <div><span>Distance</span><b>10.42 km</b></div>
                            <div><span>Pace</span><b>5:24 /km</b></div>
                            <div><span>Time</span><b>56:18</b></div>
                        </div>
                        <div className="splits">
                            {splits.map((h, i) => <div key={i} style={{ height: `${h}%` }} />)}
                        </div>
                    </div>
                </div>
            </header>

            <section id="features">
                <div className="wrap"><div className="panel">
                    <h2>Everything your run has to say</h2>
                    <p className="sub">Instead of a thousand charts – just the ones that actually help you run faster and smarter.</p>
                    <div className="grid">
                        {features.map((f) => (
                            <div className="card" key={f.title}>
                                <h3>{f.title}</h3>
                                <p>{f.text}</p>
                            </div>
                        ))}
                    </div>
                </div></div>
            </section>

            <section id="how">
                <div className="wrap steps"><div className="panel">
                    <h2>Three steps to a better run</h2>
                    <p className="sub">From your watch file to real insights in seconds.</p>
                    <div className="grid">
                        {steps.map((s) => (
                            <div className="card" key={s.n}>
                                <b>{s.n}</b>
                                <h3>{s.title}</h3>
                                <p>{s.text}</p>
                            </div>
                        ))}
                    </div>
                </div></div>
            </section>

            <div className="wrap">
                <Footer />
            </div>

        </div>
    );
}