// console.warn(" 💎💎💎 [korra-email-design-tooklit] loaded /js/get-options.js");
//////////////////////////////////////////////////////////////////////////

//////////////////////
//////////////////////

// OPTIONS: Management

//////////////////////
//////////////////////

var logging = true;


////////
// OPTIONS: Zap all items in localstore
////////
function clearStrg() {
    logit('about to clear local storage');
    window.localStorage.clear();
    logit('cleared');
}


////////
//
////////
function logit(txt) {
  if (logging) {
    // console.log(txt);
  }
}


////////
// OPTIONS: Set items in chrome.storage.sync
////////
function setItem(key, value, location) {

  console.log("running setItem()");

  console.log("Setting item with function setItem(" + key + ", " + value +")");

    var storage;
    if ( location === "local" ) {
      storage = chrome.storage.promise.local;
    }
    else {
      storage = chrome.storage.promise.sync;
    }

    storage.set({[key]: value}).then(function() {
      // resolved
      console.log('set');
    }, function(error) {
      // rejected
      console.log(error);
    });

    try {
      logit("Inside setItem:" + key + ":" + value);
      window.localStorage.removeItem(key);
      window.localStorage.setItem(key, value);
    }catch(e) {
      logit("Error inside setItem");
      logit(e);
    }
    logit("Return from setItem" + key + ":" +  value);
}

////////
// OPTIONS: Get items from localstore
////////
function getItem(key) {
    var value;
    logit('Get Item:' + key);
    try {
      value = window.localStorage.getItem(key);
      if(typeof value === 'undefined'){
        return null;
      }
    }catch(e) {
      logit("Error inside getItem() for key:" + key);
      logit(e);
      value = null;
    }

    logit("Returning value: " + value);
    return value;
}

////////
//
////////
function getOption(key) {
    var value;
    var defaultOptions = {
        blacklist: "googleleads.g.doubleclick.net\n" +
                    "doubleclick.net\n" +
                    "googleadservices.com\n" +
                    "www.googleadservices.com\n" +
                    "googlesyndication.com\n" +
                    "adservices.google.com\n" +
                    "appliedsesdfsdfdsfsdfdsfsdfsdfmantics.com",
        checkType: "GET",
        cache: "true",
        noFollow: "false",
        parseDOM: "false",
        trailingHash: "false",
        emptyLink: "false",
        noHrefAttr: "false",
        autoCheck: "false",
        optionsURL: chrome.extension.getURL("options.html")
    };

    // Get Option from LocalStorage
    value = getItem(key);
    // console.log(key, value);

    // Default the value if it does not exist in LocalStorage and a default value is defined above
    if ( (value === null || value == "null") && (key in defaultOptions) ) {
        setItem(key, defaultOptions[key]);
        value = defaultOptions[key];
    }
    return value;
}

function getOptions(){


    var options = {};
    // Dropbox
    options.dropboxAccessToken = getOption("dropboxAccessToken");
    options.fullPathToDropboxFolder = getOption("fullPathToDropboxFolder");
    options.dropboxFolderName = getOption("dropboxFolderName");
    options.localUserProfilePath = getOption("localUserProfilePath");
    // Mailgun
    options.mailgunApiKey = getOption("mailgunApiKey");
    options.mailgunDomainName = getOption("mailgunDomainName");
    // Open in App
    options.openInApp = getOption("openInApp");
    // Validate Links
    options.blacklist = getOption("blacklist");
    options.checkType = getOption("checkType");
    options.cache = getOption("cache");
    options.noFollow = getOption("noFollow");
    options.parseDOM = getOption("parseDOM");
    options.trailingHash = getOption("trailingHash");
    options.emptyLink = getOption("emptyLink");
    options.noHrefAttr = getOption("noHrefAttr");
    options.autoCheck = getOption("autoCheck");
    options.optionsURL = getOption("optionsURL");

    // console.log("!!!", options.dropboxAccessToken)

    return options;
}
