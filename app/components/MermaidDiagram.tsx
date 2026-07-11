import ClientMermaid from "@/app/components/ClientMermaid"
import { readFile } from "node:fs/promises"
import Image from "next/image"

export async function MermaidDiagram({chart}: {chart: string}){

    if (process.env.NODE_ENV == "development"){
        const chart_content = await readFile(`${process.cwd()}/public/mermaid_diagrams/${chart}.mmd`, "utf-8")

        return <ClientMermaid chart={chart_content}/>
    }
    else if (process.env.NODE_ENV == "production") {
        return <Image src={`mermaid_diagrams/${chart}.svg`} alt="mermaid_diagram" />
    }
}
