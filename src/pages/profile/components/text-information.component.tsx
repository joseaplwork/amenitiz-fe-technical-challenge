interface Props {
  label: string;
  value: string | number;
}

export function TextInformation({ label, value }: Props) {
  if (!value) {
    return null;
  }

  return (
    <p className="mb-3 font-bold">
      {label}:<span className="inline-block ml-1 font-normal">{value}</span>
    </p>
  );
}
