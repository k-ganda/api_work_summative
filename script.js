document.addEventListener("DOMContentLoaded", function () {
  const inputForm = document.getElementById("input-form");
  const hotelSummaryContainer = document.getElementById("hotel-summary");

  inputForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    const domain = document.getElementById("domain").value;
    const locale = document.getElementById("locale").value;
    const hotelId = document.getElementById("hotel-id").value;

    const url = `https://hotels-com-provider.p.rapidapi.com/v2/hotels/summary`;
    const params = new URLSearchParams({
      domain: domain,
      locale: locale,
      hotel_id: hotelId,
    });

    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "cfeeaad2e6mshad34879bffb5ca5p1765a1jsnd66f9515df31",
        "X-RapidAPI-Host": "hotels-com-provider.p.rapidapi.com",
      },
    };

    const response = await fetch(`${url}?${params}`, options);
    const data = await response.json();
    console.log(data);

    hotelSummaryContainer.innerHTML = `
              <h3>Hotel Summary</h3>
              <p>Hotel Name: ${data.name}</p>
              <p>Address: ${data.address}</p>
              <p>Rating: ${data.rating}</p>
              <p>Description: ${data.description}</p>
          `;
  });
});
