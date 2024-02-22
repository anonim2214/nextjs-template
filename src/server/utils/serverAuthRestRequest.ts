import serverRestRequest from '@/server/utils/serverRestRequest';

interface Props {
    url: string;
    method?: 'GET' | 'POST' | 'PUT';
    headers?: HeadersInit;
    accessToken: string;
}

export default async function serverAuthRestRequest({
    url, headers, method = 'GET', accessToken,
}: Props) {
    const h = { ...headers };
    if (accessToken) {
        // @ts-ignore
        h['Authorization'] = `Bearer ${accessToken}`;
    }
    const response = await serverRestRequest({
        url, headers: h, method,
    });

    return response;
}

