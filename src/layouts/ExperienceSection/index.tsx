import { icons } from "../../components/constants/icons";
import Experiences from "../../components/Experiences";

const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="relative pt-16 pb-10 px-5 lg:px-[150px] md:py-32 bg-primary"
    >
      <article className="text-center mb-16">
        <h2 className="text-2xl md:text-4xl font-bold">Experiences</h2>
        <svg
          width={140}
          height={20}
          viewBox="0 0 267 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="inline-block"
        >
          <path
            d="M3 10.472C6.75 5.37201 16.41 -1.76799 25.05 10.472C28.05 14.522 36.3 20.192 45.3 10.472C47.85 6.42201 55.38 0.752 65.1 10.472C67.2 15.122 74.73 21.632 88.05 10.472C92.25 5.22201 102.99 -2.128 112.35 10.472C115.05 14.822 123.06 20.912 133.5 10.472"
            stroke="#D74A52"
            strokeWidth={6}
          />
          <path
            d="M133.5 10.6789C137.25 5.57892 146.91 -1.56108 155.55 10.6789C158.55 14.7289 166.8 20.3989 175.8 10.6789C178.35 6.62891 185.88 0.958909 195.6 10.6789C197.7 15.3289 205.23 21.8389 218.55 10.6789C222.75 5.42891 233.49 -1.92109 242.85 10.6789C245.55 15.0289 253.56 21.1189 264 10.6789"
            stroke="#D74A52"
            strokeWidth={6}
          />
        </svg>
      </article>

      <Experiences />
      <img
        src={icons.ScribbleBlack}
        alt="ScribbleBlack"
        className="absolute z-10 left-28 md:left-[360px] lg:left-[640px] -bottom-12 lg:-bottom-20 lg:w-[150px] lg:h-[154px] w-[100px] h-[100px]"
      />
    </section>
  );
};

export default ExperienceSection;
