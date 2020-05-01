import React, { Component } from 'react';
import './header.scss';
import { Link } from "react-router-dom";

class NavBar extends Component {
    render() {
        return (
            <div>
                {/*====================  header area ====================*/}
                <div className="header-area header-sticky header-sticky--default">
                    <div className="header-area__desktop header-area__desktop--default">
                        {/*=======  header top bar  =======*/}
                        <div className="header-top-bar">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-lg-4">
                                        {/* top bar left */}
                                        <div className="top-bar-left-wrapper">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="header-navigation-area default-bg">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        {/* header navigation */}
                                        <div className="header-navigation header-navigation--header-default position-relative">
                                            <div className="header-navigation__nav position-static">
                                                <nav>
                                                    <ul>
                                                        <li><Link to="/trendingThisWeek">Trending this week</Link></li>
                                                        <li><Link to="/topPicks">Top picks for you</Link></li>
                                                    </ul>
                                                </nav>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*=======  End of header navigation area =======*/}
                    </div>
                </div>
                {/*====================  End of header area  ====================*/}
            </div>
        )
    }
}


export default NavBar;