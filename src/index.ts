export interface UnzipOptions {
  recursive?: boolean;
  overwrite?: boolean;
  errorOnExist?: boolean;
}

export { unzip } from "./modules/zip";
