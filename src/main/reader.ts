/* global __static */

import fs from 'fs';
import path from 'path';

class FileOperator {
  constructor(fileName) {
    this.path =
      process.env.NODE_ENV === 'development'
        ? path.join(__static, `/${fileName}.json`)
        : path.join(__dirname, `../static/${fileName}json`);
  }

  write = (data) => {
    fs.writeFileSync(this.path, data);
  };

  read = () => {
    const data = fs.readFileSync(this.path);
    return data.toString();
  };
}

export default FileOperator;
