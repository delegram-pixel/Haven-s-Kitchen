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

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="/">
        Haven's Kitchen
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

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

export default function SignUp() {
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
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
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
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
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
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
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
                    '& .MuiInputBase-root': {
                      backgroundColor: '#333', // Background color to ensure contrast with white text
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
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
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox 
                    value="allowExtraEmails"
                    sx={{
                      color: 'white',
                      '&.Mui-checked': {
                        color: 'white',
                      },
                    }}
                    />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                  sx={{ color: '#dcca87' }}
               />
              </Grid>
            </Grid>
            
            <Link href="/Home2" passHref>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2, bgcolor: '#DCCA87' }}
        component="a"
      >
        Sign Up
      </Button>
    </Link>
            
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="SignIn" variant="body2" sx={{ color: '#DCCA87' }}>
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
