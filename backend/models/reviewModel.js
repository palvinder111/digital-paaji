const https = require('https');

// API details (replace with your actual API key and Place ID)
const apiKey = 'AIzaSyD34jG-mm4jazsXguxr1hUq1L5NBOr9ZvU';
const placeId = 'ChIJ0yYyxR4pEDkR06jPfuetHNg';

// Fetch reviews from Google API
exports.fetchReviews = () => {
  return new Promise((resolve, reject) => {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=${apiKey}`;

    https.get(url, (response) => {
      let data = '';

      // Accumulate data chunks
      response.on('data', (chunk) => {
        data += chunk;
      });

      // Parse and handle data on response end
      response.on('end', () => {
        try {
          const json = JSON.parse(data);
          if (json.result && json.result.reviews) {
            resolve(json.result.reviews); // Return the reviews
          } else {
            reject(new Error('No reviews found in API response'));
          }
        } catch (error) {
          reject(new Error('Failed to parse API response: ' + error.message));
        }
      });
    }).on('error', (error) => {
      reject(new Error('Request failed: ' + error.message));
    });
  });
};
