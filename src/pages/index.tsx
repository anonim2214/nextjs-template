import GlobalWrapper from '@/components/GlobalWrapper/GlobalWrapper';
import Image from 'next/image';
import getRequiredServerSideProps from '@/server/utils/getRequiredServerSideProps';

// export const getServerSideProps = async context => {
//     const props: any = await getRequiredServerSideProps(context, {
//         auth: true,
//         user: true,
//         myOrgnodes: true,
//     });
//     return { props };
// };

interface Props {
}

export default function({ serverSideProps }: Props) {
    return (
        <GlobalWrapper serverSideProps={serverSideProps} serverRequired={false}>
            Hi
        </GlobalWrapper>
    );
};
