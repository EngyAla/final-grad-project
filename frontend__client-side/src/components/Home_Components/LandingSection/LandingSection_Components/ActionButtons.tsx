import ActionButton from "./ActionButton";

const buttonsData = [
    {
        icon: "fa-regular fa-house",
        text: "Visit",
        onClick: () => console.log("Visit clicked"),
    },
    {
        icon: "fa-solid fa-video",
        text: "Video Call",
        onClick: () => console.log("Video Call clicked"),
    },
];

const ActionButtons = () => {
    return (
        <div className="buttons mt-5 d-flex gap-3 justify-content-center justify-content-lg-start ps-4">
            {buttonsData.map((button, index) => (
                <ActionButton
                    key={index}
                    icon={button.icon}
                    text={button.text}
                    onClick={button.onClick}
                />
            ))}
        </div>
    );
};

export default ActionButtons;
