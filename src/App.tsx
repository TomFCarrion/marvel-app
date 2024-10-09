import { useState, useEffect } from "react";
import useSWRInfinite from "swr/infinite";
import { fetcher } from "./services/marvel";
import SearchInput from "./components/SearchInput";
import CharacterGrid from "./components/CharacterGrid";
import SkeletonGrid from "./components/SkeletonGrid";
import ErrorMessage from "./components/ErrorMessage";
import NoResults from "./components/NoResults";
import CharacterDetails from "./components/CharacterDetails";

const App = () => {
  const [search, setSearch] = useState("");
  const itemsPerPage = 20;
  const [isAscending, setIsAscending] = useState(true);
  const [selectedCharacterId, setSelectedCharacterId] = useState<number | null>(
    null
  );

  const getApiUrl = (pageIndex: number, previousPageData: any) => {
    if (previousPageData && !previousPageData.length) return null;

    const orderBy = isAscending ? "name" : "-name";

    return `${process.env.REACT_APP_API_URL}?apikey=${
      process.env.REACT_APP_API_KEY
    }&offset=${pageIndex * itemsPerPage}${
      search.length ? `&nameStartsWith=${search}` : ""
    }&orderBy=${orderBy}`;
  };

  const { data, error, size, setSize, isValidating, isLoading } =
    useSWRInfinite(getApiUrl, fetcher);

  const characters = data ? [].concat(...data) : [];

  const loadMore = () => {
    setSize(size + 1);
  };

  const toggleSortOrder = () => {
    setIsAscending(!isAscending);
  };

  useEffect(() => {
    const onScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
          document.body.offsetHeight - 500 &&
        !isValidating
      ) {
        loadMore();
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [isValidating]);

  if (error) return <ErrorMessage message="Error loading characters..." />;

  return (
    <div className="container mx-auto max-w-[1100px] m-auto flex flex-col items-start bg-[#000000] text-white">
      <div className="flex flex-row gap-6 items-center justify-center mt-6 mb-4">
        <SearchInput search={search} setSearch={setSearch} />
        <button
          onClick={toggleSortOrder}
          className="p-2 bg-primary text-white rounded-xl flex items-center"
        >
          Sort by Name {isAscending ? "↑" : "↓"}
        </button>
      </div>
      <div>
        {selectedCharacterId && (
          <CharacterDetails
            characterId={selectedCharacterId}
            onBack={() => setSelectedCharacterId(null)}
          />
        )}
      </div>
      {!selectedCharacterId && (
        <>
          {characters.length > 0 ? (
            <CharacterGrid
              characters={characters}
              onCharacterClick={(id: number | null) =>
                setSelectedCharacterId(id)
              }
            />
          ) : (
            !isLoading && !isValidating && <NoResults search={search} />
          )}
          {isValidating && <SkeletonGrid count={isLoading ? 20 : 4} />}
        </>
      )}
    </div>
  );
};

export default App;
