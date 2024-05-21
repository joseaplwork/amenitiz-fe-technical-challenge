import { useSearchParams } from 'react-router-dom';

export function SearchBar() {
  const [search, setSearchParams] = useSearchParams();

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setSearchParams(value ? { s: value } : {});
  };

  return (
    <div className="sticky top-20 my-5">
      <input
        type="text"
        value={search.get('s') || ''}
        onInput={handleInput}
        placeholder="Search chess masters..."
        className="w-full p-3 border border-gray-200 rounded-lg shadow"
      />
    </div>
  );
}
