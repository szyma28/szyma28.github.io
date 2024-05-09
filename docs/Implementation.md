# Implementation

## Introduction

This system is a search engine for the 166 free public toilets around bristol. Additional details are provided, such as gendered toilets, accessibility information, opening times and more. 

## Project Structure

In the Toilet Finder project, there are three main HTML files and a singular style css file.

Index.html is the landing page that greets you to the page, from which you can go either to "Find nearest toilet" or "Find by Type".

FindNearest.html, which utilises Bristol Open Data API and the Mapbox API to present a map with blue bubble points on the map that show where the toilets are. When clicked on it presents the user with the toilets name and adress.
Additionaly there is a "Find me on the Map" button which asks the user to allow to share their location, after which a red bubble appears on the users location and they can easily see the closest toilets around them.

Findbytype.html shows a page with a table with all the toilets and available information about them.

The style.css provides the visually aesthetic look of all the webpages.

The script.js provides the scripts used for FindNearest.html to save on space and make the HTML more readable.

![Folder Structure](https://github.com/szyma28/szyma28.github.io/blob/3fb93ac08550f9f3e5e084815c756e35e5a9c728/docs/Images/FolderStructure.png)

## Software Architecture

The architecture of this web app is a client to server model, client side interface built using three html webpages, a css and a javascript doc that interacts with the server of Bristol Open Data API to fetch free public toilet data. Using mapbbox, we're able to have a interactive map that also uses geolocation from the user to also put him on the map.

![Insert your component Diagram here](https://github.com/szyma28/szyma28.github.io/blob/4599c22c357fa8bfe3c8db9cdd145c9b37531f95/docs/Images/component%20diagram.png)




## Bristol Open Data API

![UML Class diagrams representing JSON query results](https://github.com/szyma28/szyma28.github.io/blob/c14f8cf7a49933ab19a9db5e1f96a7cbf99f4b4f/docs/Images/UML%20DIAGRAM.png)
