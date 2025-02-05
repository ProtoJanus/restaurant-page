import "./contact.css";

class Contact {
  init() {
    const content = document.querySelector("#content");
    const form = document.createElement("form");

    const fullNameDiv = document.createElement("div");
    fullNameDiv.classList.add("full-name-div");
    const fullNameLabel = document.createElement("label");
    fullNameLabel.textContent = "Full Name";
    fullNameLabel.for = "name";
    const fullNameInput = document.createElement("input");
    fullNameInput.type = "text";
    fullNameInput.id = "name";
    fullNameInput.name = "name";
    fullNameInput.required = true;

    fullNameDiv.appendChild(fullNameLabel);
    fullNameDiv.appendChild(fullNameInput);

    const emailDiv = document.createElement("div");
    emailDiv.classList.add("email-div");
    const emailLabel = document.createElement("label");
    emailLabel.textContent = "Email";
    emailLabel.for = "email";
    const emailInput = document.createElement("input");
    emailInput.type = "email";
    emailInput.id = "email";
    emailInput.name = "email";
    emailInput.required = true;

    emailDiv.appendChild(emailLabel);
    emailDiv.appendChild(emailInput);

    const phoneNumberDiv = document.createElement("div");
    phoneNumberDiv.classList.add("phone-number-div");
    const phoneNumberLabel = document.createElement("label");
    phoneNumberLabel.textContent = "Phone Number";
    phoneNumberLabel.for = "phone-number";
    const phoneNumberInput = document.createElement("input");
    phoneNumberInput.type = "tel";
    phoneNumberInput.id = "phone-number";
    phoneNumberInput.name = "phone-number";
    phoneNumberInput.required = true;

    phoneNumberDiv.appendChild(phoneNumberLabel);
    phoneNumberDiv.appendChild(phoneNumberInput);

    const inquiryDiv = document.createElement("div");
    inquiryDiv.classList.add("inquiry-div");
    const inquiryLabel = document.createElement("label");
    inquiryLabel.textContent = "Your Inquiry";
    inquiryLabel.for = "inquiry";
    const inquiryTextArea = document.createElement("textarea");
    inquiryTextArea.id = "inquiry";
    inquiryTextArea.name = "inquiry";
    inquiryTextArea.required = true;

    inquiryDiv.appendChild(inquiryLabel);
    inquiryDiv.appendChild(inquiryTextArea);

    const contactSubmitButton = document.createElement("button");
    contactSubmitButton.type = "submit";
    contactSubmitButton.textContent = "Submit";

    form.appendChild(fullNameDiv);
    form.appendChild(emailDiv);
    form.appendChild(phoneNumberDiv);
    form.appendChild(inquiryDiv);
    form.appendChild(contactSubmitButton);

    content.innerHTML = "";
    content.appendChild(form);
  }
}

export default Contact;
