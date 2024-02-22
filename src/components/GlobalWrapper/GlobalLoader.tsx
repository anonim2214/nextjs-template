import { useEffect, useState } from 'react';
import { Router } from 'next/router';
import tw, { css } from 'twin.macro';
import Loader from '@/components/Loader/Loader';

export default function GlobalLoader({ forceVisible = false }: {
    forceVisible?: boolean;
}) {
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        Router.events.on('routeChangeStart', url=>{
            setIsLoading(true);
        });

        Router.events.on('routeChangeComplete', url=>{
            setIsLoading(false);
        });

        Router.events.on('routeChangeError', url =>{
            setIsLoading(false);
        });

    }, [Router]);

    if (isLoading || forceVisible) {
        return (
            <div css={tw`fixed w-full h-full top-0 left-0 bg-gray-200 bg-opacity-[.3] z-[999999]`}>
                <Loader
                    css={[tw`left-[50%] top-[50%]`, css`transform: translate(-50%, -50%)`, css`
        & #loader-dot {
          background: white;
        }
    `]}
                />
            </div>
        );
    }
    return null;
}