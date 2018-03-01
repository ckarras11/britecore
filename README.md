# BriteCore Challenge

## Running Locally
```
git clone repo
cd into repo
npm install
npm start
```
## User Flow
When a custom form is needed, the user is able to build out a Field Group.  First the user can pick an input type from a list or use the search field to find a specific input.  Then the user fill out the field details.  The label will automatically be shown below over the chosen input.  It will also be converted to lowercase and spaces will be replaced with a `-`.  This value will be filled in for the reference name.  The placeholder will be set on inputs that allow placeholders and the validation is currently just stored in state to be used elsewhere.  When a tag group is chosen the list of subtags is then displayed.  When a user picks the sub tag it is inserted into the input as a data attribute.  After the form is filled out the user can either click on a field group to save the input or create a new group and then click on that.  Once the input is saved the form is cleared and the user can create another input.
