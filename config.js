var config = {
    name : "CCP52.0",
    fileNames : {
		xlsx : "CCP52_template_tracker_10Feb2018.xls"
	},
	folderNames : {
		doc : "artifacts"
	},
    dest : "./dest",
    input : {
		__sheets : ['Template List']
	},
    stories : [{
        name : "BTR-104183"
	},{
        name : "BTR-104624"
	}]
}

module.exports = config;