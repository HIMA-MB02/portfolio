import { PropsWithChildren } from "react";

export interface CardProps extends PropsWithChildren {
    color?: 'blueGradient' | 'orangeGradient';
    motion?: boolean;
}