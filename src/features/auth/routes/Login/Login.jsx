import { Stack, Link, Box, Container, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { useResponsive } from 'hooks';
import loginIllustration from 'assets/images/svg/login-illustration.svg';
import { LoginForm } from '../../components';

import { ContentStyle, RootStyle, StyledSection, ContentWrapper } from './styles';

const Login = (props) => {
  const mdUp = useResponsive('up', 'md');
  const theme = useTheme();
  return (
    <RootStyle title="Login">
      {mdUp && (
        <StyledSection>
          <Box
            component="img"
            sx={{ marginTop: 10, width: '70%' }}
            src={loginIllustration}
            alt="login"
          />
        </StyledSection>
      )}
      <Container
        sx={{
          backgroundColor: theme.palette.common.white,
        }}
        maxWidth="lg"
        disableGutters
      >
        <ContentWrapper>
          <Stack
            sx={{
              py: 2,
              borderBottom: 2,
              borderColor: theme.palette.primary.lighter,
              textAlign: 'center',
            }}
          >
            <Typography
              variant="h3"
              sx={{
                color: theme.palette.primary.dark,
              }}
              gutterBottom
            >
              Log In
            </Typography>
          </Stack>
          <ContentStyle>
            <LoginForm />
          </ContentStyle>
        </ContentWrapper>
      </Container>
    </RootStyle>
  );
};

export default Login;
