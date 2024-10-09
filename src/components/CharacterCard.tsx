import React, { useState } from "react";

type CharacterProps = {
  character: {
    id: number;
    name: string;
    description: string;
    thumbnail: {
      path: string;
      extension: string;
    };
  };
  onCharacterClick: (id: number) => void;
};

const CharacterCard = ({ character, onCharacterClick }: CharacterProps) => {
  const [showDescription, setShowDescription] = useState(false);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <div
      key={character.id}
      className="h-full p-4 cursor-pointer text-white backdrop-blur-md hover: shadow-inner	shadow-primary rounded-xl  hover:ring-1 hover:ring-primary overflow-hidden"
      onClick={() => onCharacterClick(character.id)}
      onMouseEnter={toggleDescription}
      onMouseLeave={toggleDescription}
    >
      <div className="w-full rounded-md aspect-square overflow-hidden">
        <img
          src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
          alt={character.name}
          className="w-full rounded-md aspect-square bg-primary hover:scale-125  transform transition-transform"
        />
      </div>

      <h2 className="text-xl mt-2">{character.name}</h2>
      <p className="mt-2">
        {showDescription
          ? character.description || "No description available"
          : ""}
      </p>
    </div>
  );
};

export default CharacterCard;
