import { Link } from "react-router-dom";
import { icons } from "../../components/constants/icons";

const ContactSection = () => {
  return (
    <section id="contact" className="relative pt-16 pb-20 md:py-32 bg-primary">
      <div className="text-center mb-16">
        <h2 className="text-2xl md:text-4xl font-bold">Get in Touch</h2>
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
      <div className="flex flex-col md:flex-row justify-center gap-10 md:gap-x-20">
        <Link to={"mailto:thoriq.ardiansyah0@gmail.com"}>
          <figure className="flex items-center gap-x-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-20 h-20"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
            <figcaption className="text-lg font-bold">E-Mail</figcaption>
          </figure>
        </Link>
        <Link
          to={"https://www.linkedin.com/in/thoriq-ardiansyah/"}
          target="_blank"
        >
          <figure className="flex items-center gap-x-3 ">
            <img src={icons.Linkedin} alt="linkedin" className="w-20 h-20" />
            <figcaption className="text-lg font-bold">LinkedIn</figcaption>
          </figure>
        </Link>
        <Link
          to={"https://www.instagram.com/duxie.s/"}
          target="_blank"
          className="flex items-center"
        >
          <figure className="flex items-center gap-x-3 ">
            <img src={icons.Instagram} alt="instagram" />
            <figcaption className="text-lg font-bold">Instagram</figcaption>
          </figure>
        </Link>
      </div>
    </section>
  );
};

export default ContactSection;
