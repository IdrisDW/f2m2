// const app = document.getElementById('app');

// getImagesFromNasa()
//   .then(function (data) {

//     console.log(data);

//     data.forEach(function (data) {
//       const img = document.createElement('img');
//       img.src = getImageUrl(data);
//       img.alt = data.caption;

//       app.appendChild(img);
//     })
//   })

// function getImagesFromNasa() {
//   return fetch('https://epic.gsfc.nasa.gov/api/natural')
//     .then(function (response) {
//       return response.json();
//     })
// }

// function getImageUrl(data) {
//   /*
//    * URL should look like this:
//    * https://epic.gsfc.nasa.gov/archive/natural/2015/10/31/png/epic_1b_20151031074844.png
//    */
//   const baseImageUrl = 'https://epic.gsfc.nasa.gov/archive/natural';
//   const date = data.date // Looks like 2020-06-19 02:33:19
//     .substr(0, 10) // Get first 10 characters from string
//     .split('-'); // Split year, month and day into an array

//   return `${baseImageUrl}/${date[0]}/${date[1]}/${date[2]}/png/${data.image}.png`;
// }




// const app = document.getElementById('app');

// const getImagesFromNasa = async () => {
//    const response = await fetch('https://epic.gsfc.nasa.gov/api/natural');
//    return await response.json();
// }

// const getImageUrl = data => {
//    const baseImageUrl = 'https://epic.gsfc.nasa.gov/archive/natural';
//    const date = data.date
//       .substr(0, 10)
//       .split('-');
//    return `${baseImageUrl}/${date[0]}/${date[1]}/${date[2]}/png/${data.image}.png`;
// }

// const fetchData = async () => {
//    const data = await getImagesFromNasa()
//    data.forEach(data => {
//       const img = document.createElement('img');
//       img.src = getImageUrl(data);
//       img.alt = data.caption;
//       app.appendChild(img);
//    })
// }

// fetchData()





//sugar





const app = document.getElementById('app');

const getImagesFromNasa = async () => {
   const response = await fetch('https://epic.gsfc.nasa.gov/api/natural');
   return await response.json();
}

const getImageUrl = data => {
   const baseImageUrl = 'https://epic.gsfc.nasa.gov/archive/natural';
   const date = data.date
      .substr(0, 10)
      .split('-');
   return `${baseImageUrl}/${date[0]}/${date[1]}/${date[2]}/png/${data.image}.png`;
}

( async () => {
   const data = await getImagesFromNasa()
   data.forEach(data => {
      const img = document.createElement('img');
      img.src = getImageUrl(data);
      img.alt = data.caption;
      app.appendChild(img);
   })
})()

fetchData()
