import React from 'react';
// import DownICon from '../../../../assets/images/down-icon.png';
import { Typography } from '@mui/material';
import styles from 'assets/style/styles';

const InputRow = ({ index, input, handleOnChange }) => {
    return (
        <div className='pb-20 border-bottom mt-20' >
            {/* <div className='col-6' > */}
            <Typography sx={styles.inputLabel}>Role Name</Typography>
            <input name='roleName' value={input.roleName} onChange={(e) => handleOnChange(e, index)} className='modal-input w-100' type="text" />
            {/* </div> */}
        </div>
    )
}

export default InputRow