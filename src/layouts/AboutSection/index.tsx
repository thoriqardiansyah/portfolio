import { icons } from "../../components/constants/icons";
import { images } from "../../components/constants/images";
import Tech from "../../components/Tech";

const AboutSection = () => {
  return (
    <section id="about" className="relative pt-16 pb-20 md:py-32 ">
      <figure className="absolute top-6 md:top-[85px] lg:top-[85px] right-12 md:right-60 lg:right-[570px]">
        <img src={icons.Waveblue} alt="Waveblue" />
      </figure>
      <div className="text-center mb-16">
        <h2 className="text-2xl md:text-4xl font-bold">About me</h2>
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
      </div>
      <article className="relative">
        <img
          src={icons.Paintdrop}
          alt="paintdrop"
          className="absolute hidden md:block -top-20 lg:left-16 md:left-28"
        />
        <div className="relative text-center lg:flex mx-5 lg:px-[150px] z-10">
          <img
            src={images.Profile}
            alt="profile"
            className="rounded-md mx-auto border-2 border-black"
          />
          <div className="lg:ml-28 mt-10 md:mx-20 lg:mx-0 lg:mt-5">
            <p className=" text-base font-medium text-justify">
              Hello! I am Thoriq Ardiansyah, Thank you for visiting my portfolio
              website. I am a web developer with a strong interest in frontend.
              My interest in frontend led me to complete React Developer
              bootcamp and also i have work experience at company as Web
              Developer. My experience as a web developer is supported by
              expertise in HTML, CSS, and Javascript. My skills also involve
              Git, facilitating seamless integration between front-end and
              back-end. I am eager to learn new things and always open to new
              opportunities.
            </p>
          </div>
        </div>
        <figure>
          <img
            src={icons.Springred}
            alt="Springred"
            className=" absolute hidden md:block right-10 md:-bottom-24"
          />
        </figure>
      </article>

      <article className="pt-20 mx-5 lg:px-[150px]">
        <div className="relative text-center mb-16">
          <figure>
            <img
              src={icons.SparkleSmall}
              alt="Sparkle"
              className="absolute hidden md:block -top-16 md:left-24 lg:left-[270px]"
            />
          </figure>
          <h2 className="text-2xl md:text-4xl font-bold">
            Technologies & Tools
          </h2>

          <figure>
            <svg
              width={289}
              height={17}
              viewBox="0 0 289 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="inline-block"
            >
              <path
                d="M3 8.39094C5.71552 4.69784 12.7107 -0.472509 18.9672 8.39094C21.1397 11.3237 27.1138 15.4296 33.631 8.39094C35.4776 5.45818 40.9303 1.35231 47.969 8.39094C49.4897 11.7582 54.9424 16.4723 64.5879 8.39094C67.6293 4.58921 75.4066 -0.733206 82.1845 8.39094C84.1397 11.5409 89.94 15.951 97.5 8.39094"
                stroke="#D74A52"
                strokeWidth={6}
              />
              <path
                d="M97.5 8.54072C100.216 4.84762 107.211 -0.322729 113.467 8.54072C115.64 11.4735 121.614 15.5793 128.131 8.54072C129.978 5.60796 135.43 1.50209 142.469 8.54072C143.99 11.908 149.442 16.6221 159.088 8.54072C162.129 4.73899 169.907 -0.583425 176.684 8.54072C178.64 11.6907 184.44 16.1007 192 8.54072"
                stroke="#D74A52"
                strokeWidth={6}
              />
              <path
                d="M192 9.03791C194.716 5.34481 201.711 0.174464 207.967 9.03791C210.14 11.9707 216.114 16.0765 222.631 9.03791C224.478 6.10515 229.93 1.99928 236.969 9.03791C238.49 12.4052 243.942 17.1193 253.588 9.03791C256.629 5.23619 264.407 -0.0862331 271.184 9.03791C273.14 12.1879 278.94 16.5979 286.5 9.03791"
                stroke="#D74A52"
                strokeWidth={6}
              />
            </svg>
          </figure>
        </div>

        <Tech />
      </article>
      <img
        src={icons.ScribbleRed}
        alt="ScribbleBlack"
        className="absolute z-10 left-28 md:left-[360px] lg:left-[640px] -bottom-12 lg:-bottom-20 lg:w-[150px] lg:h-[154px] w-[100px] h-[100px]"
      />
    </section>
  );
};

export default AboutSection;
