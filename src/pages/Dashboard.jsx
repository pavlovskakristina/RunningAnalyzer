import { Link, Outlet } from 'react-router-dom';
import React, { useState } from "react";
import './Dashboard.css';

const Dashboard = () => {
    const [runs, setRuns] = useState([]); // Lista biegów
    const [formData, setFormData] = useState({
        date: "",
        distance: "",
        avgSpeed: "",
        notes: "",
    });

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };


    // Add run function
    const handleAddRun = (e) => {
        e.preventDefault();

        const distance = parseFloat(formData.distance);
        const speed = parseFloat(formData.avgSpeed);

        // Checking if the speed is greater than 0 and distance is greater than 0
        if (distance <= 0 || speed <= 0) {
            alert('Distance and speed must be greater than 0');
            return;
        }
        if (!formData.date) {
            alert('Date is required');
            return;
        }

        setRuns([...runs, { ...formData, id: Date.now() }]);
        setFormData({ date: "", distance: "", avgSpeed: "", notes: "" });
    };


    // Delete run function
    function handleDeleteRun(id) {
        setRuns(runs.filter(run => run.id !== id));
    }

    // Counters for total distance and average speed
    const totalDistance = runs.reduce((sum, run) => sum + parseFloat(run.distance || 0), 0);
    const avgSpeed = runs.length > 0 ? (runs.reduce((sum, run) => sum + parseFloat(run.avgSpeed || 0), 0) / runs.length).toFixed(2) : 0;

    return (
        <div className="dashboard-container">
            <header className="dashboard-header">
                <h1 className="dashboard-title">Running Analyzer</h1>
                <p className="dashboard-subtitle">Track your runs, achieve your goals</p>
            </header>

            <div className="dashboard-content">
                {/* SECTION: ADD RUN */}
                <section className="form-section">
                    <h2>Add New Run</h2>
                    <form onSubmit={handleAddRun} className="run-form">
                        <div className="form-group">
                            <label htmlFor="date">Data</label>
                            <input
                                type="date"
                                id="date"
                                name="date"
                                value={formData.date}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {/* DISTANCE (KM) */}
                        <div className="form-group">
                            <label htmlFor="distance">Distance (km)</label>
                            <input
                                type="number"
                                id="distance"
                                name="distance"
                                value={formData.distance}
                                onChange={handleChange}
                                step="0.1"
                                required
                            />
                        </div>

                        {/* AVERAGE SPEED (KM/H) */}
                        <div className="form-group">
                            <label htmlFor="avgSpeed">Average Speed (km/h)</label>
                            <input
                                type="number"
                                id="avgSpeed"
                                name="avgSpeed"
                                value={formData.avgSpeed}
                                onChange={handleChange}
                                step="0.1"
                                required
                            />
                        </div>

                        {/* NOTES */}
                        <div className="form-group">
                            <label htmlFor="notes">Notes (how did you feel during the run?) </label>
                            <textarea
                                id="notes"
                                name="notes"
                                value={formData.notes}
                                onChange={handleChange}
                                placeholder="how did you feel during the run"
                            ></textarea>
                        </div>

                        {/* ADD RUN - BUTTON */}
                        <button type="submit" className="submit-btn">
                            <span>➕</span> Add run
                        </button>

                    </form>
                </section>

                {/* PROGRESS SECTION */}
                <section className="stats-section">
                    <h2>Your Progress</h2>
                    <div className="stats-grid">
                        <div className="stat-card">
                            <div className="stat-icon">📏</div>
                            <div className="stat-value">{totalDistance.toFixed(2)}</div>
                            <div className="stat-label">km total</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-icon">⚡</div>
                            <div className="stat-value">{avgSpeed}</div>
                            <div className="stat-label">km/h avg</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-icon">🏃</div>
                            <div className="stat-value">{runs.length}</div>
                            <div className="stat-label">runs</div>
                        </div>
                    </div>
                </section>

                {/* List of races */}
                <section className="runs-section">
                    <h2>Your Run History</h2>
                    {runs.length === 0 ? (
                        <div className="empty-state">
                            <p>No runs recorded yet. Add your first run!</p>
                        </div>
                    ) : (
                        <div className="runs-list">
                            {runs.map((run) => (
                                <div key={run.id} className="run-card">
                                    <div className="run-header">
                                        <span className="run-date">{new Date(run.date).toLocaleDateString('en-US')}</span>
                                        <button
                                            className="delete-btn"
                                            onClick={() => handleDeleteRun(run.id)}
                                            title="Delete run"
                                        >
                                            ✕
                                        </button>
                                    </div>
                                    <div className="run-details">
                                        <div className="run-detail">
                                            <span className="detail-icon">📏</span>
                                            <span className="detail-value">{run.distance} km</span>
                                        </div>
                                        <div className="run-detail">
                                            <span className="detail-icon">⚡</span>
                                            <span className="detail-value">{run.avgSpeed} km/h</span>
                                        </div>
                                    </div>
                                    {run.notes && (
                                        <div className="run-notes">
                                            <p>{run.notes}</p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                </section>
            </div>
        </div>
    );
};

export default Dashboard;
