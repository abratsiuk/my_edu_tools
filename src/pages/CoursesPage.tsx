import {
    Card,
    CardActionArea,
    CardContent,
    Stack,
    Typography,
    Box,
} from '@mui/material';

type LinkCard = { title: string; subtitle?: string; href: string };

const cards: LinkCard[] = [
    {
        title: 'Typing Study — Touch Typing Lesson 1',
        subtitle: 'Interactive keyboard typing practice',
        href: 'https://www.typingstudy.com/lesson/1',
    },
    {
        title: 'SpeakPal AI — Speaking Practice',
        subtitle: 'Interactive AI speaking exercises',
        href: 'https://talk.speakpal.ai/talk?teacher_id=21',
    },
    {
        title: 'GF Intermediate',
        href: 'https://book.booyya.com/book/0e42571d08fa18b7123ae377fff7c4e6b1e64cd5/6e8cf67cb67921b78fa145fd34090e5f936cfedb',
    },
    {
        title: 'GF Pre-Intermediate',
        href: 'https://book.booyya.com/book/0e42571d08fa18b7123ae377fff7c4e6b1e64cd5/e9905917d4a53fff1c0bbfb8eff0f12707e93cd1',
    },
    {
        title: 'GF Elementary',
        href: 'https://book.booyya.com/book/0e42571d08fa18b7123ae377fff7c4e6b1e64cd5/3397706640394bac2d270724654e263b32ad4a08',
    },
    {
        title: 'GF Prononciation',
        href: 'https://book.booyya.com/book/0e42571d08fa18b7123ae377fff7c4e6b1e64cd5/10cd72573384ba894bee9ee1bd7e73292bedca0f',
    },
    {
        title: 'GF webinars business',
        href: 'https://book.booyya.com/book/0e42571d08fa18b7123ae377fff7c4e6b1e64cd5/dd009bcf458485b63663d0fbf691a2792173d8bf#section-501423-scroll',
    },
    {
        title: 'Advanced C# Programming',
        subtitle: 'YouTube · Advanced level course',
        href: 'https://www.youtube.com/watch?v=YT8s-90oDC0',
    },
    {
        title: 'React Query / TanStack Query',
        subtitle: 'React Server State Management (Udemy)',
        href: 'https://www.udemy.com/course/learn-react-query/learn/lecture/26581232#overview',
    },
    {
        title: 'English for Beginners (Udemy)',
        subtitle: 'Timur Tregulov · Full beginner course',
        href: 'https://www.udemy.com/course/anglijskij-yazyk/learn/lecture/12876614#overview',
    },
    {
        title: 'English — Complete Course (Udemy)',
        subtitle: 'Mark Thir · 95 lessons + tests',
        href: 'https://www.udemy.com/course/english-in-a-minute/learn/lecture/30541012#overview',
    },
    {
        title: 'English with Marina Ozerova (YouTube)',
        subtitle: 'Playlists · General English',
        href: 'https://www.youtube.com/@iqenglish/playlists',
    },
    {
        title: 'PhoneticFanatic (YouTube)',
        subtitle: 'English pronunciation & phonetics',
        href: 'https://www.youtube.com/@PhoneticFanatic',
    },
    {
        title: 'Reading & Pronunciation Practice (YouTube)',
        subtitle: 'Practical course · Reading and pronunciation',
        href: 'https://www.youtube.com/playlist?list=PL3KDFIV9zTkxDwJTXAp3GXVS-UBSulxJm',
    },
    {
        title: 'A Little Bit Better (YouTube)',
        subtitle: 'English learning · explanations and practice',
        href: 'https://www.youtube.com/@littlebitbetter7',
    },
    {
        title: 'Easy English Bible — Gospel of John',
        subtitle: 'Simplified English Bible text',
        href: 'https://www.easyenglish.bible/bible/easy/john/0/',
    },
    {
        title: 'Gospel of John — NIV (Audio + Text)',
        subtitle: 'YouTube · Audio Bible with on-screen text',
        href: 'https://www.youtube.com/watch?v=vxyZhlbiLo0',
    },
    {
        title: 'Gospel of John — NIV (Online Text)',
        subtitle: 'Bible.com · Official NIV text',
        href: 'https://www.bible.com/bible/111/JHN.1.NIV',
    },
    {
        title: 'Gospel of John — Overview',
        subtitle: 'Whiteboard Bible Study (YouTube)',
        href: 'https://www.youtube.com/watch?v=8M8XXzAplF0',
    },
    {
        title: 'BibleProject (YouTube)',
        subtitle: 'Biblical themes explained visually',
        href: 'https://www.youtube.com/@bibleproject',
    },
    {
        title: 'Speak English With Vanessa (YouTube)',
        subtitle: 'English learning with Vanessa',
        href: 'https://www.youtube.com/@SpeakEnglishWithVanessa',
    },
    {
        title: 'The Late Show with Stephen Colbert',
        subtitle: 'YouTube · English entertainment & culture',
        href: 'https://www.youtube.com/@ColbertLateShow',
    },
    {
        title: 'Shaw English Online (YouTube)',
        subtitle: 'English lessons and tips',
        href: 'https://www.youtube.com/@ShawEnglishOnline',
    },
];

export default function CoursesPage() {
    return (
        <Stack spacing={2}>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                {cards.map((c) => (
                    <Card
                        key={c.href}
                        sx={{ width: { xs: '100%', sm: 320 } }}
                    >
                        <CardActionArea
                            href={c.href}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <CardContent>
                                <Typography fontWeight={700}>
                                    {c.title}
                                </Typography>
                                {c.subtitle ? (
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        {c.subtitle}
                                    </Typography>
                                ) : null}
                            </CardContent>
                        </CardActionArea>
                    </Card>
                ))}
            </Box>
        </Stack>
    );
}
