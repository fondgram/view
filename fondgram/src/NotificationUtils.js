import { toast } from 'react-hot-toast';

export const showSuccessToast = (message) => {
    toast(message, {
        type: 'success', duration: 2000, position: 'top-right'
    });
};


export const showErrorToast = (message) => {
    toast(message, { type: 'error', duration: 2000, position: 'top-right' });
};

export const showInfoToast = (message) => {
    toast(message, { type: 'info', duration: 2000, position: 'top-right', icon: '📘' });
};