import GlobalStyles from '@/styles/GlobalStyles';
import Provider from '@/redux/Provider';
import { ReactElement } from 'react';
import tw from 'twin.macro';
import PopupManagement from '@/components/PopupManagement/PopupManagement';
import GlobalLoader from '@/components/GlobalWrapper/GlobalLoader';

interface GlobalWrapperProps {
    children: ReactElement | ReactElement[];
    allowUnauth?: boolean;
}

export default function GlobalWrapper({
    children, allowUnauth,
}: GlobalWrapperProps): ReactElement {
    const renderByState = () => {
        // if (serverRequired && !serverSideProps.server!.isAlive) {
        //     return <ServerUnavailable />;
        // }
        // if ((allowUnauth || serverSideProps.auth!.isAuth)) {
        //     return children;
        // } else {
        //     return <Login />;
        // }

        return children;
    };
    return (
        <Provider>
            <GlobalLoader />
            <GlobalStyles />
            <div css={tw`h-full`}>
                {renderByState()}
            </div>
            <PopupManagement />
        </Provider>
    );
}