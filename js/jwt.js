	define(function(require) {
		var $ = require("jquery");
		var config = require("./config");
		return {
			setToken: function(token) {
				window.localStorage.setItem('jwt_token', token);
			},
		    getToken: function() {
	        	return window.localStorage.getItem('jwt_token');
	    	},
		    removeToken: function() {
	        	window.localStorage.removeItem('jwt_token');
	    	},
	    	authRefresh: function() {
	    		if (this.getToken()) {
	    			var status = false;
	    			$.ajax({
				        url: config.site + "refresh",
				        type: "GET",
				        async: false,
				        headers: {
				            "Authorization" : "Bearer " + this.getToken() // 带入验证头部
				        },
				        data: {},
				        error: function(jqXHR, textStatus, errorThrown) {
				           	this.removeToken();
				        }.bind(this),
				        success: function(data, textStatus, jqXHR) {
				            this.setToken(data.data.jwt_token);
				            status = true;
				        }.bind(this)
			    	});
			    	return status;
	    		} else {
	    			this.removeToken();
	    			return false;
	    		}
	    	}
		};
});