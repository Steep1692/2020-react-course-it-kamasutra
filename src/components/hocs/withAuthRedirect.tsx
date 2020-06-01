import React, {FC} from 'react'
import {connect, ConnectedProps} from "react-redux"
import {Redirect} from "react-router-dom"
import {getIsAuth} from "../../redux/selectors/auth"
import {AppStateType} from "../../redux/store"

const withRouterRedirect = (Component: typeof React.Component) => {
    const mapState = (state: AppStateType) => ({
        isAuth: getIsAuth(state),
    })

    const connector = connect(mapState, {})

    type PropsFromRedux = ConnectedProps<typeof connector>
    type Props = PropsFromRedux

    const HOC: FC<Props> = (props) => {
        if( !props.isAuth ) return <Redirect to="/login"/>

        return <Component/>
    }

    return connector(HOC)
}

export default withRouterRedirect