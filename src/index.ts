const strip = (inFilename: string, inRecursive?: boolean): string => {
  var filename = inFilename;
  var recursive = inRecursive || false;
  var str = filename.substr(0, filename.lastIndexOf('.'));
  return recursive && str.indexOf('.') > -1 ? strip(str) : str;
};

export default strip;
