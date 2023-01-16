import React from 'react';
import { Box, Button, Typography, Modal } from '@mui/material';
import styles from 'assets/style/styles';

const InputRow = ({ index, input, handleOnChange }) => {
    return (
        <div className='d-flex pb-20 border-bottom mt-20' >
            <div className='col-md-6' >
                <Typography sx={styles.inputLabel}>Type</Typography>
                <input name='leaveType' value={input.leaveType} onChange={(e) => handleOnChange(e, index)} className='modal-input' type="text" />
            </div>
            <div className='col-md-6' >
                <Typography sx={styles.inputLabel}>Number or days</Typography>
                <input name='days' value={input.days} onChange={(e) => handleOnChange(e, index)} className='modal-input' type="number" />
            </div>
        </div>
    )
}

export default InputRow