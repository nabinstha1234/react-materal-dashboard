import React from 'react';
import { Logo } from 'components/molecules';

import { HeaderStyle } from './HeaderStyle';

const UnAuthLayout = (props) => {
  return (
    <HeaderStyle>
      <Logo />
    </HeaderStyle>
  );
};

export default UnAuthLayout;
