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
