/**
 * 
 */
var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var map = {};
map["/"] = requestHandlers.indexHTML;
map["/index.html"] = requestHandlers.indexHTML;
map["/catalog.html"] = requestHandlers.catalogHTML;
map["/student.html"] = requestHandlers.studentHTML;
map["/previouscourses.html"] = requestHandlers.previouscoursesHTML;
map["/directions.html"] = requestHandlers.directionsHTML;
map["/map.html"] = requestHandlers.mapHTML;
map["/map.css"] = requestHandlers.mapCSS;
map["/default.css"] = requestHandlers.defaultCSS;
map["/tablets.css"] = requestHandlers.tabletsCSS;
map["/smartphones.css"] = requestHandlers.smartphonesCSS;
map["/script.js"] = requestHandlers.scriptJS;
map["/addRemove.js"] = requestHandlers.addRemoveJS;
map["/register.js"] = requestHandlers.registerJS;
map["/loadTable.js"] = requestHandlers.loadTableJS;
map["/serverdatabase.js"] = requestHandlers.serverdatabaseJS;
map["/directions.js"] = requestHandlers.directionsJS;
map["/images/GVU.png"] = requestHandlers.imagesGVU;
map["/images/campus1_thumb.png"] = requestHandlers.imagesCampus1Thumb;
map["/images/campus2_thumb.png"] = requestHandlers.imagesCampus2Thumb;
map["/images/campus3_thumb.png"] = requestHandlers.imagesCampus3Thumb;
map["/images/campus1_large.jpg"] = requestHandlers.imagesCampus1Large;
map["/images/campus2_large.jpg"] = requestHandlers.imagesCampus2Large;
map["/images/campus3_large.jpg"] = requestHandlers.imagesCampus3Large;
map["/courseData.json"] = requestHandlers.courseDataJSON;
map["/studentData.json"] = requestHandlers.studentDataJSON;
map["/mainData.json"] = requestHandlers.mainDataJSON;
map["/writeCourseData"] = requestHandlers.writeCourseData;
map["/writeMainData"] = requestHandlers.writeMainData;
map["/writeRegisteredCoursesData"] = requestHandlers.writeRegisteredCoursesData;

server.start(router.route, map);