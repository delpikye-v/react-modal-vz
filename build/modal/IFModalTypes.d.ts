/// <reference types="react" />
export type AnimateType = 'slideInFromLeft' | 'slideInFromRight' | 'slideInFromTop' | 'slideInFromBottom' | 'fadeIn' | 'fadeInFromLeft' | 'fadeInFromRight' | 'fadeInFromTop' | 'fadeInFromBottom' | 'bounce' | 'popIn' | 'default';
export interface IModalProps {
    children?: string | React.ReactNode;
    id?: string;
    modalId?: string;
    isOpen?: boolean;
    center?: boolean;
    bottom?: boolean;
    className?: string;
    fitHeight?: boolean;
    tabIndex?: number;
    animationType?: AnimateType;
    animationDuration?: string;
    showHeader?: boolean;
    showFooter?: boolean;
    modalTitle?: string | React.ReactNode;
    modalHeader?: string | React.ReactNode;
    modalFooter?: string | React.ReactNode;
    customizeXClose?: string | React.ReactNode;
    alignFooter?: 'center' | 'right' | 'left';
    fullButtonMobile?: boolean;
    showExtraButton?: boolean;
    showAcceptButton?: boolean;
    showCancelButton?: boolean;
    showXClose?: boolean;
    disabledClose?: boolean;
    escapeClose?: boolean;
    lockBodyScroll?: boolean;
    closeOnBackdrop?: boolean;
    showSplitBorder?: boolean;
    toggleTitle?: boolean;
    fullSceen?: boolean;
    classNameAccept?: string;
    classNameCancel?: string;
    classNameExtra?: string;
    labelAccept?: string;
    labelCancel?: string;
    labelExtra?: string;
    backdropDark?: boolean;
    handleToggle?: (toggle?: boolean) => any;
    handleAccept?: () => any;
    handleCancel?: () => any;
    handleEscapse?: () => any;
    handleXClose?: () => any;
    handleExtra?: () => any;
    handleOpen?: (isOpen: boolean) => any;
}
export interface IModalHeaderProps {
    showHeader?: boolean;
    showSplitBorder?: boolean;
    modalTitle?: string | React.ReactNode;
    toggleTitle?: boolean;
    modalHeader?: string | React.ReactNode;
    toggle?: boolean;
    handleToggle?: (toggle?: boolean) => any;
}
export interface IModalFooterProps {
    showFooter?: boolean;
    modalFooter?: any;
    alignFooter?: 'center' | 'right' | 'left';
    fullButtonMobile?: boolean;
    showExtraButton?: boolean;
    showAcceptButton?: boolean;
    showCancelButton?: boolean;
    disabledClose?: boolean;
    showSplitBorder?: boolean;
    classNameAccept?: string;
    classNameCancel?: string;
    classNameExtra?: string;
    labelAccept?: string;
    labelCancel?: string;
    labelExtra?: string;
    handleAccept?: () => any;
    handleCancel?: () => any;
    handleExtra?: () => any;
    handleShow?: (isOpen: boolean) => any;
}
export interface IModalCloseProps {
    customizeXClose?: any;
    disabledClose?: boolean;
    showXClose?: boolean;
    handleXClose?: () => any;
    handleShow?: (isOpen: boolean) => any;
}
