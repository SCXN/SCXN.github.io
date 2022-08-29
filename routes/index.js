var express = require('express');
var router = express.Router();
require('dotenv').config();

//For contact form
const cors = require('cors');
const nodemailer = require('nodemailer');
const multiparty = require('multiparty');

//For Tumblr
const tumblr = require('tumblr.js');
const { DateTime } = require('luxon');

//Connnect to outlook via nodemailer
const transporter = nodemailer.createTransport({
  host: "smtp-mail.outlook.com", //replace with your email provider
  port: 587,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS,
  },
  tls: {
    // do not fail on invalid certs
    rejectUnauthorized: false
  },
});

//Verify connection configuration of nodemailer
transporter.verify(function (error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages");
  }
});

//Connect to tumblr.js
const tumblrClient = tumblr.createClient({
  credentials:{consumer_key: process.env.TCK,
  consumer_secret: process.env.TCS,
  token: process.env.TT,
  token_secret: process.env.TSS
}, returnPromises: true,});

//Get 'news' posts from tumblr
function news(req,res,next){
  tumblrClient.blogPosts('scxn-blog', {type: 'text', tag: ['news']}).then(resp=>{
   res.locals.posts=resp.posts;
    let newsTitles=[];
    let newsDates=[];
    let newsAuthors=[];
    let newsBodies=[];
    let newsTopics=[];
    let newsLinks=[];
    resp.posts.forEach(parse);
    function parse(item){
      newsTitles.push(item.title);
      newsDates.push(DateTime.fromSQL(item.date).toLocaleString(DateTime.DATETIME_MED_WITH_WEEKDAY));
      newsAuthors.push(item.blog.title);
      newsBodies.push(item.body);
      newsTopics.push(item.tags);
      newsLinks.push(item.post_url);
    }
    res.locals.newsTitles=newsTitles; 
    res.locals.newsDates=newsDates;
    res.locals.newsAuthors=newsAuthors;
    res.locals.newsBodies=newsBodies;
    res.locals.newsTopics=newsTopics;
    res.locals.newsLinks=newsLinks;
    // console.log(res.locals.posts);
    next();
  }).catch(e => {
    console.log(e);
    });
}

