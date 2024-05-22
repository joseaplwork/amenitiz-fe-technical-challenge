interface Props {
  source: string | undefined;
  title: string;
}

export function Avatar({ source, title }: Props) {
  return (
    <div className="flex items-center justify-center w-12 h-12 bg-gray-300 rounded-full">
      {source ? (
        <img src={source} alt={title} className="w-12 h-12 rounded-full" />
      ) : (
        <span className="text-2xl text-gray-600">
          {title.charAt(0).toUpperCase()}
        </span>
      )}
    </div>
  );
}
