import React from 'react';

export const ListView = ({ children }) => {
    return (
        <div className="h-full w-full flex flex-col space-y-4">
            {children}
        </div>
    );
};
