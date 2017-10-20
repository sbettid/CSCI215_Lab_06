# CSCI215_Lab_06
Styling and validating a form

This will be a two-part lab. Part 1 will consist of creating a form in HTML and style in CSS. This will emphasize skill that were learned in CSCI-115 but will also improve on design elements that are crucial in Website Programming. Part 2 will incorporate the JavaScript language to be used for form validation. Fork and Clone this repository. Initial files have been provided.

## Part 1
Perform the steps in **Tutorial: Styling a Form**. These steps can be found in the PDF directory. Before performing the step, observe the initial look and feel. Part 1 will improve on this.

## Part 2 (Due: Monday, 23 Oct 2017 @ 11:59 pm)
**Step 1:**
* Remove the action from the form. This is done by making it an empty string.

**Step 2:**
* Write JavaScript that will check the user's name to ensure that it only contains valid letters (specifically not an '\<') for a name, check that the user inputted a number for age, and that a proper email was submitted. These should be contained in their own functions called, for example **checkName(), checkAge(), and validate()**. 

  * checkName() should be an onKeypress listener and turn the background color to red when it contains the illegal character '\<'. When the '\<' is removed, the field should behave as it did before turning red. (Hint: RegExp())
  * checkAge() should be an onKeypress listener and turn the background red whenever the user types a '.' or the number is more than 3 digits. When the discrepency is removed, the field should behave as it did before.
  * validate() should be an onClick listener for the Subscribe button that when clicked does the following:
    * calls a checkEmail() function.
    * If the email is good, then a call to myAjaxFunction() should be made that simply makes and alert() that notifies that the AJAX has been made and then clears out all of the user data in the input fields.
    * If the email is not good, then alert() the user that the subscription could not be processed and to check the information.



