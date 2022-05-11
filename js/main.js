//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

document.querySelector('button').addEventListener('click', getMedia);

function getMedia() {
  userDate = document.querySelector('input').value;
  const url = `https://api.nasa.gov/planetary/apod?api_key=m3zSYLxt1bYfCukvXiy1loPCVCWKlkGtSB4FDaiM&date=${userDate}`;

  fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data);
      document.querySelector('.name').innerText = data.title;
      if (data.media_type === 'image') {
        document.querySelector('img').src = data.hdurl;
        document.querySelector('iframe').hidden = true;
        document.querySelector('img').hidden = false;
      } else if (data.media_type === 'video') {
        document.querySelector('iframe').src = data.url;
        document.querySelector('iframe').hidden = false;
        document.querySelector('img').hidden = true;
      } else {
        alert('Media not supported - Contact NASA immediately');
      }
      document.querySelector('h3').innerText = data.explanation;
    })
    .catch(err => {
      console.log(`error ${err}`);
    });
}
