/**
 * Script for using self hosted TinyMCE as per https://www.tiny.cloud/docs/tinymce/latest/react-pm-host/
 */
import fse from 'fs-extra';
import path from 'path';

const destination = path.join(import.meta.dirname, '..', 'public', 'tinymce');
const source = path.join(import.meta.dirname, '..', 'node_modules', 'tinymce');

await fse.emptyDir(destination);
await fse.copy(source, destination, { overwrite: true, dereference: true });
