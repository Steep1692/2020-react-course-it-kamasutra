import React, {useEffect, useState} from 'react';
import s from './ProfileStatus.module.css';

const ProfileStatus = (props) => {
    const { status, updateStatus } = props;
    const [ isEditModeActive, setIsEditModeActive ] = useState(false);
    const [ statusTemp, setStatusTemp ] = useState('');

    useEffect(() => {
        setStatusTemp(status);
    }, [status]);

    const activateEditMode = () => {
        setIsEditModeActive(true);
    }
    const deactivateEditMode = () => {
        setIsEditModeActive(false);
    }
    const onInputChange = ({target}) => {
        setStatusTemp(target.value);
    }
    const onInputBlur = () => {
        deactivateEditMode();
        updateStatus(statusTemp);
    }

    return (
        <div>
            { !isEditModeActive &&
                <span onClick={activateEditMode}>{ status }</span>
            }
            { isEditModeActive &&
                <div>
                    <input
                        onBlur={onInputBlur}
                        onChange={onInputChange}
                        type="text"
                        value={statusTemp}
                        autoFocus={true}
                    />
                </div>
            }
        </div>
    );
}

export default ProfileStatus;
