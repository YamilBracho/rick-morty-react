/**
 * Page to show CharacterList
 * use hook
 * the informacion from the cache or from the API
 * using tanStack cache
 * 
 * Author Yamil Bracho
 * 2026-Nov-11
 */

import { useNavigate } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import { CharacterService } from '../services/CharacterService';
import type { Character } from '../types/Character';

const statusDotColor: Record<Character["status"], string> = {
  Alive: "bg-emerald-500",
  Dead: "bg-rose-500",
  unknown: "bg-slate-400",
};

export default function CharacterList() {
  const navigate = useNavigate();

  const { data, isLoading, isError, error } = useQuery({
      queryKey: ["characters"],
      queryFn: ({ signal }) => CharacterService.getCharacters(signal),
  });

if (isLoading) {
    return (
      <main className="min-h-screen bg-[#1f222a] px-4 py-8 text-white">
        <p className="text-center text-slate-300">Loading...</p>
      </main>
    );
  }

  if (isError) {
    return (
      <main className="min-h-screen bg-[#1f222a] px-4 py-8 text-white">
        <p className="text-center text-rose-400">{error.message}</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#1f222a] px-4 py-8 text-white">
      <div className="mx-auto max-w-6xl">
        {/* Encabezado y botón Back */}
        <div className="mb-8 flex items-center justify-between gap-4">
          <h1 className="text-2xl font-extrabold tracking-tight text-slate-100 sm:text-3xl">
            CharacterList
          </h1>

          <button
            onClick={() => navigate("/")}
            className="cursor-pointer rounded-lg bg-slate-700 px-4 py-2 text-sm font-semibold text-slate-100 transition-colors hover:bg-slate-600"
          >
            Back
          </button>
        </div>

        {/* Grid responsivo de 1, 2 o 3 columnas */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {data?.results.map((character: Character) => {
            const dotClass = statusDotColor[character.status] ?? "bg-slate-400";

            return (
              <article
                key={character.id}
                className="flex items-center gap-4 overflow-hidden rounded-xl bg-[#2a2e39] p-3 shadow-md transition-transform hover:scale-[1.01]"
              >
                <img
                  src={character.image}
                  alt={character.name}
                  loading="lazy"
                  className="h-24 w-24 shrink-0 rounded-lg object-cover sm:h-28 sm:w-28"
                />

                <div className="flex min-w-0 flex-1 flex-col justify-between gap-1.5">
                  <h2 className="line-clamp-2 text-lg leading-tight font-bold text-slate-100 sm:text-xl">
                    {character.name}
                  </h2>

                  <div className="flex items-center gap-2 text-sm font-medium text-slate-200">
                    <span
                      className={`h-2.5 w-2.5 shrink-0 rounded-full ${dotClass}`}
                    />
                    <span>{character.status}</span>
                  </div>

                  <p className="text-sm text-slate-400">
                    Episodios:{" "}
                    <span className="font-semibold text-slate-300">
                      {character.episode.length}
                    </span>
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </main>
  );
}