//List of solutions 
function solutions(req,res,next){
  res.locals.ingredients=[
    'Engaging',
    'Responsive',
    'Dynamic',
    'Semantic',
    'Searchable',
    'Shareable',
    'Easy'
  ]; 
  res.locals.directions=[
    `Beyond flirting with colors, shapes and wording — a reputation for being up-to-date and accurate encourages revisits.`,
    `Respond appropriately when confronted by any view-port — look elegant regardless of the user's device.`,
    `Automatically publish  pertinent data to your website like reviews, calendars, visitor comments, and social media posts.`,
    `Be confident your website reaches the widest user-base possible including those with user-assistive devices, exotic accessibility preferences like AI text-to-speech events, and variable screen color and contrast  configuration.`,
    `Satiate starving search engines by feeding their algorithms exactly what they're craving in order to show-up on page-one of their search results.`,
    `Make it obvious when to share something.  And reward sharers with beautiful content previews that will entice their followers to click-through to you.`,
    `Effortlessly make significant updates to your website from virtually any blogging platform using the smart phone that's likely in your pocket.`
  ];
  res.locals.detailedInstructions=[
    `Eventually, people stop returning to boring or uninformative sources.  In the extreme, this can be a case with a brand's own website.`,
    `As unbelievable as it sounds, it is really possible to respond appropriately to every situation.  Responding appropriately should be considered normal, but with today's variety of devices all with varying view-port aspect-ratios, the potential for an awkward situation is greater today than ever before in human history.`,
    `Content creators can't keep up with how much content people consume in 2022.  For example, Many of the popular newsrooms today write with the aid of AI to keep up with demand.  More and more, visitors expect new content each and every time they visit a website.  Less and less people keep their own personal records and rather opt to defer to cloud-sources.  This behavior is observed at every level from high-end surveillance system services to bookmarking a company's contact page rather than entering their number into a local phone book—or just writing it down.`,
    `User assistive devices should be able to parse the human-readable information to broaden the base of website access to include those persons with accessibility challenges.  In the web design sphere, this is referred to as semantics or semantic design.`,
    `Search engines are the business listings of today with 31% of Americans reported to be online constantly and over 70% of Americans going online for everyday retail purchases.  Some sources estimate these percentages to be higher.  Search engine algorithms prioritize websites that:  a.) are updated frequently, and:  b.) have lots of links pointing back to the website (usually by visitor's sharing links to social media).  `,
    `You know when someone sends you a link to something of interest, and when the link comes through, either by email, text or social media dashboard, the content preview doesn't seem appropriate?  But then there are other times when the preview images and text are totally in sync.  In the twenty-first century, word of mouth happens in a virtual plaza.  With a reputation for content that shares beautifully, visitor's are more likely to reference your website in their posts.`,
    `Are you familiar with your website under the hood?  As the owner of a website, you become an author.  You don't necessarily need to be prolific to be successful, but your statement should be clear and decisive.  And it's hard to make a clear statement if you can't actually manage to get in there to sate anything.  What's the point.  Things are rarely set it and forget it!  There will be wording you'll want to massage, images you'll want to replace, and so on.`
  ];
  res.locals.results=[
    `SCXN websites are always up-to-date.  Accuracy is a cinch since SCXN website owners can easily make revisions from anywhere with internet connection, from the smart phone already in the palm of their hand.`,
    `Situations love SCXN websites because without interruption, SCXN websites respond to any situation, any view-port including the dreaded square, ultra-slim, super-widescreen, flip phones, and over-sized displays.  No matter the format, SCXN websites display decisively on any device.`,
    `Modern cloud-people love SCXN websites because they're complete information hubs pulling in lots of important details about your business automatically.  Everything else is easily updated that people online are looking for like`,
    `SCXN websites adhere to the most conventional modern and stable semantic code specifications making it very easy for the broadest base possible to digest the greatest amount of information published to your website.`,
    `With a straight-forward strategy to rank your website on page #1 of popular search engines, it's understandable why search engine algorithms love SCXN websites.  Owners can update them anytime from virtually anywhere, keeping their content fresh.  And opportunities for visitors to share content are plentiful which distributes pointers back to your website.`,
    `Visitor's are likely to share content from an SCXN website because:  a.) the opportunity to share is obvious and attractive, and:  b.) SCXN websites are in-sync with social media, only previewing what's relevant to the conversation.`,
    `Website owners love SCXN because our websites are easy to manage.  From almost any social media site or popular blogging platform that you're likely already familiar with, SCXN allows you to update your homepage as easily as posting your status.`
  ];
  res.locals.fyi=[
    `94% of a website user’s first impressions are design-related*`,
    `Google reports prioritizing mobile-friendly websites in their search results*`,
    `"A survey of 1,013 US-based respondents between the ages of 18-60 reveals 81% think less of a brand if its website is not updated." —Matt G. Southern*`,
    `"Human language thrives when using the same term to mean somewhat different things, but automation does not:  Imagine that I hire a clown messenger service to deliver balloons to my customers on their birthdays.  Unfortunately, the service transfers the addresses from my database to its database, not knowing that the "addresses" in mine are where bills are sent and that many of them are post office boxes.  My hired clowns end up entertaining a number of postal workers—not necessarily a bad thing but certainly not the intended effect." —Berners-Lee, Hendler, Lassila*`,
    `Companies who blog are 97% more likely to receive backlinks aka internet word-of-mouth*`,
    `"[The number of social media sites or blogs that link back to a page] was the factor that had the highest correlation to rankings in Google."—Brian Dean*`,
    `"Companies often approve a budget for building a new website and then have no budget for managing it...There is nothing worse than a website with the latest content published 2 years ago."  —Maciej Lukianski*`
  ];
  res.locals.fyiReference=[
    `⁕Harry Bartlett, "Stats That Prove Your Website Needs Updating", Bartlett Interactive, February 13, 2015, https://www.bartlettinteractive.com/blog/stats-prove-website-needs-updating, Accessed August 26 2022`,
    `⁕Google, "Choose A Mobile Configuration", Google Developers Newsletter: Google Search Central, April 20, 2022, https://developers.google.com/search/mobile-sites/mobile-seo/, Accessed August 26 2022`,
    `⁕Matt G. Southern, "81% of People Think Less of a Business if its Website is Outdated", Search Engine Journal,  January 29, 2019, https://www.searchenginejournal.com/81-of-people-think-less-of-a-business-if-its-website-is-outdated/290283/, Accessed August 26 2022`,
    `⁕Tim Berners-lee, James Hendler, and Ora Lassila, "The Semantic Web", Scientific American, May 2001, https://www-sop.inria.fr/acacia/cours/essi2006/Scientific%20American_%20Feature%20Article_%20The%20Semantic%20Web_%20May%202001.pdf, Accessed August 26 2022`,
    `⁕Pamela Bump, "31 Business Blogging Stata You Need To Know in 2021", Hubspot, May 11, 2020,https://blog.hubspot.com/marketing/business-blogging-in-2015, Accessed August 26 2022`,
    `⁕Brian Dean, "Search Engine Ranking", Backlinko, April 28, 2020, https://backlinko.com/search-engine-ranking, Accessed August 26 2022`,
    `⁕Maciej Lukianski, "14 Reasons Why Corporate Websites Fail", Droptica, January 31, 2020, https://www.droptica.com/blog/14-reasons-why-corporate-websites-fail/, Accessed August 26, 2022`
  ];
  res.locals.fyiReferenceLink=[
    `https://www.bartlettinteractive.com/blog/stats-prove-website-needs-updating`,
    `https://developers.google.com/search/mobile-sites/mobile-seo/`,
    `https://www.searchenginejournal.com/81-of-people-think-less-of-a-business-if-its-website-is-outdated/290283/`,
    `https://www-sop.inria.fr/acacia/cours/essi2006/Scientific%20American_%20Feature%20Article_%20The%20Semantic%20Web_%20May%202001.pdf`,
    `https://blog.hubspot.com/marketing/business-blogging-in-2015`,
    `https://backlinko.com/search-engine-ranking`,
    `https://www.droptica.com/blog/14-reasons-why-corporate-websites-fail/`,
]
    next();
}

