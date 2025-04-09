import { ReactNode } from "react";

type InfoBoxProps = {
    mode : "Hint" | "Warning";
    children: ReactNode
}
export default function InfoBox({mode,children}: InfoBoxProps ){
    if(mode === "Hint"){
        return(
            <aside className="infobox infobox-hint hint--medium">
                <p>{children}</p>
            </aside>
        )
    }
    return (
        <aside className="infobox infobox-warning warning--medium">
            <h2>Warning</h2>
            <p>{children}</p>
        </aside>
    )
}
