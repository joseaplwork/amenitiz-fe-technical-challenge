import { Link } from 'react-router-dom';

interface Props {
  chessMasters: string[];
}

export function List({ chessMasters }: Props) {
  return (
    <div className="grid lg:grid-cols-2 gap-5">
      {chessMasters.map((chessMaster) => (
        <Link
          key={chessMaster}
          to={`/chess-master/${chessMaster}`}
          className="block p-5 w-full bg-primary-50 border border-gray-200 rounded-lg shadow hover:shadow-lg transition duration-200 ease-in-out"
        >
          <span>Chess master</span>
          <h3 className="mb-2 text-lg font-bold tracking-tight">
            {chessMaster}
          </h3>
        </Link>
      ))}
    </div>
  );
}
