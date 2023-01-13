import React, { useState } from 'react';
import { Box, Tab, Tabs, Modal } from '@mui/material';
import styles from 'assets/style/styles';
import ModalTitle from '../ModalTitle';
import Holidays from './TabPanels/Holidays';
import Leaves from './TabPanels/Leaves';
import Projects from './TabPanels/Projects';
import Roles from './TabPanels/Roles';
import toast from 'react-hot-toast';
import MasterPageService from 'features/master-page/Api/masterPageService';
import { getHolidays, getLeaveTypes, getProjects } from 'features/master-page/Api/masterPage';
import { useDispatch } from 'react-redux';

const Add = ({ open, handleOpen, handleClose }) => {

    const dispatch = useDispatch();

    const [tabIndex, setTabIndex] = useState(0);
    const [holidayInputs, setHolidayInputs] = useState([{
        holidayName: "",
        date: "",
        dateValue: "",
        holidayDate: 0
    }]);
    const [leavesInputs, setLeavesInputs] = useState([{
        leaveType: "",
        days: 0
    }]);
    const [projectInputs, setProjectInputs] = useState([{
        client: "",
        dateOfInitiation: "",
        clientPOC: "",
        manager: "",
        dateVal: "",
        pocNumber: 0,
        date: ""
    }]);
    const [loader, setLoader] = useState(false);

    const onClose = () => {
        setTabIndex(0)
        setHolidayInputs([
            {
                holidayName: "",
                date: "",
                dateValue: "",
                holidayDate: 0
            }
        ]);
        setLeavesInputs([{
            leaveType: "",
            days: 0
        }])
        setProjectInputs([{
            client: "",
            dateOfInitiation: "",
            clientPOC: "",
            manager: "",
            dateVal: "",
            pocNumber: 0,
            date: ""
        }])
        handleClose()
    }

    const handleChange = (event, newValue) => {
        setTabIndex(newValue);
    };

    const handleAddHolidays = async () => {
        const validate = holidayInputs.every((item) => item.holidayName && item.holidayDate && item.dateValue && item.date);

        if (!validate) {
            toast.error("Please fill all fields");
            return
        }
        setLoader(true)
        let dataArr = holidayInputs.map((item) => {
            return {
                holidayName: item.holidayName,
                holidayDate: item.holidayDate
            }
        })
        MasterPageService.addHolidays(dataArr)
            .then((res) => {
                if (res.success) {
                    toast.success("Holiday(s) added successfully");
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

    const handleAddLeaveTypes = async () => {
        const validate = leavesInputs.every((item) => item.leaveType && item.days);

        if (!validate) {
            toast.error("Please fill all fields");
            return
        }
        setLoader(true)
        MasterPageService.addLeaveType(leavesInputs)
            .then((res) => {
                if (res.success) {
                    toast.success("Leave(s) added successfully");
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

    const handleAddProjects = () => {
        const validate = projectInputs.every((item) => item.clientPOC && item.dateOfInitiation && item.manager && item.pocNumber && item.client);

        if (!validate) {
            toast.error("Please fill all fields");
            return
        }
        setLoader(true)
        MasterPageService.addProjects(projectInputs)
            .then((res) => {
                if (res.success) {
                    toast.success("Project(s) added successfully");
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
    const onConfirm = (e) => {
        e.preventDefault();

        if (tabIndex === 0) {
            handleAddHolidays();
        }
        if (tabIndex === 2) {
            handleAddLeaveTypes();
        }
        if (tabIndex === 3) {
            handleAddProjects();
        }
    }

    function a11yProps(index) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
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
                <Box sx={[styles.modal, tabIndex === 3 && { top: "15%" }]}>
                    <ModalTitle title="Add New"
                        onClose={onClose}
                        onConfirm={onConfirm}
                        btnText='Confirm'
                        loadingText="Adding.."
                        loader={loader}
                    />
                    <div>
                        <Tabs sx={styles.tabsStyle} TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
                            value={tabIndex} variant="fullWidth" onChange={handleChange} aria-label="basic tabs example">
                            <Tab label="Holidays" {...a11yProps(0)} />
                            <Tab label="Roles" {...a11yProps(1)} />
                            <Tab label="Leave Type" {...a11yProps(2)} />
                            <Tab label="Projects" {...a11yProps(3)} />
                        </Tabs>
                    </div>
                    <Holidays inputs={holidayInputs} setInputs={setHolidayInputs} value={tabIndex} index={0} />
                    <Roles value={tabIndex} index={1} />
                    <Leaves inputs={leavesInputs} setInputs={setLeavesInputs} value={tabIndex} index={2} />
                    <Projects inputs={projectInputs} setInputs={setProjectInputs} value={tabIndex} index={3} />
                    {/* <div className='modal-inputs-section overflow-y-auto scrollbar' >
                        {inputs.map((input, index) => (
                            <InputRow
                                input={input}
                                index={index}
                                handleOnChange={handleOnChange}
                            />
                        ))}

                    </div> */}

                </Box>
            </Modal>
        </div>
    )
}

export default Add