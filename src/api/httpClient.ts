/**
 * Generic Call HTTP API
 * the signal parameter is sent by tanStack as a Cancellation
 * return Promise<T> or Error
 * add another methods as it will be needed.
 * Author Yamil Bracho
 * 2026-Nov-11
 */
export const httpClient = {

    async get<T>(
        url: string,
        signal?: AbortSignal
    ): Promise<T> {

        const response = await fetch(url, { signal });

        if (!response.ok) {
            throw new Error(
                `HTTP Error: ${response.status} - ${response.statusText}`
            );
        }

        return response.json() as Promise<T>;
    }
};