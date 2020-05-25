import React from 'react';
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

const withRouterRedirect = (Component) => {
    const mapStateToProps = ({auth}) => ({
        isAuth: auth.isAuth,
    });

    return connect(mapStateToProps, {})((props) => {
        if( !props.isAuth ) return <Redirect to="/login"/>

        return <Component/>
    });
};

export default withRouterRedirect;
