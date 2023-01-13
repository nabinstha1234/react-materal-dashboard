import React, { useState, useEffect } from 'react';
import { Box, Button, Modal } from '@mui/material';
import styles from 'assets/style/styles';
import ModalTitle from '../ModalTitle';
import InputRow from './InputRow';
import { ReactIcon } from 'components/molecules';
import MasterPageService from 'features/master-page/Api/masterPageService';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { getLeaveTypes } from 'features/master-page/Api/masterPage';

const AddNewLeave = ({ open, handleOpen, handleClose, selectedItem, edit, setEdit }) => {

    const dispatch = useDispatch();

    const [inputs, setInputs] = useState([{
        leaveType: "",
        days: 0
    }]);
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        if (open && edit) {
            setInputs([
                {
                    leaveType: selectedItem.leaveType,
                    leaveId: selectedItem._id,
                    days: selectedItem.leaveDays
                }
            ])
        }
    }, [open])

    const onClose = () => {
        handleClose()
        if (edit) setEdit(false)
        setInputs([{
            leaveType: "",
            days: ""
        }]);
    }
    const handleAddClick = () => {
        let newInput = { leaveType: '', days: '' }
        setInputs([...inputs, newInput])
    }

    const handleOnChange = (e, index) => {
        let newInputs = [...inputs];
        newInputs[index][e.target.name] = e.target.name == 'days' ? parseInt(e.target.value) : e.target.value;
        setInputs(newInputs);
    }
    const onConfirm = (e) => {
        e.preventDefault();
        const validate = inputs.every((item) => item.leaveType && item.days);

        if (!validate) {
            toast.error("Please fill all fields");
            return
        }
        setLoader(true)
        MasterPageService.addLeaveType(inputs)
            .then((res) => {
                if (res.success) {
                    toast.success(edit ? "Leave type updated successfully" : "Leave(s) type added successfully");
                    onClose();
                    dispatch(getLeaveTypes())
                }
                setLoader(false)
            })
            .catch((err) => {
                toast.error("Something went wrong");
                setLoader(false);
                console.log(err);
            })
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
                    <ModalTitle title="Add New Leave Type"
                        onClose={onClose}
                        onConfirm={onConfirm}
                        loader={loader}
                        btnText={edit ? "Update" : "Confirm"}
                        loadingText={edit ? "Updating.." : "Adding.."}
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
                    {!edit && (
                        <div>
                            <Button onClick={handleAddClick} variant='outlined' sx={[styles.btnOutlined, styles.mb20]} endIcon={<ReactIcon icon={'material-symbols:add'} />} >
                                Add
                            </Button>
                        </div>
                    )}
                </Box>
            </Modal>
        </div>
    )
}

export default AddNewLeave