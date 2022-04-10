import { KeyResults } from './key-results.model';
import { progress } from './progress.model';

export type Okr = OkrCompleted | OkrIncompleted;

export type Okrs = Array<Okr>;

interface BaseOkr {
    objective: string,
    progress: progress,
    keyResults: KeyResults,
}

interface OkrCompleted extends BaseOkr {
    completed: true
}

interface OkrIncompleted extends BaseOkr {
    completed: false
}


interface KeyResult {
    description: string,
    progress: number
}
