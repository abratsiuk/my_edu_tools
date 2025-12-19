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
        title: 'At, in, on: Prepositions of place',
        subtitle: 'Test-English: grammar points',
        href: 'https://test-english.com/grammar-points/a1/at-in-on-prepositions-of-place/',
    },
    {
        title: 'Алина: in / on / at (time)',
        subtitle: 'YouTube video',
        href: 'https://www.youtube.com/watch?v=4ftCJvG0M3g',
    },
    {
        title: 'Практикум: предлоги времени (PDF)',
        subtitle: 'Local file (public/books)',
        href: fileHref('Практикум предлоги времени.pdf'),
    },
    {
        title: 'Irregular Verbs Table',
        subtitle: 'Translation and pronunciation',
        href: 'https://englishvoyage.com/irregular-verbs',
    },
    {
        title: 'How to Make Stress Your Friend (TED)',
        subtitle: 'Kelly McGonigal · English with Russian subtitles',
        href: 'https://www.ted.com/talks/kelly_mcgonigal_how_to_make_stress_your_friend?language=ru',
    },
];

export default function TestsPage() {
    return (
        <Stack spacing={2}>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                {cards.map((c) => (
                    <Card
                        key={c.href}
                        sx={{ width: { xs: '100%', sm: 360 } }}
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
