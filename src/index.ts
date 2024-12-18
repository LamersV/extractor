export interface UnzipOptions {
  recursive?: boolean;
  overwrite?: boolean;
  errorOnExist?: boolean;
  filenameFormatter?: (filename: string, buffer?: Buffer) => string;
}

export { unzip } from "./modules/zip";
