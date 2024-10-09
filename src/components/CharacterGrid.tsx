// components/CharacterGrid.tsx
import React from "react";
import CharacterCard from "./CharacterCard";

type CharacterGridProps = {
  characters: Array<{
    id: number;
    name: string;
    description: string;
    thumbnail: {
      path: string;
      extension: string;
    };
  }>;
  onCharacterClick: (id: number | null) => void;
};

const CharacterGrid: React.FC<CharacterGridProps> = ({
  characters,
  onCharacterClick,
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
      {characters.map((character) => (
        <CharacterCard
          key={character.id}
          character={character}
          onCharacterClick={onCharacterClick}
        />
      ))}
    </div>
  );
};

export default CharacterGrid;
