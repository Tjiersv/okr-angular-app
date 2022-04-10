import { KeyResults } from './key-results.model';

export type Okr = OkrCompleted | OkrIncompleted;

export type Okrs = Array<Okr>;

interface BaseOkr {
    objective: string,
    progress: number,
    keyResults: KeyResults,
}

interface OkrCompleted extends BaseOkr {
    completed: true
}

interface OkrIncompleted extends BaseOkr {
    completed: false
}
