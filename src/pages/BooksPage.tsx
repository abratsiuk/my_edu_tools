import {
    Card,
    CardActionArea,
    CardContent,
    Stack,
    Typography,
    Box,
} from '@mui/material';

type LinkCard = { title: string; subtitle: string; href: string };

const fileHref = (name: string) =>
    `${import.meta.env.BASE_URL}books/${encodeURIComponent(name)}`;

const cards: LinkCard[] = [
    {
        title: 'Alina — English Teacher (Instagram)',
        subtitle: 'Teaching tips, resources, guidance',
        href: 'https://www.instagram.com/alliengll/',
    },
    {
        title: 'Alina Cher — English Learning (YouTube)',
        subtitle: 'Teaching methods, explanations, guidance',
        href: 'https://www.youtube.com/@AlinaCherBlog',
    },
    {
        title: 'Where to Learn English',
        subtitle: 'Alina · Curated resources (Notion)',
        href: 'https://battle-college-0d5.notion.site/f631ba49302a49cb8bb4e92e7c16a5f7',
    },
    {
        title: 'Programming Concepts (W3Schools)',
        subtitle: 'Programming fundamentals',
        href: 'https://www.w3schools.com/programming/index.php',
    },
    {
        title: 'TypeScript Tutorial (W3Schools)',
        subtitle: 'TypeScript basics and reference',
        href: 'https://www.w3schools.com/typescript/index.php',
    },
    {
        title: 'React Tutorial (W3Schools)',
        subtitle: 'React fundamentals',
        href: 'https://www.w3schools.com/react/default.asp',
    },
    {
        title: 'React Docs — Your First Component',
        subtitle: 'Official React documentation (EN)',
        href: 'https://react.dev/learn/your-first-component',
    },
    {
        title: 'React Docs — Your First Component (RU)',
        subtitle: 'Official React documentation (Russian)',
        href: 'https://ru.react.dev/learn/your-first-component',
    },
    {
        title: 'W3Schools How-To Tutorials',
        subtitle: 'Practical how-to examples',
        href: 'https://www.w3schools.com/howto/default.asp',
    },
    {
        title: 'JavaScript Tutorial (W3Schools)',
        subtitle: 'JS basics and reference',
        href: 'https://www.w3schools.com/js/default.asp',
    },
    {
        title: 'C# Tutorial (W3Schools)',
        subtitle: 'C# basics and reference',
        href: 'https://www.w3schools.com/cs/index.php',
    },
    {
        title: 'Advanced C# Programming',
        subtitle: 'YouTube · Advanced level course',
        href: 'https://www.youtube.com/watch?v=YT8s-90oDC0',
    },
    {
        title: 'Angular Tutorial (W3Schools)',
        subtitle: 'Angular fundamentals',
        href: 'https://www.w3schools.com/angular/default.asp',
    },
    {
        title: 'SQL Tutorial (W3Schools)',
        subtitle: 'SQL basics and queries',
        href: 'https://www.w3schools.com/sql/default.asp',
    },
    {
        title: 'Git Tutorial (W3Schools)',
        subtitle: 'Version control basics',
        href: 'https://www.w3schools.com/git/default.asp',
    },
    {
        title: 'HTML Reference (MDN)',
        subtitle: 'Official HTML documentation',
        href: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
    },
    {
        title: 'CSS Reference (MDN)',
        subtitle: 'Official CSS documentation',
        href: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
    },
    {
        title: 'JavaScript Guide (MDN)',
        subtitle: 'Core JavaScript concepts',
        href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide',
    },
    {
        title: 'Fetch API (MDN)',
        subtitle: 'Using Fetch for HTTP requests',
        href: 'https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch',
    },
    {
        title: 'Web Speech API (MDN)',
        subtitle: 'Speech recognition and synthesis',
        href: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API',
    },
    {
        title: 'Вайнер Г. — Революционный метод... (2016)',
        subtitle: 'PDF (public/books)',
        href: fileHref('weiner-fast-language-learning-2016.pdf'),
    },
    {
        title: 'Ягодкин / Згода — Учись учиться (2023)',
        subtitle: 'PDF (public/books)',
        href: fileHref('yagodkin-uchis-uchitsya-2023.pdf'),
    },
    {
        title: 'Visson — Русские проблемы в английской речи',
        subtitle: 'PDF (public/books)',
        href: fileHref('visson-russkie-problemy.pdf'),
    },
    {
        title: 'Wise Eric — Effectively Learning to Code (2024)',
        subtitle: 'PDF (public/books)',
        href: fileHref('wise-effectively-learning-to-code-2024.pdf'),
    },
];

export default function BooksPage() {
    return (
        <Stack spacing={2}>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                {cards.map((c) => (
                    <Card
                        key={c.href}
                        sx={{ width: { xs: '100%', sm: 420 } }}
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
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    {c.subtitle}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                ))}
            </Box>
        </Stack>
    );
}
