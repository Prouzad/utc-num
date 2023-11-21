import { Upload } from "antd";
import { RcFile } from "antd/es/upload";
import { useState } from "react";

interface Props {
  Icon: any;
  title: string;
  placeholder: string;
}

const FileUpload: React.FC<Props> = ({ Icon, title, placeholder }) => {
  const [uploadedFile, setUploadedFile] = useState<any[]>([]);

  return (
    <div className="w-full">
      <p className="text-sm font-normal mb-[6px]">{title}</p>
      <div className="flex gap-3">
        <Icon className="flex-none" />
        <Upload
          className="border !w-full border-[#D3E8F7] bg-[#FFF] focus:border-[#D3E8F7] focus:outline-none rounded"
          onChange={(e) => setUploadedFile(e.fileList)}
          onRemove={() => setUploadedFile([])}
        >
          {uploadedFile?.length ? null : (
            <button className="w-full text-[#C0C0C0] text-sm font-normal h-full">
              {placeholder}
            </button>
          )}
        </Upload>
      </div>
    </div>
  );
};

export default FileUpload;
