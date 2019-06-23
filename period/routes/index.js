/*File Name; index.js
  Author; Sheethal Sebastian
  Website Name; portfolio site
  Description; Site structure
  */
 var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // test
  res.render('index', { title: 'Sheethals Portfoliyo Site' });

});

const pages = [
  {
    route: 'Home page',
    name: 'WELCOME',
    list1: 'About Me',
    list2: 'My Projects',
    list3: 'Services',
    list4: 'Contact Me'
  
  },
  {
    route: 'About Me',
    name: 'Sheethal Sebastian',
    list1: 'Computer Programmer',
    list2:'I am 20 years old',
    list3: 'I lives in Barrie',
    list4: 'I love playing Music'
  },
  {
    route: 'Project page',
    name: 'Projects',
    list1: 'Build an Android App',
    list2: 'Developed a Project Tracker',
    list3: 'Build Portfolio Site using express',
    list4: 'Build a store website for school project'
 },

 {
  route: 'Services page',
  name: 'Services',
  list1: 'Android app services',
  list2: 'Styling using bootstrap',
  list3: 'Database based services',
  list4: 'Web applications that gracefully adapt to any device'
 },

 {
  route: 'Contact Me',
  name: 'Contact Me',
  list1: 'Contact Number (249-989-0231)',
  list2: "Email: sheethalsebastian2017@gmail.com",
  list3: 'Lives in Barrie',
  list4: 'Slack Id: sheethalsebastian'
}
];

router.get('/:route', (req, res, next) => {
  // Find the page where their route string equals the route parameter
  const mydetail = pages.find(per => per.route === req.params.route);

  // if no page - render the error page
  if (!mydetail) return next(new Error('Cannot find this page'));

  // Res.render - renders a view from our views folder.
  // Pass the page we found in the array above
  return res.render('mydetail', mydetail);
});

module.exports = router;