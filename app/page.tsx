import { MermaidDiagram } from "./components/MermaidDiagram"
import { readdirSync} from "fs"
import path from "path"

export default function Home() {
  const mermaid_files = readdirSync(path.join(process.cwd(), "public"), "utf-8" )
  return <div className="m-8">
    <h1 className="text-2xl font-bold">Add more mermaid diagrams!</h1>
    <p>Simply add more .mmd files to the public folder, and push it to the repo to see the action <em>in action!</em></p>
    <div className="grid grid-cols-2 gap-0 justify-items-center bg-red-500/10">

    {
      mermaid_files.map((file)=>{
        if (file.endsWith("mmd")){
          return (
          <div key={file} className="border-4 border-solid">
            <MermaidDiagram chart={file.replace(".mmd", "")} key={file}/>
            </div>)
        }
      })
    }
    </div>
  </div>

}
