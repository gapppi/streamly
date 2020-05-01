import React, { Component } from 'react';
import github from "../../Assets/github.png";
import './aboutus.scss';
import Footer from "../../Components/Footer/Footer";

class AboutUs extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="aboutus__header">
                <div >
                    <h1>About Us</h1>
                    <hr className="aboutus__line" />
                </div>
                <div style={{marginBottom: '100px'}}>
                    {/* <div className="col-md-6 ">
                    <img src={github} alt="github" className="aboutus__image" />
                    </div> */}
                    {/* <div className="col-md-6 "> */}
                        {/* <h2 style={{marginBottom: 0}}>Our Story</h2> */}
                        <p className="aboutus__para">
                        <p style={{marginBottom: '10px'}}>About Streamly,</p>
                        <p style={{marginBottom: '10px'}}>At Streamly, we collect all content from the streaming services under one app, making it easy for you as a user to find something to watch. With the features available on Streamly, you will have full control of your favorite series and favorite movies. Streamly.in is specially made for the Indians who loves to watch series and movies from streaming services.
                        In order to take advantage of Streamly's full potential, you need to create an account, which is completely free and then you have access to many good features that make your viewing even easier.
                        With an account on Streamly you can do the following </p>
                        <p >1.  Choose which providers you use or like</p>
                        <p>2.  Access to Streamly Play where we show a new and hand picked movie every week for free</p>
                        <p>3.  Favorite list (if you find something you want to see later, add to my favorites)</p>
                        <p>4.  Watching your favorite series or favorite movie</p>
                        <p>5.  Fold the content so that you get better recommendations</p>
                        <p>6.  Create your own playlists</p>
                        <p>7.  Follow other users' playlists</p>
                        <p>There are many other great features that we will be launching in the near future.</p>
                        </p>

                    {/* </div> */}
                </div>
                <Footer/>
            </div>
        );
    }
}

export default AboutUs;