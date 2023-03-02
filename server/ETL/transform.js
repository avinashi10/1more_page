// LOCAL IMPORTS
const { getFromBookshelf } = require('./extract.js');

const transformLoad = () => {
  getFromBookshelf(1002)
    .then((response) => {
      const transformedData = response.data.items.map((item) => {
        return {
          google_books_id: item.id,
          isbn: parseInt(item.volumeInfo.industryIdentifiers[0].identifier),
          title: item.volumeInfo.title,
          age_range: '',
          race_rep: '',
        }; });
      console.log(transformedData);
    })
    .catch((err) => console.error(err));
};
transformLoad();
