import React, { memo, useEffect, useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
  Chip,
  IconButton,
  Modal,
} from '@mui/material';
import styles from 'assets/style/styles';
import { ReactIcon } from 'components/molecules';
import Download from 'assets/images/download.png';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import LeaveManagementService from 'features/leave-management/Api/leaveManagementService';
import toast from 'react-hot-toast';
import { getLeaves } from 'features/leave-management/Api/leaveManagement';
import ModalTitle from 'features/master-page/components/ModalTitle';

function createData(name, designation, category, type, duration, reason, attachment, status) {
  return { name, designation, category, type, duration, reason, attachment, status };
}

let rows = [
  createData(
    'Abhisekh Sahoo',
    'Front-end Developer',
    'Medical',
    'First Half',
    '02/12/2022 - 04/12/2022',
    'Foreign Trip',
    'Grad_cert',
    'approved'
  ),
  createData(
    'Abhisekh Sahoo',
    'Front-end Developer',
    'Medical',
    'First Half',
    '02/12/2022 - 04/12/2022',
    'Foreign Trip',
    'Grad_cert',
    'pending'
  ),
  createData(
    'Abhisekh Sahoo',
    'Front-end Developer',
    'Medical',
    'First Half',
    '02/12/2022 - 04/12/2022',
    'Foreign Trip',
    'Grad_cert',
    'rejected'
  ),
  createData(
    'Abhisekh Sahoo',
    'Front-end Developer',
    'Medical',
    'First Half',
    '02/12/2022 - 04/12/2022',
    'Foreign Trip',
    'Grad_cert',
    'approved'
  ),
  createData(
    'Abhisekh Sahoo',
    'Front-end Developer',
    'Medical',
    'First Half',
    '02/12/2022 - 04/12/2022',
    'Foreign Trip',
    'Grad_cert',
    'pending'
  ),
];
const areItemsEqual = (prevProps, nextProps) => {
  const matched = prevProps.userId === nextProps.userId && prevProps.status === nextProps.status;

  return matched;
};
const Row = memo(({ row, index, onApprove, onOpen }) => {
  return (
    <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
      <TableCell component="th">
        <Box className="d-flex">
          <ListItemAvatar sx={styles.listAvatar}>
            <Avatar
              sx={{
                height: '48px',
                width: '48px',
              }}
              alt={row.name}
              src={row.avatar}
            />
          </ListItemAvatar>
          <Box>
            <ListItemText sx={styles.avatarName} primary={row.name} className="align-self-center" />
            <Box>
              <Typography sx={styles.avatarSubHead} component="p" color="text.primary">
                {row.designation}
              </Typography>
            </Box>
          </Box>
        </Box>
      </TableCell>
      <TableCell align="left">
        <Chip sx={styles.chip} label={row.dayType} variant="outlined" />
      </TableCell>
      <TableCell align="left">
        <Chip sx={styles.chip} label={row.leaveType} variant="outlined" />
      </TableCell>
      <TableCell align="left">
        {moment(row.from).format('DD/MM/YYYY')} - {moment(row.to).format('DD/MM/YYYY')}
      </TableCell>
      <TableCell align="left">{row.reason}</TableCell>
      <TableCell align="left">
        <div className="d-flex">
          <div className="col-9 d-flex align-items-center">
            {row.document !== '' && (
              <ReactIcon
                color="#F75B4F"
                sx={{ marginRight: '10px' }}
                icon={'material-symbols:picture-as-pdf-outline'}
              />
            )}
            <p className="m-0">
              {row.document ? String(row.document).substring(0, 9) + '..' : 'N/A'}
            </p>
          </div>
          {row.document !== '' && (
            <div className="col-3">
              <a href={row.document} download>
                <IconButton>
                  <img alt="download" src={Download} />
                </IconButton>
              </a>
            </div>
          )}
        </div>
      </TableCell>
      <TableCell align="left">
        <div className="d-flex">
          {String(row.status).toLowerCase() === 'approved' ? (
            <div className="col-12">
              <Chip
                onClick={(e) => {}}
                sx={[
                  styles.chip,
                  {
                    width: '100%',
                    backgroundColor: 'rgba(5, 162, 77, 0.15)',
                    color: '#05A24D',
                    borderColor: '#05A24D',
                    '&&:hover': {
                      background: 'rgba(5, 162, 77, 0.15)',
                    },
                  },
                ]}
                label={'Approved'}
                variant="outlined"
              />
            </div>
          ) : (
            <>
              {String(row.status).toLowerCase() === 'rejected' ? (
                <div className="col-12">
                  <Chip
                    onClick={() => {}}
                    sx={[
                      styles.chip,
                      {
                        width: '100%',
                        backgroundColor: 'rgba(247, 91, 79, 0.15)',
                        color: '#F75B4F',
                        borderColor: '#F75B4F',
                        '&&:hover': {
                          background: 'rgba(247, 91, 79, 0.15)',
                        },
                      },
                    ]}
                    label={'Rejected'}
                    variant="outlined"
                  />
                </div>
              ) : (
                <>
                  <div className="col-6 d-flex justify-content-center">
                    <Chip
                      onClick={(e) => onApprove(e, row.userId)}
                      sx={[
                        styles.chip,
                        {
                          width: '100%',
                          backgroundColor: '#05A24D',
                          color: '#fff',
                          borderColor: '#05A24D',
                          '&&:hover': {
                            background: '#05A24D',
                          },
                        },
                      ]}
                      label={'Approve'}
                      variant="outlined"
                    />
                  </div>
                  <div className="px-1"></div>
                  <div className="col-6 d-flex justify-content-center">
                    <Chip
                      onClick={(e) => onOpen(row)}
                      sx={[
                        styles.chip,
                        {
                          width: '100%',
                          backgroundColor: '#F75B4F',
                          color: '#fff',
                          borderColor: '#F75B4F',
                          '&&:hover': {
                            background: '#F75B4F',
                          },
                        },
                      ]}
                      label={'Reject'}
                      variant="outlined"
                    />
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </TableCell>
    </TableRow>
  );
}, areItemsEqual);

const DataTable = ({ tabIndex }) => {
  const { leaves } = useSelector((state) => state.leaveManagement);
  const dispatch = useDispatch();

  const [tabStatus, setTabStatus] = useState('all');
  const [open, setOpen] = useState(false);
  const [rejectReason, setRejectReason] = useState('');
  const [selectedItem, setSelectedItem] = useState({});
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    let tabStatus =
      tabIndex === 0
        ? 'all'
        : tabIndex === 1
        ? 'pending'
        : tabIndex === 2
        ? 'approved'
        : 'rejected';
    setTabStatus(tabStatus);
  }, [tabIndex]);

  function getRows(rows) {
    if (tabStatus === 'all') return rows;
    else return rows.filter((item) => String(item.status).toLowerCase() === tabStatus);
  }

  const onClose = () => {
    setOpen(false);
    setSelectedItem({});
    setRejectReason('');
  };
  const handleOpen = (item) => {
    setSelectedItem(item);
    setOpen(true);
  };

  const onConfirm = (e) => {
    onApprove(e, '', 'false');
  };

  const onApprove = async (e, userId = '', approve = 'true') => {
    e.preventDefault();
    setLoader(true);
    let data = {
      userId: userId || selectedItem.userId,
      approve,
    };
    if (rejectReason && approve === 'false') data.rejectReason = rejectReason;
    await LeaveManagementService.approveLeave(data)
      .then((res) => {
        if (res.message) {
          toast.success(approve === 'true' ? 'Leave approved' : 'Leave rejected');
          dispatch(getLeaves());
          setLoader(false);
          if (approve === 'false') onClose();
        }
      })
      .catch((err) => {
        toast.error('Something went wrong');
        console.log(err);
        setLoader(false);
      });
  };

  return (
    <div>
      <TableContainer component={Paper}>
        <Table aria-label="table">
          <TableHead>
            <TableRow>
              <TableCell sx={[styles.tableHead, styles.bgWhite]}>USERS</TableCell>
              <TableCell sx={[styles.tableHead, styles.bgWhite]} align="left" size="small">
                CATEGORY
              </TableCell>
              <TableCell sx={[styles.tableHead, styles.bgWhite]} align="left">
                TYPE
              </TableCell>
              <TableCell sx={[styles.tableHead, styles.bgWhite]} align="left">
                DURATION
              </TableCell>
              <TableCell sx={[styles.tableHead, styles.bgWhite]} align="left">
                REASON
              </TableCell>
              <TableCell sx={[styles.tableHead, styles.bgWhite]} align="left">
                ATTACHMENT
              </TableCell>
              <TableCell sx={[styles.tableHead, styles.bgWhite]} align="left">
                STATUS
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {getRows(leaves).map((row, index) => {
              return <Row row={row} index={index} onOpen={handleOpen} onApprove={onApprove} />;
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={styles.modalBg}
      >
        <Box sx={styles.modal}>
          <ModalTitle
            title="Reject Leave"
            onClose={onClose}
            onConfirm={onConfirm}
            loader={loader}
            btnText={'Confirm'}
            loadingText={'Rejecting..'}
          />

          <div className="modal-inputs-section overflow-y-auto scrollbar">
            <Typography sx={styles.inputLabel}>Reject Reason</Typography>
            <input
              name="rejectReason"
              value={rejectReason}
              onChange={(e) => setRejectReason(e.target.value)}
              className="modal-input"
              type="text"
            />
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default DataTable;
