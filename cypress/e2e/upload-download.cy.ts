import {UploadPage} from "../page/index";

describe("Upload Test", () =>{
  let upload: UploadPage;
  let fileName: string;
  let msgConfirmation: string;


  before(() => {
    upload = new UploadPage();
    fileName = "example.json";
    msgConfirmation = "File Uploaded!";
  });

  it("Uploading a File", () => {
    upload.visitPage();
    upload.uploadFile(fileName);
    upload.msgConfirmation(msgConfirmation, fileName);
  });
});
