import fn from '../src';

describe('api.basic', () => {
  test('only a file name: file.txt shold get filename', () => {
    const src = 'file.txt';
    const result = fn(src);
    expect(result).toBe('file');
  });

  test('a path with filename will get the pathname', () => {
    const src = 'path/file.txt';
    const result = fn(src);
    expect(result).toBe('path/file');
  });

  test('a path with filename recursive',() =>{
    const src = 'path/subpath/file.txt.js';
    const result1 = fn(src, true);
    const result2 = fn(src);
    expect(result1).toBe('path/subpath/file');
    expect(result2).toBe('path/subpath/file.txt');
  });
});