//GET home page
router.get('/', solutions, function(req, res, next) {
  res.render('index', { 
    title: 'SCXN Web Design & Publishing',
    description: 'Boutique branding, web strategy, and limited-run souvenirs.  Say more with one-of-a-kind keepsakes and the exotic sports car of websites.',
    openGraphDescription: 'Explore the 7-step solution for successful web publishing.  Stragegize with SCXN.',
    openGraphType:'website',
    openGraphLink:'https://scxn.github.io',
    openGraphImg:'https://matrix-client.matrix.org/_matrix/media/r0/download/matrix.org/dLPMyiXzFHfefPONkMXtVxbA'
  });
  next();
});

//GET News page
router.get('/news', news, function(req, res) {
  res.render('news', { 
    title: `News | SCXN Web Design & Publishing`,
    description: res.locals.newsTitles[0],
    openGraphDescription: res.locals.newsBodies[0],
    openGraphType:'article',
    openGraphLink:'https://scxn.github.io/News',
    openGraphImg:'https://matrix-client.matrix.org/_matrix/media/r0/download/matrix.org/IXUkVOfcMugZvTgPDtKnqnMz'
  });
});

//GET Solution 0, "Solution" page
router.get('/solution', solutions, function(req, res) {
  let ingredients=[];
  let directions=[];
  let detailedInstructions=[];
  let results=[];
  let fyi=[];
  let fyiReference=[];
  let fyiReferenceLink=[];
  for(let i=0; i<res.locals.ingredients.length;i++){
    ingredients.push(res.locals.ingredients[i]);
    directions.push(res.locals.directions[i]);
    detailedInstructions.push(res.locals.detailedInstructions[i]);
    results.push(res.locals.results[i]);
    fyi.push(res.locals.fyi[i]);
    fyiReference.push(res.locals.fyiReference[i]);
    fyiReferenceLink.push(res.locals.fyiReferenceLink[i]);
  }
  res.render('solution', { 
    title: `Solution | SCXN Web Design & Publishing`,
    description:'SCXN Solutions 1 through 7',
    openGraphDescription: '',
    openGraphType:'article',
    openGraphLink:'https://scxn.github.io/Solution',
    openGraphImg:'https://matrix-client.matrix.org/_matrix/media/r0/download/matrix.org/olwtrftdlaUumcSjqvaeauKA'
  });
});

