var config = require('./config'),
	dir    = require('./modules/dir'),
	file   = require('./modules/file'),
	excel  = require('./modules/excel');
	
/* var rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
}); */

/** Create Directory **/
/* function createDir( dir, cb){
	if (!fs.existsSync(dir)){
		fs.mkdirSync(dir);
		cb(true);
	} else {
		rimraf(dir, function () { 
			fs.mkdirSync(dir);
			cb(true);
		});
	}
} */

/** Reading xlsx file **/
/* function readFile( fileName, callback ) {
	var wbook = XLSX.readFile(fileName);
	var book = [];
	wbook.SheetNames.forEach( function( fileName, sheetInd ){
		if( config.input.__sheets.indexOf( "__all__" ) != -1 ) 
	 	 	config.input.__sheets.push(fileName);

		if( config.input.__sheets.indexOf( fileName ) != -1 ){
			var sheets     = wbook.Sheets[fileName];
			var headingArr = XLSX.utils.sheet_to_json(sheets,{header:1})[0];
			var results    = XLSX.utils.sheet_to_json(sheets);

			var sheet = {
				name : fileName,
				rows : results,
				length : results.length
			};

			_.filter( config.stories, function( storyObj, storyInd ){
				if( fileName == storyObj.name )
					_.assign(sheet, storyObj);
			});
			//console.log(headingArr);
			book.push(sheet);
		}
	});
	callback( book );
} */

/** Initialization of Program **/
/* function init(){
	readFile( config.fileName, function( data ){
		if( data.length > 0 ){
			createDir( config.dest, function(flag){
				if(flag) {
					data.forEach( function( dataObj, dataInd ){
						var templateFolders = [];
						if( dataObj.rows.length > 0 ){
							dataObj.rows.forEach( function( rowObj, rowInd ){
								console.log(rowObj['Template Name'].trim()+">"+formatString(rowObj['Medium'], "html","html")+":"+formatString(rowObj['Medium'], "html","properties"));
							});
						}
					});
				}
			});
		}
	});		
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function formatString( string, firstPart, secondPart ){
	return firstPart+capitalizeFirstLetter(string)+"."+secondPart;
}

init(); */

dir.__doMultipleOperation( [ "remove", "create" ], config.dest, function( data ){
	console.log( data );
});
//console.log( file.__getFilePath( config.folderNames.doc, config.fileNames.xlsx ) );