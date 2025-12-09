import LogoItem from "./LogoItem";
import logo1 from "../../../../assets/icons/logo-1.png";
import logo2 from "../../../../assets/icons/logo-2.png";
import logo3 from "../../../../assets/icons/logo-3.png";
import logo4 from "../../../../assets/icons/logo-4.png";

const logosData = [
    {
        icon: "fa-brands fa-apple",
        className: "green-light-bg",
        alt: "Apple logo",
    },
    {
        image: logo2,
        className: "green-bg",
        alt: "Logo 2",
    },
    {
        image: logo3,
        className: "pink-bg",
        alt: "Logo 3",
    },
    {
        image: logo4,
        className: "yellow-bg",
        alt: "Logo 4",
    },
    {
        image: logo1,
        className: "blue-light-bg",
        alt: "Logo 1",
    },
];

const LogosSection = () => {
    return (
        <div className="logos d-flex mt-4 ps-2 justify-content-center justify-content-lg-start">
            {logosData.map((logo, index) => (
                <LogoItem
                    key={index}
                    icon={logo.icon}
                    image={logo.image}
                    alt={logo.alt}
                    className={logo.className}
                />
            ))}
        </div>
    );
};

export default LogosSection;