//GET Solution 1, "Engaging" page
router.get('/engaging', solutions, function(req, res) {
  let ingredients=[];
  let directions=[];
  let detailedInstructions=[];
  let results=[];
  let fyi=[];
  let fyiReference=[];
  let fyiReferenceLink=[];
  for(let i=0; i<res.locals.ingredients.length;i++){
    ingredients.push(res.locals.ingredients[i]);
    directions.push(res.locals.directions[i]);
    detailedInstructions.push(res.locals.detailedInstructions[i]);
    results.push(res.locals.results[i]);
    fyi.push(res.locals.fyi[i]);
    fyiReference.push(res.locals.fyiReference[i]);
    fyiReferenceLink.push(res.locals.fyiReferenceLink[i]);
  }
  res.render('engaging', { 
    title: `Engaging | SCXN Web Design & Publishing`,
    description:'SCXN Solution 1 of 7',
    openGraphDescription: directions[0],
    openGraphType:'article',
    openGraphLink:'https://scxn.github.io/Engaging',
    openGraphImg:'https://matrix-client.matrix.org/_matrix/media/r0/download/matrix.org/GocbmDrEaoBORKQGqczmbqwJ'
  });
});

//GET Solution 2, "Responsive" page
router.get('/responsive', solutions, function(req, res) {
  let ingredients=[];
  let directions=[];
  let detailedInstructions=[];
  let results=[];
  let fyi=[];
  let fyiReference=[];
  let fyiReferenceLink=[];
  for(let i=0; i<res.locals.ingredients.length;i++){
    ingredients.push(res.locals.ingredients[i]);
    directions.push(res.locals.directions[i]);
    detailedInstructions.push(res.locals.detailedInstructions[i]);
    results.push(res.locals.results[i]);
    fyi.push(res.locals.fyi[i]);
    fyiReference.push(res.locals.fyiReference[i]);
    fyiReferenceLink.push(res.locals.fyiReferenceLink[i]);
  }
  res.render('responsive', { 
    title: `Responsive | SCXN Web Design & Publishing`,
    description:'SCXN Solution 2 of 7',
    openGraphDescription: directions[1],
    openGraphType:'article',
    openGraphLink:'https://scxn.github.io/Responsive',
    openGraphImg:'https://matrix-client.matrix.org/_matrix/media/r0/download/matrix.org/wKYBPBcIheuVVKDmFNNAmPXA'
  });
});

//GET Solution 3, "Dynamic" page
router.get('/dynamic', solutions, function(req, res) {
  let ingredients=[];
  let directions=[];
  let detailedInstructions=[];
  let results=[];
  let fyi=[];
  let fyiReference=[];
  let fyiReferenceLink=[];
  for(let i=0; i<res.locals.ingredients.length;i++){
    ingredients.push(res.locals.ingredients[i]);
    directions.push(res.locals.directions[i]);
    detailedInstructions.push(res.locals.detailedInstructions[i]);
    results.push(res.locals.results[i]);
    fyi.push(res.locals.fyi[i]);
    fyiReference.push(res.locals.fyiReference[i]);
    fyiReferenceLink.push(res.locals.fyiReferenceLink[i]);
  }
  res.render('dynamic', { 
    title: `Dynamic | SCXN Web Design & Publishing`,
    description:'SCXN Solution 3 of 7',
    openGraphDescription: directions[2],
    openGraphType:'article',
    openGraphLink:'https://scxn.github.io/Dynamic',
    openGraphImg:'https://matrix-client.matrix.org/_matrix/media/r0/download/matrix.org/qAEMdUBewYOsUVjTnvxKctMZ'
  });
});

//GET Solution 4, "Semantic" page
router.get('/semantic', solutions, function(req, res) {
  let ingredients=[];
  let directions=[];
  let detailedInstructions=[];
  let results=[];
  let fyi=[];
  let fyiReference=[];
  let fyiReferenceLink=[];
  for(let i=0; i<res.locals.ingredients.length;i++){
    ingredients.push(res.locals.ingredients[i]);
    directions.push(res.locals.directions[i]);
    detailedInstructions.push(res.locals.detailedInstructions[i]);
    results.push(res.locals.results[i]);
    fyi.push(res.locals.fyi[i]);
    fyiReference.push(res.locals.fyiReference[i]);
    fyiReferenceLink.push(res.locals.fyiReferenceLink[i]);
  }
  res.render('semantic', { 
    title: `Semantic | SCXN Web Design & Publishing`,
    description:'SCXN Solution 4 of 7',
    openGraphDescription: directions[3],
    openGraphType:'article',
    openGraphLink:'https://scxn.github.io/Semantic',
    openGraphImg:'https://matrix-client.matrix.org/_matrix/media/r0/download/matrix.org/NEpqvahSGgAgNIQqRKdxTOEY'
  });
});

