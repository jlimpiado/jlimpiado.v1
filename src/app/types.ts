import {ReactNode} from "react";

type CardObj = {
    title: string;
    description: ReactNode;
    tags: Array<string>;
}

export enum CardType {
    EXP = "experiences",
    PROJ = "projects"
}

export type CardPropsType =
    | CardObj & {type: CardType.EXP; years: Array<number|string>}
    | CardObj & {type: CardType.PROJ; imgUrl: string}