// LIBRARY IMPORTS

// LOCAL IMPORTS
const { getFromBookshelf } = require('./extract.js');
const model = require('../models.js');

const transformLoad = () => {
  getFromBookshelf(1002)
    .then((response) => {
      const transformedData = response.data.items.map((item) => {
        return {
          google_books_id: item.id,
          isbn13: parseInt(item.volumeInfo.industryIdentifiers[0].identifier),
          title: item.volumeInfo.title,
          age_range: '',
          race_rep: '',
        }; });
      model.createInDb(transformedData, (err, res) => {
        if (err) {
          console.log('Uh-oh, error loading data: ', err);
        } else {
          console.log('Data successfully loaded to database: ', res);
        }
      });
    })
    .catch((err) => console.error(err));
};

transformLoad();
