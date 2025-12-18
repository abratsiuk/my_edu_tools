import { Card, CardContent, Stack, Typography } from '@mui/material';

export default function TimerPage() {
    return (
        <Stack spacing={2}>
            <Typography
                variant="h4"
                sx={{ fontWeight: 900 }}
            >
                timer
            </Typography>

            <Card variant="outlined">
                <CardContent>
                    <Typography color="text.secondary">
                        Timer tool placeholder.
                    </Typography>
                </CardContent>
            </Card>
        </Stack>
    );
}
