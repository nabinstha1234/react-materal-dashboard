import React, { useState } from 'react';
import ProjectsInputRow from '../../projects/InputRow';
import { Button } from '@mui/material';
import styles from 'assets/style/styles';
import { ReactIcon } from 'components/molecules';

const Projects = (props) => {
    const { children, value, index, inputs, setInputs, ...other } = props;

    const handleAddClick = () => {
        let newInput = {
            client: "",
            dateOfInit: "",
            clientPoc: "",
            manager: "",
            dateVal: "",
            projectPoc: ""
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
        newInputs[index]['dateVal'] = val;
        newInputs[index]['dateOfInitiation'] = val.unix();
        setInputs(newInputs);
    }

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <>
                    <div className='modal-inputs-section overflow-y-auto scrollbar' style={index === 3 && { minHeight: "400px" }}  >
                        {inputs.map((input, index) => (
                            <ProjectsInputRow
                                input={input}
                                index={index}
                                handleOnChange={handleOnChange}
                                handleOnDateChange={handleOnDateChange}
                            />
                        ))}

                    </div>
                    <div className='py-5'>
                        <Button onClick={handleAddClick} variant='outlined' sx={[styles.btnOutlined, styles.mb20]} endIcon={<ReactIcon icon={'material-symbols:add'} />} >
                            Add
                        </Button>
                    </div>
                </>
            )}

        </div>
    );
}

export default Projects;