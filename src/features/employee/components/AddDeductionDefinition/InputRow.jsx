import React from 'react';
import { Typography, Select, MenuItem } from '@mui/material';
import styles from 'assets/style/styles';

const InputRow = ({ index, input, handleOnChange }) => {
  return (
    <div className="d-flex pb-20 border-bottom mt-20">
      <div className="col-6">
        <Typography sx={styles.inputLabel}>Definition Type</Typography>
        <Select
          labelId="demo-customized-select-label"
          id="demo-customized-select"
          value={10}
          sx={{
            '.MuiOutlinedInput-notchedOutline': {
              border: 'none',
            },
          }}
          className="modal-input select-input"
          onChange={() => {}}
        >
          <MenuItem value="">
            <em>Select</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </div>
      <div className={input.per != undefined ? 'col-3' : 'col-6'}>
        <Typography sx={styles.inputLabel}>Amount</Typography>
        <input
          name="amount"
          defaultValue={input.amount}
          value={input.amount}
          type="number"
          onChange={(e) => handleOnChange(e, index)}
          className="modal-input"
        />
      </div>
      {input.per !== undefined && (
        <div className={'col-3'}>
          <Typography sx={styles.inputLabel}>Percentage</Typography>
          <input
            name="per"
            defaultValue={input.per}
            value={input.per}
            type="number"
            onChange={(e) => handleOnChange(e, index)}
            className="modal-input"
          />
        </div>
      )}
    </div>
  );
};

export default InputRow;
