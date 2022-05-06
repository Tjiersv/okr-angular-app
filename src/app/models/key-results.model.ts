import { progress } from './progress.model';

export type KeyResults = Array<KeyResult>;

export interface KeyResult {
    description: string,
    progress: progress
}