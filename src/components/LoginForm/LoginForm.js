import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/auth-operations';
import styles from './LoginForm.module.css'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

export default function LoginForm(){
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = ({ target: { name, value } }) => {
        switch (name) {
            case 'email':
                return setEmail(value);
            case 'password':
                return setPassword(value);
            default:
                return;
        }
    };

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(authOperations.logIn({ email, password }));
        setEmail('');
        setPassword('');
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Login</h1>
    
            <form onSubmit={handleSubmit} className={styles.form} autoComplete="off">
                <label className={styles.label}>
                Email
                    <input className={styles.input}
                        data-testid="element"
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        autoComplete="off"
                        required
                    />
                </label>
    
                <label className={styles.label}>
                Password
                    <input className={styles.input}
                        data-testid="element"
                        type="password"
                        name="password"
                        value={password}
                        onChange={handleChange}
                        autoComplete="off"
                        required
                    />
                </label>
    
                <Box textAlign='center' >
                    <Button variant="contained" type="submit" >Sign in</Button>
                </Box>
          </form>
        </div>
    );
}