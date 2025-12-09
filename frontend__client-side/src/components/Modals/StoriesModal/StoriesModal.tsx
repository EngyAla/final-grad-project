import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import "./StoriesModal.scss";
import type { StoriesModalProps } from "../../../common/Types/Interfaces";

const StoriesModal = ({ isOpen, onClose, modalData }: StoriesModalProps) => {
    const [isClosing, setIsClosing] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsClosing(false);
        }
    }, [isOpen]);

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            onClose();
            setIsClosing(false);
        }, 300); // Match animation duration
    };

    if (!isOpen || !modalData) return null;

    return createPortal(
        <div
            className={`story-modal-overlay ${isClosing ? "closing" : ""}`}
            onClick={handleClose}
        >
            <div
                className={`story-modal-wrapper ${isClosing ? "closing" : ""}`}
            >
                <div
                    className="story-modal"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="modal-header">
                        <h3>Full Review</h3>
                        <button className="close-btn" onClick={handleClose}>
                            <i className="fa-solid fa-times"></i>
                        </button>
                    </div>
                    <div className="modal-body">
                        {/* Stars */}
                        <div className="modal-stars">
                            {Array.from({ length: modalData.stars }).map(
                                (_, index) => (
                                    <i
                                        key={index}
                                        className="fa-solid fa-star yellow-color orange-color fs-4"
                                    ></i>
                                )
                            )}
                        </div>
                        {/* Text */}
                        <p className="modal-text">{modalData.text}</p>
                        {/* Author */}
                        <div className="modal-author">
                            <h4 className="black-color fw-semibold">
                                {modalData.author}
                            </h4>
                            <span className="black-light-color fw-semibold">
                                {modalData.date}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>,
        document.body
    );
};

export default StoriesModal;
