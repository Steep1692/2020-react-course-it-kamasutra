import React, { Suspense } from 'react';
import s from './Content.module.css';
import {Route} from "react-router-dom";
import PreLoader from "../../common/preLoader/PreLoader";

const UsersContainer = React.lazy(() => import('../../pages/users/UsersContainer'));
const DialogsContainer = React.lazy(() => import('../../pages/dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('../../pages/profile/ProfileContainer'));
const LoginContainer = React.lazy(() => import('../../pages/login/LoginContainer'));

const Content = () => {
    const ProfilePage = () => <ProfileContainer/>;
    const DialogsPage = () => <DialogsContainer/>;
    const UsersPage = () => <UsersContainer/>;
    const LoginPage = () => <LoginContainer/>;

    return (
        <div className={s.content}>
            <Suspense fallback={PreLoader}>
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
