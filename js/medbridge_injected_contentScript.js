console.log("medbridge_injected_contentScript.js loaded");

// function cancelClick() {
//   return false;
// };

//
// Apply check tool to each course as it loads in
//
// https://hacks.mozilla.org/2012/05/dom-mutationobserver-reacting-to-dom-changes-without-killing-browser-performance/
//

    // // select the target node to watch
    // var targetNew = document.querySelector('div.ng-scope > div.row:nth-child(3)');
    //
    // // create an observer instance
    // var observerNew = new MutationObserver(function(mutations) {
    //
    //     console.log("observer activated");
    //
    //     mutations.forEach(function(mutation) {
    //         console.log(mutation.type);
    //     });
    // });
    //
    // // configuration of the observer:
    // var configNew = { attributes: true, childList: true, characterData: true }
    // // pass in the target node, as well as the observer options
    // observerNew.observe(targetNew, configNew);


    // configuration of the observer:
    var config = { attributes: true, childList: true, characterData: true }


    // select the target node to watch
    var targetLoad = document.querySelector('div.ng-scope > div.row:nth-child(3)');
    // create an observer instance
    var observerLoad = new MutationObserver(function(mutations) {
        console.log("observerLoad activated");
        applyCourseTool();
        mutations.forEach(function(mutation) { console.log(mutation.type); });
    });
    // pass in the target node, as well as the observer options
    observerLoad.observe(targetLoad, config);


    // When the discipline is changed using the left menu, a parent element is changed too. So we need to listen for that. Then when it happens, find the child element that is the new parent of the course list, apply it to a variable, and restart observing it.
    var targetDiscChange = document.querySelector('div.catalogue-main > div.ng-scope:first-child');
    var observerChange = new MutationObserver(function(mutations) {
        console.log("observerChange activated");

        observerLoad.disconnect(); // Seems like this would be the right thing to do and it doesn't seem to break anything.

        var targetNewLoad = document.querySelector('div.ng-scope > div.row:nth-child(3)'); // Find the newly loaded course parent.
        observerLoad.observe(targetNewLoad, config); // Start observing it.

        mutations.forEach(function(mutation) { console.log(mutation.type); });
    });
    observerChange.observe(targetDiscChange, config);


    // Run this function to check each relevant div in the code and then add the proper html to it
    function applyCourseTool() {

      let courseList = document.querySelectorAll('.row > .ng-scope > .ng-scope > .ng-scope');
      for (let course of courseList) {

        if ( course.classList.contains("course-wrapper") ) {
          console.log("skip");
        } else {
          console.log("! " + course.classList);
          var sibling = course.firstElementChild;

          var selectCourseBtn = document.createElement("div");
          selectCourseBtn.className = "select-course mb-plus";
          course.insertBefore(selectCourseBtn, sibling);
          selectCourseBtn.addEventListener("click", courseToggle, false);

          course.classList.add("course-wrapper");
        }
      }
    };




//
/// REMOVE _ALL_ COPIED COURSES
//
function resetAllCourses() {
  console.log("resetAllCourses");

  let courseList = document.querySelectorAll(".mb-x");
  for (let course of courseList) {

    console.log(course);

    var courseId = course.parentNode.getAttribute("data-href");

    removeCourse(courseId);

  }
}


//
/// REMOVE A COPIED COURSE & UNCHECK THE MATCHIG ORIGINAL COURSE
//
function removeCourse(courseId) {

  console.log("removeCourse - this = " + this);
  console.log("removeCourse - courseId = " + courseId);

  if (typeof courseId === 'string' || courseId instanceof String) {
    clickedCourse = courseId;
  } else {
    var clickedCourse = courseId.getAttribute("data-href");
  }

  if ( !clickedCourse ) {
    clickedCourse = courseId.parentNode.getAttribute("data-href")
  }

  // console.log("removeCourse - courseId.getAttribute('data-href') = " + courseId.getAttribute("data-href"));
  // console.log("removeCourse - courseId.parentNode.getAttribute('data-href') = " + courseId.parentNode.getAttribute("data-href"));

  // var fixedCourseId = courseId.getAttribute("data-href");
  //
  // if (typeof fixedCourseId === 'string' || fixedCourseId instanceof String) {
  //   courseId = courseId.getAttribute("data-href");
  // } else {
  //   courseId = this.getAttribute("data-href");
  // }




  console.log("removeCourse - courseId = " + courseId)
  console.log("removeCourse - this = " + this)

  var copiedCourse = document.querySelector('.course-copy[data-href="' + clickedCourse + '"]');
  var originalCourse = document.querySelector('.select-course[data-href="' + clickedCourse + '"]');

  console.log("- " + originalCourse)
  originalCourse.classList.remove("mb-check");
  originalCourse.classList.add("mb-plus");

  copiedCourse.parentNode.removeChild(copiedCourse);

  renumberCourses();
}



