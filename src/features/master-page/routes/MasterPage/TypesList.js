import React, { memo, useState } from 'react'
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, List, ListItem } from '@mui/material';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddNewHoliday from '../../components/holidays/AddNewHoliday';
import styles from 'assets/style/styles';
import AddNewRoles from '../../components/roles/AddNewRoles';
import AddNewLeave from '../../components/leaves/AddNewLeave';
import AddNewProjects from '../../components/projects/AddNewProjects';
import { ReactIcon } from 'components/molecules';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import MasterPageService from 'features/master-page/Api/masterPageService';
import toast from 'react-hot-toast';
import { getHolidays, getLeaveTypes, getProjects } from 'features/master-page/Api/masterPage';

const areHolidaysEqual = (prevProps, nextProps) => {
    let prevHoliday = prevProps.holiday;
    let nextHoliday = nextProps.holiday;
    const matched = Object.keys(prevHoliday).every(key => prevHoliday[key] === nextHoliday[key]);
    return matched;
};

const areLeaveTypesEqual = (prevProps, nextProps) => {
    let prevleave = prevProps.leave;
    let nextleave = nextProps.leave;
    const matched = Object.keys(prevleave).every(key => prevleave[key] === nextleave[key]);
    return matched;
};

const areProjectsEqual = (prevProps, nextProps) => {
    let prevproject = prevProps.project;
    let nextproject = nextProps.project;
    const matched = Object.keys(prevproject).every(key => prevproject[key] === nextproject[key]);
    return matched;
};

const ProjectRow = memo(({ project, index, handleEdit, onProjectDelete, handleAddProjectsOpen }) => {
    return (
        <ListItem key={index} className='types-sub-list justify-content-between'>
            <Box className='d-flex w-50 align-items-center'>
                <span className='types-sub-list-title  w-50'>
                    {project.client}
                </span>
                <span className='fs-12 types-sub-list-title types-sub-list-date' >{moment(project.dateOfInitiation).format("Do MMM YYYY")}</span>
            </Box>
            <Box>
                <Button sx={styles.btnContainedSm} onClick={(e) => {
                    handleEdit(e, project); handleAddProjectsOpen(e)
                }} variant='contained'>Edit</Button>
                <Button sx={[styles.btnContainedSm, { marginLeft: "10px" }]} onClick={(e) => onProjectDelete(e, project._id)} className='bg-red' variant='contained'>Delete</Button>
            </Box>
        </ListItem>
    )
}, areProjectsEqual);

const LeaveTypeRow = memo(({ leave, index, handleAddLeavesOpen, handleEdit, onLeaveTypeDelete }) => {
    return (
        <ListItem key={index} className='types-sub-list justify-content-between'>
            <Box className='d-flex w-50 align-items-center'>
                <span className='types-sub-list-title  w-50'>
                    {leave.leaveType}
                </span>
                <span className='fs-12 types-sub-list-title types-sub-list-date' >{leave.leaveDays || 0} days</span>
            </Box>
            <Box>
                <Button sx={styles.btnContainedSm} onClick={(e) => {
                    handleEdit(e, leave); handleAddLeavesOpen(e)
                }} variant='contained'>Edit</Button>
                <Button sx={[styles.btnContainedSm, { marginLeft: "10px" }]} className='bg-red' onClick={(e) => onLeaveTypeDelete(e, leave._id)} variant='contained'>Delete</Button>
            </Box>
        </ListItem>
    )
}, areLeaveTypesEqual)
const HolidayRow = memo(({ holiday, index, handleEdit, onHolidayDelete, handleAddHolidaysOpen }) => {
    return (
        <ListItem key={index} className='types-sub-list justify-content-between'>
            <Box className='d-flex w-50 align-items-center'>
                <span className='types-sub-list-title  w-50'>
                    {holiday.holidayName}
                </span>
                <span className='fs-12 types-sub-list-title types-sub-list-date' >{moment(holiday.holidayDate).format("Do MMM YYYY")}</span>
            </Box>
            <Box>
                <Button sx={styles.btnContainedSm} onClick={(e) => { handleEdit(e, holiday); handleAddHolidaysOpen(e) }} variant='contained'>Edit</Button>
                <Button sx={[styles.btnContainedSm, { marginLeft: "10px" }]} onClick={(e) => onHolidayDelete(e, holiday._id)} className='bg-red' variant='contained'>Delete</Button>
            </Box>
        </ListItem>
    )
}, areHolidaysEqual);

