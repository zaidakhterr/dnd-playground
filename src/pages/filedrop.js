import React from "react";
import DropBox from "../components/dropbox";
import FileList from "../components/filelist";

const FileDropPage = () => {
  return (
    <div className="drop">
      <h1>File Drop</h1>
      <DropBox />
      <FileList />
    </div>
  );
};

export default FileDropPage;
