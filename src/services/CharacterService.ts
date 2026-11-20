/**
 * Handles the HttpClient call
 * 
 * Author Yamil Bracho
 * 2026-Nov-11
 */

import { httpClient } from '../api/httpClient';
import { API_ENDPOINTS } from './endpoints';
import type { CharacterResponse } from '../types/Character';

export const CharacterService = {

    async getCharacters(signal?: AbortSignal): Promise<CharacterResponse> {

        const response = await httpClient.get<CharacterResponse>(
            API_ENDPOINTS.CHARACTERS,
            signal
        );

        return {
            ...response,
            results: [...response.results].sort(
                (a, b) => a.name.localeCompare(b.name)
            )
        };
    }

};