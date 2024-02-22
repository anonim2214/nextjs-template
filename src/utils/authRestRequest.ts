import restRequest, { RestRequestProps } from './restRequest';

export default function authRestRequest<Res>({
    method, headers, data, noBody, url, accessToken, handleLoading, handleUploading,
}: RestRequestProps & {
    accessToken: string;
}): Promise<Res> {
    const h = { ...headers };
    if (accessToken) {
        h['Authorization'] = `Bearer ${accessToken}`;
    }
    return restRequest({
        url,
        data,
        headers: h,
        noBody,
        method,
        handleUploading,
        handleLoading,
    });
}