//
/// RENUMBER COPIED COURSES
//
function renumberCourses() {
  var courseNumber = 1;
  let courseList = document.querySelectorAll(".course-collection-wrapper .course-number");
  for (let course of courseList) {
    course.innerText = courseNumber++;
  }
}


function courseOptions() {

  // Get the requested code type
  var type = this.dataset.codeType;

  // Create Options Modal
  var courseOptionsElem = document.createElement("div");
  courseOptionsElem.className = "course-options";
  courseOptionsElem.innerHTML = '<div class="course-options"> <div class="option-wrapper"> <div class="option-title">Target Audience</div><div class="label-wrapper"> <input name="audience" value="ns" id="course-opt-ns" type="radio" checked> <label for="course-opt-ns">Non-Subscribers</label> </div><div class="label-wrapper"> <input name="audience" value="sub" id="course-opt-sub" type="radio"> <label for="course-opt-sub">Subscribers</label> </div></div><div class="option-wrapper"> <div class="option-title">Whitelabeling</div><div class="label-wrapper"> <input name="whitelabel" value="www." id="course-opt-medbridge" type="radio" checked> <label for="course-opt-medbridge">MedBridge <span>(www)</span></label> </div><div class="label-wrapper"> <input name="whitelabel" value="healthsouth" id="course-opt-healthsouth" type="radio"> <label for="course-opt-healthsouth">HealthSouth <span>(healthsouth.)</span></label> </div><div class="label-wrapper"> <input name="whitelabel" value="foxrehab" id="course-opt-fox" type="radio"> <label for="course-opt-fox">Fox <span>(foxrehab.)</span></label> </div><div class="label-wrapper"> <input name="whitelabel" value="drayerpt" id="course-opt-drayer" type="radio"> <label for="course-opt-drayer">Drayer <span>(drayerpt.)</span></label> </div><div class="label-wrapper"> <input name="whitelabel" value="other" id="course-opt-other" type="radio"><label name="whitelabel" value="" for="course-opt-other">Other</label> <input id="course-opt-other-text" type="text"> </div></div><div class="course-confirm"> <button id="course-options-cancel" class="btn-cancel">Cancel</button> <button id="course-options-confirm" class="btn-confirm">Confirm</button> </div></div>';

  // instanciate new modal
  var createOptionsModal = new tingle.modal({
      footer: false,
      stickyFooter: false,
      cssClass: ['course-options-wrapper'],

      onOpen: function() {
          console.log('modal open');
      },
      onClose: function() {
          console.log('modal closed');
          createOptionsModal.destroy();
      }
  });

  createOptionsModal.setContent(courseOptionsElem);
  createOptionsModal.open();

  var optionsSubmitBtn = document.getElementById("course-options-confirm");
  optionsSubmitBtn.onclick = saveOptions;

  var optionsSubmitBtn = document.getElementById("course-options-cancel");
  optionsSubmitBtn.onclick = cancelOptions;

  // Set the sub/non-sub option if they pick an organization
  // http://stackoverflow.com/a/8997289/556079
  var rad = document.querySelectorAll('[name="whitelabel"]');
  for(var i = 0; i < rad.length; i++) {
    rad[i].onclick = function() {
        if(this.value === "healthsouth" || this.value === "foxrehab" || this.value === "drayerpt") {
            document.querySelector('#course-opt-sub').checked = true;
        }
    };
  }

  function saveOptions() {
    var whiteLabel = document.querySelector('input[name="whitelabel"]:checked').value;
    if (whiteLabel === "other") {
      whiteLabel = document.querySelector('#course-opt-other-text').value;
    }
    var audience = document.querySelector('input[name="audience"]:checked').value;
    generateCode(type, audience, whiteLabel);
    createOptionsModal.close();
  }
  function cancelOptions() {
    createOptionsModal.close();
  }

}



//
///
//

