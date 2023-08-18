# HOTEL INFORMATION FETCHER IN ACCOMODATION.HTML

This project is a simple web application that advances the ZanziBliss website under accommodation bookings.

The application fetches hotel information using the hotels.com API and displays the information in a user-friendly manner.

**So that you know, the current version of the Hotel Summary is designed to showcase the functionality of the API and does not explicitly focus on hotels in Zanzibar. The project uses sample data from English-speaking countries to illustrate how the API can be integrated into a website.**

**Have fun as you interact with the website**

## Getting Started

To get started with the Hotel Summary application, follow these steps:

1. Clone the repository: `git clone https://github.com/k-ganda/api_work_summative.git`
2. Navigate to the project directory: `cd api_work_summative`
3. Open the `accommodation.html` file in your web browser.

## Usage

1. Fill out the form with the required details:
   - Domain: Enter the domain of the hotel. e.g AE,AR,AS,AT,AU,BE,BR,CA,CH,CL,CN,CO,DE,DK,ES,FI,FR,GB,GR,HK,HU,ID,IE,IN,IS,IT,JP,KR,MX,MY,NL,NO,NZ,PE,PH,PT,SE,SG,TH,TR,TW,US,VN,XE,ZA
   - Locale: Enter the locale for the hotel. e.g en_GB,en_US,ar_AE,cs_CZ,da_DK,de_AT,de_BE,de_CH,de_DE,el_GR,en_AS,en_AU,en_CA,en_CN,en_HK,en_ID,en_IE,en_IL,en_IN,en_JP,en_KR,en_LA,en_MX,en_MY,en_NZ,en_PH,en_SG,en_TH,en_TW,en_VN,en_ZA,es_AR,es_BO
   - Hotel ID: Enter the I.D. of the hotel you want to fetch the summary for. e.g 1105156 a minimum of 1
2. Click the "Get Hotel Summary" button.
3. The hotel summary will be displayed in a user-friendly format below the form.

## Dependencies

The Hotel Summary App uses the following dependencies:

- `fetch`: A built-in JavaScript function for making HTTP requests.
- `rapidapi`: A third-party API provider for retrieving hotel summaries.

Users can input domain, locale, and hotel ID to retrieve information about the required hotels.

![image](https://github.com/k-ganda/play_with_api/assets/116561806/754a5fed-9fc7-4c0e-b932-ff8ffa64422c)

CREDITS
The API is from Hotels com Provider By Tipsters CO

## Known Issue: Information not found
This means the hotel_id provided is not found; could you try using another hotel ID.


EXPECTED RESPONSE/ OUTPUT
![image](https://github.com/mulimuoki001/alu-system_engineering-devops/assets/116561806/b1688fb3-9af4-4904-b467-8f1b9711fa0b)
