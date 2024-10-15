import React, { useContext } from 'react';
import { usePostPutMutation } from 'hooks/queries/usePostPutMutation';
import { toast } from 'sonner';
import { useFileState } from 'hooks/useUploadFile';
import { useFileUpload } from 'hooks/useUploadFile';
import { FileUploadSection } from 'components/uploadFile/FileUploadButton';
import { AuthContext } from 'store/authContext';

const API_URL = 'https://la-esperanza-backe-end.onrender.com/exercises';
// Main component
export const LeveUploadFile = () => {
  const { uploadFile } = useFileUpload();
  const file1State = useFileState();
  const file2State = useFileState();
  const { user } = useContext(AuthContext);

  const CreateMutation = nameChallenge => {
    return usePostPutMutation(`${API_URL}/${nameChallenge}/${user.id}`, {
      method: 'PATCH',
      onSuccess: () => toast.success('File updated successfully'),
    });
  };

  const { mutate: uploadFile1 } = CreateMutation('Challenge 11');
  const { mutate: uploadFile2 } = CreateMutation('Challenge 12');

  const handleFileChange = async (event, fileState, uploadFileMutation) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      fileState.setFile(selectedFile);
      fileState.setFileName(selectedFile.name);
      const url = await uploadFile(selectedFile);
      if (url) {
        const newId = Date.now().toString();
        fileState.setFileId(newId);
        uploadFileMutation({ urlFrame: url });
      }
    }
  };

  return (
    <div className="flex flex-col">
      <FileUploadSection
        title="Primer Archivo"
        fileState={file1State}
        onFileChange={e => handleFileChange(e, file1State, uploadFile1)}
      />
      <FileUploadSection
        title="Segundo Archivo"
        fileState={file2State}
        onFileChange={e => handleFileChange(e, file2State, uploadFile2)}
      />
    </div>
  );
};
