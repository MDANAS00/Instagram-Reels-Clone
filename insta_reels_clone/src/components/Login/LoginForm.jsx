import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';
import { useState } from 'react';


function LoginForm() {
    const [email, setEmail] = useState("");
    const [passsword, setPassword] = useState("");
    const loginHelper = () => {
        console.log(email, " ", passsword);
    }
    return (
        <>
            <Card sx={{ minWidth: 275 }}>
                <CardContent>

                    <img src="insta.png"
                        alt=" "
                        height="80px" />

                    <div>
                        <TextField type="email"
                            id="outlined-basic"
                            label="email"
                            variant="outlined"
                            margin="normal"
                            fullWidth="true"
                            value={email}
                            onChange={(e) => { setEmail(e.target.value) }}
                        />
                    </div>

                    <div>
                        <TextField type="password"
                            id="outlined-basic"
                            label="password"
                            variant="outlined"
                            margin="normal"
                            fullWidth="true"
                            value={passsword}
                            onChange={(e) => { setPassword(e.target.value) }}
                        />
                    </div>

                    <Button variant="contained"
                        size="normal"
                        onClick={loginHelper}
                    >
                        <Typography variant='h6'>
                            Log in
                        </Typography>
                    </Button>
                </CardContent>
            </Card>
            <Card sx={{ minWidth: 275, marginTop: "1rem" }}>
                <CardContent>
                    <Typography variant='p'>
                        Don't have an account?
                    <Button variant='text'> 
                        <Typography>
                            sign up
                        </Typography>
                    </Button>
                    </Typography>
                </CardContent>
            </Card>
        </>
    )
}

export default LoginForm;