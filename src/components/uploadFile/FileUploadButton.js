import { FaTrash, FaUpload } from 'react-icons/fa';

export const FileUploadButton = ({ onFileChange, id }) => (
  <>
    <input type="file" id={id} className="hidden" onChange={onFileChange} />
    <label
      htmlFor={id}
      className="flex items-center cursor-pointer p-4 bg-sky-500 rounded-lg hover:bg-blue-100 transition-colors duration-200 ease-in-out shadow-lg"
    >
      <FaUpload className="text-white text-4xl mr-2" />
      <span className="text-white font-medium">Subir Archivo</span>
    </label>
  </>
);

// Components
export const FileInfo = ({ fileName, onRemove }) => (
  <div className="mt-6 text-center flex flex-col items-center">
    <p className="text-lg font-semibold text-gray-700 mb-2">{fileName}</p>
    <button
      onClick={onRemove}
      className="flex items-center justify-center p-2 bg-red-500 text-white rounded-full shadow-lg hover:bg-red-600 transition-colors duration-200 ease-in-out"
    >
      <FaTrash className="text-lg mr-2" /> Eliminar
    </button>
  </div>
);

export const FileUploadSection = ({ title, fileState, onFileChange }) => (
  <div className="flex flex-col items-center justify-center p-6 border border-dashed border-gray-300 rounded-lg shadow-md bg-gray-50">
    <span className="text-xl font-semibold text-gray-800 my-4 mx-auto">{title}</span>
    <FileUploadButton onFileChange={onFileChange} id={`file-input-${title}`} />
    {fileState.file && <FileInfo fileName={fileState.fileName} onRemove={fileState.resetFile} />}
  </div>
);
