const cats = [
  {
      name: 'Kandy',
      imgUrl: 'https://images-cdn.9gag.com/photo/3630193_700b.jpg',
  },
  {
      name: 'Sir John II',
      imgUrl: 'https://kittybloger.files.wordpress.com/2012/05/cat-king.jpg?w=584',
  },
]

const dogs = [
  {
      name: 'Bill',
      imgUrl: 'https://live.staticflickr.com/8534/8622367912_cfe27bf5ef.jpg',
  },
  {
      name: 'Shawna',
      imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk-bi-Tq3VTy8AL_fGBoLIwdnvY5RfG8wJNr1xW5_tWzQ8TOGx',
  },
];

const allAnimals = [...cats, ...dogs];

// document.getElementById('animals_select').addEventListener('change', (event)=>{
//   let animalSelected = event.target.value;
//   checkForSelectedAnimals(animalSelected);
// })

$('#animals_select').change((event)=>{
  let animalSelected = event.target.value;
  checkForSelectedAnimals(animalSelected);
});

const checkForSelectedAnimals = (animalsSelectedFromInput)=>{
  if(animalsSelectedFromInput === 'dogs'){
    renderAnimals(dogs);
  } else if(animalsSelectedFromInput === 'cats'){
    renderAnimals(cats);
  } else if(animalsSelectedFromInput === 'allAnimals'){
    renderAnimals(allAnimals);
  }
}

const renderAnimals = (animalSelected)=>{

  // document.getElementById('rendered_section').innerHTML = '';
  $('#rendered_section').html('');

  animalSelected.forEach((animal)=>{
    // let temporalName = document.createElement('h2');
    // temporalName.innerHTML = animal.name;
    let temporalName = $('<h2>');
    temporalName.html(animal.name);
  
    // let temporalImage = document.createElement('img');
    // temporalImage.setAttribute('src', animal.imgUrl);
    // temporalImage.setAttribute('alt', animal.name);
    let temporalImage = $('<img />', {
      src: animal.imgUrl,
      alt: animal.name
    });
  
    // document.getElementById('rendered_section').append(temporalName);
    temporalName.appendTo($('#rendered_section'));

    // document.getElementById('rendered_section').append(temporalImage);
    temporalImage.appendTo($('#rendered_section'));
  })
};

renderAnimals(allAnimals);