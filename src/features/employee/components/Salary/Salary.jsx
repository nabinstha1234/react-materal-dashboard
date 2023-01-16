import { Button, Typography } from '@mui/material';
import React, { useState } from 'react';
import styles from 'assets/style/styles';
import { AddEarningDefinition } from '../AddEarningDefinition';
import { AddDeductionDefinition } from '../AddDeductionDefinition';

function createData(type, amount) {
  return { type, amount };
}

const earnings = [
  createData('Basic', 15000),
  createData('Dearness Allowance', 5000),
  createData('House Rent Allowance', 10000),
  createData('Other Allowance', 10000),
  createData('All Cash Reimbursements', 5000),
  createData('LTA*', 800),
  createData('Medical*', 800),
  createData('Arrears', 0),
];

const Salary = ({ value, index }) => {
  const [addIncomeOpen, setAddIncomeOpen] = useState(false);
  const [addDeductionOpen, setAddDeductionOpen] = useState(false);

  const handleAddIncomeOpen = () => setAddIncomeOpen(true);
  const handleAdddDeductionOpen = () => setAddDeductionOpen(true);

  const handleAddDeductionClose = () => setAddDeductionOpen(false);
  const handleAddIncomeClose = () => setAddIncomeOpen(false);

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      //   {...other}
    >
      {value === index && (
        <div className="px-2">
          <div className="row">
            {/* Earning definition start */}
            <div className="col-md-6 pt-2 px-0">
              <div className="d-flex justify-content-between border px-4 py-4 align-items-center">
                <Typography sx={{ color: '#000F28', fontWeight: '600' }}>
                  Earning Definition
                </Typography>
                <Button onClick={handleAddIncomeOpen} sx={styles.btn} variant="contained">
                  Add New
                </Button>
              </div>
              <div className="border px-4 py-4 align-items-center">
                <div className="d-flex justify-content-between align-items-center">
                  <Typography sx={{ color: '#05A24D', fontWeight: '600' }}>EARNING</Typography>
                  <Typography sx={{ color: '#000F28', fontWeight: '600' }}>PERMONTH</Typography>
                </div>
                <div
                  className="mt-4 scrollbar"
                  style={{ maxHeight: '250px', minHeight: '250px', overflowY: 'scroll' }}
                >
                  {earnings.map((item) => (
                    <div className="d-flex justify-content-between align-items-center mt-2">
                      <Typography sx={styles.fs14Dark}>{item.type}</Typography>
                      <Typography sx={styles.fs14Dark}>
                        {String(parseFloat(item.amount).toFixed(2)).replace(
                          /(\d)(?=(\d\d)+\d$)/g,
                          '$1,'
                        )}
                      </Typography>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Earning definition end */}
            {/* Deduction definition start */}
            <div className="col-md-6 pt-2 px-0">
              <div className="d-flex justify-content-between border px-4 py-4 align-items-center">
                <Typography sx={{ color: '#000F28', fontWeight: '600' }}>
                  Deduction Defination
                </Typography>
                <Button onClick={handleAdddDeductionOpen} sx={styles.btn} variant="contained">
                  Add New
                </Button>
              </div>
              <div className="border px-4 py-4 align-items-center">
                <div className="d-flex justify-content-between align-items-center">
                  <Typography sx={{ color: '#F75B4F', fontWeight: '600' }}>DEDUCTION</Typography>
                  <Typography sx={{ color: '#000F28', fontWeight: '600' }}>PERMONTH</Typography>
                </div>
                <div
                  className="mt-4 scrollbar"
                  style={{ maxHeight: '250px', minHeight: '250px', overflowY: 'scroll' }}
                >
                  {earnings.map((item) => (
                    <div className="d-flex justify-content-between align-items-center mt-2">
                      <Typography sx={styles.fs14Dark}>{item.type}</Typography>
                      <Typography sx={styles.fs14Dark}>
                        {String(parseFloat(item.amount).toFixed(2)).replace(
                          /(\d)(?=(\d\d)+\d$)/g,
                          '$1,'
                        )}
                      </Typography>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Deduction definition end */}
          </div>
          <div className="border-bottom py-4 px-4">
            <div className="d-flex justify-content-between align-items-center">
              <Typography sx={{ color: '#05A24D', fontWeight: '600' }}>Gross Earning:</Typography>
              <Typography sx={{ color: '#05A24D', fontWeight: '600' }}>46,600.00</Typography>
            </div>
            <div className="d-flex justify-content-between pt-3 align-items-center">
              <Typography sx={{ color: '#F75B4F', fontWeight: '600' }}>Gross Deduction:</Typography>
              <Typography sx={{ color: '#F75B4F', fontWeight: '600' }}>46,600.00</Typography>
            </div>
          </div>
          <div className="d-flex justify-content-between px-4 pt-3 align-items-center">
            <Typography sx={{ color: '#000F28', fontWeight: '600' }}>Net Salary Payable</Typography>
            <Typography sx={{ color: '#05A24D', fontWeight: '600' }}>46,600.00</Typography>
          </div>
          <AddEarningDefinition open={addIncomeOpen} handleClose={handleAddIncomeClose} />
          <AddDeductionDefinition open={addDeductionOpen} handleClose={handleAddDeductionClose} />
        </div>
      )}
    </div>
  );
};

export default Salary;
