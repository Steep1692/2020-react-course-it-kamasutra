import React, {FC, Suspense} from 'react';
import {Route} from "react-router-dom";
import PreLoader from "../../common/preLoader/PreLoader";
// Used required to not to create declaration file for css module
let s = require('./Content.module.css');

const UsersContainer = React.lazy(() => import('../../pages/users/UsersContainer'));
const DialogsContainer = React.lazy(() => import('../../pages/dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('../../pages/profile/ProfileContainer'));
const LoginContainer = React.lazy(() => import('../../pages/login/LoginContainer'));

const Content: FC = () => {
    const ProfilePage = () => <ProfileContainer/>;
    const DialogsPage = () => <DialogsContainer/>;
    const UsersPage = () => <UsersContainer/>;
    const LoginPage = () => <LoginContainer/>;

    return (
        <div className={s.content}>
            <Suspense fallback={<PreLoader/>}>
                <Route
                    exact
                    path="/"
                    render={ProfilePage}
                />
                <Route
                    exact
                    path="/login"
                    render={LoginPage}
                />
                <Route
                    path="/profile/:userId?"
                    render={ProfilePage}
                />
                <Route
                    path="/dialogs"
                    render={DialogsPage}
                />
                <Route
                    path="/users"
                    render={UsersPage}
                />
            </Suspense>
        </div>
    );
};

export default Content;
