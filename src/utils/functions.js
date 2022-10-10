import RNFetchBlob from 'rn-fetch-blob';

export const handleConvertImage = file => {
  const fs = RNFetchBlob.fs;
  let imagePath = null;
  RNFetchBlob.config({
    fileCache: true,
  })
    .fetch('GET', file)
    // the image is now dowloaded to device's storage
    .then(resp => {
      // the image path you can use it directly with Image component
      imagePath = resp.path();

      console.log('imagem utf8', resp.readFile('utf8'));
      return resp.readFile('base64');
    })
    .then(base64Data => {
      // here's base64 encoded image
      console.log('imagem 64', base64Data);
      // remove the file from storage
      return fs.unlink(imagePath);
    });
};
