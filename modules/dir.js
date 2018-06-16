var _ = require('lodash'),
	fs = require('fs'),
	rimraf = require('rimraf');

var dir = function(){
	return {
		/** Default Directory Operations **/
		__operations : [ "create", "copy", "read", "remove" ],
		
		/** Create Directory **/
		__create : function( dir, __callback ){
			if ( !fs.existsSync( dir ) ){
				fs.mkdir( dir, function () {
					if( __callback ) __callback( dir );
				});
			} else {
				if( __callback ) __callback( dir );
			}
		},
		
		/** Copy Directory **/
		__copy : function(){
			
		},
		
		/** Read Directory **/
		__read : function(){
			
		},
		
		/** Remove Directory **/
		__remove : function( dir, __callback ){
			if ( fs.existsSync( dir ) ){
				rimraf( dir, function () {
					if( __callback ) __callback( dir );
				});
			} else {
				if( __callback ) __callback( dir );
			}
		},
		
		/** Multiple Operation **/
		__doMultipleOperation : function( operations, dir, __callback ){
			var self = this;
			if( _.includes( operations, "remove" ) ){
				self.__remove( dir, function( data ){
					if( _.includes( operations, "create" ) ){
						self.__create( dir, function( data ){
							__callback( dir );
						});
					}
				});
			} else {
				if( _.includes( operations, "create" ) ){
					self.__create( dir, function( data ){
						__callback( dir );
					});
				}
			}
		}
	}
}();

module.exports = dir;