function generateCode(type, audience, whiteLabel) {

  console.log("function generateCode()");
  console.log(type);
  console.log(audience);
  console.log(whiteLabel);

  var exportedHtml = "";

  let selectedCourses = document.querySelectorAll(".course-copy");
  for (let exportCourse of selectedCourses) {

    console.log(exportCourse);
    console.log(selectedCourses);

    var courseLink = exportCourse.dataset.href.replace(/www/gi, whiteLabel);
    var courseTitle = exportCourse.dataset.title;
    var courseAuthor = exportCourse.dataset.author;
    var courseThumbnail = exportCourse.dataset.courseThumbnail;
    if (audience === "ns") {
      ctaText = "Start for Free"
    } else {
      ctaText = "Start Now"
    }

    exportedHtml += '<tr>\n  <td valign="top" align="left" style="border-bottom: 1px solid #eaeaea; padding: 15px 0px 10px 0px;">\n    <table data-sub-mod="course" border="0" cellpadding="0" cellspacing="0" width="590" class="fullWidth" style="border-collapse: separate; width: 590px; min-width: 590px;">\n      <tr>\n        <td valign="top" align="left">\n          <table border="0" cellpadding="0" cellspacing="0" width="125" class="fullWidth" align="left" style="border-collapse: separate; width: 125px; min-width: 125px;">\n            <tr>\n              <td valign="top" align="center">\n                <table border="0" cellpadding="0" cellspacing="0" width="100%">\n                  <tr>\n                    <td valign="top" align="center" style="padding-bottom: 10px;"><a href="' + courseLink + '" style="text-decoration: none; color: #000001;" target="_blank"><img src="' + courseThumbnail + '" class="img218" alt="" title="" width="125" height="72" hspace="0" vspace="0" style="width: 125px; min-width: 125px; -ms-interpolation-mode: bicubic; border:0; outline: none; display: block;" /></a></td>\n                  </tr>\n                </table>\n              </td>\n            </tr>\n          </table>\n          <!--[if gte mso 9]>\n          </td><td valign="top" align="left" width="330" style="width: 330px; min-width: 330px;">\n          <![endif]-->\n          <table border="0" cellpadding="0" cellspacing="0" width="330" class="fullWidth" align="left" style="border-collapse: separate; width: 330px; min-width: 330px;">\n            <tr>\n              <td class="courseDescCell" valign="top" align="center">\n                <table border="0" cellpadding="0" cellspacing="0" width="100%">\n                  <tr>\n                    <td data-sub-mod="course-title" class="textCenter" valign="top" align="left" style="padding-left: 10px; padding-right: 10px; font-family: Helvetica, Arial, sans-serif;font-weight: 400;font-size: 18px;line-height: 23px;color: #434343;"><a href="' + courseLink + '" style="text-decoration: none; color: #434343; font-family: Roboto,Helvetica,Arial,sans-serif !important;" target="_blank">' + courseTitle + '</a></td>\n                  </tr>\n                  <tr>\n                    <td data-sub-mod="author" class="textCenter" valign="top" align="left" style="padding-left: 10px; padding-right: 10px; font-family: Helvetica, Arial, sans-serif;font-weight: 300;font-size: 16px;line-height: 21px;color: #777777;"><a href="' + courseLink + '" style="text-decoration: none; color: #777777; font-family: Roboto,Helvetica, Arial, sans-serif !important;" target="_blank">presented by ' + courseAuthor + '</a></td>\n                  </tr>\n                </table>\n              </td>\n            </tr>\n          </table>\n          <!--[if gte mso 9]>\n          </td><td valign="top" align="left" width="135" style="width: 135px; min-width: 135px;">\n          <![endif]-->\n          <table border="0" cellpadding="0" cellspacing="0" width="135" class="fullWidth" align="left" style="border-collapse: separate; width: 135px; min-width: 135px;">\n            <tr>\n              <td valign="top" align="center" style="padding-top: 10px;">\n                <table border="0" cellpadding="0" cellspacing="0" width="100%">\n                  <tr>\n                    <td data-sub-mod="cta" valign="top" align="center" style="padding-left: 5px; padding-right: 5px; padding-top: 2px; padding-bottom: 15px; font-family: Helvetica, Arial, sans-serif;font-weight: 300;font-size: 16px;line-height: 21px;color: #2b2b2b;"><a href="' + courseLink + '" style="text-decoration: none; color: #076ad2; font-family: Roboto,Helvetica, Arial, sans-serif !important;" target="_blank">' + ctaText + ' &rarr;</a></td>\n                  </tr>\n                </table>\n              </td>\n            </tr>\n          </table>\n        </td>\n      </tr>\n    </table>\n  </td>\n</tr>'

  }

  // Create Plain-Text Modal
  var generatedHtml = document.createElement("textarea");
  generatedHtml.className = "plain-text-modal";
  var generatedHtmlText = document.createTextNode(exportedHtml);
  generatedHtml.appendChild(generatedHtmlText);

  // instanciate new modal
  var createHtmlModal = new tingle.modal({
      footer: false,
      stickyFooter: false,
      cssClass: ['fill'],

      onOpen: function() {
          console.log('modal open');
      },
      onClose: function() {
          console.log('modal closed');
          createHtmlModal.destroy();
      }
  });

  createHtmlModal.setContent(generatedHtml);
  createHtmlModal.open();
}


function generateHTML() {

  courseOptions();

}


//
///
//
function getCourseNumber() {

  var totalCourses = 1 + document.querySelectorAll(".course-copy").length;

  return totalCourses;
}


//
// When a course is selected, add its info to an array and then format it as JSON.
//

