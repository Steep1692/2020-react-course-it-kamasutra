import React, {useEffect, useState} from 'react';
import s from './EditableLabel.module.css';

const EditableLabel = (props) => {
    const { label, updateLabel, beforeLabel, canEdit = true } = props;
    const [ isEditModeActive, setIsEditModeActive ] = useState(false);
    const [ labelValueTemp, setLabelValueTemp ] = useState('');

    useEffect(() => {
        setLabelValueTemp(label);
    }, [label]);

    const activateEditMode = () => {
        setIsEditModeActive(true);
    }
    const deactivateEditMode = () => {
        setIsEditModeActive(false);
    }
    const onInputChange = ({target}) => {
        setLabelValueTemp(target.value);
    }
    const onInputBlur = () => {
        deactivateEditMode();
        updateLabel(labelValueTemp);
    }

    return (
        <div>
            <b>{ beforeLabel && `${beforeLabel}: ` }</b>
            { !isEditModeActive &&
                <span onClick={activateEditMode}>{ label || 'empty' }</span>
            }
            { isEditModeActive && canEdit &&
                <div>
                    <input
                        onBlur={onInputBlur}
                        onChange={onInputChange}
                        type="text"
                        value={labelValueTemp}
                        autoFocus={true}
                    />
                </div>
            }
        </div>
    );
}

export default EditableLabel;
