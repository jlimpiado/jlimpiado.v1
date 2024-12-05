import Image from 'next/image';
import {CardPropsType, CardType} from "@/app/types";
import {cn} from "@/app/utils";

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
            "p-[25px]",
            "flex flex-col gap-2.5",
            "rounded-[20px]",
            "cursor-pointer",
            "hover:shadow-card",
            "hover:bg-midnight-alpha-50",
            "hover:backdrop-blur-sm"
        )}>
            <header
                className={cn(
                    'flex justify-between items-center'
                )}
            >
                <h3 className="group-hover:text-midnight-600">{title}</h3>
                {
                    type === CardType.EXP && (
                        <p className="text-[14px]">
                            {
                                props.years.map((year, index) => {
                                    if(index === props.years.length - 1) {
                                        return year
                                    }
                                    return `${year} - `
                                })
                            }
                        </p>
                    )
                }
            </header>
            <div className={cn(
                "grid",
                type === CardType.PROJ ? "grid-cols-[1fr_112px]" : ""
            )}>
                <p className={cn(
                    "text-[14px]",
                    type === CardType.PROJ ? 'mr-10' :''
                )}>{description}</p>
                {
                    type === CardType.PROJ && (
                        <div className="rounded-[5px] bg-midnight-900 size-28">
                            {props.imgUrl.length > 0 && <Image src={props.imgUrl} alt={title}/>}
                        </div>
                    )
                }
            </div>
            <div className="text-[12px]">
                {
                    tags.map((tag, index) => (
                        <span key={`${tag}@${index}`} className="inline-block bg-midnight-900 text-midnight-200 rounded-2xl px-2.5 py-1 even:mx-2.5">{tag}</span>
                    ))
                }
            </div>
        </div>
    )
}

export default Card;