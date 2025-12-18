import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import {
    AppBar,
    Box,
    Container,
    Toolbar,
    Typography,
    Tabs,
    Tab,
    Divider,
} from '@mui/material';

function getTabValue(pathname: string): string {
    if (pathname.startsWith('/word')) {
        return '/word';
    }
    if (pathname.startsWith('/timer')) {
        return '/timer';
    }
    if (pathname === '/') {
        return '/';
    }
    return false as unknown as string;
}

export default function Layout() {
    const navigate = useNavigate();
    const location = useLocation();
    const value = getTabValue(location.pathname);

    return (
        <Box
            sx={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <AppBar
                position="sticky"
                elevation={0}
                color="primary"
            >
                <Toolbar sx={{ gap: 2 }}>
                    <Typography
                        variant="h6"
                        sx={{
                            fontFamily: 'Merriweather, serif',
                            fontStyle: 'italic',
                            color: 'secondary.main',
                            cursor: 'pointer',
                        }}
                        onClick={() => {
                            navigate('/');
                        }}
                    >
                        MyEduTools
                    </Typography>

                    <Box sx={{ flexGrow: 1 }} />

                    <Tabs
                        sx={{
                            ml: 2,
                            '& .MuiTab-root': {
                                fontStyle: 'italic',
                                color: 'primary.contrastText',
                            },
                            '& .MuiTabs-indicator': {
                                backgroundColor: 'secondary.main',
                            },
                        }}
                        value={value}
                        onChange={(_, next) => {
                            navigate(next);
                        }}
                        textColor="inherit"
                        indicatorColor="secondary"
                        sx={{ ml: 2 }}
                    >
                        <Tab
                            value="/word"
                            label="word"
                        />
                        <Tab
                            value="/timer"
                            label="timer"
                        />
                    </Tabs>
                </Toolbar>
            </AppBar>

            <Divider />

            <Container sx={{ py: 4, flex: 1 }}>
                <Outlet />
            </Container>

            <Box
                component="footer"
                sx={{ mt: 'auto' }}
            >
                <Divider />
                <Container sx={{ py: 2 }}>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            gap: 2,
                            flexWrap: 'wrap',
                        }}
                    >
                        <Typography
                            variant="body2"
                            color="text.secondary"
                        >
                            © {new Date().getFullYear()} abratsiuk
                        </Typography>

                        <Typography
                            variant="body2"
                            color="text.secondary"
                        >
                            MyEduTools • Material layout
                        </Typography>
                    </Box>
                </Container>
            </Box>
        </Box>
    );
}
