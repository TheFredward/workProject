# workProject
## Objective
To create a log system of our devices, maintain better track of the status of each, and to begin the transition towards *paperless*.
### Notes
* Currently all is being implemented on the **client** side.
* Only able to display one form input and can't discern between the type of test.
* Created a *workProject_npm* directory incase it is requested to use a database.
#### Tasks
- [x] Create form to input the needed data
- [x] Show a select number of the form on **index.html**
- [ ] Determine which test is completed
- [ ] Create an edit form
- [ ] Display edited data
##### Current Problems
Unable to show multiple form inputs at index after refresh. Perhaps look over _localstorage_ but saving the values to a database should be able to overcome this problem. The next issue is determining which test has been completed and which still needs to be done. Then _adding new test_
doesn't actually append to **jsonarray** so those tests aren't being saved at all when submitting the form.
