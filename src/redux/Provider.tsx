'use client';

import { Provider } from 'react-redux';
import { store } from '@/redux/store';
import { useEffect } from 'react';

function Providers({ children } : {children: React.ReactNode}) {
    useEffect(() => {
        const element = document.createElement('div', {});
        element.id = 'dropdowns';
        document.body.appendChild(element);
    }, []);
    return <Provider store={store}>{children}</Provider>;
}

export default Providers;