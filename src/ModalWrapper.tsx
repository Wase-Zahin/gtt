import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

interface ModalWrapperProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const ModalWrapper: React.FC<ModalWrapperProps> = ({ isOpen, onClose, children }) => {
    const [visible, setVisible] = useState(isOpen);

    useEffect(() => {
        if (isOpen) {
            setVisible(true);
        } else {
            const id = setTimeout(() => setVisible(false), 300);
            return () => clearTimeout(id);
        }
    }, [isOpen]);

    if (!visible) return null;

    return ReactDOM.createPortal(
        <div
            className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 ${
                isOpen ? "opacity-100" : "opacity-0"
            }`}
        >
            <div className="absolute inset-0 bg-black/50" onClick={onClose} />
            <div
                className={`relative z-10 transform transition-all duration-300 ${
                    isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
            >
                {children}
            </div>
        </div>,
        document.body
    );
};

export default ModalWrapper;