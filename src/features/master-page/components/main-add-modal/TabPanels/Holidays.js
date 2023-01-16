import React, { useState } from 'react';
import HolidaysInputRow from '../../holidays/InputRow';
import { Button } from '@mui/material';
import styles from 'assets/style/styles';
import { ReactIcon } from 'components/molecules';

const Holidays = (props) => {
    const { inputs, setInputs, children, value, index, ...other } = props;

    const handleAddClick = () => {
        let newInput = {
            holidayName: "",
            date: "",
            dateValue: "",
            holidayDate: 0
        }
        setInputs([...inputs, newInput])
    }

    const handleOnChange = (e, index) => {
        let newInputs = [...inputs];
        newInputs[index][e.target.name] = e.target.value;
        setInputs(newInputs);
    }
    const handleOnDateChange = (val, index) => {
        let newInputs = [...inputs];
        let date = new Date(val)
        let dateStr = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
        newInputs[index]['date'] = dateStr;
        newInputs[index]['dateValue'] = val;
        newInputs[index]['holidayDate'] = val.unix();
        setInputs(newInputs);
    }

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <>
                    <div className='modal-inputs-section overflow-y-auto scrollbar' >
                        {inputs.map((input, index) => (
                            <HolidaysInputRow
                                input={input}
                                index={index}
                                handleOnChange={handleOnChange}
                                handleOnDateChange={handleOnDateChange}
                            />
                        ))}

                    </div>
                    <div className='py-5'>
                        <Button onClick={handleAddClick} variant='outlined' sx={[styles.btnOutlined, styles.mb20]} endIcon={<ReactIcon icon={'material-symbols:add'} />} >
                            Add
                        </Button>
                    </div>
                </>
            )}

        </div>
    );
}

export default Holidays;