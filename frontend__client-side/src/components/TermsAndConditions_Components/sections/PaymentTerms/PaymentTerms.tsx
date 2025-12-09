import AlertBox from "../../../LegalPages_Components/AlertBox/AlertBox";
import SectionHeader from "../../../LegalPages_Components/SectionHeader/SectionHeader";
import PaymentTerm from "../../PaymentTerm/PaymentTerm";
import { paymentTermsData } from "../../data/termsData";

const PaymentTerms = () => {
    return (
        <section className="mb-5">
            {/* =============== Header =============== */}
            <SectionHeader
                title="Payment Terms"
                icon="fa-solid fa-credit-card"
            />

            {/* =============== Payment Terms Content =============== */}
            <div className="card border-0 shadow-sm">
                <div className="card-body">
                    <h4 className="h5 fw-semibold mb-3">Payment and Billing</h4>
                    <ul className="list-unstyled">
                        {paymentTermsData.map((term) => (
                            <PaymentTerm key={term.id} term={term} />
                        ))}
                    </ul>
                    <AlertBox
                        type="warning"
                        title="Important Payment Information"
                        message="All payments are processed securely through our payment partners. We do not store your payment information on our servers."
                        icon="fa-solid fa-info-circle"
                        className="mt-3"
                    />
                </div>
            </div>
        </section>
    );
};

export default PaymentTerms;
