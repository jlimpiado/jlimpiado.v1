import {PropsWithChildren} from "react";

const Highlight = ({children}: PropsWithChildren) => {
    return (
        <span className="text-midnight-50">
            {children}
        </span>
    )
}

export default Highlight;