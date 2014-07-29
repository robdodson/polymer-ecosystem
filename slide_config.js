var SLIDE_CONFIG = {
  // Slide settings
  settings: {
    title: 'The Web Component Ecosystem',
    subtitle: 'A wonderful world of Web Components',
    eventInfo: {
      title: 'BrazilJS 2014',
      date: 'August 22, 2014'
    },
    useBuilds: true, // Default: true. False will turn off slide animation builds.
    usePrettify: false, // Controlled in app.js 
    enableSlideAreas: true, // Default: true. False turns off the click areas on either slide of the slides.
    enableTouch: true, // Default: true. If touch support should enabled. Note: the device must support touch.
    //analytics: 'UA-XXXXXXXX-1', // TODO: Using this breaks GA for some reason (probably requirejs). Update your tracking code in template.html instead.
    favIcon: '/images/logos/chrome_logo.png',
    fonts: [
      //'Open Sans:600italic,400,300,600',
      'Roboto Condensed:400,300,700',
      'Roboto2:400,300,500',
      //'Source Code Pro',
      'Inconsolata:400,700',
      'Architects Daughter'
    ],
    //theme: ['mytheme'], // Add your own custom themes or styles in /theme/css. Leave off the .css extension.
  },

  // Author information
  presenters: [{
    name: 'Rob Dodson',
    //company: 'Chrome Team',
    gplus: 'http://google.com/+RobDodson',
    twitter: '@rob_dodson',
    www: 'http://robdodson.me',
    github: 'http://github.com/robdodson'
  }]
};

