import fs from 'fs';
import path from 'path';

class FileOperator {
  protected path: string;

  constructor(fileName: string) {
    this.path =
      process.env.NODE_ENV === 'development'
        ? path.resolve(__dirname, `../../static/${fileName}.json`)
        : path.join(__dirname, `../static/${fileName}.json`);
  }

  write = (data: string) => {
    fs.writeFile(this.path, data, (err) => {
      if (err) {
        throw new Error(JSON.stringify(err));
      }
    });
  };

  read = () => {
    const data = fs.readFileSync(this.path);
    return data.toString();
  };
}

export default FileOperator;
