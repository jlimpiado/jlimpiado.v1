import Image from 'next/image';
import {CardPropsType, CardTitlePropsType, CardType} from "@/app/types";
import {cn} from "@/app/utils";
import ExternalLinkIcon from "@/app/icons/External_link.svg";

const CardTitle = (props: CardTitlePropsType) => {
    if(props.link !== undefined) return (
        <a href={props.link} target="_blank" rel="noopener noreferrer" className="flex gap-2 items-center group-hover:text-midnight-600">
            <h3>{props.title}</h3>
            <ExternalLinkIcon />
        </a>
    )

    return (
        <h3 className="group-hover:text-midnight-600">{props.title}</h3>
    )
}

const Card = (props: CardPropsType) => {
    const {
        tags,
        title,
        description,
        type
    } = props;
    return (
        <div className={cn(
            "group",
            "lg:p-[25px] p-4",
            "flex flex-col gap-2.5",
            "rounded-[20px]",
            "cursor-pointer",
            "hover:shadow-card",
            "hover:bg-midnight-alpha-50",
            "hover:backdrop-blur-sm"
        )}>
            <header
                className={cn(
                    'flex flex-col lg:flex-row lg:justify-between lg:items-center'
                )}
            >
                <CardTitle
                    title={title}
                    link={props.externalLink}
                />
                {
                    type === CardType.EXP && (
                        <span>
                            {props.years.map((year, idx) => (
                                idx === 1 ? year : `${year} - `
                            ))}
                        </span>
                    )
                }
            </header>
            <div className={cn(
                "grid",
                type === CardType.PROJ ? "lg:grid-cols-[1fr_200px]" : ""
            )}>
                <p className={cn(
                    "text-[14px]",
                    type === CardType.PROJ ? 'mr-10' :''
                )}>{description}</p>
                {
                    type === CardType.PROJ && (
                        <Image src={props.imgUrl} alt={title} className="aspect-video rounded border-2 border-midnight-600"/>
                    )
                }
            </div>
            <div className="flex gap-2.5 text-[12px]">
                {
                    tags.map((tag, index) => (
                        <span key={`${tag}@${index}`} className="inline-block bg-midnight-900 text-midnight-200 rounded-2xl px-2.5 py-1">{tag}</span>
                    ))
                }
            </div>
        </div>
    )
}

export default Card;