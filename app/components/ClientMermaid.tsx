"use client";

import { useState, useEffect } from "react";
import mermaid from "mermaid";

export default function ClientMermaid({chart}: {chart: string}) {
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    (async () => {
        setIsClient(true)
        await mermaid.run()
    })();
  }, [isClient]);

  return (
      <pre className="mermaid" suppressHydrationWarning>
        {
            chart
        }
      </pre>
  );
}