import { Card, CardContent, Stack, Typography } from '@mui/material';

export default function HomePage() {
    return (
        <Stack spacing={2}>
            <Typography
                variant="h4"
                sx={{ fontWeight: 900 }}
            >
                Home
            </Typography>

            <Card variant="outlined">
                <CardContent>
                    <Typography sx={{ fontWeight: 700 }}>Welcome</Typography>
                    <Typography color="text.secondary">
                        Choose: word / timer
                    </Typography>
                </CardContent>
            </Card>
        </Stack>
    );
}
