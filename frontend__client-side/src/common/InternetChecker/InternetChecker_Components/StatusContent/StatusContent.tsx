import { memo } from "react";
import type { StatusContentProps } from "../../../Types/Interfaces";
import "./StatusContent.scss";

// Status content component displaying connection status text
const StatusContent = memo(
    ({ statusText, statusColor }: StatusContentProps) => {
        return (
            <div className="status-content">
                <h6
                    className="status-text"
                    style={{ color: statusColor }}
                    role="status"
                    aria-live="polite"
                >
                    {statusText}
                </h6>
            </div>
        );
    }
);

export default StatusContent;
