import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="content has-text-centered">
                    <p className="footer-text">Made with <span aria-label="heart" role="img">❤️</span> by <a href="https://phillipchaffee.io">Phillip Chaffee</a></p>
                    <p>using <a href="https://reactjs.org/">React</a>, <a href="https://bulma.io/">Bulma</a>, and <a href="https://docs.microsoft.com/en-us/aspnet/core">ASP.NET Core</a>.</p>
                    <a href="https://www.producthunt.com/posts/go-climbing-to?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-go-climbing-to" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=152689&theme=light" alt="Go Climbing To - Find your next project | Product Hunt Embed" style={{ width: '250px', height: '54px' }} width="250px" height="54px" /></a>
                </div>
            </footer>
        );
    }
}

export default Footer;