import { progress } from './progress.model';

export type KeyResults = Array<KeyResult>;

interface KeyResult {
    description: string,
    progress: progress
}