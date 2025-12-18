import { useMemo, useState } from 'react';
import {
    Box,
    Card,
    CardActionArea,
    CardContent,
    Grid,
    Stack,
    TextField,
    Typography,
} from '@mui/material';

export default function WordPage() {
    const [word, setWord] = useState('compulsory');

    const encoded = useMemo(() => encodeURIComponent(word.trim()), [word]);

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
            <Grid
                container
                spacing={2}
            >
                <Grid
                    item
                    xs={12}
                    md={4}
                >
                    <Card>
                        <CardActionArea
                            href={`https://youglish.com/pronounce/${encoded}/english/us`}
                            target="_blank"
                        >
                            <CardContent>
                                <Typography fontWeight={700}>
                                    YouGlish
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    Listen to real US pronunciation
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>

                <Grid
                    item
                    xs={12}
                    md={4}
                >
                    <Card>
                        <CardActionArea
                            href={`https://dictionary.cambridge.org/us/dictionary/english/${encoded}`}
                            target="_blank"
                        >
                            <CardContent>
                                <Typography fontWeight={700}>
                                    Cambridge
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    IPA, meaning, category
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>

                <Grid
                    item
                    xs={12}
                    md={4}
                >
                    <Card>
                        <CardActionArea
                            href="https://www.youtube.com/watch?v=u99wAoBjDvQ&list=PLQMqUlV2_B8ngL_PaT9UFsd0-PvnrpZGC&index=3"
                            target="_blank"
                        >
                            <CardContent>
                                <Typography fontWeight={700}>
                                    Base video
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    Find the word in transcript
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>

            {/* MNEMONICS */}
            <Grid
                container
                spacing={2}
            >
                {/* ИСКИН */}
                <Grid
                    item
                    xs={12}
                    md={4}
                >
                    <Card>
                        <CardActionArea
                            href="https://chatgpt.com/share/694466ff-9c0c-8013-bb40-16b22e8977d4"
                            target="_blank"
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
                </Grid>

                {/* ИСКИНЧИК */}
                <Grid
                    item
                    xs={12}
                    md={4}
                >
                    <Card>
                        <CardActionArea
                            href="https://chat.deepseek.com/share/1ponvtmphpk4ix8rwa"
                            target="_blank"
                        >
                            <CardContent sx={{ textAlign: 'center' }}>
                                <Typography fontWeight={700}>
                                    Искинчик
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    Mnemonic hints
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>

                {/* PERPLEXITY */}
                <Grid
                    item
                    xs={12}
                    md={4}
                >
                    <Card>
                        <CardActionArea
                            href="https://www.perplexity.ai/search/izuchi-metodiku-mnemotekhniche-0_zNF6K8RBGUdjGyNW9Apg#0"
                            target="_blank"
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
                                <Typography fontWeight={700}>
                                    Perplexity
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    Mnemonic methodology
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
        </Stack>
    );
}
