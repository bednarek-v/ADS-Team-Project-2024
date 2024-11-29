import React from 'react';

const Footer = () => {
    return (
        <footer style={{
            padding: "0.2rem",
            textAlign: "center",
            fontSize: "0.7rem",
            borderTop: "1px solid #121212",
            position: "fixed",
            bottom: 0,
            width: "100%",
            left: 0,
            height: "auto",
            zIndex: 0,
            overflow: "hidden",
            lineHeight: "0.8rem",
        }}>
            <p style={{color:"#8f8f8f"}}>© 2024 <strong>JobJourney</strong></p>
            <p style={{color:"#6c6c6c"}}>Crafted with ❤️ by <strong>Vojtěch Bednárek</strong> <span></span>
                <a
                    href="https://github.com/bednarek-v/ADS-Team-Project-2024"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{color: "#007bff", textDecoration: "none"}}
                >
                    View this project on GitHub
                </a></p>
            <p style={{color: "#6c757d"}}>
                Disclaimer: This website is for educational purposes only.
            </p>
        </footer>
    );
};

export default Footer;
