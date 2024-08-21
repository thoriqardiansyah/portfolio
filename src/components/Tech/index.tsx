import { icons } from "../constants/icons";

const Tech = () => {
  const data = [
    {
      icon: icons.Html,
      name: "HTML",
    },
    {
      icon: icons.Css,
      name: "CSS",
    },
    {
      icon: icons.Javascript,
      name: "Javascript",
    },
    {
      icon: icons.Typescript,
      name: "Typescript",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      name: "React Js",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg",
      name: "Next Js",
    },
    {
      icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
      name: "Tailwind CSS",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg",
      name: "Node Js",
    },
    {
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg",
      name: "Express Js",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg",
      name: "Prisma",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
      name: "PostgreSQL",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg",
      name: "MySQL",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
      name: "MongoDB",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
      name: "Git",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
      name: "Github",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original.svg",
      name: "Gitlab",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
      name: "Figma",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
      name: "Postman",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
      name: "VSCode",
    },
  ];
  return (
    <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-5">
      {data.map((data, id) => {
        return (
          <div
            className="p-3 border-2 flex items-center border-black rounded-md hover:shadow-[6px_6px_0_0_#000] hover:-translate-y-[6px] hover:-translate-x-[6px] transition-all duration-500 ease-in-out group cursor-pointer"
            key={id}
          >
            <figure className="flex gap-x-3 items-center">
              <img
                width={40}
                height={40}
                src={data.icon}
                alt={data.name}
                className="rounded-md"
              />
              <figcaption className="text-md font-bold group-hover:text-reds transition-all duration-700 ease-in-out">
                {data.name}
              </figcaption>
            </figure>
          </div>
        );
      })}
    </div>
  );
};

export default Tech;
