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
			
		},
		
		/** Get File Path **/
		__getFilePath : function ( folder, fileName ){
			return process.cwd() + "\\" + folder + "\\" + fileName;
		}
	}
}();

module.exports = file;