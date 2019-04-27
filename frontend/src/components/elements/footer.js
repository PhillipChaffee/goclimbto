import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="content has-text-centered">
                    <p className="footer-text">Made with <span aria-label="heart" role="img">❤️</span> by <a href="https://phillipchaffee.io">Phillip Chaffee</a></p>
                    <p>using <a href="https://reactjs.org/">React</a>, <a href="https://bulma.io/">Bulma</a>, and <a href="https://docs.microsoft.com/en-us/aspnet/core">ASP.NET Core</a>.</p>
                </div>
            </footer>
        );
    }
}

export default Footer;