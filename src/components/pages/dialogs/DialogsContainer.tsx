import React from 'react'
import s from './DialogsContainer.module.css'
import Dialog from './dialog/Dialog'
import {sendMessage} from '../../../redux/reducers/dialogsReducer'
import {connect, ConnectedProps} from 'react-redux'
import DialogsRow from './dialogsRow/DialogsRow'
import withAuthRedirect from '../../hocs/withAuthRedirect'
import {DialogsRowType, DialogType} from '../../../models/dialogs'
import {AppStateType} from '../../../redux/store'

const mapState = ({dialogsReducer}: AppStateType) => ({
    dialogs: dialogsReducer.dialogs,
    dialog: dialogsReducer.dialog,
})
const mapDispatch = {
    sendMessage,
}
const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux & {
    dialog: DialogType
    dialogs: DialogsRowType
}

class DialogsContainer extends React.Component<Props> {
    onMessageFormSubmit = ({messageText}: any) => {
        this.props.sendMessage(messageText)
    }

    render() {
        const {
            dialog,
            dialogs,
        } = this.props

        return (
            <div className={s.dialogs}>
                <DialogsRow dialogs={dialogs}/>
                <Dialog
                    dialog={dialog}
                    onMessageFormSubmit={this.onMessageFormSubmit}
                />
            </div>
        )
    }
}

export default connector(withAuthRedirect(DialogsContainer))
