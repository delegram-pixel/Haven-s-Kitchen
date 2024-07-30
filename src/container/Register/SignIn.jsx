/* eslint-disable react/no-unescaped-entities */

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline as MuiCssBaseline } from '@mui/material';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href={`/`}>
        Haven's Kitchen
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}




const defaultTheme = createTheme({

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#000000',
          color: '#ffffff',
        },
      },
    },
  },
});
export default function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: '#dcca87' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1,}}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              sx={{
                '& .MuiInputLabel-root': {
                  color: '#DCCA87', // Label color
                },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#DCCA87', // Border color
                  },
                  '&:hover fieldset': {
                    borderColor: '#DCCA87', // Border color on hover
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#DCCA87', // Border color when focused
                  },
                },
                '& .MuiInputBase-input': {
                  color: '#fff', // Text color inside the input field
                },
                '& .MuiInputBase-input::placeholder': {
                  color: '#DCCA87', // Placeholder color
                },
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              sx={{
                '& .MuiInputLabel-root': {
                  color: '#DCCA87', // Label color
                },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#DCCA87', // Border color
                  },
                  '&:hover fieldset': {
                    borderColor: '#DCCA87', // Border color on hover
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#DCCA87', // Border color when focused
                  },
                },
                '& .MuiInputBase-input': {
                  color: '#fff', // Text color inside the input field
                },
                '& .MuiInputBase-input::placeholder': {
                  color: '#DCCA87', // Placeholder color
                },
              }}
            />
         <FormControlLabel
  control={
    <Checkbox
      value="remember"
      sx={{
        color: 'white',
        '&.Mui-checked': {
          color: 'white',
        },
      }}
    />
  }
  label="Remember me"
  sx={{ color: '#dcca87' }}
/>



<Link href="/Home2" passHref>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, bgcolor: '#DCCA87' }}
               component="a"
            >
              Sign In
              
            </Button>
            </Link>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2" sx={{ color: '#DCCA87' }}>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item sx={{textDecorationColor:'#DCCA87'}}>
                <Link href="SignUp" variant="body2" sx={{ color: '#DCCA87' }}>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
