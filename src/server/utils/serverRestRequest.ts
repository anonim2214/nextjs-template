import chalk from 'chalk';

interface Props {
    url: string;
    method?: 'GET' | 'POST' | 'PUT';
    headers?: HeadersInit;
    data?: {
        [key: string]: any;
    }
}

export default async function serverRestRequest({
    url, headers, method = 'GET', data,
}: Props) {
    const fullUrl = `${process.env.NEXT_PUBLIC_UNI_SERVER_API_URL}${url}`;
    const params: any = { headers, method: (method as string) };
    if (data) {
        params.body = JSON.stringify(data);
    }
    const h = { ...headers };
    // @ts-ignore
    h['Content-Type'] = 'application/json; charset=utf-8';
    params.headers = h;

    const response = await fetch(`${process.env.NEXT_PUBLIC_UNI_SERVER_API_URL}${url}`, params );
    const respText = await response.text();
    const respJson = JSON.parse(respText);
    const log = [];
    if (response.status === 200) {
        // @ts-ignore
        log.push(chalk.greenBright('Response', response.status, response.statusText));
    } else {
        // @ts-ignore
        log.push(chalk.redBright('Response', response.status, response.statusText));
    }
    // @ts-ignore
    log.push(fullUrl, chalk.yellow(respText));
    console.info(...log);

    if (response.status !== 200) {
        let errorBody;
        try {
            errorBody = respJson;
        }
        catch (ee) {
            console.info(ee);
        }
        throw { ...errorBody };
    }

    return respJson;
}