const TypesList = () => {

    const { holidays, leaveTypes, projects } = useSelector((state) => state.masterPage);
    const dispatch = useDispatch();

    const [expanded, setExpanded] = useState(false);

    const [addHolidaysOpen, setAddHolidaysOpen] = useState(false);
    const [addRolesOpen, setAddRolesOpen] = useState(false);
    const [addLeavesOpen, setAddLeavesOpen] = useState(false);
    const [addProjectsOpen, setAddProjectsOpen] = useState(false);
    const [edit, setEdit] = useState(false);
    const [selectedItem, setSelectedItem] = useState({});

    const handleAddHolidaysOpen = (e) => {
        e.stopPropagation();
        setAddHolidaysOpen(true);
    }
    const handleAddRolesOpen = (e) => {
        e.stopPropagation();
        setAddRolesOpen(true);
    }
    const handleAddLeavesOpen = (e) => {
        e.stopPropagation();
        setAddLeavesOpen(true);
    }
    const handleAddProjectsOpen = (e) => {
        e.stopPropagation();
        setAddProjectsOpen(true);
    }
    const handleAddHolidaysClose = () => setAddHolidaysOpen(false);
    const handleAddRolesClose = () => setAddRolesOpen(false);
    const handleAddLeavesClose = () => setAddLeavesOpen(false);
    const handleAddProjectsClose = () => setAddProjectsOpen(false);

    const handleEdit = (e, item) => {
        e.preventDefault()
        setEdit(true);
        setSelectedItem(item);
    }

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const onHolidayDelete = async (e, holidayId) => {
        e.preventDefault();
        let confirm = window.confirm("Are you sure you want to delete this holiday?");
        if (!confirm) return;
        try {
            MasterPageService.deletHoliday({
                holidayId
            }).then((res) => {
                if (res.success) {
                    toast.success("Holiday deleted Successfully!");
                    dispatch(getHolidays())
                }
            })
        }
        catch (e) {
            console.log(e)
        }
    }
    const onProjectDelete = async (e, projectId) => {
        e.preventDefault();
        let confirm = window.confirm("Are you sure you want to delete this project?");
        if (!confirm) return;
        try {
            MasterPageService.deletProject({
                projectId
            }).then((res) => {
                if (res.success) {
                    toast.success("Project deleted Successfully!");
                    dispatch(getProjects())
                }
            })
        }
        catch (e) {
            console.log(e)
        }
    }
    const onLeaveTypeDelete = async (e, leaveId) => {
        e.preventDefault();
        let confirm = window.confirm("Are you sure you want to delete this leave type?");
        if (!confirm) return;
        try {
            MasterPageService.deletLeaveType({
                leaveId
            }).then((res) => {
                if (res.success) {
                    toast.success("Leave type deleted Successfully!");
                    dispatch(getLeaveTypes())
                }
            })
        }
        catch (e) {
            console.log(e)
        }
    }


    return (
        <div>
            <Accordion sx={[styles.card, styles.mb20]} expanded={expanded === 'holidays'} onChange={handleChange('holidays')}>
                <AccordionSummary
                    expandIcon={<ReactIcon height={30} width={30} icon={'ic:round-expand-more'} />}
                    aria-controls="holidaysbh-content"
                    id="holidaysbh-header"
                    className='types-accordian-head'
                >
                    <div style={{ justifyContent: 'center' }}>
                        <span className='types-according-title' >
                            HOLIDAYS
                        </span>
                        <span className='badge-bg types-accordian-badge' >
                            {holidays?.length}
                        </span>
                    </div>
                    <Box className='mr-50'>
                        <Button onClick={handleAddHolidaysOpen} sx={styles.btnOutlinedSm} variant='outlined'>Add</Button>
                    </Box>
                </AccordionSummary>
                <AccordionDetails>
                    <List>
                        {holidays?.map((holiday, index) => {
                            return <HolidayRow handleEdit={handleEdit} onHolidayDelete={onHolidayDelete} handleAddHolidaysOpen={handleAddHolidaysOpen} holiday={holiday} index={index} />
                        })}
                    </List>
                </AccordionDetails>
            </Accordion>
            {/* <Accordion sx={[styles.card, styles.mb20]} expanded={expanded === 'roles'} onChange={handleChange('roles')}>
                <AccordionSummary
                    expandIcon={<ReactIcon height={30} width={30} icon={'ic:round-expand-more'} />}
                    aria-controls="rolesbh-content"
                    id="rolesbh-header"
                    className='types-accordian-head'
                >
                    <div style={{ justifyContent: 'center' }}>
                        <span className='types-according-title' >
                            Roles
                        </span>
                        <span className='badge-bg types-accordian-badge' >
                            4
                        </span>

                    </div>
                    <Box className='mr-50'>
                        <Button onClick={handleAddRolesOpen} sx={styles.btnOutlinedSm} variant='outlined'>Add</Button>
                    </Box>
                </AccordionSummary>
                <AccordionDetails>
                    <List>
                        {[0, 1, 2, 3].map((value) => {
                            return (
                                <ListItem className='types-sub-list justify-content-between'>
                                    <Box className='d-flex w-50 align-items-center'>
                                        <span className='types-sub-list-title  w-50'>
                                            Christmas eve
                                        </span>
                                    </Box>
                                    <Box>
                                        <Button sx={styles.btnContainedSm} onClick={handleEdit} variant='contained'>Edit</Button>
                                        <Button sx={[styles.btnContainedSm, { marginLeft: "10px" }]} className='bg-red' variant='contained'>Delete</Button>
                                    </Box>
                                </ListItem>
                            );
                        })}
                    </List>
                </AccordionDetails>
            </Accordion> */}
            <Accordion sx={[styles.card, styles.mb20]} expanded={expanded === 'leave-types'} onChange={handleChange('leave-types')}>
                <AccordionSummary
                    expandIcon={<ReactIcon height={30} width={30} icon={'ic:round-expand-more'} />}
                    aria-controls="leave-typesbh-content"
                    id="leave-typesbh-header"
                    className='types-accordian-head'
                >
                    <div style={{ justifyContent: 'center' }}>
                        <span className='types-according-title' >
                            Leave types
                        </span>
                        <span className='badge-bg types-accordian-badge' >
                            {leaveTypes?.length}
                        </span>

                    </div>
                    <Box className='mr-50'>
                        <Button onClick={handleAddLeavesOpen} sx={styles.btnOutlinedSm} variant='outlined'>Add</Button>
                    </Box>
                </AccordionSummary>
                <AccordionDetails>
                    <List>
                        {leaveTypes?.map((leave, index) => {
                            return (
                                <LeaveTypeRow handleAddLeavesOpen={handleAddLeavesOpen} handleEdit={handleEdit} onLeaveTypeDelete={onLeaveTypeDelete} leave={leave} index={index} />
                            );
                        })}
                    </List>
                </AccordionDetails>
            </Accordion>
            <Accordion sx={[styles.card, styles.mb20]} expanded={expanded === 'projects'} onChange={handleChange('projects')}>
                <AccordionSummary
                    expandIcon={<ReactIcon height={30} width={30} icon={'ic:round-expand-more'} />}
                    aria-controls="projectsbh-content"
                    id="projectssbh-header"
                    className='types-accordian-head'
                >
                    <div style={{ justifyContent: 'center' }}>
                        <span className='types-according-title' >
                            Projects
                        </span>
                        <span className='badge-bg types-accordian-badge' >
                            {projects?.length || 0}
                        </span>

                    </div>
                    <Box className='mr-50'>
                        <Button onClick={handleAddProjectsOpen} sx={styles.btnOutlinedSm} variant='outlined'>Add</Button>
                    </Box>
                </AccordionSummary>
                <AccordionDetails>
                    <List>
                        {projects.map((project, index) => {
                            return (
                                <ProjectRow handleEdit={handleEdit} onProjectDelete={onProjectDelete} handleAddProjectsOpen={handleAddProjectsOpen} project={project} index={index} />
                            );
                        })}
                    </List>
                </AccordionDetails>
            </Accordion>
            <AddNewHoliday selectedItem={selectedItem} edit={edit} setEdit={setEdit} open={addHolidaysOpen} handleOpen={handleAddHolidaysOpen} handleClose={handleAddHolidaysClose} />
            <AddNewRoles open={addRolesOpen} handleOpen={handleAddRolesOpen} handleClose={handleAddRolesClose} />
            <AddNewLeave selectedItem={selectedItem} edit={edit} setEdit={setEdit} open={addLeavesOpen} handleOpen={handleAddLeavesOpen} handleClose={handleAddLeavesClose} />
            <AddNewProjects selectedItem={selectedItem} edit={edit} setEdit={setEdit} open={addProjectsOpen} handleOpen={handleAddProjectsOpen} handleClose={handleAddProjectsClose} />
        </div>
    )
}

export default TypesList