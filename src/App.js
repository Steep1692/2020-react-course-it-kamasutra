import React from 'react';
import './App.css';

import HeaderContainer from "./components/main/header/HeaderContainer";
import Content from "./components/main/content/Content.jsx";
import Sidebar from "./components/main/sidebar/SidebarContainer";

import {
    BrowserRouter,
} from "react-router-dom";
import {connect} from "react-redux";
import {setIsAppInitialized} from "./redux/reducers/app";
import PreLoader from "./components/common/preLoader/PreLoader";
import {authMe} from "./redux/reducers/auth";

class App extends React.Component {
    componentDidMount() {
        this.props.authMe()
            .then(() => {
                this.props.setIsAppInitialized(true);
            })
    }

    render() {
        if( !this.props.isAppInitialized ) {
            return <PreLoader/>
        }

        return (
            <BrowserRouter>
                <div className="main-wrap">
                    <HeaderContainer/>
                    <Sidebar/>
                    <Content/>
                </div>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = ({app}) => ({
    isAppInitialized: app.isAppInitialized,
})

export default connect(mapStateToProps, {
    setIsAppInitialized,
    authMe,
})(App);
