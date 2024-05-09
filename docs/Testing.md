# Testing

## Test Plan
TODO: Describe any manual and automated (unit) tests. Uniquely identify each test case. Include prerequisites and test data.

Test Runs
TODO: For each test described above, indicate the current status. 
Create a requirements traceability matrix to validate the completeness of the product.


| Test Case | Description | Prerequisites | Scenario|
| ----------- | -------------- | --------- | ------ |
| UC1 FR1.1 | Shows the useron the map| user accepting geolocation services| When webpage is opened, user should get asked if they want to share their location to access the map |
| UC1 FR1.2 | Display all the toilets on the map | Fetching data from the open data API | Users want to see all the toilets on the map |
| UC FR1.3| Centre the map on user | User's location | Map should center on the user when location is pulled |
| General | Webpage should work on any browser | 3 different test browsers | Opened on Firefox, Opera and safari |
| General | Data is fetched in timely manner | Optimized code | When finding by type, the data should be displayed quickly, the user doesn't have to wait long, wait times vary though |



| Use-Case ID | Requirement ID | Test Case | Status |
| ----------- | -------------- | --------- | ------ |
| UC1 | FR1.1 | The system should get permission to access user location via geolocation navigator | Pass |
| UC1| FR1.2 | The system should query the database for public toilets from Open Data Bristol| Pass |
| UC1 | FR1.3 | The system should centre the map on the user location | PASS |
| UC1 | FR1.4 | The system should add markers for each public toilet. | PASS |
| UC2 | FR2.1 | The system should differentiate between different types of toilets. | FAIL / NOT IMPLEMENTED YET |
| ----------- | -------------- | --------- | ------ |


TODO: Add rows for each test, current status is eg. pass/fail
