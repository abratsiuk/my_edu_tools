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

export default function WordPage() {
    const [word, setWord] = useState('compulsory');

    const encoded = useMemo(() => encodeURIComponent(word.trim()), [word]);
    const slug = useMemo(
        () => word.trim().toLowerCase().replace(/\s+/g, '-'),
        [word]
    );

    return (
        <Stack spacing={3}>
            {/* INPUT */}
            <TextField
                label="Word"
                value={word}
                onChange={(e) => setWord(e.target.value)}
                placeholder='e.g. "compulsory"'
                fullWidth
            />

            {/* DICTIONARIES */}
            <Box
                sx={{
                    display: 'grid',
                    gap: 2,
                    gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
                }}
            >
                <Card>
                    <CardActionArea
                        href={`https://youglish.com/pronounce/${encoded}/english/us`}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <CardContent>
                            <Typography fontWeight={700}>YouGlish</Typography>
                            <Typography
                                variant="body2"
                                color="text.secondary"
                            >
                                Listen to real US pronunciation
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card>
                    <CardActionArea
                        href={`https://tophonetics.com/totube/${encoded}/`}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <CardContent>
                            <Typography fontWeight={700}>
                                ToPhonetics — Listen
                            </Typography>
                            <Typography
                                variant="body2"
                                color="text.secondary"
                            >
                                Pronunciation audio
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>

                <Card>
                    <CardActionArea
                        href="https://www.youtube.com/watch?v=u99wAoBjDvQ&list=PLQMqUlV2_B8ngL_PaT9UFsd0-PvnrpZGC&index=3"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <CardContent>
                            <Typography fontWeight={700}>Base video</Typography>
                            <Typography
                                variant="body2"
                                color="text.secondary"
                            >
                                Find the word in transcript
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>

                <Card>
                    <CardActionArea
                        href={`https://dictionary.cambridge.org/us/dictionary/english/${encoded}`}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <CardContent>
                            <Typography fontWeight={700}>Cambridge</Typography>
                            <Typography
                                variant="body2"
                                color="text.secondary"
                            >
                                IPA, meaning, category
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card>
                    <CardActionArea
                        href={`https://tophonetics.com/?text=${encoded}`}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <CardContent>
                            <Typography fontWeight={700}>
                                ToPhonetics — IPA
                            </Typography>
                            <Typography
                                variant="body2"
                                color="text.secondary"
                            >
                                IPA transcription
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>

                <Card>
                    <CardActionArea
                        href={`https://www.english-grammar-lessons.co.uk/idioms/${slug}.html`}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <CardContent>
                            <Typography fontWeight={700}>Idioms</Typography>
                            <Typography
                                variant="body2"
                                color="text.secondary"
                            >
                                English Grammar Lessons · idioms page
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>

                <Card>
                    <CardActionArea
                        href={`https://www.ldoceonline.com/dictionary/${encoded}`}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <CardContent>
                            <Typography fontWeight={700}>
                                Longman (LDOCE)
                            </Typography>
                            <Typography
                                variant="body2"
                                color="text.secondary"
                            >
                                Definitions, examples, collocations
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>

                <Card>
                    <CardActionArea
                        href={`https://www.merriam-webster.com/dictionary/${encoded}`}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <CardContent>
                            <Typography fontWeight={700}>
                                Merriam-Webster
                            </Typography>
                            <Typography
                                variant="body2"
                                color="text.secondary"
                            >
                                Definitions, usage, examples
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card>
                    <CardActionArea
                        href={`https://en.wiktionary.org/wiki/${encoded}`}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <CardContent>
                            <Typography fontWeight={700}>Wiktionary</Typography>
                            <Typography
                                variant="body2"
                                color="text.secondary"
                            >
                                Etymology, forms, translations
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>

                <Card>
                    <CardActionArea
                        href={`https://speechyard.com/ru/vocabulary/w/${encoded}/`}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <CardContent>
                            <Typography fontWeight={700}>Speechyard</Typography>
                            <Typography
                                variant="body2"
                                color="text.secondary"
                            >
                                Videos with real usage examples
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>

                <Card>
                    <CardActionArea
                        href={`https://www.reverso.net/text-translation#sl=eng&tl=rus&text=${encoded}`}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <CardContent>
                            <Typography fontWeight={700}>Reverso</Typography>
                            <Typography
                                variant="body2"
                                color="text.secondary"
                            >
                                Translate text
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card>
                    <CardActionArea
                        href={`https://context.reverso.net/translation/english-russian/${encoded}`}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <CardContent>
                            <Typography fontWeight={700}>
                                Reverso Context
                            </Typography>
                            <Typography
                                variant="body2"
                                color="text.secondary"
                            >
                                Examples in real contexts
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>

                <Card>
                    <CardActionArea
                        href="https://webcammictest.com/ru/mic/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <CardContent>
                            <Typography fontWeight={700}>
                                Microphone Test
                            </Typography>
                            <Typography
                                variant="body2"
                                color="text.secondary"
                            >
                                Hear yourself pronounce the word
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Box>

            {/* MNEMONICS */}
            <Box
                sx={{
                    display: 'grid',
                    gap: 2,
                    gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
                }}
            >
                <Card>
                    <CardActionArea
                        href="https://chatgpt.com/share/694466ff-9c0c-8013-bb40-16b22e8977d4"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <CardContent sx={{ textAlign: 'center' }}>
                            <Typography fontWeight={700}>Искин</Typography>
                            <Typography
                                variant="body2"
                                color="text.secondary"
                            >
                                Mnemonic hints
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>

                <Card>
                    <CardActionArea
                        href="https://chat.deepseek.com/share/1ponvtmphpk4ix8rwa"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <CardContent sx={{ textAlign: 'center' }}>
                            <Typography fontWeight={700}>Искинчик</Typography>
                            <Typography
                                variant="body2"
                                color="text.secondary"
                            >
                                Mnemonic hints
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>

                <Card>
                    <CardActionArea
                        href="https://www.perplexity.ai/search/izuchi-metodiku-mnemotekhniche-0_zNF6K8RBGUdjGyNW9Apg#0"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <CardContent sx={{ textAlign: 'center' }}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    mb: 1,
                                }}
                                dangerouslySetInnerHTML={{
                                    __html: `
<svg width="64" viewBox="0 0 1588 400" xmlns="http://www.w3.org/2000/svg">
  <path d="M101.008 42L190.99 124.905V42.1913H208.506V125.276L298.891 42V136.524H336V272.866H299.005V357.035L208.506 277.525V357.948H190.99V278.836L101.11 358V272.866H64V136.524H101.008V42Z" fill="black"/>
</svg>
`,
                                }}
                            />
                            <Typography fontWeight={700}>Perplexity</Typography>
                            <Typography
                                variant="body2"
                                color="text.secondary"
                            >
                                Mnemonic methodology
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Box>
        </Stack>
    );
}
