import React, { useEffect, useState } from 'react';
import { Box, Button, Modal } from '@mui/material';
import styles from 'assets/style/styles';
import ModalTitle from 'features/master-page/components/ModalTitle';
import InputRow from './InputRow';
import { ReactIcon } from 'components/molecules';
import toast from 'react-hot-toast';
// import MasterPageService from 'features/master-page/Api/masterPageService';
// import moment from 'moment';
import { useDispatch } from 'react-redux';
// import { getHolidays } from 'features/master-page/Api/masterPage';

const AddDeductionDefinition = ({ open, selectedItem, handleClose, setEdit }) => {
  const dispatch = useDispatch();

  const [inputs, setInputs] = useState([
    {
      type: '',
      amount: '',
    },
  ]);

  // useEffect(() => {
  //     if (open && edit) {
  //         let date = new Date(selectedItem.holidayDate);
  //         let momentDate = moment(selectedItem.holidayDate);
  //         let dateStr = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
  //         setInputs([
  //             {
  //                 type: selectedItem.type,
  //                 date: dateStr,
  //                 amount: momentDate,
  //                 holidayDate: momentDate.unix() * 1000,
  //                 holidaId: selectedItem._id
  //             }
  //         ])
  //     }
  // }, [open])

  const [loader, setLoader] = useState(false);

  const onClose = () => {
    handleClose();
    setInputs([
      {
        type: '',
        amount: '',
      },
    ]);
  };
  const handleAddClick = () => {
    let newInput = {
      type: '',
      amount: '',
      per: 0,
    };
    setInputs([...inputs, newInput]);
  };

  const handleOnChange = (e, index) => {
    let newInputs = [...inputs];
    newInputs[index][e.target.name] = e.target.value;
    setInputs(newInputs);
  };

  const onConfirm = async (e) => {
    e.preventDefault();
    // const validate = inputs.every((item) => item.type && item.holidayDate && item.amount && item.date);

    // if (!validate) {
    //     toast.error("Please fill all fields");
    //     return
    // }
    // setLoader(true)
    // let dataArr = edit ? [{
    //     type: inputs[0].type,
    //     holidayDate: inputs[0].holidayDate,
    //     holidayId: inputs[0].holidaId
    // }] : inputs.map((item) => {
    //     return {
    //         type: item.type,
    //         holidayDate: item.holidayDate
    //     }
    // })
    // MasterPageService.addHolidays(dataArr)
    //     .then((res) => {
    //         if (res.success) {
    //             toast.success("Holiday(s) added successfully");
    //             onClose();
    //             dispatch(getHolidays())
    //         }
    //         setLoader(false)
    //     })
    //     .catch((err) => {
    //         toast.error("Something went wrong");
    //         setLoader(false);
    //         console.log(err);
    //     })
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={styles.modalBg}
      >
        <Box sx={[styles.modal, { minHeight: '500px', width: '60%', left: '20%' }]}>
          <ModalTitle
            title="Add New Deduction Definition"
            onClose={onClose}
            onConfirm={onConfirm}
            loader={loader}
            btnText={'Confirm'}
            loadingText={'Adding..'}
          />

          <div className="modal-inputs-section overflow-y-auto scrollbar">
            {inputs.map((input, index) => (
              <InputRow
                input={input}
                index={index}
                handleOnChange={handleOnChange}
                // handleOnDateChange={handleOnDateChange}
              />
            ))}
          </div>
          <div>
            <Button
              onClick={handleAddClick}
              variant="outlined"
              className="mt-5"
              sx={[styles.btnOutlined]}
              endIcon={<ReactIcon icon={'material-symbols:add'} />}
            >
              Add
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default AddDeductionDefinition;
