import fs from 'fs';

import { ErrorCreateMissingFoldersFromPath } from '../errors/errors';

/**
 * @description Create a recursive set of folders from a slash-separated path.
 */
export function createMissingFoldersFromPath(filePath: string): void {
  if (!filePath) throw Error(ErrorCreateMissingFoldersFromPath);

  const requiresFolder = filePath.includes('/');
  if (!requiresFolder) return;

  const directoryPath = (() => {
    let folder = '';
    filePath.split('/').forEach((pathSection: string, index: number) => {
      if (index < filePath.split('/').length - 1) folder += `${pathSection}/`;
    });
    return folder;
  })();

  if (!fs.existsSync(directoryPath)) fs.mkdirSync(directoryPath, { recursive: true });
}
