import { motion } from "framer-motion";
import { memo } from "react";
import StatusIcon from "../StatusIcon/StatusIcon";
import StatusContent from "../StatusContent/StatusContent";
import CloseButton from "../CloseButton/CloseButton";
import "./StatusCard.scss";
import type { StatusCardProps } from "../../../Types/Interfaces";

// Status card component combining all status elements
const StatusCard = memo(
    ({ isOnline, statusText, statusColor, onClose }: StatusCardProps) => {
        return (
            <motion.div
                className="internet-status"
                style={{ borderLeftColor: statusColor }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                role="alert"
                aria-live="assertive"
                aria-label={`Internet status: ${statusText}`}
            >
                <StatusIcon isOnline={isOnline} statusColor={statusColor} />
                <StatusContent
                    statusText={statusText}
                    statusColor={statusColor}
                />
                <CloseButton onClose={onClose} />
            </motion.div>
        );
    }
);

export default StatusCard;
