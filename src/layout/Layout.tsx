import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Link from '@mui/material/Link';
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
    if (pathname.startsWith('/courses')) {
        return '/courses';
    }
    if (pathname.startsWith('/books')) {
        return '/books';
    }
    if (pathname.startsWith('/tests')) {
        return '/tests';
    }
    if (pathname === '/') {
        return '/timer';
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
                    >
                        <Tab
                            value="/timer"
                            label="timer"
                        />
                        <Tab
                            value="/word"
                            label="word"
                        />
                        <Tab
                            value="/courses"
                            label="courses"
                        />
                        <Tab
                            value="/tests"
                            label="tests"
                        />
                        <Tab
                            value="/books"
                            label="books"
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
                            <Link
                                href="https://github.com/abratsiuk/my_edu_tools"
                                target="_blank"
                            >
                                repo
                            </Link>
                        </Typography>
                    </Box>
                </Container>
            </Box>
        </Box>
    );
}
