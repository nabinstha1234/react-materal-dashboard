import React from 'react';
import { Button, IconButton } from '@mui/material';
import styles from 'assets/style/styles';
import CloseICon from 'assets/images/close-icon.png';

const ModalTitle = (props) => {
  const { title, onClose, subTitle1, subTitle2, loader, btnText } = props;
  return (
    <div className="border-bottom">
      <div className="d-flex mb-0 modal-head-section align-items-center pb-2">
        <div className="col-6">
          <span className="page-head" id="modal-modal-title" variant="h6" component="h2">
            {title}
          </span>
        </div>
        <div className="col-6 d-flex justify-content-end">
          {/* <Button
          disabled={loader}
          onClick={onConfirm}
          type="submit"
          variant="contained"
          sx={styles.btn}
        >
          {btnText}
        </Button> */}
          <IconButton onClick={onClose}>
            <img alt="close" src={CloseICon} />
            {/* <ReactIcon icon={'material-symbols:close'} sx={{ height: 30, width: 30 }} width={30} height={30} /> */}
          </IconButton>
        </div>
      </div>
      <div className="col-8 pb-5">
        <span style={{ color: '#F75B4F', fontSize: '16px', fontWeight: '500' }}>{subTitle1}</span>
        <br></br>
        <span style={{ color: '#F75B4F', fontSize: '16px', fontWeight: '500' }}>{subTitle2}</span>
      </div>
    </div>
  );
};

export default ModalTitle;
