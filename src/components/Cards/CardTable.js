import React from 'react';
import PropTypes from 'prop-types';
import { FaEdit, FaTrash } from 'react-icons/fa'; // Importar el icono de eliminación

export default function CardTable({
  color,
  title = 'My Clan',
  headers = [],
  data = [],
  onEdit = null,
  onDelete = null, // Prop para la función de eliminación
}) {
  const handleEdit = async rowData => {
    await onEdit(rowData);
  };

  const handleDelete = rowData => {
    if (onDelete) {
      onDelete(rowData);
    }
  };

  const renderCellValue = value => {
    if (typeof value === 'object' || value === 'PASSWORD') {
      return null; // No mostrar valores de tipo objeto o "PASSWORD"
    } else {
      return value !== undefined && value !== null ? value : '-'; // Mostrar guion para valores undefined o null
    }
  };

  // Filtrar encabezados que tienen valores no deseados
  const filteredHeaders = headers.filter(header => data.some(row => renderCellValue(row[header]) !== null));

  return (
    <>
      <div
        className={
          'relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded ' +
          (color === 'light' ? 'bg-white' : 'bg-sky-600 text-white')
        }
      >
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3 className={'font-semibold text-lg ' + (color === 'light' ? 'text-blueGray-700' : 'text-white')}>
                {title}
              </h3>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto md:overflow-x-scroll">
          {/* Tabla de Proyectos */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                {filteredHeaders?.map((header, index) => {
                  if (header !== 'password') {
                    return (
                      <th
                        key={index}
                        className={
                          'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ' +
                          (color === 'light'
                            ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                            : 'bg-sky-600 text-sky-300 border-sky-700')
                        }
                      >
                        {header}
                      </th>
                    );
                  }
                })}
                <th
                  className={
                    'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ' +
                    (color === 'light'
                      ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                      : 'bg-sky-600 text-sky-300 border-sky-700')
                  }
                >
                  Options
                </th>
              </tr>
            </thead>
            <tbody>
              {data?.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {filteredHeaders?.map((header, colIndex) => {
                    if (header !== 'password') {
                      return (
                        <td
                          key={colIndex}
                          className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                        >
                          {renderCellValue(row[header])}
                        </td>
                      );
                    }
                  })}
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 pr-8">
                    {onEdit && (
                      <button
                        className="bg-blue-500 text-white font-bold py-2 px-4 rounded mr-2"
                        onClick={() => handleEdit(row)}
                      >
                        <FaEdit />
                      </button>
                    )}
                    {onDelete && (
                      <button className="text-red-500 hover:text-red-700" onClick={() => handleDelete(row)}>
                        <FaTrash />
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

CardTable.defaultProps = {
  color: 'light',
  headers: [],
  data: [],
};

CardTable.propTypes = {
  color: PropTypes.oneOf(['light', 'dark']),
  title: PropTypes.string,
  headers: PropTypes.arrayOf(PropTypes.string).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func, // PropTypes para la función de eliminación
};
