import { Box } from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';
import 'assets/style/MasterPage.css';
// import 'assets/style/Login.css';
// import { Add } from '@mui/icons-material';
import TypesList from './TypesList';
// import styles from 'assets/style/styles';
// import { ReactIcon } from 'components/molecules';
// import Add from 'features/master-page/components/main-add-modal/Add';
import { useDispatch } from 'react-redux';
import { getHolidays, getLeaveTypes, getProjects } from 'features/master-page/Api/masterPage';

const MasterPage = () => {
  const dispatch = useDispatch();
  // const [addModalOpen, setAddModalOpen] = useState(false);

  // const handleAddModalOpen = (e) => {
  //   e.preventDefault();
  //   setAddModalOpen(true);
  // };

  const getTypes = useCallback(async () => {
    await Promise.allSettled([
      dispatch(getHolidays()),
      dispatch(getLeaveTypes()),
      dispatch(getProjects()),
    ]);
  }, [dispatch]);

  useEffect(() => {
    getTypes();
  }, [getTypes]);

  // const handleAddModalClose = () => setAddModalOpen(false);

  return (
    <Box className="master-page-div">
      <Box className="page-head-section">
        <div>
          <div className="page-head">Master Page</div>
          <span className="page-tag-line">Manage your whole data for employee here</span>
        </div>
        {/* <Box>
          <Button
            onClick={() => setAddModalOpen(true)}
            endIcon={<ReactIcon icon={'material-symbols:add'} />}
            variant="contained"
            sx={styles.btn}
          >
            Add
          </Button>
        </Box> */}
      </Box>
      <Box className="main-section padding-24">
        <TypesList />
      </Box>
      {/* <Add open={addModalOpen} handleOpen={handleAddModalOpen} handleClose={handleAddModalClose} /> */}
    </Box>
  );
};

export default MasterPage;
