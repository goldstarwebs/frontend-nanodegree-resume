// will replace all occurrences, not just first occurrence
var datastring = /%data%/ig;
var bio = {
	"name": "Donia Robinson",
	"role": "",
	"contacts": {
		"mobile": "",
		"email": "donia@goldstarwebs.com",
		"github": "goldstarwebs",
		"twitter": "",
		"location": "Chicago, IL"
	},
	"welcomeMessage": "Welcome text will go here.  A short introduction and tour of the page.",
	"skills": ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
	"biopic": "images/headshot.jpg",
	"display": function() {
		var formattedName = HTMLheaderName.replace(datastring, bio.name);
		var formattedRole = HTMLheaderRole.replace(datastring, bio.role);
		var formattedEmail = HTMLemail.replace(datastring, bio.contacts.email);
		var formattedGithub = HTMLgithub.replace(datastring, bio.contacts.github);
		var formattedLocation = HTMLlocation.replace(datastring, bio.contacts.location);
		var formattedPic = HTMLbioPic.replace(datastring, bio.biopic);
		var formattedWelcome = HTMLwelcomeMsg.replace(datastring, bio.welcomeMessage);
		$("#namerole").prepend(formattedRole);
		$("#namerole").prepend(formattedName);
		$("#topContacts").append(formattedEmail);
		$("#topContacts").append(formattedGithub);
		$("#topContacts").append(formattedLocation);
		$("#footerContacts").append(formattedEmail);
		$("#footerContacts").append(formattedGithub);
		$("#footerContacts").append(formattedLocation);
		$("#biopic").append(formattedPic);
		$("#welcome").prepend(formattedWelcome);
		if (bio.skills.length > 0) {
			$("#skillscol").append(HTMLskillsStart);
			for (cSkill in bio.skills) {
				var formattedSkill = HTMLskills.replace(datastring, bio.skills[cSkill]);
				$("#skills").append(formattedSkill);
			}
		}
	}
};
var work = {
	"jobs": [{
		employer: "Gold Star Web Sites",
		title: "Owner/President",
		location: "Chicago, IL",
		dates: "September 2010-present",
		description: "Custom website and web tool development",
		url: "http://goldstarwebs.com"
	}, {
		employer: "Gold Star Webs",
		title: "Chief Programmer",
		location: "Rochester, MN",
		dates: "January 2003-August 2010",
		description: "Custom website and web tool development",
		url: "http://goldstarwebs.com"
	}, {
		employer: "Nortel Networks",
		title: "Senior Proposal Engineer",
		location: "Burlington, VT",
		dates: "June 2000-November 2000",
		description: "Created tools and boilerplates to automate equipment proposal processes.",
		url: "http://nortelnetworks.com"
	}, {
		employer: "Nortel Networks",
		title: "Proposal Engineer",
		location: "Atlanta, GA",
		dates: "June 1999-June 2000",
		description: "Created proposals for telecommunications equipment.  Promoted to team lead three months after arriving.",
		url: "http://nortelnetworks.com"
	}],
	"display": function() {
		if (work.jobs.length > 0) {
			for (var cJob in work.jobs) {
				$("#workExperience").append(HTMLworkStart);
				var formattedEmp = HTMLworkEmployer.replace(datastring, work.jobs[cJob].employer);
				formattedEmp = formattedEmp.replace("%url%", work.jobs[cJob].url);
				var formattedTitle = HTMLworkTitle.replace(datastring, work.jobs[cJob].title);
				var formattedLoc = HTMLworkLocation.replace(datastring, work.jobs[cJob].location);
				var formattedDates = HTMLworkDates.replace(datastring, work.jobs[cJob].dates);
				var formattedDescrip = HTMLworkDescription.replace(datastring, work.jobs[cJob].description);
				$(".work-entry:last").append(formattedEmp + formattedTitle + formattedLoc + formattedDates + formattedDescrip);
			}
		}
	}
}
var projects = {
	"project": [{
		"title": "Project 1",
		"dates": "Project1 dates",
		"description": "Project1 description",
		"images": ["http://placehold.it/350x150/292929/e3e3e3"]
	}, {
		"title": "Project 2",
		"dates": "Project2 dates",
		"description": "Project2 description",
		"images": ["http://placehold.it/350x150/292929/00ff00"]
	}, {
		"title": "Project 3",
		"dates": "Project3 dates",
		"description": "Project3 description",
		"images": ["http://placehold.it/350x150/292929/ffff00"]
	}],
	"display": function() {
		if (projects.project.length > 0) {
			$("#projects").append(HTMLprojectStart);
			for (var cProject in projects.project) {
				var ftitle = HTMLprojectTitle.replace(datastring, projects.project[cProject].title);
				var fdates = HTMLprojectDates.replace(datastring, projects.project[cProject].dates);
				var fdesc = HTMLprojectDescription.replace(datastring, projects.project[cProject].description);
				$(".bb-bookblock:last").append(ftitle);
				$(".bb-custom-side:last").append(fdates + fdesc);
				// only using one image per project currently, but leaving images as an array in case I want to add more
				for (var i = 0; i < projects.project[cProject].images.length; i++) {
					var fimg = HTMLprojectImage.replace(datastring, projects.project[cProject].images[i]);
					$(".bb-item:last").append(fimg);
				}
			}
		}
	}
}
var education = {
	"schools": [{
		"name": "Georgia Institute of Technology",
		"location": "Atlanta, GA",
		"degree": "Bachelor of Science",
		"majors": ["Computer Science"],
		"dates": "September 1995 - June 1999",
		"url": "http://gatech.edu"
	}, {
		"name": "University of Minnesota",
		"location": "Minneapolis, MN",
		"degree": "NA",
		"majors": ["NA"],
		"dates": "June 1995 - August 1995",
		"url": "https://twin-cities.umn.edu"
	}],
	"onlineCourses": [{
		"title": "Front-End Web Developer Nanodegree",
		"school": "Udacity",
		"date": "2015",
		"url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
	}],
	"display": function() {
		if (education.schools.length > 0) {
			$("#education-col").append(HTMLschoolStart);
			for (var cSchool in education.schools) {
				var fname = HTMLschoolName.replace(datastring, education.schools[cSchool].name);
				fname = fname.replace("%url%", education.schools[cSchool].url);
				var fdegree = HTMLschoolDegree.replace(datastring, education.schools[cSchool].degree);
				var fdates = HTMLschoolDates.replace(datastring, education.schools[cSchool].dates);
				var flocation = HTMLschoolLocation.replace(datastring, education.schools[cSchool].location);
				$(".education-entry:last").append(fname + fdegree + flocation + fdates);
				for (var i = 0; i < education.schools[cSchool].majors.length; i++) {
					var fmajor = HTMLschoolMajor.replace(datastring, education.schools[cSchool].majors[i]);
					$(".education-entry:last").append(fmajor);
				}
			}
		}
		if (education.onlineCourses.length > 0) {
			$(".education-entry:last").append(HTMLonlineClasses);
			for (var cCourse in education.onlineCourses) {
				var ftitle = HTMLonlineTitle.replace(datastring, education.onlineCourses[cCourse].title);
				ftitle = ftitle.replace("%url", education.onlineCourses[cCourse].url);
				var fschool = HTMLonlineSchool.replace(datastring, education.onlineCourses[cCourse].school);
				var fdate = HTMLonlineDates.replace(datastring, education.onlineCourses[cCourse].date);
				var furl = HTMLonlineURL.replace(datastring, education.onlineCourses[cCourse].url);
				$(".education-entry:last").append(ftitle + fschool + fdate + furl);
			}
		}
	}
}
$(document).click(function(loc) {
	logClicks(loc.pageX, loc.pageY);
});

function locationizer(work_obj) {
	var locArray = [];
	for (var cJob in work_obj.jobs) {
		locArray.push(work_obj.jobs[cJob].location);
	}
	return locArray;
}
bio.display();
work.display();
projects.display();
education.display();
$("#mapDiv").append(googleMap);
//footer
/*$("#main").append(internationalizeButton);
    
function inName() {
	 
	 var newName = "";	 
	 var nameArr = bio.name.split(" ");
	 
	 nameArr[1] = nameArr[1].toUpperCase();
	 newName = nameArr.join(" ");
	 
	 return newName;
 }*/