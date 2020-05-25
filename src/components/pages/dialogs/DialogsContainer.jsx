import React from 'react';
import s from './DialogsContainer.module.css';
import Dialog from "./dialog/Dialog";
import {sendMessage} from "../../../redux/reducers/dialogsReducer";
import {connect} from "react-redux";
import DialogsRow from "./dialogsRow/DialogsRow";
import withAuthRedirect from "../../hocs/withAuthRedirect";
import {compose} from "redux";

class DialogsContainer extends React.Component {
    onMessageFormSubmit = ({messageText}) => {
        this.props.sendMessage(messageText);
    }

    render() {
        const {
            dialog,
            dialogs,
            textareaValue,
        } = this.props;

        return (
            <div className={s.dialogs}>
                <DialogsRow dialogs={dialogs}/>
                <Dialog
                    dialog={dialog}
                    textareaValue={textareaValue}
                    onMessageFormSubmit={this.onMessageFormSubmit}
                />
            </div>
        );
    }
}

const mapStateToProps = ({dialogsReducer}) => ({
    dialogs: dialogsReducer.dialogs,
    dialog: dialogsReducer.dialog,
});

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {
        sendMessage,
    })
)(DialogsContainer);
