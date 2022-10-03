import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function Loader() {
    return (
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                position: 'absolute',
            }}>
                <CircularProgress />
            </Box>
    )
}