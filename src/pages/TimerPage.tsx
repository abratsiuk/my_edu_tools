import { useEffect, useMemo, useRef, useState } from 'react';
import {
    Box,
    Button,
    Card,
    CardContent,
    Divider,
    Stack,
    TextField,
    Typography,
} from '@mui/material';

type Row = {
    id: number;
    word: string;
    seconds: number; // finalized
    isRunning: boolean;
    startedAtMs?: number; // only when running
};

type Session = {
    id: number;
    rows: Row[];
    isRunning: boolean;
    startedAtMs: number;
    endedAtMs?: number;
};

function pad2(n: number): string {
    return n < 10 ? `0${n}` : `${n}`;
}

function formatMmSs(totalSeconds: number): string {
    const m = Math.floor(totalSeconds / 60);
    const s = totalSeconds % 60;
    return `${m}:${pad2(s)}`;
}

function nowMs(): number {
    return Date.now();
}

export default function TimerPage() {
    const [sessions, setSessions] = useState<Session[]>([]);
    const [wordInput, setWordInput] = useState('');
    const [tick, setTick] = useState(0);

    const nextSessionIdRef = useRef(1);
    const nextRowIdRef = useRef(1);

    const currentSession = sessions[0];

    // tick only when current session running and has running row
    useEffect(() => {
        if (!currentSession?.isRunning) {
            return;
        }
        const hasRunningRow = currentSession.rows.some((r) => r.isRunning);
        if (!hasRunningRow) {
            return;
        }

        const t = window.setInterval(() => {
            setTick((x) => x + 1);
        }, 250);

        return () => {
            window.clearInterval(t);
        };
    }, [currentSession?.isRunning, currentSession?.rows]);

    const isSessionRunning = Boolean(currentSession?.isRunning);

    function finalizeCurrentRow(session: Session, finalAtMs: number): Session {
        const running = session.rows.find((r) => r.isRunning);
        if (!running || !running.startedAtMs) {
            return session;
        }

        const durationSeconds = Math.max(
            0,
            Math.floor((finalAtMs - running.startedAtMs) / 1000)
        );

        const updatedRows = session.rows.map((r) => {
            if (r.id !== running.id) {
                return r;
            }
            return {
                ...r,
                seconds: durationSeconds,
                isRunning: false,
                startedAtMs: undefined,
            };
        });

        return { ...session, rows: updatedRows };
    }

    function startSession(): void {
        const t = nowMs();
        nextRowIdRef.current = 1;
        setWordInput('');

        const newSession: Session = {
            id: nextSessionIdRef.current++,
            rows: [],
            isRunning: true,
            startedAtMs: t,
        };

        setSessions((prev) => [newSession, ...prev]);
    }

    function endSession(): void {
        if (!currentSession) {
            return;
        }

        const t = nowMs();

        setSessions((prev) => {
            if (prev.length === 0) {
                return prev;
            }
            const first = prev[0];
            const finalized = finalizeCurrentRow(first, t);
            const ended: Session = {
                ...finalized,
                isRunning: false,
                endedAtMs: t,
            };
            return [ended, ...prev.slice(1)];
        });

        setWordInput('');
    }

    function addWord(raw: string): void {
        if (!currentSession?.isRunning) {
            return;
        }

        const w = raw.trim();
        if (!w) {
            return;
        }

        const t = nowMs();

        setSessions((prev) => {
            if (prev.length === 0) {
                return prev;
            }

            const first = prev[0];

            // 1) finalize previous running row (if any)
            const finalized = finalizeCurrentRow(first, t);

            // 2) add new running row
            const newRow: Row = {
                id: nextRowIdRef.current++,
                word: w,
                seconds: 0,
                isRunning: true,
                startedAtMs: t,
            };

            const updatedFirst: Session = {
                ...finalized,
                rows: [...finalized.rows, newRow],
            };

            return [updatedFirst, ...prev.slice(1)];
        });

        setWordInput('');
    }

    function sessionTotals(session: Session): {
        words: number;
        totalSeconds: number;
        avgSeconds: number;
    } {
        const n = nowMs();
        const words = session.rows.length;

        const totalSeconds = session.rows.reduce((sum, r) => {
            if (r.isRunning && r.startedAtMs) {
                const live = Math.max(
                    0,
                    Math.floor((n - r.startedAtMs) / 1000)
                );
                return sum + live;
            }
            return sum + r.seconds;
        }, 0);

        const avgSeconds = words > 0 ? Math.floor(totalSeconds / words) : 0;
        return { words, totalSeconds, avgSeconds };
    }

    function displayedSecondsForRow(r: Row): number {
        if (!r.isRunning || !r.startedAtMs) {
            return r.seconds;
        }
        return Math.max(0, Math.floor((nowMs() - r.startedAtMs) / 1000));
    }

    return (
        <Stack spacing={2}>
            <Stack direction="row">
                {!isSessionRunning ? (
                    <Button
                        variant="contained"
                        onClick={startSession}
                    >
                        start
                    </Button>
                ) : (
                    <Button
                        variant="outlined"
                        onClick={endSession}
                    >
                        end
                    </Button>
                )}
            </Stack>

            {isSessionRunning ? (
                <TextField
                    label="Word"
                    value={wordInput}
                    onChange={(e) => {
                        setWordInput(e.target.value);
                    }}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            addWord(wordInput);
                        }
                    }}
                    placeholder="Type a word and press Enter"
                    fullWidth
                    autoFocus
                />
            ) : null}

            <Stack spacing={2}>
                {sessions.length === 0 ? (
                    <Card variant="outlined">
                        <CardContent>
                            <Typography color="text.secondary">
                                Press start to begin a session.
                            </Typography>
                        </CardContent>
                    </Card>
                ) : (
                    sessions.map((s, sessionIndex) => {
                        const totals = sessionTotals(s);

                        // reverse display: last word at top
                        const reversed = s.rows.slice().reverse();

                        return (
                            <Card
                                key={s.id}
                                variant="outlined"
                            >
                                <CardContent>
                                    <Stack spacing={1}>
                                        <Typography
                                            sx={{
                                                fontWeight: 700,
                                                color: 'text.secondary',
                                            }}
                                        >
                                            Session{' '}
                                            {sessions.length - sessionIndex}
                                        </Typography>

                                        {reversed.length === 0 ? (
                                            <Typography color="text.secondary">
                                                {s.isRunning
                                                    ? 'Type the first word and press Enter.'
                                                    : 'Empty session.'}
                                            </Typography>
                                        ) : (
                                            reversed.map((r, revIdx) => {
                                                const originalIndex =
                                                    s.rows.length - revIdx; // 1..N (1 is first entered)
                                                const shownSeconds =
                                                    displayedSecondsForRow(r);
                                                const isLive =
                                                    s.isRunning && r.isRunning;

                                                return (
                                                    <Stack
                                                        key={r.id}
                                                        direction="row"
                                                        spacing={2}
                                                        alignItems="center"
                                                        sx={{ py: 0.5 }}
                                                    >
                                                        <Typography
                                                            sx={{
                                                                width: 36,
                                                                color: 'text.secondary',
                                                            }}
                                                        >
                                                            {originalIndex}.
                                                        </Typography>

                                                        <Typography
                                                            sx={{
                                                                flex: 1,
                                                                fontWeight:
                                                                    isLive
                                                                        ? 700
                                                                        : 400,
                                                            }}
                                                        >
                                                            {r.word}
                                                        </Typography>

                                                        <Typography
                                                            sx={{
                                                                width: 90,
                                                                textAlign:
                                                                    'right',
                                                                fontVariantNumeric:
                                                                    'tabular-nums',
                                                                color: isLive
                                                                    ? 'primary.main'
                                                                    : 'text.secondary',
                                                                fontWeight:
                                                                    isLive
                                                                        ? 700
                                                                        : 400,
                                                            }}
                                                        >
                                                            {formatMmSs(
                                                                shownSeconds
                                                            )}
                                                        </Typography>
                                                    </Stack>
                                                );
                                            })
                                        )}

                                        {!s.isRunning && s.rows.length > 0 ? (
                                            <>
                                                <Divider sx={{ my: 1 }} />
                                                <Stack spacing={0.5}>
                                                    <Typography>
                                                        Words:{' '}
                                                        <b>{totals.words}</b>
                                                    </Typography>
                                                    <Typography>
                                                        Total time:{' '}
                                                        <b>
                                                            {formatMmSs(
                                                                totals.totalSeconds
                                                            )}
                                                        </b>
                                                    </Typography>
                                                    <Typography>
                                                        Avg per word:{' '}
                                                        <b>
                                                            {formatMmSs(
                                                                totals.avgSeconds
                                                            )}
                                                        </b>
                                                    </Typography>
                                                </Stack>
                                            </>
                                        ) : null}
                                    </Stack>
                                </CardContent>
                            </Card>
                        );
                    })
                )}
            </Stack>
        </Stack>
    );
}
