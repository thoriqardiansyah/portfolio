import { logo } from "../constants/logo";
import { icons } from "../constants/icons";
import Tooltip from "../Tooltip";

const Experiences = () => {
  const datas = [
    {
      img: logo.Growlab,
      company: "PT. Digital Bisnis Kreatif (Growlab)",
      duration: "Feb 2024 - Jun 2024",
      job: "Web Developer",
      description:
        "Growlab is an end-to-end platform to accommodate UMKM business people in Indonesia to grow and develop together. For 4 months i was contributed to develop company website and website business for UMKM. During my internship 4 months i was learned many things such as built website content management system, reusable component, add feature authentication and authorization, slicing UI from figma, collaboration with developer team.",
      stack: [
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
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
          name: "React Js",
        },
        {
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
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
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sequelize/sequelize-original.svg",
          name: "Sequelize",
        },
        {
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg",
          name: "MySQL",
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
      ],
    },
  ];
  return (
    <article>
      {datas.map((data, id) => {
        return (
          <div className="md:flex md:items-center my-4" key={id}>
            <img
              src={data.img}
              alt="growlab"
              width={300}
              height={300}
              className="rounded-md w-[200px] h-[200px]  mx-auto mb-14 md:mb-0 md:m-0 border-2 border-black"
            />
            <div className="md:ml-20">
              <div className="md:flex md:justify-between">
                <h2 className="text-xl md:text-2xl font-bold">
                  {data.company}
                </h2>
                <h4 className="text-sm md:text-base font-medium">
                  {data.duration}
                </h4>
              </div>
              <h3 className="text-md md:text-xl font-bold">{data.job}</h3>
              <div className="flex items-start gap-x-2 mt-2">
                <p className="text-justify">{data.description}</p>
              </div>
              <div className="flex flex-wrap lg:flex-nowrap gap-2 mt-2">
                {data.stack.map((item, id) => {
                  return (
                    <Tooltip key={id} text={item.name}>
                      <img
                        src={item.icon}
                        alt={item.name}
                        className="w-8 h-8 rounded-md"
                      />
                    </Tooltip>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}

      {/* <div className="md:flex my-4">
        <img
          src={logo.Growlab}
          alt="growlab"
          width={300}
          height={300}
          className="rounded-md w-[200px] h-[200px]  mx-auto mb-14 md:mb-0 md:m-0 border-2 border-black"
        />
        <div className="md:ml-20">
          <div className="md:flex md:justify-between">
            <h2 className="text-xl md:text-2xl font-bold">
              PT. Digital Bisnis Kreatif (Growlab)
            </h2>
            <h4 className="text-sm md:text-base font-medium">
              Feb 2024 - Jun 2024
            </h4>
          </div>
          <h3 className="text-md md:text-xl font-bold">Web Developer</h3>
          <div className="flex items-start gap-x-2 mt-2">
            <p className="">
              Growlab is an end-to-end platform to accommodate UMKM business
              people in Indonesia to grow and develop together. For 4 months i
              was contributed to develop company website and website for UMKM
              business. During my internship 4 months i was learned many things
              such as built website content management system, reusable
              component, add feature authentication and authorization, slicing
              UI from figma, collaboration with developer team.
            </p>
          </div>
          <div className="mt-2">
            <figure>
              <img src={icons.Html} alt="" className="w-5 h-5 rounded-md" />
            </figure>
          </div>
        </div>
      </div> */}
    </article>
  );
};

export default Experiences;
{
  /* <img src={icons.Points} alt="Point" className="hidden md:block" /> */
}
