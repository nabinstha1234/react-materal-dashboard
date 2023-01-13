import React, { useState } from 'react';
import RolesInputRow from '../../roles/InputRow';
import { Box, Button, Typography, Modal } from '@mui/material';
import styles from 'assets/style/styles';
import { ReactIcon } from 'components/molecules';

const Roles = (props) => {
    const { children, value, index, ...other } = props;

    const [inputs, setInputs] = useState([{
        roleName: "",
    }]);

    const handleAddClick = () => {
        let newInput = { roleName: '' }
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
                            <RolesInputRow
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

export default Roles;