var courses = [];
var course = {};

function courseToggle() {

  if ( this.classList.contains("mb-plus") ) {
    this.classList.remove("mb-plus");
    this.classList.add("mb-check");

    var link = "https://" + window.location.hostname + this.nextSibling.querySelector("a").getAttribute("href");
    var title = this.nextSibling.querySelector(".course-listing__title").innerText;
    var author = this.nextSibling.querySelector(".course-listing__instructors span").innerText;
    var courseThumbnail = this.nextSibling.querySelector(".course-listing__img").getAttribute("src");;

    this.closest(".select-course").dataset.href = link;

    var courseArray = [];
    courseArray.push(link);
    courseArray.push(title);
    courseArray.push(author);
    courseArray.push(courseThumbnail);

    for(var i in courseArray) {

        var item = courseArray[i];

       courses.push({
            "link" : item.link,
            "title"  : item.title,
            "author"       : item.author,
            "courseThumbnail"       : item.courseThumbnail
        });
    }
    course.courses = courses;

    console.log(JSON.stringify(course));
    console.log(JSON.stringify(courses));

    var jsonSource = JSON.stringify({course:{link:link,title:title,author:author,courseThumbnail,courseThumbnail}});
    console.log(jsonSource);

    console.log(link);
    console.log(title);
    console.log(author);
    console.log(courseThumbnail);


    // Add course collection wrapper
    if ( !document.querySelector(".course-collection-wrapper") ) {
      // console.log("add course collection wrapper");
      var courseCollectionWrapper = document.createElement("div");
      courseCollectionWrapper.className = "course-collection-wrapper";
      document.body.appendChild(courseCollectionWrapper);

      var courseMenu = document.createElement("div");
      courseMenu.className = "course-menu";


      // Generate HTML
      var elemGenerateHTML = document.createElement("div");
      elemGenerateHTML.className = "generate-html";
      elemGenerateHTML.dataset.codeType = "html";
      elemGenerateHTML.addEventListener("click", courseOptions, false);
      var elemGenerateHTMLText = document.createTextNode("Get HTML");
      elemGenerateHTML.appendChild(elemGenerateHTMLText);
      courseMenu.appendChild(elemGenerateHTML);

      // Generate JSON
      var elemGenerateJSON = document.createElement("div");
      elemGenerateJSON.className = "generate-json";
      elemGenerateHTML.dataset.codeType = "json";
      elemGenerateJSON.addEventListener("click", courseOptions, false);
      var elemGenerateJSONText = document.createTextNode("Get JSON");
      elemGenerateJSON.appendChild(elemGenerateJSONText);
      courseMenu.appendChild(elemGenerateJSON);

      // Generate YAML
      var elemGenerateYAML = document.createElement("div");
      elemGenerateYAML.className = "generate-json";
      elemGenerateHTML.dataset.codeType = "yaml";
      elemGenerateYAML.addEventListener("click", courseOptions, false);
      var elemGenerateYAMLText = document.createTextNode("Get YAML");
      elemGenerateYAML.appendChild(elemGenerateYAMLText);
      courseMenu.appendChild(elemGenerateYAML);

      // Reset Courses
      var resetCourses = document.createElement("div");
      resetCourses.className = "reset-courses";
      resetCourses.addEventListener("click", resetAllCourses, false);
      var resetCoursesText = document.createTextNode("Reset");
      resetCourses.appendChild(resetCoursesText);
      courseMenu.appendChild(resetCourses);

      courseCollectionWrapper.appendChild(courseMenu);

      var courseCollection = document.createElement("div");
      courseCollection.className = "course-collection";
      courseCollectionWrapper.appendChild(courseCollection);
    }

    // Add Course Copy to Course Collection
    var courseCopy = document.createElement("div");
    courseCopy.className = "course-copy";
    courseCopy.dataset.href = link;
    courseCopy.dataset.title = title;
    courseCopy.dataset.author = author;
    courseCopy.dataset.courseThumbnail = courseThumbnail;

    var courseNumber = document.createElement("div");
    courseNumber.className = "course-number bubble";
    var courseNumberText = document.createTextNode(getCourseNumber());
    courseNumber.appendChild(courseNumberText);

    var courseClose = document.createElement("div");
    courseClose.className = "mb-x bubble";
    courseClose.addEventListener("click", courseToggle, false);

    var courseTitle = document.createTextNode(title);

    var courseImg = document.createElement("img");
    courseImg.src = courseThumbnail;

    courseCopy.appendChild(courseTitle);
    courseCopy.appendChild(courseImg);
    courseCopy.appendChild(courseClose);
    courseCopy.appendChild(courseNumber);

    document.querySelector(".course-collection").appendChild(courseCopy);

  } else {

    console.log("courseToggle - this = " + this);
    removeCourse(this);

  }



}