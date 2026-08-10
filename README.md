# Next Sample App With mermaid-maker/action

This repo demonstrates how [mermaid-maker/action](https://github.com/mermaid-maker/action) can be integrated into your web-app.

1. The `public/*.mmd` directory contains the mermaid definition files.

2. The `app/components` directory contains 2 components:
  - `app/components/ClientMermaid.tsx` generates mermaid diagrams on the client for dev environments.
  - `app/components/MermaidDiagram.tsx` checks whether the current environment is dev or prod, before choosing the rendering strategy for mermaid diagrams.

3. The `.github/workflows` directory which contains 2 workflows:
  - `.github/workflows/gen_mermaid.yml` which you can run (workflow_dispatch) to see how the action generates a test diagram
  - `.github/workflows/nextjs.yml` deploys the app into github pages. This is the workflow that shows how `mermaid-maker/action` can be integrated into a Next app deployment. 

---

Feel free to fork the repo, add more mermaid definition files to the `public` directory, and see the action *in actions*!