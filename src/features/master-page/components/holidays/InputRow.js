import React from 'react';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers';
import { Typography } from '@mui/material';
import styles from 'assets/style/styles';
import { ReactIcon } from 'components/molecules';

const InputRow = ({ handleOnDateChange, index, input, handleOnChange }) => {
    return (
        <div className='d-flex pb-20 border-bottom mt-20' >
            <div className='col-6' >
                <Typography sx={styles.inputLabel}>Name</Typography>
                <input name='holidayName' value={input.holidayName} onChange={(e) => handleOnChange(e, index)} className='modal-input' type="text" />
            </div>
            <div className='col-6' >
                <Typography sx={styles.inputLabel}>Date</Typography>
                <LocalizationProvider dateAdapter={AdapterMoment}>
                    <MobileDatePicker
                        className='modal-input'
                        value={input.dateValue}
                        onChange={(newValue) => {
                            handleOnDateChange(newValue, index)
                        }}
                        renderInput={(params) => <span className='d-flex select-input align-items-center' >
                            <input className='modal-input' readOnly name='date' value={input.date} placeholder='Select' {...params} />
                            {/* <img className='mr-20' src={DownICon} /> */}
                            <div className='mr-20' >
                                <ReactIcon icon={'material-symbols:keyboard-arrow-down-rounded'} />
                            </div>
                        </span>}
                    />
                </LocalizationProvider>
            </div>
        </div>
    )
}

export default InputRow