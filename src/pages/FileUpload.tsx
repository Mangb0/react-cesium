import axios from "axios";
import { ChangeEvent, FormEvent, useState } from "react";

const FileUpload = () => {
  const [file, setFile] = useState<File | undefined>(undefined);

  const onChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFile(file);
    }
  };

  const upload = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (!file) {
        alert("파일을 선택해주세요.");
        return;
      }

      const formData = new FormData();
      formData.append("file", file);

      const serverPoint = import.meta.env.VITE_BACKEND_DATA;

      const res = await axios.post(serverPoint, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("업로드결과:", res.data);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="viewer-container">
      <form onSubmit={upload}>
        <input type="file" onChange={onChangeFile} />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default FileUpload;
