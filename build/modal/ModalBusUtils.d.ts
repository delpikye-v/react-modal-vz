import { TCallback } from 'eventbus-z';
import { IModalProps } from './IFModalTypes';
export declare const ModalEventBusName: {
    SHOW_MODAL2: string;
    SHOW_MODAL2_WITH: string;
};
export declare const useEventBus: (name: string, callback: any | TCallback, isReady?: boolean) => {
    name: string;
    callback: any;
};
declare class ModalBusUtils {
    static showModal(delay?: number): void;
    static hideModal(): void;
    static showModalWithProps(modalProps: IModalProps, delay?: number): void;
}
export default ModalBusUtils;
