// tasks
// 1. write a function to download data from url
// 2. once the data is downloaded save the data to a file and return the file name
// 3. write a function to upload the file to some new url

function fetchUrl(url, fn) {
  // download content of the URL
  // this downloading process takes some time
  // we will download the content from url and then whatever we get we will pass it to callback(fn)
  console.log("Started Downloading");
  setTimeout(function download() {
    console.log("Completed Downloading");
    let response = "Dummy Content from " + url;
    fn(response);
    console.log("Function end");
  }, 3000);
}



function writeFile(data, fn) {
  console.log("Started Writing File");
  setTimeout(function process() {
    console.log("Completed Writing File");
    let fileName = "file.txt";
    fn(fileName);
  }, 4000);
}

function uploadFile(newUrl, fileName, fn) {
  console.log("Upload started");
  setTimeout(function porcess() {
    console.log("Upload Completed");
    let response = "File " + fileName + " uploaded to " + newUrl;
    fn(response);
  },5000);
}

fetchUrl("www.google.com", function downloadContent(response) {
        console.log(response);
        writeFile (response , function writeCallback(fileName){
            console.log("File name is " + fileName);
            uploadFile("www.drive.com", fileName, function uploadCallback(uploadResponse){
                console.log(uploadResponse);
            })
        })
});
