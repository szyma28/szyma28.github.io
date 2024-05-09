# Testing
<!--Eryk Szymanski-->
## Test Plan
Below are the tests I ran to check if the webpage meets both the functional and non-functional requirements.


| Test Case | Description | Prerequisites | Scenario|
| ----------- | -------------- | --------- | ------ |
| UC1 FR1.1 | Shows the user on the map| user accepting geolocation services| When webpage is opened, user should get asked if they want to share their location to access the map |
| UC1 FR1.2 | Display all the toilets on the map | Fetching data from the open data API | Users want to see all the toilets on the map |
| UC FR1.3| Centre the map on user | User's location | Map should center on the user when location is pulled |
| General | Webpage should work on any browser | 3 different test browsers | Opened on Firefox, Opera and safari |
| General | Data is fetched in timely manner | Optimized code | When finding by type, the data should be displayed quickly, the user doesn't have to wait long, wait times vary though |

## Test Runs

| Use-Case ID | Requirement ID | Test Case | Status |
| ----------- | -------------- | --------- | ------ |
| UC1 | FR1.1 | The system should get permission to access user location via geolocation navigator | Pass |
| UC1| FR1.2 | The system should query the database for public toilets from Open Data Bristol| Pass |
| UC1 | FR1.3 | The system should centre the map on the user location | PASS |
| UC1 | FR1.4 | The system should add markers for each public toilet | PASS |
| UC2 | FR2.1 | The system should differentiate between different types of toilets | FAIL / NOT IMPLEMENTED YET |
| UC3 | FR3.1 | The system should guide the user to the toilet using map navigation | FAIL / NOT IMPLEMENTED YET |
| UC1 | NFR1.1 | App needs to work on mobile for portability purposes. | PASS |
| UC1 | NFR1.2 | Source code should always stay up to date and available on the github for maintainability purposes | PASS |
| UC1 | NFR1.3 | Should work on any browser | PASS |
| UC1 | NFR1.4 | When asked to find nearest toilets, app should display up to 5 toilets around the user. | FAIL / STILL SHOWS ALL TOILETS |
| UC1 | NFR1.5 | The map should default to bristol if no location data is available. | PASS |
| UC2 | NFR2.1 | Data should be up to date. | PASS / AS OF RIGHT NOW? |
