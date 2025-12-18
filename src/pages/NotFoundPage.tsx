import { Button, Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function NotFoundPage() {
    const navigate = useNavigate();

    return (
        <Stack spacing={2}>
            <Typography
                variant="h4"
                sx={{ fontWeight: 900 }}
            >
                404
            </Typography>
            <Typography color="text.secondary">Page not found.</Typography>
            <Button
                variant="contained"
                onClick={() => {
                    navigate('/');
                }}
            >
                Go home
            </Button>
        </Stack>
    );
}
