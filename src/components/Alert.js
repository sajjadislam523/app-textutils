import React from 'react'

function Alert({ alert }) {

    const capitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1)
    }

    // Mapping the alerts according to the daisyUI styles
    const alertClass = (type) => {
        switch (type) {
            case 'success':
                return 'alert-success';
            case 'error':
                return 'alert-error';
            case 'warning':
                return 'alert-warning';
            case 'info':
            default:
                return 'alert-info';
        }
    };

    return (
        alert && (
            <div role="alert" className={`flex justify-between rounded-none alert ${alertClass(alert.type)}`} >
                <div className="flex items-center gap-4">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="w-6 h-6 stroke-current shrink-0">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <span>
                        <strong>{capitalize(alert?.type || 'Info')}</strong>: {capitalize(alert?.message || 'No message provided')}
                    </span>
                </div>
            </div >
        )
    );
}

export default Alert
