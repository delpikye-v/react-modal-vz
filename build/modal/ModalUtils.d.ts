import React from 'react';
type CallBack = () => any;
type TapParams = {
    onSingleTap?: CallBack;
    onDoubleTap?: CallBack;
};
export declare function onTap(e: React.MouseEvent, { onSingleTap, onDoubleTap }: TapParams): void;
export declare function isScrollable(node: Element): {
    vertical: boolean;
    horizontal: boolean;
};
export declare const addScrollLockBody: (isShow: boolean) => void;
export {};
