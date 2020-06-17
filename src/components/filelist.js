import React from "react";
import { useRecoilValue } from "recoil";

import { filesState } from "../atoms";

const FileList = () => {
  const files = useRecoilValue(filesState);

  return (
    <div className="file-list">
      {files.length > 0 && <h3>Dropped Files : </h3>}
      <div className="list">
        {files.map((file, i) => (
          <File key={i} n={i + 1} file={file} />
        ))}
      </div>
    </div>
  );
};

const File = ({ file, n }) => {
  return (
    <div className="file">
      <h4>{n + ". " + file.name}</h4>
      <div>
        <span>Type : </span>
        {file.type}
      </div>
      <div>
        <span>Size : </span>
        {file.size}KB
      </div>
    </div>
  );
};

export default FileList;
