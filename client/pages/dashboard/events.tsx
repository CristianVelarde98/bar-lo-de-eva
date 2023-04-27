/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-bind */
import { MouseEvent, useEffect, useState, useCallback } from 'react';
import LayoutNavbar from '@/components/layoutNavbar';
import EventColumn from '@/components/EventColumn';

type UseStateColumns = {
  [x: string]: string[];
};

function Events() {
  const [loading, isLoading] = useState(false);
  const [columns, setColumns] = useState<UseStateColumns>({
    column1: [''],
    column2: [''],
  });

  useEffect(() => {
    const column1: string[] = [];
    const column2: string[] = [];
    for (let index = 0; index < 10; index += 1) {
      column1.push(`${index}column1`);
      column2.push(`${index}column2`);
    }
    setColumns({
      column1,
      column2,
    });

    isLoading(true);
  }, []);

  const handleDelete = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      const { name, value } = event.currentTarget;
      const newArray = [...columns[name]];
      newArray.splice(Number(value), 1);

      setColumns({
        ...columns,
        [name]: newArray,
      });
    },
    [columns],
  );

  const handleAdd = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      const { name } = event.currentTarget;
      const newArray: string[] = [...columns[name]];
      newArray.push(`${columns[name].length}${name}`);
      setColumns({
        ...columns,
        [name]: newArray,
      });
    },
    [columns],
  );

  if (!loading) return <section>loading...</section>;

  return (
    <LayoutNavbar>
      <section className="h-full w-full bg-white p-5 flex flex-row justify-center gap-10 overflow-y-scroll">
        <EventColumn
          column={columns.column1}
          identify="column1"
          handleDelete={handleDelete}
          handleAdd={handleAdd}
        />
        <EventColumn
          column={columns.column2}
          identify="column2"
          handleDelete={handleDelete}
          handleAdd={handleAdd}
        />
      </section>
    </LayoutNavbar>
  );
}

export default Events;
