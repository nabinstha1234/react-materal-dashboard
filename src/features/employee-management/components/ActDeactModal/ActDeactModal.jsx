import React from 'react';
import { Box, Button, Modal } from '@mui/material';
import styles from 'assets/style/styles';
import { ModalTitle } from '../ModalTitle';

const ActDeactModal = ({ open, onClose, user }) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={styles.modalBg}
      >
        <Box sx={[styles.modal, { minHeight: '300px' }]}>
          <ModalTitle
            title={`${user.status === 'active' ? 'Deactivate' : 'Reactivate'} account`}
            subTitle1={`Are you sure you want to ${
              user.status === 'active' ? 'deactivate' : 'reactivate'
            } this account?`}
            subTitle2={``}
            onClose={onClose}
          />

          {/* <div className="modal-inputs-section overflow-y-auto scrollbar"></div> */}
          <div className="d-flex justify-content-center mt-5">
            <div className="mx-2">
              <Button
                variant="outlined"
                sx={[styles.btnOutlined]}
                onClick={onClose}
                //   endIcon={<ReactIcon icon={'material-symbols:add'} />}
              >
                Cancel
              </Button>
            </div>
            <div>
              <Button
                variant="contained"
                sx={[
                  styles.btn,
                  { backgroundColor: user.status === 'active' ? '#F75B4F' : '#05A24D' },
                ]}
                //   endIcon={<ReactIcon icon={'material-symbols:add'} />}
              >
                Confirm
              </Button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default ActDeactModal;
