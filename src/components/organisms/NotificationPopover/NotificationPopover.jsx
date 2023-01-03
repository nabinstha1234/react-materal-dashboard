import PropTypes from 'prop-types';
import { useState } from 'react';
import {
  Box,
  List,
  Badge,
  Button,
  Avatar,
  Tooltip,
  Divider,
  Popover,
  Typography,
  IconButton,
  ListItemText,
  ListSubheader,
  ListItemAvatar,
  ListItemButton,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { Scrollbar } from 'components/molecules';
import { ReactIcon } from 'components/molecules';

const NOTIFICATIONS = [
  {
    id: 1,
    title: 'Your order is placed',
    description: 'waiting for shipping',
    avatar: null,
    type: 'order_placed',
    createdAt: '2022/11/23',
    isUnRead: true,
  },
  {
    id: 2,
    title: "You're now friend with John",
    description: 'answered to your comment on the Minimal',
    avatar: '/assets/images/avatars/avatar_2.jpg',
    type: 'friend_interactive',
    createdAt: '2022/11/23',
    isUnRead: true,
  },
  {
    id: 3,
    title: 'You have new message',
    description: '5 unread messages',
    avatar: null,
    type: 'chat_message',
    createdAt: '2022/11/23',
    isUnRead: false,
  },
  {
    id: 4,
    title: 'You have new mail',
    description: 'sent from Guido Padberg',
    avatar: null,
    type: 'mail',
    createdAt: '2022/11/23',
    isUnRead: false,
  },
  {
    id: 5,
    title: 'Delivery processing',
    description: 'Your order is being shipped',
    avatar: null,
    type: 'order_shipped',
    createdAt: '2022/11/23',
    isUnRead: false,
  },
];

const NotificationsPopover = () => {
  const [notifications, setNotifications] = useState(NOTIFICATIONS);
  const theme = useTheme();

  const totalUnRead = notifications.filter((item) => item.isUnRead === true).length;

  const [open, setOpen] = useState(null);

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  const handleMarkAllAsRead = () => {
    setNotifications(
      notifications.map((notification) => ({
        ...notification,
        isUnRead: false,
      }))
    );
  };

  return (
    <>
      <IconButton
        color={open ? theme.palette.primary.main : 'default'}
        onClick={handleOpen}
        sx={{ width: 40, height: 40 }}
      >
        <Badge badgeContent={totalUnRead} color="primary">
          <ReactIcon icon="mdi:bell-outline" />
        </Badge>
      </IconButton>

      <Popover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: {
            mt: 1.5,
            ml: 0.75,
            width: 360,
            borderRadius: 2,
          },
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', py: 2, px: 2.5 }}>
          <Typography
            variant="subtitle1"
            sx={{
              paddingRight: 2,
            }}
          >
            Notifications
          </Typography>
          <Box sx={{ display: 'flex' }}>
            <Badge
              badgeContent={totalUnRead}
              sx={{
                marginTop: 0,
              }}
              color="primary"
            ></Badge>
          </Box>
          <Button
            type="button"
            variant="contained"
            sx={{
              marginLeft: 'auto',
              fontSize: 14,
              fontWeight: 400,
            }}
          >
            See All
          </Button>
        </Box>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <Scrollbar
          sx={{ height: { xs: 340, sm: 'auto', backgroundColor: theme.palette.primary.lighter } }}
        >
          <List>
            {notifications.slice(0, 2).map((notification) => (
              <NotificationItem key={notification.id} notification={notification} />
            ))}
          </List>
        </Scrollbar>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <Box sx={{ p: 1 }}>
          <Button fullWidth disableRipple>
            View All
          </Button>
        </Box>
      </Popover>
    </>
  );
};

NotificationItem.propTypes = {
  notification: PropTypes.shape({
    createdAt: PropTypes.instanceOf(Date),
    id: PropTypes.string,
    isUnRead: PropTypes.bool,
    title: PropTypes.string,
    description: PropTypes.string,
    type: PropTypes.string,
    avatar: PropTypes.any,
  }),
};

export default NotificationsPopover;

function NotificationItem({ notification }) {
  const { avatar, title } = renderContent(notification);

  return (
    <ListItemButton
      sx={{
        py: 1,
        px: 2,
        my: '5px',
        borderRadius: '10px',
        mx: '10px',
        ...(notification.isUnRead && {
          bgcolor: 'action.selected',
        }),
      }}
    >
      <ListItemAvatar>
        <Avatar sx={{ bgcolor: 'background.neutral' }}>{avatar}</Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={title}
        secondary={
          <Typography
            variant="caption"
            sx={{
              mt: 0.5,
              display: 'flex',
              alignItems: 'center',
              color: 'text.disabled',
            }}
          ></Typography>
        }
      />
    </ListItemButton>
  );
}

function renderContent(notification) {
  const title = (
    <Typography variant="subtitle2">
      {notification.title}
      <Typography component="span" variant="body2" sx={{ color: 'text.secondary' }}>
        {notification.description}
      </Typography>
    </Typography>
  );

  if (notification.type === 'order_placed') {
    return {
      avatar: <img alt={notification.title} src="/assets/icons/ic_notification_package.svg" />,
      title,
    };
  }
  if (notification.type === 'order_shipped') {
    return {
      avatar: <img alt={notification.title} src="/assets/icons/ic_notification_shipping.svg" />,
      title,
    };
  }
  if (notification.type === 'mail') {
    return {
      avatar: <img alt={notification.title} src="/assets/icons/ic_notification_mail.svg" />,
      title,
    };
  }
  if (notification.type === 'chat_message') {
    return {
      avatar: <img alt={notification.title} src="/assets/icons/ic_notification_chat.svg" />,
      title,
    };
  }
  return {
    avatar: notification.avatar ? <img alt={notification.title} src={notification.avatar} /> : null,
    title,
  };
}
