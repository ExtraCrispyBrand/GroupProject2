$(document).ready(function() {
  // Getting references to our form and input
  var signUpForm = $("form#signUp");
  var accountTypeInput = $("select#accountType");
  var firstNameInput = $("input#firstName");
  var lastNameInput = $("input#lastName");
  var companyNameInput = $("input#companyName");
  var emailInput = $("input#email");
  var passwordInput = $("input#password");

  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on("submit", function(event) {
    event.preventDefault();
    var userData = {
      accountType: accountTypeInput.val(),
      firstName: firstNameInput.val().trim(),
      lastName: lastNameInput.val().trim(),
      companyName: companyNameInput.val().trim(),
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };

    console.log("Account Type: " + userData.accountType);

    if (
      !userData.accountType ||
      !userData.firstName ||
      !userData.lastName ||
      !userData.email ||
      !userData.password
    ) {
      return;
    }

    if (userData.accountType === "sponsor" && !userData.companyName) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    signUpUser(
      userData.accountType,
      userData.firstName,
      userData.lastName,
      userData.companyName,
      userData.email,
      userData.password
    );
    accountTypeInput.val("");
    firstNameInput.val("");
    lastNameInput.val("");
    companyNameInput.val("");
    emailInput.val("");
    passwordInput.val("");
  });

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(
    accountType,
    firstName,
    lastName,
    companyName,
    email,
    password
  ) {
    $.post("/api/signup", {
      accountType: accountType,
      firstName: firstName,
      lastName: lastName,
      companyName: companyName,
      email: email,
      password: password
    })
      .then(function(data) {
        console.log("Data is here!", data);
        window.location.replace("/userhome");
        // If there's an error, handle it by throwing up a bootstrap alert
      })
      .catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});
