/**
 * Custom hook called by CharacterListPage to get
 * the informacion from the cache or from the API
 * using tanStack cache
 * 
 * Author Yamil Bracho
 * 2026-Nov-11
 */

import { useQuery } from '@tanstack/react-query';
import { CharacterService } from '../services/CharacterService';

export const useCharacters = () => {

    return useQuery({
        queryKey: ['characters'],
        queryFn: ({ signal }) =>
            CharacterService.getCharacters(signal)
    });

};