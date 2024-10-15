import React from 'react';
import { createClient } from '@supabase/supabase-js';

// Constants
const SUPABASE_CONFIG = {
  bucket: 'school-esperanza',
  url: 'https://qdiahczwpgkrzehucnmy.supabase.co',
  publicUrl: 'https://qdiahczwpgkrzehucnmy.supabase.co/storage/v1/object/public',
  key: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFkaWFoY3p3cGdrcnplaHVjbm15Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQyMTQ5NjEsImV4cCI6MjAxOTc5MDk2MX0.iIoP_cC7wbA5CzwRjFxkAHm8Cpvo1gpm97cTrd85mSE',
};

// Supabase client
const supabase = createClient(SUPABASE_CONFIG.url, SUPABASE_CONFIG.key);

// Custom hooks
export const useFileUpload = () => {
  const uploadFile = async file => {
    const sanitizedFileName = file.name.replace(/[^a-zA-Z0-9.]/g, '_').replace(/\s+/g, '_');

    const { data, error } = await supabase.storage
      .from(SUPABASE_CONFIG.bucket)
      .upload(sanitizedFileName, file, { upsert: true });

    if (error) {
      console.error(error);
      return null;
    }

    return `${SUPABASE_CONFIG.publicUrl}/${data.fullPath}`;
  };

  return { uploadFile };
};

export const useFileState = () => {
  const [file, setFile] = React.useState(null);
  const [fileName, setFileName] = React.useState('');
  const [fileId, setFileId] = React.useState(null);

  const resetFile = () => {
    setFile(null);
    setFileName('');
    setFileId(null);
  };

  return { file, setFile, fileName, setFileName, fileId, setFileId, resetFile };
};
