import React from 'react';
import { Badge, Avatar } from '@mui/material';
import { SmallAvatar } from './styles';
import { ReactIcon } from '../ReactIcon';

const BadgeAvatar = (props) => {
  const { src, height, width, handleIconCLick } = props;
  return (
    <Badge
      overlap="circular"
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      badgeContent={
        <SmallAvatar onClick={handleIconCLick}>
          <ReactIcon
            sx={{
              fontSize: '1.5rem',
            }}
            icon="material-symbols:edit-outline"
          />
        </SmallAvatar>
      }
    >
      <Avatar
        sx={{
          height,
          width,
        }}
        alt=""
        src={src}
      />
    </Badge>
  );
};

export default BadgeAvatar;
