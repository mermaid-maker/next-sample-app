import ClientMermaid from "@/app/components/ClientMermaid"
import { readFile } from "node:fs/promises"
import Image from "next/image"

export async function MermaidDiagram({chart}: {chart: string}){
    let MermaidDiagram = null;
    if (process.env.NODE_ENV == "development"){
        const chart_content = await readFile(`${process.cwd()}/public/${chart}.mmd`, "utf-8")

        MermaidDiagram = <ClientMermaid chart={chart_content}/>
    }
    else if (process.env.NODE_ENV == "production") {
        MermaidDiagram = <Image src={`${process.env.NEXT_PUBLIC_BASEPATH}${chart}.svg`} alt="mermaid_diagram" width={100} height={100}/>
    }

    return <>
    <div className="*:w-100">
    {MermaidDiagram}

    </div>
    </>
}
