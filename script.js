document
  .getElementById("input-form")
  .addEventListener("submit", async (event) => {
    event.preventDefault(); // Prevent the form from submitting normally

    const domain = document.getElementById("domain").value;
    const locale = document.getElementById("locale").value;
    const hotelId = document.getElementById("hotel-id").value;

    const url = `https://hotels-com-provider.p.rapidapi.com/v2/hotels/summary?domain=${domain}&locale=${locale}&hotel_id=${hotelId}`;

    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "c2e3fe64a2msh77c749c5e8811acp1df9c3jsn291fdd37d9df",
        "X-RapidAPI-Host": "hotels-com-provider.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json(); // Parse the JSON response

      // Format the specific properties for display
      const hotelName = data.summary.name;
      const tagline = data.summary.tagline;
      const rating = data.summary.overview.propertyRating.rating;
      const amenities = data.summary.amenities.topAmenities.items
        .map((item) => item.text)
        .join(", ");

      // Create the formatted HTML
      const formattedData = `
      <p>Hotel Name: ${hotelName}</p>
      <p>Tagline: ${tagline}</p>
      <p>Rating: ${rating}</p>
      <p>Amenities: ${amenities}</p>
    `;

      console.log(data); // Log the parsed data
      // Display the formatted data on your website
      document.getElementById("hotel-summary").innerHTML = formattedData;
    } catch (error) {
      console.error(error);
    }
  });
