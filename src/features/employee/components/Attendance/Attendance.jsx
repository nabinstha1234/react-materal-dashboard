import { Box, Typography, IconButton, Badge } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { ReactIcon } from 'components/molecules';
import { Calendar, momentLocalizer, Views } from 'react-big-calendar';
import moment from 'moment';
import style from 'react-big-calendar/lib/css/react-big-calendar.css';

const MontheHeader = ({ props }) => (
  <div className="border-bottom border-top mb-3">
    <Typography className="p-4" sx={{ color: '#000F28', fontWeight: '600' }}>
      {props.label}
    </Typography>
  </div>
);
const badgeStyle = (color, font = '#fff') => {
  return {
    '& .MuiBadge-badge': {
      backgroundColor: color,
      padding: '10px',
      paddingY: '15px',
      borderRadius: '16px',
      color: font,
    },
  };
};
const localizer = momentLocalizer(moment);

const Attendance = ({ value, index }) => {
  const [date, setDate] = useState({
    monthLabel: moment(new Date()).endOf('month').format('MMMM YYYY'),
    currentMonth: moment(new Date()).endOf('month').format('MMM'),
  });

  const onGoPrev = (toolbar) => {
    let mDate = toolbar.date;
    let newDate = new Date(mDate.getFullYear(), mDate.getMonth() - 1, 1);
    toolbar.onNavigate('prev', newDate);
    getCalendarEvents(newDate);
  };

  const onGoNext = (toolbar) => {
    let mDate = toolbar.date;
    let newDate = new Date(mDate.getFullYear(), mDate.getMonth() + 1, 1);
    toolbar.onNavigate('next', newDate);
    getCalendarEvents(newDate);
  };

  const ColoredDateCellWrapper = ({ children, value }) => {
    let month = moment(value).endOf('month').format('MMM');
    return React.cloneElement(React.Children.only(children), {
      style: {
        backgroundColor: date.currentMonth !== month ? '#fff' : '#FFC107',
        border: '2px solid #FFFFFF',
        borderRadius: '8px',
        height: '100%',
      },
    });
  };

  const CalendarToolBar = ({ toolbar }) => (
    <div className="d-flex justify-content-between padding-24">
      <Typography sx={{ color: '#092E69', fontSize: '18px', fontWeight: '600' }}>
        Attendance record
      </Typography>
      <div className="d-flex align-items-center">
        <IconButton
          onClick={() => {
            onGoPrev(toolbar);
          }}
        >
          <ReactIcon color="#ABB6C7" icon={'material-symbols:chevron-left'} />
        </IconButton>
        <Typography className="px-3" sx={{ color: '#092E69', fontSize: '18px', fontWeight: '600' }}>
          {date.monthLabel || 'N/A'}
        </Typography>
        <IconButton
          onClick={() => {
            onGoNext(toolbar);
          }}
        >
          <ReactIcon color="#ABB6C7" icon={'material-symbols:chevron-right'} />
        </IconButton>
        <div className="mx-4">
          <Badge sx={badgeStyle('#05A24D')} badgeContent="14" color="primary" variant="standard" />
        </div>
        <div className="mx-4">
          <Badge sx={badgeStyle('#F75B4F')} badgeContent="2" color="primary" variant="standard" />
        </div>
        <div className="mx-4">
          <Badge sx={badgeStyle('#FFC107')} badgeContent="2" color="primary" variant="standard" />
        </div>
        <div className="mx-4">
          <Badge sx={badgeStyle('#FF8D07')} badgeContent="2" color="primary" variant="standard" />
        </div>
        <div className="mx-4">
          <Badge
            sx={badgeStyle('#F4F8FB', '#000F28')}
            badgeContent="2"
            color="primary"
            variant="standard"
          />
        </div>
      </div>
    </div>
  );

  const getCalendarEvents = (date) => {
    const currentMonth = moment(date).endOf('month').format('MMMM YYYY');
    const monthToday = moment(date).endOf('month').format('MMM');
    let nextCurrentMonth = moment(date).add(1, 'month').format('MMM');

    setDate({
      monthLabel: currentMonth,
      currentMonth: monthToday,
      nextMonth: nextCurrentMonth,
    });
  };

  const { components, views } = {
    components: {
      dateCellWrapper: ColoredDateCellWrapper,
      toolbar: (toolbar) => <CalendarToolBar toolbar={toolbar} />,
      dateHeader: (props) => {
        let month = moment(props.date).endOf('month').format('MMM');
        if (date.currentMonth !== month) return null;
        return (
          <div className=" mt-4 d-flex justify-content-center">
            <p style={{ color: '#fff', fontWeight: '600' }}>{props.label}</p>
          </div>
        );
      },
      month: {
        header: (props) => <MontheHeader props={props} />,
      },
    },
    defaultDate: new Date(),
    // max: dates.add(dates.endOf(new Date(2015, 17, 1), 'day'), -1, 'hours'),
    views: Object.keys(Views).map((k) => Views[k]),
  };
  return (
    <div
      role="tabpanel"
      className="mt-4"
      style={{ height: '100%' }}
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      //   {...other}
    >
      {value === index && (
        <Box
          sx={{
            boxShadow: '0px 0px 16px 1px rgba(9, 46, 105, 0.15)',
            borderRadius: '16px',
          }}
        >
          <div>
            <Calendar
              localizer={localizer}
              components={components}
              style={{ ...style, minHeight: '600px', padding: '24px', border: 'none' }}
              views={views}
            />
          </div>
        </Box>
      )}
    </div>
  );
};

export default Attendance;
