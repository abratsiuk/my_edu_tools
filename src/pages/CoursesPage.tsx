import {Box, Card, CardActionArea, CardContent, Stack, Typography,} from '@mui/material';

type Section = {
    title?: string;
    description?: string;
    items: string[];
};
type LinkCard = {
    title: string;
    subtitle?: string;
    href: string;
    sections?: Section[]
};

const shadowingSection: Section = {
    title: 'Делать shadowing!',
    description:
        'Искин: И да, Александр Петрович, для Вашего уровня Intermediate сейчас очень полезно не просто слушать, а делать shadowing — это реально начинает перестраивать произношение:',
    items: [
        '1. 10–20 секунд',
        '2. пауза',
        '3. повторять вслух, копируя ритм',
        '4. записывать себя',
    ],
};

const cards: LinkCard[] = [
    {
        title: 'IAmTimCorey',
        subtitle: 'Neutral American accent',
        href: 'https://www.youtube.com/@IAmTimCorey',
        sections: [
            {
                title: 'Начать можно с',
                items: [
                    'ASP.NET Core Crash Course',
                    'Build a Web API in ASP.NET Core',
                    'Dependency Injection in C#',
                ],
            },
            shadowingSection,
        ],
    },
    {
        title: 'Web Dev Simplified',
        subtitle: 'Neutral American accent',
        href: 'https://www.youtube.com/@WebDevSimplified',
        sections: [
            {
                title: 'Темы',
                items: [
                    'React',
                    'JavaScript',
                    'TypeScript',
                    'CSS',
                    'Flexbox/Grid',
                    'Hooks',
                    'Frontend architecture',
                ],
            },
            shadowingSection,
        ],
    },
    {
        title: 'Слепой набор - 2: основная позиция пальцев',
        subtitle: 'Keyboard mastery tips (Portnov)',
        href: 'https://www.youtube.com/watch?v=DVyWq5dS1-w',
    },
    {
        title: 'Portnov — Keyboarding Russian & English',
        subtitle: 'Keyboard mastery tips (Portnov)',
        href: 'https://www.portnov.com/keyboarding-russian/',
    },
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
        title: 'BBC Learning English — Pronunciation Tips',
        subtitle: 'YouTube playlist · English pronunciation',
        href: 'https://www.youtube.com/playlist?list=PLD6B222E02447DC07',
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
            <Box sx={{display: 'flex', flexWrap: 'wrap', gap: 2}}>
                {cards.map((c) => (
                    <Card
                        key={c.href}
                        sx={{width: {xs: '100%', sm: 320}}}
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
                                {c.sections?.map((section, sectionIndex) => (
                                    <Box
                                        key={sectionIndex}
                                        sx={{mt: 2, textAlign: 'left'}}
                                    >
                                        {section.title ? (
                                            <Typography
                                                variant="subtitle2"
                                                fontWeight={700}
                                            >
                                                {section.title}
                                            </Typography>
                                        ) : null}

                                        {section.description ? (
                                            <Typography
                                                variant="body2"
                                                color="text.secondary"
                                                sx={{mt: 0.5}}
                                            >
                                                {section.description}
                                            </Typography>
                                        ) : null}

                                        <Stack
                                            spacing={0.5}
                                            sx={{mt: 1}}
                                        >
                                            {section.items.map((item, itemIndex) => (
                                                <Typography
                                                    key={itemIndex}
                                                    variant="body2"
                                                >
                                                    {item}
                                                </Typography>
                                            ))}
                                        </Stack>
                                    </Box>
                                ))}
                            </CardContent>
                        </CardActionArea>
                    </Card>
                ))}
            </Box>
        </Stack>
    );
}
