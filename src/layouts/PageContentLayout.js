import React from 'react';
import { Box } from '@makerdao/ui-components-core';
import Notifications from 'components/Notifications';
import CookieNotice from 'components/CookieNotice';

const PageContentLayout = ({
  enableNotifications = true,
  children,
  ...props
}) => {
  return (
    <Box
      p={{ s: '25px 12px', l: '30px 32px' }}
      {...props}
      style={{ backgroundColor: props.transparant ? '' : '#ddf1fd' }}
    >
      <Box maxWidth="1200px" mx="auto">
        {enableNotifications && <Notifications />}
        {children}
      </Box>
    </Box>
  );
};

export default PageContentLayout;
