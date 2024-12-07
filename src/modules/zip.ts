import { mkdir, readdir, unlink } from 'fs/promises';
import { UnzipOptions } from '../index';
import { join, resolve } from 'path';
import extract from 'extract-zip';
import { existsSync } from 'fs';

export const unzip = async (path: string, destination: string, options?: UnzipOptions) => {
  try {
    const dir = resolve(destination);

    if (!existsSync(dir)) {
      await mkdir(dir, { recursive: true });
    }

    await extract(path, { dir });

    if (options?.recursive) {
      const files = await readdir(dir);

      for (const file of files) {
        if (!file.endsWith('.zip')) continue;

        const filePath = join(dir, file);
        const fileDestination = join(dir, file.replace('.zip', ''));

        if (!existsSync(fileDestination)) {
          await mkdir(fileDestination, { recursive: true });
        }

        await unzip(filePath, fileDestination, options);
      }
    }

    await unlink(path);
  }
  catch (error) {
    console.error('Error unzipping file:', error.message);
    if (options?.errorOnExist) throw error;
  }
}