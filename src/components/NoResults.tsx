import noResult from "../assets/empty-state.webp";

type NoResultsProps = {
  search: string;
};

const NoResults = ({ search }: NoResultsProps) => {
  return (
    <div className="flex flex-col gap-6">
      <img
        className="max-w-xs rounded-xl bg-[#]"
        src={noResult}
        alt="No results"
      />
      <div>
        No characters found with name
        <span className=" text-secondary font-bold"> "{search}" </span>try again
        with a different name.
      </div>
    </div>
  );
};

export default NoResults;
