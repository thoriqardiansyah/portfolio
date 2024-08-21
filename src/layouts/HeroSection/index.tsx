import { Link } from "react-router-dom";
import { icons } from "../../components/constants/icons";

const HeroSection = () => {
  return (
    <section id="home" className="bg-primary pt-36 pb-10 md:pt-56 md:pb-10">
      <img
        src={icons.HeroSwirl}
        alt="heroswirl"
        className="absolute hidden top-8 lg:flex"
      />
      <div className="text-center mx-auto">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-extrabold">
          Hello, I'am <br />
          <span className="text-reds"> Thoriq Ardiansyah</span>
        </h1>
        <h3 className="text-base md:text-xl font-semibold my-2 md:mt-5 md:mb-3 mx-auto">
          Experienced as Web Developer & Frontend Developer 👨🏻‍💻
        </h3>
        <p className="text-base font-medium">
          Based in South Bekasi, Indonesia 📍
        </p>
        <div className="flex justify-center mt-3 gap-x-3">
          <Link
            to={"https://github.com/thoriqardiansyah"}
            target="_blank"
            className=""
          >
            <figure className="flex items-center gap-x-3">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
                alt="github"
                className="w-8 h-8"
              />
            </figure>
          </Link>
          <Link
            to={"https://www.linkedin.com/in/thoriq-ardiansyah/"}
            target="_blank"
          >
            <figure className="flex items-center gap-x-3 ">
              <img src={icons.Linkedin} alt="linkedin" className="w-9 h-9" />
            </figure>
          </Link>
          <Link
            to={"https://www.instagram.com/duxie.s/"}
            target="_blank"
            className="flex items-center"
          >
            <figure className="flex items-center gap-x-3 ">
              <img src={icons.Instagram} alt="instagram" className="w-8 h-8" />
            </figure>
          </Link>
        </div>
        <div className="mt-14">
          <p className="text-sm font-medium mb-5">Keep Scrolling</p>
          <img
            src={icons.Arrowdown}
            alt=""
            className="inline-block animate-bounce"
          />
        </div>
      </div>
      <div>
        <img
          src={icons.HeroStars}
          alt="herostars"
          className="absolute right-10 top-52 hidden lg:flex "
        />
      </div>
    </section>
  );
};

export default HeroSection;
