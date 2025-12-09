import type { PageHeaderProps } from "../../../common/Types/Interfaces";
import "./PageHeader.scss";

const PageHeader = ({ title, subtitle, description }: PageHeaderProps) => {
    return (
        <header className="Page-Header">
            <div className="text-center mb-5">
                <h1 className="display-4 fw-bold text-primary mb-3">{title}</h1>
                {subtitle && <p className="lead text-muted">{subtitle}</p>}
                {description && (
                    <p className="text-muted">{description}</p>
                )}
            </div>
        </header>
    );
};

export default PageHeader;
