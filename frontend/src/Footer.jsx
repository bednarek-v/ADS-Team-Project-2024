import React from 'react';

const Footer = () => {

    const Authors = process.env.AUTHORS;

    return (
        <footer style={{
            padding: "3px",
            textAlign: "center",
            fontSize: "10px",
            borderTop: "1px solid #121212",
            position: "fixed",
            bottom: 0,
            width: "100%",
            left: 0,
            height: "50px",
            zIndex: 0,
            overflow: "hidden",
            lineHeight: "4px",
        }}>
            <p style={{color:"#8f8f8f"}}>© 2024 <strong>JobJourney</strong></p>
            <p style={{color:"#6c6c6c"}}>Crafted with ❤️ by <strong>{Authors}</strong> <span></span>
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
