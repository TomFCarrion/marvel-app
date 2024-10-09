type SearchInputProps = {
  search: string;
  setSearch: (value: string) => void;
};

const SearchInput = ({ search, setSearch }: SearchInputProps) => {
  return (
    <input
      type="text"
      placeholder="Search for characters"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="border bg-transparent border-primary ring-primary rounded-xl p-2  hover:shadow-2xl shadow-primary"
    />
  );
};

export default SearchInput;
