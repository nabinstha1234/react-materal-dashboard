import React, { useEffect, useState } from 'react';
import { Box, Button, Modal } from '@mui/material';
import styles from 'assets/style/styles';
import ModalTitle from '../ModalTitle';
import InputRow from './InputRow';
import { ReactIcon } from 'components/molecules';
import toast from 'react-hot-toast';
import MasterPageService from 'features/master-page/Api/masterPageService';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { getHolidays } from 'features/master-page/Api/masterPage';

const AddNewHoliday = ({ open, selectedItem, handleClose, edit, setEdit }) => {
    const dispatch = useDispatch()

    const [inputs, setInputs] = useState([{
        holidayName: "",
        date: "",
        dateValue: "",
        holidayDate: 0
    }]);

    useEffect(() => {
        if (open && edit) {
            let date = new Date(selectedItem.holidayDate);
            let momentDate = moment(selectedItem.holidayDate);
            let dateStr = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
            setInputs([
                {
                    holidayName: selectedItem.holidayName,
                    date: dateStr,
                    dateValue: momentDate,
                    holidayDate: momentDate.unix(),
                    holidayId: selectedItem._id
                }
            ])
        }
    }, [open, edit, selectedItem])

    const [loader, setLoader] = useState(false);

    const onClose = () => {
        handleClose();
        if (edit) setEdit(false)
        setInputs([{
            holidayName: "",
            date: "",
            dateValue: "",
            holidayDate: 0
        }]);
    }
    const handleAddClick = () => {
        let newInput = {
            holidayName: '', date: '',
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

    const onConfirm = async (e) => {
        e.preventDefault();
        const validate = inputs.every((item) => item.holidayName && item.holidayDate && item.dateValue && item.date);

        if (!validate) {
            toast.error("Please fill all fields");
            return
        }
        setLoader(true)
        let dataArr = edit ? [{
            holidayName: inputs[0].holidayName,
            holidayDate: inputs[0].holidayDate,
            holidayId: inputs[0].holidayId
        }] : inputs.map((item) => {
            return {
                holidayName: item.holidayName,
                holidayDate: item.holidayDate
            }
        })
        MasterPageService.addHolidays(dataArr)
            .then((res) => {
                if (res.success) {
                    toast.success(edit ? "Holiday updates successfully" : "Holiday(s) added successfully");
                    onClose();
                    dispatch(getHolidays())
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
                    <ModalTitle title="Add New Holiday"
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

export default AddNewHoliday