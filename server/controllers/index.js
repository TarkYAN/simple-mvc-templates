// There is no reason for the name here except as an
// example of how to set something for the POST
let name = 'unknown';

const hostIndex = (req, res) => {
  return res.render('index', {
    title: 'Home',
    pageName: 'Home Page',
    userName: name,
  });
};

const hostPage1 = (req, res) => {
  const myArray = ['Austin', 'Cody', 'Erika', 'Eric'];
  const filtered = myArray.filter(x => x.length <= 5);

  return res.render('page1', {
    title: 'Page 1',
    names: filtered,
  });
};

const hostPage2 = (req, res) => {

};

const getName = (req, res) => {
  return res.json({name});
};

const setName = (req, res) => {
  if(!req.body.firstname || !req.body.lastname){
    return res.status(400).json({
      error: 'firstname and lastname are both required',
      id: 'setNameMissingParams',
    });
  }

  name = `${req.body.firstname} ${req.body.lastname}`;
  return res.json({name});
};

const notFound = (req, res) => {
  return res.status(404).render('notFound',{
    page: req.url,
  });
};

module.exports = {
  index: hostIndex,
  page1: hostPage1,
  page2: hostPage2,
  getName,
  setName,
  notFound,
};
