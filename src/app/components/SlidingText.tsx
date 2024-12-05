"use client";
import {FC, useEffect, useRef} from "react";

const TextSlider: FC<{text:string}> = ({text}) => {
    const spanRef = useRef<HTMLSpanElement>(null);
    useEffect(() => {
        if(spanRef.current) console.log('shish rendered', spanRef.current.getBoundingClientRect().width);
    }, []);
    return (
        <span className="inline-flex overflow-hidden text-[50px] leading-[50px]">
            <span ref={spanRef} className="flex gap-[0.05em]">{text}</span>
        </span>
    )
}

export default TextSlider;