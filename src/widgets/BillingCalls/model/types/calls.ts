import { CallState } from "entities/Call"; 

export interface CallsState {
    total_rows: string;
    results: CallState[];
}

export interface PersonInfo {
    id: number;
    avatar: string;
    name: string;
}

export interface CallsInfoState {
    isInited: boolean
    persons?: PersonInfo[];
}

