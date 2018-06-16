var xlsx = require('xlsx');

var file = function(){
	return {
		/** Create File **/
		__create : function(){
			
		},
		
		/** Copy File **/
		__copy : function(){
			
		},
		
		/** Read File **/
		__read : function(){
			var wbook = xlsx.readFile(fileName);
			//var book = [];
			/* wbook.SheetNames.forEach( function( fileName, sheetInd ){
				if( config.input.__sheets.indexOf( "__all__" ) != -1 ) 
					config.input.__sheets.push(fileName);

				if( config.input.__sheets.indexOf( fileName ) != -1 ){
					var sheets     = wbook.Sheets[fileName];
					var headingArr = xlsx.utils.sheet_to_json(sheets,{header:1})[0];
					var results    = xlsx.utils.sheet_to_json(sheets);

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
			callback( book ); */
		}
	}
}();

module.exports = file;