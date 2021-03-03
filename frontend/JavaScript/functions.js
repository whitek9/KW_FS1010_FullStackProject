function validateContactForm()
// used the event.preventDefault to stop the form from resetting/submitting after validation, not sure if it's the cleanest solution but it seemed to work!
{
    if (document.contactForm.name.value == "")
    {
        alert("Please enter your name");
        event.preventDefault();
    }
    else if (document.contactForm.phoneNumber.value == "" && (document.contactForm.contactPreference.value == "Phone" || document.contactForm.contactPreference.value == "SMS"))
    {
        alert("Please enter a phone number");
        event.preventDefault();
    }
    else if (document.contactForm.email.value == "" && document.contactForm.contactPreference.value == "Email")
    {
        alert("Please enter an email address");
        event.preventDefault();
    }
    else if (document.contactForm.subject.value == "")
    {
        alert("Please enter a subject for your message");
        event.preventDefault();
    }
    else if (document.contactForm.message.value == "")
    {
        alert("Please enter a message");
        event.preventDefault();
    }
    else 
    {
        alert("Thanks! Your message has been submitted.")
    }
}      