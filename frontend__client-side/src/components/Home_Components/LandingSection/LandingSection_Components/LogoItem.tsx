import type { LogoItemProps } from "../../../../common/Types/Interfaces";

const LogoItem = ({ icon, image, alt, className }: LogoItemProps) => {
    return (
        <span className={className}>
            {icon ? <i className={icon}></i> : <img src={image} alt={alt} />}
        </span>
    );
};

export default LogoItem;
