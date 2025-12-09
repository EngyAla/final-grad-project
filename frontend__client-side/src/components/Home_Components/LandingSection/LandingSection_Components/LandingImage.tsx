import landingImage from "../../../../assets/images/landing-img.png";

const LandingImage = () => {
    return (
        <figure className="landing-image-container">
            <img
                src={landingImage}
                alt="landing"
                style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                }}
            />
        </figure>
    );
};

export default LandingImage;
