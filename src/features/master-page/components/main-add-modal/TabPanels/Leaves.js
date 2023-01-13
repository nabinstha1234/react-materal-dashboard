import React, { useState } from 'react';
import LeavesInputRow from '../../leaves/InputRow';
import { Box, Button, Typography, Modal } from '@mui/material';
import styles from 'assets/style/styles';
import { ReactIcon } from 'components/molecules';

const Leaves = (props) => {
    const { inputs, setInputs, children, value, index, ...other } = props;

    const handleAddClick = () => {
        let newInput = { leaveType: '', days: 0 }
        setInputs([...inputs, newInput])
    }

    const handleOnChange = (e, index) => {
        let newInputs = [...inputs];
        newInputs[index][e.target.name] = e.target.value;
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
                            <LeavesInputRow
                                input={input}
                                index={index}
                                handleOnChange={handleOnChange}
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

export default Leaves;