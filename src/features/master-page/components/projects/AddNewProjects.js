import React, { useEffect, useState } from 'react';
import { Box, Button, Modal } from '@mui/material';
import styles from 'assets/style/styles';
import ModalTitle from '../ModalTitle';
import InputRow from './InputRow';
import { ReactIcon } from 'components/molecules';
import MasterPageService from 'features/master-page/Api/masterPageService';
import toast from 'react-hot-toast';
import { getProjects } from 'features/master-page/Api/masterPage';
import { useDispatch } from 'react-redux';
import moment from 'moment';

const AddNewProjects = ({ edit, setEdit, selectedItem, open, handleOpen, handleClose }) => {

    const dispatch = useDispatch();
    const [loader, setLoader] = useState(false);

    const [inputs, setInputs] = useState([{
        client: "",
        dateOfInitiation: "",
        clientPOC: "",
        manager: "",
        dateVal: "",
        pocNumber: 0,
        date: ""
    }]);

    useEffect(() => {
        if (open && edit) {
            let date = new Date(selectedItem.dateOfInitiation)
            let dateStr = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
            setInputs([
                {
                    client: selectedItem.client,
                    dateOfInitiation: moment(selectedItem.dateOfInitiation).unix(),
                    clientPOC: selectedItem.clientPOC,
                    manager: selectedItem.manager,
                    dateVal: moment(selectedItem.dateOfInitiation),
                    pocNumber: selectedItem.pocNumber,
                    date: dateStr,
                    projectID: selectedItem._id
                }
            ])
        }
    }, [open, edit, selectedItem])

    const onClose = () => {
        handleClose()
        if (edit) setEdit(false)
        setInputs([{
            client: "",
            dateOfInitiation: "",
            clientPOC: "",
            manager: "",
            dateVal: "",
            pocNumber: 0,
            date: ""
        }]);
    }
    const handleAddClick = () => {
        let newInput = {
            client: "",
            dateOfInitiation: "",
            clientPOC: "",
            manager: "",
            dateVal: "",
            pocNumber: 0
        }
        setInputs([...inputs, newInput])
    }

    const handleOnChange = (e, index) => {
        let newInputs = [...inputs];
        newInputs[index][e.target.name] = e.target.name === 'pocNumber' ? parseInt(e.target.value) : e.target.value;
        setInputs(newInputs);
    }

    const handleOnDateChange = (val, index) => {
        let newInputs = [...inputs];
        let date = new Date(val)
        let dateStr = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
        newInputs[index]['date'] = dateStr;
        newInputs[index]['dateVal'] = val;
        newInputs[index]['dateOfInitiation'] = val.unix();
        setInputs(newInputs);
    }

    const onConfirm = (e) => {
        e.preventDefault();
        const validate = inputs.every((item) => item.clientPOC && item.dateOfInitiation && item.manager && item.pocNumber && item.client);

        if (!validate) {
            toast.error("Please fill all fields");
            return
        }
        setLoader(true)
        MasterPageService.addProjects(inputs)
            .then((res) => {
                if (res.success) {
                    toast.success(edit ? "Project(s) updated successfully" : "Project(s) added successfully");
                    onClose();
                    dispatch(getProjects())
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
                <Box sx={[styles.modal]}>
                    <ModalTitle title="Add New Projects"
                        onClose={onClose}
                        onConfirm={onConfirm}
                        loader={loader}
                        btnText={edit ? "Update" : "Confirm"}
                        loadingText={edit ? "Updating.." : "Adding.."}
                    />

                    <div className='modal-inputs-section overflow-y-auto scrollbar' style={{ height: "400px" }} >
                        {inputs.map((input, index) => (
                            <InputRow
                                input={input}
                                index={index}
                                handleOnChange={handleOnChange}
                                handleOnDateChange={handleOnDateChange}
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

export default AddNewProjects