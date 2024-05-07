# Implementation

## Introduction
TODO: Describe the system implemented (Describe the dataset. Are there any known issues? Describe any configuration data).

This system is a search engine for the 166 free public toilets around bristol. Additional details are provided, such as gendered toilets, accessibility information, opening times and more. 

## Project Structure
TODO: Provide an outline of the project folder structure and the role of each file within it.
provide a table listing the number of jslint warnings/reports for each module.

In the Toilet Finder project, there are three main HTML files and a singular style css file.

Index.html is the landing page that greets you to the page, from which you can go either to "Find nearest toilet" or "Find by Type".

FindNearest.html, which utilises Bristol Open Data API and the Mapbox API to present a map with blue bubble points on the map that show where the toilets are. When clicked on it presents the user with the toilets name and adress.
Additionaly there is a "Find me on the Map" button which asks the user to allow to share their location, after which a red bubble appears on the users location and they can easily see the closest toilets around them.

Findbytype.html shows a page with a table with all the toilets and available information about them.

The style.css provides the visually aesthetic look of all the webpages.

The script.js provides the scripts used for FindNearest.html to save on space and make the HTML more readable.

## Software Architecture
TODO: Describe the major components of your architecture. Are any particular architectural styles being used?

![Insert your component Diagram here](https://github.com/szyma28/szyma28.github.io/blob/4599c22c357fa8bfe3c8db9cdd145c9b37531f95/docs/Images/component%20diagram.png)






## Bristol Open Data API
TODO: Document each query to Bristol Open Data

![UML Class diagrams representing JSON query results](https://github.com/szyma28/szyma28.github.io/blob/c14f8cf7a49933ab19a9db5e1f96a7cbf99f4b4f/docs/Images/UML%20DIAGRAM.png)
TODO: Repeat as necessary
