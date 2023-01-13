import React, { useState } from 'react';
import { Box, Button, Typography, Modal } from '@mui/material';
import styles from 'assets/style/styles';
// import { Add } from '@mui/icons-material';
import ModalTitle from '../ModalTitle';
import InputRow from './InputRow';
import { ReactIcon } from 'components/molecules';

const AddNewRoles = ({ open, handleOpen, handleClose }) => {


    const [inputs, setInputs] = useState([{
        roleName: "",
    }]);

    const onClose = () => {
        handleClose()
        setInputs([{
            roleName: "",
        }]);
    }
    const handleAddClick = () => {
        let newInput = { roleName: '' }
        setInputs([...inputs, newInput])
    }

    const handleOnChange = (e, index) => {
        let newInputs = [...inputs];
        newInputs[index][e.target.name] = e.target.value;
        setInputs(newInputs);
    }

    const onConfirm = () => {

    }
    return (
        <div>
            <Modal
                open={open}
                onClose={onClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                sx={styles.modalBg}
            >
                <Box sx={styles.modal}>
                    <ModalTitle title="Add New Roles"
                        onClose={onClose}
                        onConfirm={onConfirm}
                    />

                    <div className='modal-inputs-section overflow-y-auto scrollbar' >
                        {inputs.map((input, index) => (
                            <InputRow
                                input={input}
                                index={index}
                                handleOnChange={handleOnChange}
                            />
                        ))}

                    </div>
                    <div>
                        <Button onClick={handleAddClick} variant='outlined' sx={[styles.btnOutlined, styles.mb20]} endIcon={<ReactIcon icon={'material-symbols:add'} />} >
                            Add
                        </Button>
                    </div>
                </Box>
            </Modal>
        </div>
    )
}

export default AddNewRoles