import { useEffect, useState } from "react";

type CharacterDetailsProps = {
  characterId: number;
  onBack: () => void;
};

const CharacterDetails = ({ characterId, onBack }: CharacterDetailsProps) => {
  const [characterDetails, setCharacterDetails] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCharacterDetails = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/${characterId}?apikey=${process.env.REACT_APP_API_KEY}`
        );
        const data = await response.json();
        setCharacterDetails(data.data.results[0]);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch character details.");
        setLoading(false);
      }
    };

    fetchCharacterDetails();
  }, [characterId]);

  console.log("characterDetails", characterDetails);

  if (loading) return <div>Loading character details...</div>;
  if (error) return <div>{error}</div>;

  if (!characterDetails) return <div>No character details available.</div>;

  return (
    <div className="container mx-auto max-w-[600px] m-auto p-4">
      <button
        onClick={onBack}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Back to List
      </button>
      <div className="border p-4 rounded shadow-lg">
        <img
          src={`${characterDetails.thumbnail.path}.${characterDetails.thumbnail.extension}`}
          alt={characterDetails.name}
          className="w-full rounded mb-4"
        />
        <h2 className="text-3xl font-bold mb-4">{characterDetails.name}</h2>
        <p>{characterDetails.description || "No description available"}</p>{" "}
      </div>
    </div>
  );
};

export default CharacterDetails;
