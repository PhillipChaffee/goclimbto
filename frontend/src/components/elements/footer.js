import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="content has-text-centered">
                    <p>Made with <span aria-label="heart" role="img">❤️</span> by <a href="https://phillipchaffee.io">Phillip Chaffee</a>.</p>
                </div>
            </footer>
        );
    }
}

export default Footer;