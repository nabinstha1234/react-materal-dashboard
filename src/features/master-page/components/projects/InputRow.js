import React from 'react';
// import DownICon from '../../../../assets/images/down-icon.png';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers';
import { Typography } from '@mui/material';
import styles from 'assets/style/styles';
import { ReactIcon } from 'components/molecules';

const InputRow = ({ index, input, handleOnChange, handleOnDateChange }) => {
    return (
        <div className='pb-20 border-bottom mt-20' >
            <div className='d-flex pb-20'>
                <div className='col-6' >
                    <Typography sx={styles.inputLabel}>Client</Typography>
                    <input name='client' value={input.client} onChange={(e) => handleOnChange(e, index)} className='modal-input' type="text" />
                </div>
                <div className='col-6' >
                    <Typography sx={styles.inputLabel}>Date of Initiation</Typography>
                    <LocalizationProvider dateAdapter={AdapterMoment}>
                        <MobileDatePicker
                            className='modal-input'
                            value={input.dateVal}
                            onChange={(newValue) => {
                                handleOnDateChange(newValue, index)
                            }}
                            renderInput={(params) => <span className='d-flex select-input align-items-center' >
                                <input className='modal-input' name='date' value={input.date} {...params} />
                                {/* <img className='mr-20' src={DownICon} /> */}
                                <div className='mr-20' >
                                    <ReactIcon icon={'material-symbols:keyboard-arrow-down-rounded'} />
                                </div>
                            </span>}
                        />
                    </LocalizationProvider>
                </div>
            </div>
            <div className='d-flex pb-20'>
                <div className='col-6' >
                    <Typography sx={styles.inputLabel}>Client POC</Typography>
                    <input name='clientPOC' value={input.clientPOC} onChange={(e) => handleOnChange(e, index)} className='modal-input' type="text" />
                </div>
                <div className='col-6' >
                    <Typography sx={styles.inputLabel}>Manager</Typography>
                    <input name='manager' value={input.manager} onChange={(e) => handleOnChange(e, index)} className='modal-input' type="text" />
                </div>
            </div>
            <div className='d-flex pb-20'>
                <div className='col-6' >
                    <Typography sx={styles.inputLabel}>POC Number</Typography>
                    <input name='pocNumber' value={input.pocNumber} onChange={(e) => handleOnChange(e, index)} className='modal-input' type="number" />
                </div>
            </div>
        </div>
    )
}

export default InputRow