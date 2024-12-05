"use client"
import {PropsWithChildren, useState} from "react";
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
            )}
        >
            <span className={cn(
                "group-data-[active-nav=true]:scale-125",
                "group-data-[active-nav=true]:text-midnight-600",
                "group-data-[active-nav=true]:translate-x-2.5",
                "transition-all",
                "hover:text-midnight-600",
                "hover:scale-125",
                "origin-left"
            )}>
                {children}
            </span>
        </li>
    )
}

const Nav = () => {
    const [activeNav, setActiveNav] = useState<number>(0)
    return (
        <nav>
            <ul className="flex flex-col gap-[30px] relative">
                <span
                    style={{top: activeNav * 60}}
                    className={cn(
                        "transition-all",
                        "absolute left-0",
                        "w-0.5 h-[25px] bg-midnight-600 rounded"
                    )}
                ></span>
                {["ABOUT", "EXPERIENCES", "PROJECTS"].map((label, idx) => (
                    <NavItems
                        handleActiveNav={() => setActiveNav(idx)}
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