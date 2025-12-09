import type { PaymentTermProps } from "../../../common/Types/Interfaces";

const PaymentTerm = ({ term, className = "" }: PaymentTermProps) => {
    return (
        <li className={`mb-2 ${className}`}>
            <i className={`${term.icon} text-primary me-2`}></i>
            <strong>{term.title}:</strong> {term.description}
        </li>
    );
};

export default PaymentTerm;
