import { useMemo, useState } from 'react';
import {
    Box,
    Card,
    CardActionArea,
    CardContent,
    Stack,
    TextField,
    Typography,
} from '@mui/material';

function normalizeWord(value: string): string {
    return value.trim();
}

export default function WordPage() {
    const [word, setWord] = useState('compulsory');

    const w = useMemo(() => normalizeWord(word), [word]);
    const encoded = useMemo(() => encodeURIComponent(w), [w]);

    const links = useMemo(() => {
        return [
            {
                title: 'YouGlish (US)',
                href: w
                    ? `https://youglish.com/pronounce/${encoded}/english/us`
                    : '',
                note: 'Listen to real US pronunciations in many example videos.',
            },
            {
                title: 'Cambridge Dictionary',
                href: w
                    ? `https://dictionary.cambridge.org/us/dictionary/english/${encoded}`
                    : '',
                note: 'Check IPA, audio, meaning, usage notes, and word category.',
            },
            {
                title: 'Step 1 base video (YouTube)',
                href: 'https://www.youtube.com/watch?v=u99wAoBjDvQ&list=PLQMqUlV2_B8ngL_PaT9UFsd0-PvnrpZGC&index=3',
                note: 'Open the transcript and search the word to hear it in context.',
            },
        ];
    }, [w, encoded]);

    return (
        <Stack spacing={2}>
            <TextField
                label="Word"
                value={word}
                onChange={(e) => {
                    setWord(e.target.value);
                }}
                placeholder='e.g. "compulsory"'
                fullWidth
            />

            <Stack spacing={2}>
                {links.map((x) => {
                    const disabled = !x.href;
                    return (
                        <Card
                            key={x.title}
                            variant="outlined"
                        >
                            <CardActionArea
                                disabled={disabled}
                                component="a"
                                href={x.href}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <CardContent>
                                    <Stack spacing={1}>
                                        <Typography
                                            sx={{
                                                fontWeight: 700,
                                                color: disabled
                                                    ? 'text.disabled'
                                                    : 'primary.main',
                                            }}
                                        >
                                            {x.title}
                                        </Typography>

                                        <Typography
                                            variant="body2"
                                            sx={{
                                                color: disabled
                                                    ? 'text.disabled'
                                                    : 'text.secondary',
                                            }}
                                        >
                                            {x.note}
                                        </Typography>

                                        {!disabled ? (
                                            <Box
                                                component="span"
                                                sx={{
                                                    fontSize: 12,
                                                    color: 'text.disabled',
                                                    wordBreak: 'break-all',
                                                }}
                                            >
                                                {x.href}
                                            </Box>
                                        ) : null}
                                    </Stack>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    );
                })}
            </Stack>
        </Stack>
    );
}
