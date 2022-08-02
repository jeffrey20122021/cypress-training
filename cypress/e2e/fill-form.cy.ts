import {PersonalFormPage} from "../page/index";

describe("Student Registration Form", () => {
  let personalFormPage: PersonalFormPage;
  const personalInformation = {
    name: "Holmes",
    lastName: "Salazar",
    email: "test@email.com",
    gender: "Male",
    dateOfBirth: "27 Jul 2016",
    mobileNumber: "3656589156",
    hobbies: ["Music", "Reading"],
    currentAddress: "Av siempreViva # 123",
    state: "Uttar Pradesh",
    city: "Agra",
  };
  before(()=> {
    personalFormPage = new PersonalFormPage();
  });

  it("Filling form",() => {
    personalFormPage.visitUrlPage();
    personalFormPage.fillForm(personalInformation);
    personalFormPage.verifySubmitTitle("Thanks for submitting the form");
  });
});
