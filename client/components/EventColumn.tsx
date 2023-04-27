import { MouseEvent, memo } from 'react';

type PropsEventsColumn = {
  column: string[];
  identify: string;
  handleDelete: (event: MouseEvent<HTMLButtonElement>) => void;
  handleAdd: (event: MouseEvent<HTMLButtonElement>) => void;
};

function EventsColumn({
  column,
  identify,
  handleDelete,
  handleAdd,
}: PropsEventsColumn) {
  return (
    <section className="w-1/2 h-max flex flex-col items-center gap-3">
      {column.map((name: string, index: number) => (
        <section
          key={name}
          className="bg-gray-600 rounded-lg w-full h-32 flex closeEvents style3d"
        >
          <button
            name={identify}
            value={index}
            onClick={events => handleDelete(events)}
            type="button"
            className="bg-red-700 text-white font-bold rounded-lg"
          >
            X
          </button>
          <p>{name}</p>
        </section>
      ))}
      <button
        name={identify}
        onClick={events => handleAdd(events)}
        type="button"
        className="bg-red-600 rounded-lg font-bold text-white w-full h-32 itemsSizeEvents"
      >
        New element
      </button>
    </section>
  );
}

export default memo(EventsColumn);
