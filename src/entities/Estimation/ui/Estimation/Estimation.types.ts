import { Estimation } from "../../model/types/estimation";

export interface EstimationProps {
    className?: string;
    estimation: keyof typeof Estimation
}
