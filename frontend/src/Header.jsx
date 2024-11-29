import React from 'react';

const Header = () => (
    <header style={headerStyle}>
        <div style={containerStyle}>
            <h1 style={titleStyle}>JobJourney</h1>

        </div>
    </header>
);

const headerStyle = {
    backgroundColor: '#121212',
    padding: '1.5em 2.5em',
    borderBottom: '1px solid #ddd',
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    zIndex: '1000',
};

const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
};

const titleStyle = {
    margin: '0',
    fontSize: '24px',
    fontWeight: 'bold',
    fontFamily: 'Helvetica Neue',
    fontStyle: 'oblique',
};

export default Header;