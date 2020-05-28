import React from 'react';
import './App.css';

import HeaderContainer from '../header/HeaderContainer';
import Content from '../content/Content';
import Sidebar from '../sidebar/SidebarContainer';

import {
    HashRouter,
} from 'react-router-dom';
import {connect, ConnectedProps} from 'react-redux';
import {setIsAppInitialized} from '../../../redux/reducers/app';
import PreLoader from '../../common/preLoader/PreLoader';
import {authMe} from '../../../redux/reducers/auth';
import {AppStateType} from '../../../redux/store';


const mapState = ({app}: AppStateType) => ({
    isAppInitialized: app.isAppInitialized,
});
const mapDispatch = {
    setIsAppInitialized,
    authMe,
};
const connector = connect(mapState, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux & {
    isAppInitialized: boolean

    authMe: () => Promise<any>
    setIsAppInitialized: (flag: boolean) => void
}

class App extends React.Component<Props> {
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
            <HashRouter>
                <div className="main-wrap">
                    <HeaderContainer/>
                    <Sidebar/>
                    <Content/>
                </div>
            </HashRouter>
        );
    }
}

export default connector(App);
