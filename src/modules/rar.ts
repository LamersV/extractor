// import { mkdir, readdir, unlink } from 'fs/promises';
import { UnzipOptions } from '../index';
// import { join, resolve } from 'path';
// import { existsSync } from 'fs';

export const unrar = async (path: string, destination: string, options?: UnzipOptions) => {
  throw new Error('Not implemented');
  // try {
  //   const dir = resolve(destination);

  //   if (!existsSync(dir)) {
  //     await mkdir(dir, { recursive: true });
  //   }

  //   // await extract(path, { dir });

  //   if (options?.recursive) {
  //     const files = await readdir(dir);

  //     for (const file of files) {
  //       if (!file.endsWith('.rar')) continue;

  //       const filePath = join(dir, file);
  //       const fileDestination = join(dir, file.replace('.rar', ''));

  //       if (!existsSync(fileDestination)) {
  //         await mkdir(fileDestination, { recursive: true });
  //       }

  //       await unrar(filePath, fileDestination, options);
  //     }
  //   }

  //   await unlink(path);
  // }
  // catch (error) {
  //   console.error('Error unzipping rar file:', error.message);
  //   if (options?.errorOnExist) throw error;
  // }
}