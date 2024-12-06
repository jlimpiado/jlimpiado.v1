import {ReactNode} from "react";
import {StaticImageData} from "next/image";

type CardObj = {
    title: string;
    externalLink?: string;
    description: ReactNode;
    tags: Array<string>;
}

export enum CardType {
    EXP = "experiences",
    PROJ = "projects"
}

export type YearsType = number | string;

export type CardPropsType =
    | CardObj & {type: CardType.EXP; years: [YearsType, YearsType]}
    | CardObj & {type: CardType.PROJ; imgUrl: string | StaticImageData}

export type CardTitlePropsType = {
    title: string;
    link?: string;
}