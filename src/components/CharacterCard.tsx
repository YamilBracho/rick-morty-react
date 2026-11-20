/**
 * Component to show one Character information
 * Pass the character via props
 * 
 * Author Yamil Bracho
 * 2026-Nov-11
 */


import type { Character } from '../types/Character';

interface CharacterCardProps {
  character: Character;
}

const statusColorMap: Record<Character["status"], string> = {
  Alive: "bg-emerald-500",
  Dead: "bg-rose-500",
  unknown: "bg-slate-400",
};

export function CharacterCard({ character }: Readonly<CharacterCardProps>) {
  const dotColor = statusColorMap[character.status] ?? "bg-slate-400";

  return (
    <article className="flex items-center gap-4 overflow-hidden rounded-xl bg-[#2a2e39] p-3 text-white shadow-md transition-transform hover:scale-[1.01]">
      {/* Imagen del personaje */}
      <img
        src={character.image}
        alt={character.name}
        loading="lazy"
        className="h-24 w-24 shrink-0 rounded-lg object-cover sm:h-28 sm:w-28"
      />

      {/* Información a la derecha */}
      <div className="flex min-w-0 flex-1 flex-col justify-between gap-1.5">
        <h2 className="line-clamp-2 text-lg leading-tight font-bold text-slate-100 sm:text-xl">
          {character.name}
        </h2>

        <div className="flex items-center gap-2 text-sm font-medium text-slate-200">
          <span className={`h-2.5 w-2.5 shrink-0 rounded-full ${dotColor}`} />
          <span>{character.status}</span>
        </div>

        <p className="text-sm text-slate-400">
          Episodios: <span className="font-semibold text-slate-300">{character.episode.length}</span>
        </p>
      </div>
    </article>
  );
}