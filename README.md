# Semester Project Template <!-- omit in toc -->

## Deployed project link: https://tgrbic-portfolio.vercel.app/

## Notion document link: https://www.notion.so/HCI-personal-portfolio-06a136fe173c4501a15e1974f8b5f60d#7f2685ed0aa14a65b0fd6ccdbdf57a7b

- [Project Structure](#project-structure)
  - [Example repo](#example-repo)
- [Getting Started](#getting-started)
- [Support](#support)

This repository serves as a template for organizing your semester project.

## Project Structure

- **`/semester-project`**: The source code of your main project; place the source code for the full-fledged implementation here.
- **`/class-projects`**: Results of your mini class semester projects.
- **`/docs`**: Include any project documentation in this folder (your final report in Markdown format or a link to it).
- **`/misc`**: Store any miscellaneous files related to the project in this directory.

### Example repo

```markdown
- /semester-project

  - README.md
  - ... (additional project folders)

- /class-projects

  - README.md
  - /class-project-1
    - README.md
    - ...
  - /class-project-2
    - README.md
    - ... (additional project folders)

- /docs

  - README.md

- /misc
  - [Any other files related to the projects]
```

## Getting Started

1. **Clone the Repository**: Start by cloning this repository to your local machine.

   ```bash
   git clone https://github.com/mcagalj/HCI-2023-24-template.git HCI-2023-24
   ```

   > NOTE: You can select a name other than `HCI-2023-24` for your repository.

2. **Organize Your Work**: Follow the folder structure outlined above to organize your project files. Make changes and commit.

3. **Push the Local Repository to Your GitHub Repository** (the one you already created and registered in the questionary). This repo should be public.

   > NOTE: To be able to push the cloned repository to your repository you should change the remote repository URL to your new repository.

   ```bash
   # Check origin
   git remote -v

   # Update origin
   git remote set-url origin https://github.com/[your-username]/[new-repository-name].git

   # Check updated origin
   git remote -v
   ```

   Finally, push local changes to your remote repository:

   ```bash
   git push -u origin main
   ```

## Support

If you encounter any issues or have questions, feel free ask. We're here to help!
