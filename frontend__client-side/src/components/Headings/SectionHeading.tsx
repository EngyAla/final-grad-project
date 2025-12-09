import "./SectionHeading.scss";

const SectionHeading = ({ title, style }: { title: string, style?: React.CSSProperties }) => {
    return (
        <div className="Section-Heading mb-5" style={style}>
            <h2 className="black-color text-center fw-bold">{title}</h2>
        </div>
    );
};

export default SectionHeading;