//GET Solution 5, "Searchable" page
router.get('/searchable', solutions, function(req, res) {
  let ingredients=[];
  let directions=[];
  let detailedInstructions=[];
  let results=[];
  let fyi=[];
  let fyiReference=[];
  let fyiReferenceLink=[];
  for(let i=0; i<res.locals.ingredients.length;i++){
    ingredients.push(res.locals.ingredients[i]);
    directions.push(res.locals.directions[i]);
    detailedInstructions.push(res.locals.detailedInstructions[i]);
    results.push(res.locals.results[i]);
    fyi.push(res.locals.fyi[i]);
    fyiReference.push(res.locals.fyiReference[i]);
    fyiReferenceLink.push(res.locals.fyiReferenceLink[i]);
  }
  res.render('searchable', { 
    title: `Searchable | SCXN Web Design & Publishing`,
    description:'SCXN Solution 5 of 7',
    openGraphDescription: directions[4],
    openGraphType:'article',
    openGraphLink:'https://scxn.github.io/Searchable',
    openGraphImg:'https://matrix-client.matrix.org/_matrix/media/r0/download/matrix.org/YMeBvmSeDieozdpBKEVWJSGy'
  });
});

//GET Solution 6, "Shareable" page
router.get('/shareable', solutions, function(req, res) {
  let ingredients=[];
  let directions=[];
  let detailedInstructions=[];
  let results=[];
  let fyi=[];
  let fyiReference=[];
  let fyiReferenceLink=[];
  for(let i=0; i<res.locals.ingredients.length;i++){
    ingredients.push(res.locals.ingredients[i]);
    directions.push(res.locals.directions[i]);
    detailedInstructions.push(res.locals.detailedInstructions[i]);
    results.push(res.locals.results[i]);
    fyi.push(res.locals.fyi[i]);
    fyiReference.push(res.locals.fyiReference[i]);
    fyiReferenceLink.push(res.locals.fyiReferenceLink[i]);
  }
  res.render('shareable', { 
    title: `Shareable | SCXN Web Design & Publishing`,
    description:'SCXN Solution 6 of 7',
    openGraphDescription: directions[5],
    openGraphType:'article',
    openGraphLink:'https://scxn.github.io/Shareable',
    openGraphImg:'https://matrix-client.matrix.org/_matrix/media/r0/download/matrix.org/cpDZJAQULtaFppojvYgvyLTX'
  });
});

//GET Solution 7, "Easy" page
router.get('/easy', solutions, function(req, res) {
  let ingredients=[];
  let directions=[];
  let detailedInstructions=[];
  let results=[];
  let fyi=[];
  let fyiReference=[];
  let fyiReferenceLink=[];
  for(let i=0; i<res.locals.ingredients.length;i++){
    ingredients.push(res.locals.ingredients[i]);
    directions.push(res.locals.directions[i]);
    detailedInstructions.push(res.locals.detailedInstructions[i]);
    results.push(res.locals.results[i]);
    fyi.push(res.locals.fyi[i]);
    fyiReference.push(res.locals.fyiReference[i]);
    fyiReferenceLink.push(res.locals.fyiReferenceLink[i]);
  }
  res.render('easy', { 
    title: `Easy | SCXN Web Design & Publishing`,
    description:'SCXN Solution 7 of 7',
    openGraphDescription: directions[6],
    openGraphType:'article',
    openGraphLink:'https://scxn.github.io/Easy',
    openGraphImg:'https://matrix-client.matrix.org/_matrix/media/r0/download/matrix.org/YTycjReJTnvCIvMenGIGawGN'
  });
});

//POST messages
router.post('/send', (req, res, ) => {
  let form = new multiparty.Form();
  let data = {};
  form.parse(req, function (err, fields) {
    Object.keys(fields).forEach(function (property) {
      data[property] = fields[property].toString();
    });
    console.log(data);
    const mail = {
      sender: `${data.name} <${data.address}>`,
      to: process.env.EMAIL, // receiver email,
      subject: data.subject,
      text: `From:\n${data.name} <email: ${data.address}> \n${data.message}`,
    };
    transporter.sendMail(mail, (err, data) => {
      if (err) {
        console.log(err);
        //res.status(500).send("Something went wrong.");
        res.render('yikes');
      } else {
        res.render('thanksForYourComment');
      }
    });
  });
});

module.exports = router;