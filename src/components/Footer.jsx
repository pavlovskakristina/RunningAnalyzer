import "./Footer.css";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="site-footer">
            <span>© {year} RunningAnalyzer</span>
            <span>Data stored locally (LocalStorage) · Privacy · Contact</span>
        </footer>
    );
}
