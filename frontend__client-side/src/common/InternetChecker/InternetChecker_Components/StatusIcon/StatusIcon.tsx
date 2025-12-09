import { memo } from "react";
import type { StatusIconProps } from "../../../Types/Interfaces";
import "./StatusIcon.scss";

// Status icon component showing WiFi connection state
const StatusIcon = memo(({ isOnline, statusColor }: StatusIconProps) => {
    return (
        <div
            className="status-icon"
            role="img"
            aria-label={
                isOnline ? "Internet connected" : "No internet connection"
            }
        >
            {/* Base WiFi icon */}
            <i
                className="fa-solid fa-wifi"
                style={{ color: statusColor }}
                aria-hidden="true"
            />
            {/* Offline indicator overlay */}
            {!isOnline && (
                <div
                    className="wifi-slash"
                    style={{ color: statusColor }}
                    aria-hidden="true"
                >
                    <i className="fa-solid fa-slash"></i>
                </div>
            )}
        </div>
    );
});

export default StatusIcon;
