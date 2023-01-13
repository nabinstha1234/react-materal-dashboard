import React from 'react';
import { Button, IconButton } from '@mui/material';
import styles from 'assets/style/styles';
import CloseICon from 'assets/images/close-icon.png';

const ModalTitle = (props) => {
    const { title, onClose, onConfirm, loader, btnText, loadingText } = props;
    return (
        <div className='d-flex modal-head-section border-bottom  align-items-center' >
            <div className='col-6' >
                <span className='page-head' id="modal-modal-title" variant="h6" component="h2">
                    {title}
                </span>
            </div>
            <div className='col-6 d-flex justify-content-end' >
                <Button disabled={loader} onClick={onConfirm} type='submit' variant='contained' sx={styles.btn} >
                    {loader ? loadingText : btnText}
                </Button>
                <IconButton sx={styles.marginLeft30} onClick={onClose} >
                    <img alt='close' src={CloseICon} />
                    {/* <ReactIcon icon={'material-symbols:close'} sx={{ height: 30, width: 30 }} width={30} height={30} /> */}
                </IconButton>
            </div>
        </div>
    )
}

export default ModalTitle