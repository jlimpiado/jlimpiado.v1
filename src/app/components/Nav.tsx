"use client"
import {PropsWithChildren, useEffect, useRef, useState} from "react";
import {cn} from "../utils";

const NavItems = ({children, activeNav, handleActiveNav}: PropsWithChildren<{activeNav?: boolean, handleActiveNav: () => void}>) => {
    return (
        <li
            onClick={() => handleActiveNav()}
            data-active-nav={activeNav}
            className={cn(
                "group",
                "flex",
                "item-center",
                "cursor-pointer",
                "h-[30px]",
                "odd:my-[30px]"
            )}
        >
            <span className={cn(
                "group-data-[active-nav=true]:scale-125",
                "group-data-[active-nav=true]:text-midnight-600",
                "group-data-[active-nav=true]:translate-x-3",
                "transition-all",
                "hover:text-midnight-600",
                "hover:translate-x-3",
                "origin-left",
                "leading-[30px]"
            )}>
                {children}
            </span>
        </li>
    )
}

const Nav = () => {
    const [activeNav, setActiveNav] = useState<number>(0);
    const isClickedRef = useRef(false);
    const navRef = useRef<HTMLDivElement>(null);
    const experiencesDiv = useRef<HTMLDivElement|null>(null);
    const projectsDiv = useRef<HTMLDivElement|null>(null);

    const scrollElement = (key: string) => {
        const element = document.querySelector(`div[data-nav=${key}]`)
        if(element) {
            const navY = navRef.current?.getBoundingClientRect().y ?? 0;
            const top = (element.getBoundingClientRect().top + document.documentElement.scrollTop) - navY;
            window.scrollTo({top, behavior: "smooth"});
        }
    }
    useEffect(() => {
        experiencesDiv.current = document.querySelector("div[data-nav='experiences']")
        projectsDiv.current = document.querySelector("div[data-nav='projects']")

        const handleTrackScroll = (isInit?:boolean) => {
            if(navRef.current && experiencesDiv.current && projectsDiv.current) {
                const navY = navRef.current.getBoundingClientRect().y;
                const experiencesY = experiencesDiv.current.getBoundingClientRect().y;
                const projectsY = projectsDiv.current.getBoundingClientRect().y;
                if(!isInit && isClickedRef.current) return;
                let newNavIdx = 0;
                if(projectsY <= navY) {
                    newNavIdx = 2;
                } else if(experiencesY <= navY) {
                    newNavIdx = 1;
                }
                setActiveNav(newNavIdx);
            }
        }

        handleTrackScroll(true);

        const handleScroll = () => {
            requestAnimationFrame(() => handleTrackScroll())
        }

        const handleResetIsClicked = () => {
            isClickedRef.current = false;
        }

        document.addEventListener('scroll', handleScroll);
        document.addEventListener('scrollend', handleResetIsClicked);

        return () => {
            document.removeEventListener('scroll', handleScroll);
            document.removeEventListener('scrollend', handleResetIsClicked);
        }
    }, [])
    return (
        <nav className="hidden lg:block" ref={navRef}>
            <ul className="relative w-max">
                <span
                    style={{top: activeNav * 60}}
                    className={cn(
                        "transition-all",
                        "absolute left-0",
                        "w-0.5 h-[30px] bg-midnight-600 rounded"
                    )}
                ></span>
                {["ABOUT", "EXPERIENCES", "PROJECTS"].map((label, idx) => (
                    <NavItems
                        handleActiveNav={() => {
                            isClickedRef.current = true
                            setActiveNav(idx)
                            scrollElement(label.toLowerCase())
                        }}
                        key={`${label}-${idx}`}
                        activeNav={idx === activeNav}>
                        {label}
                    </NavItems>
                ))}
            </ul>
        </nav>
    )
}

export default Nav;