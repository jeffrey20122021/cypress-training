import {UploadPage} from "../page/index";
import {DownloadPage} from "../page/index";

describe("Upload and Download Test", () =>{
  let upload: UploadPage;
  let fileName: string;
  let msgConfirmation: string;
  let download: DownloadPage;
  let downloadFileName: string;


  before(() => {
    upload = new UploadPage();
    download = new DownloadPage();
    fileName = "example.json";
    msgConfirmation = "File Uploaded!";
    downloadFileName = "sampleFile.jpeg";
  });

  it("Uploading File", () => {
    upload.visitPage();
    upload.uploadFile(fileName);
    upload.msgConfirmation(msgConfirmation, fileName);
  });

  it("Downloading File", () => {
    download.visitDownloadPage();
    download.downloadFile();
    download.verifyFile(downloadFileName);
  });
});
