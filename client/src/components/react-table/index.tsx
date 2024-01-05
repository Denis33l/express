import React from 'react';
import { useTable, Column } from 'react-table';

interface Row {
  text: string;
  book: string;
  number1: number;
  arrow1: string;
  server: string;
  number2: number;
  arrow2: string;
  bookmark: string;
  number3: number;
  arrow3: string;
}

const Table: React.FC = () => {
  const data: Row[] = React.useMemo(
    () => [
      { text: 'АИС «Открытая платформа «Образование»»', book: '', number1: 10, arrow1: '', server: '', number2: 20, arrow2: '', bookmark: '', number3: 30, arrow3: '' },
      { text: 'АИС «Электронный журнал куратора»', book: '', number1: 15, arrow1: '', server: '', number2: 25, arrow2: '', bookmark: '', number3: 35, arrow3: '' },
      { text: 'АИС SCHOOLS.BY', book: '', number1: 22, arrow1: '', server: '', number2: 32, arrow2: '', bookmark: '', number3: 42, arrow3: '' },
    ],
    []
  );

  const columns: Column<Row>[] = React.useMemo(
    () => [
      { accessor: 'text', minWidth: 800 },
      { accessor: 'book', Cell: ({ row }: { row: any }) => <>{row.values.book} - {row.values.number1}</> },
      { accessor: 'arrow1'}, 
      { accessor: 'server', Cell: ({ row }: { row: any }) => <>{row.values.server} - {row.values.number2}</>},
      { accessor: 'arrow2'},
      { accessor: 'bookmark', Cell: ({ row }: { row: any }) => <>{row.values.bookmark} - {row.values.number3}</> },
      { accessor: 'arrow3'},
    ],
    []
  );

  const { getTableProps, getTableBodyProps, rows, prepareRow } = useTable<Row>({ columns, data });

  return (
    <table {...getTableProps()} style={{ borderCollapse: 'collapse', width: '100%' }}>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()} style={{ borderBottom: '1px solid white', width: '70%' }}>
              {row.cells.map(cell => (
                <td {...cell.getCellProps()} style={{ padding: '8px', border: '1px solid white', width: '70%' }}>
                  {cell.render('Cell')}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
