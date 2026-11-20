# Rick & Morty Character List

This application shows how to call HTTP API service, use cache in a React front-end application.
Rick and Morty API - https://rickandmortyapi.com/api/character

Toolset:

- React
- Tailwindcss
- React Router
- Typescript 
- tanStack 

## Architecture
```
   React component - MainPage.tsx
   Get data using useQuery  
        |
        v
   TanStack Query
   check if data is already in cache
   Cache · Loading · Error · Refetch
        |
        v
    CharacterService.ts
    Get and stores character list
        |
        v
    httpClient.ts
    Generic Http client
```




