import { Link } from "react-router-dom";
import { images } from "../constants/images";
import Tooltip from "../Tooltip";

const Project = () => {
  const datas = [
    {
      id: 1,
      imageUrl: images.Podcast,
      github: "https://github.com/thoriqardiansyah/podcast",
      url: "https://podcast-v1.netlify.app/",
      title: "Podcast",
      type: "Website",
      description:
        "Pod of Cast is a podcast platform to focus on daily content. Here, you can find a collection of episodes from my podcast that cover a variety of interesting topics, from current trends, exclusive interviews, to in-depth discussions on relevant issues.",
      icon: [
        {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
          name: "Typescript",
        },
        {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
          name: "ReactJS",
        },
        {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
          name: "TailwindCSS",
        },
        {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swiper/swiper-original.svg",
          name: "SwiperJs",
        },
        {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
          name: "Figma",
        },
        {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
          name: "VSCode",
        },
      ],
    },
    {
      id: 6,
      imageUrl: images.Jseekers,
      url: "https://thoriqardiansyah-jseekers.netlify.app/",
      title: "JSeekers",
      type: "Website",
      description:
        "Jseekers is a website that focuses on digital solutions that make it easier for people to find career opportunities. This project is a job portal designed to connect job seekers with companies that need the best talent. The website is equipped with easy-to-use job search features and search filters.",
      icon: [
        {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg",
          name: "Javascript",
        },
        {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
          name: "ReactJS",
        },
        {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
          name: "TailwindCSS",
        },
        {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swiper/swiper-original.svg",
          name: "SwiperJs",
        },
        {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
          name: "Postman",
        },
        {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
          name: "VSCode",
        },
      ],
    },
    {
      id: 1,
      imageUrl: images.Movflix,
      github: "https://github.com/thoriqardiansyah/movies",
      url: "https://movflixs.netlify.app/",
      title: "Movflix",
      type: "Website",
      description:
        "Movflix is ​​a Movie and TV Series information website that presents various interesting content for cinema lovers. This website is designed to provide complete information about movies, from synopsis, genre, to rating.",
      icon: [
        {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
          name: "Typescript",
        },
        {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
          name: "ReactJS",
        },
        {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
          name: "TailwindCSS",
        },
        {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swiper/swiper-original.svg",
          name: "SwiperJs",
        },
        {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
          name: "Postman",
        },

        {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
          name: "VSCode",
        },
      ],
    },
    {
      id: 2,
      imageUrl: images.Newsco,
      github: "https://github.com/thoriqardiansyah/news-website",
      url: "https://newsco.netlify.app/",
      title: "NewsCo",
      type: "Website",
      description:
        "NewsCo is a news website designed to make it easier to access news on the internet. This website was developed with HTML, CSS 3, and Javascript. This website was created with the latest trends and was made from reference to the news site The Jakarta Post.",
      icon: [
        {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
          name: "HTML",
        },
        {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
          name: "CSS",
        },
        {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg",
          name: "Javascript",
        },
        {
          url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
          name: "VSCode",
        },
      ],
    },
  ];
  return (
    <article className="relative z-10 grid md:grid-cols-2 gap-5 px-5 lg:px-[150px]">
      {datas.map((data, id) => {
        return (
          <div
            className="border-2 border-black bg-white rounded-md p-5 flex flex-col justify-between hover:shadow-[6px_6px_0_0_#000] hover:-translate-y-[6px] hover:-translate-x-[6px] transition-all duration-500 ease-in-out group cursor-pointer"
            key={id}
          >
            <figure>
              <img
                src={data.imageUrl}
                alt="portfolio"
                className="w-full lg:h-[300px] rounded-md border"
              />
            </figure>
            <div>
              <h2 className="text-xl md:text-2xl lg:text-4xl font-bold group-hover:text-reds transition-all duration-300 ease-in-out mt-5">
                {data.title}
              </h2>
              <h3 className="text-base font-bold my-2">{data.type}</h3>
              <p className="text-sm font-normal md:font-medium">
                {data.description}
              </p>
            </div>
            <div className="flex gap-x-2 justify-end my-3">
              {data.github && (
                <Link
                  to={data.github}
                  target="_blank"
                  className="border-2 border-black hover:bg-slate-900 text-black hover:text-white text-base font-semibold rounded-md py-1 px-4 transition-all duration-500 ease-in-out"
                >
                  Source
                </Link>
              )}
              {data.url && (
                <Link
                  to={data.url}
                  target="_blank"
                  className="border-2 border-black hover:bg-slate-900 text-black hover:text-white text-base font-semibold rounded-md py-1 px-4 transition-all duration-500 ease-in-out"
                >
                  URL
                </Link>
              )}
            </div>
            <div className=" border-t border-black pt-4 flex items-center gap-x-2">
              <p className="hidden lg:block text-sm font-bold">Tech stack: </p>
              {data.icon.map((item, id) => {
                return (
                  <Tooltip key={id} text={item.name}>
                    <img
                      src={item.url}
                      alt="logo"
                      className="rounded-md w-[20px] h-[20px] md:w-[30px] md:h-[30px]"
                    />
                  </Tooltip>
                );
              })}
            </div>
          </div>
        );
      })}
    </article>
  );
};

export default Project;
