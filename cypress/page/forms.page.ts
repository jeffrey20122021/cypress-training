class PersonalFormPage {
    private firstName: string;
    private lastName: string;
    private email: string;
    private gender: string;
    private birthDate: string;
    private mobile: string;
    private hobbies: string;
    private currentAddress: string;
    private state: string;
    private city: string;
    private submit: string;
    private formURL: string;
    private modal: string;
  
    constructor() {
      this.firstName = "#firstName";
      this.lastName = "#lastName";
      this.email = "#userEmail";
      this.gender = "#genterWrapper";
      this.mobile = "#userNumber";
      this.birthDate = "#dateOfBirthInput";
      this.hobbies = "#hobbiesWrapper";
      this.currentAddress = "#currentAddress";
      this.state = "#react-select-3-input";
      this.city = "#react-select-4-input";
      this.submit = "#submit";
      this.formURL = "https://demoqa.com/automation-practice-form";
      this.modal = "#example-modal-sizes-title-lg";
    }
  
    public visitUrlPage(): void {
      cy.visit(this.formURL);
    }
  
    public fillForm(Info: PersonalInfo): void {
      cy.get(this.firstName).type(Info.name);
      cy.get(this.lastName).type(Info.lastName);
      cy.get(this.email).type(Info.email);
      cy.get(this.gender).find(`input[value = '${Info.gender}']`).click({force: true});
      cy.get(this.mobile).type(Info.mobileNumber);
      cy.get(this.birthDate).type(`{selectall}${Info.dateOfBirth}{enter}`);
      Info.hobbies.forEach((hobbie) => {
        cy.get(this.hobbies).find(".custom-control-label").filter(`:contains("${hobbie}")`).click();
      });
      cy.get(this.currentAddress).type(Info.currentAddress);
      cy.get(this.state).type(`${Info.state} {enter}`, {force: true});
      cy.get(this.city).type(`${Info.city} {enter}`, {force: true});
      cy.get(this.submit).click({force: true});
    }
  
    public verifySubmitTitle(msg: string): void {
      cy.get(this.modal).should("have.text", msg);
    }
  }

  interface PersonalInfo{
    name: string,
    lastName: string,
    email: string,
    gender: string,
    mobileNumber: string,
    dateOfBirth: string,
    hobbies: string[],
    currentAddress: string,
    state: string,
    city: string
  }

  export {PersonalFormPage};
