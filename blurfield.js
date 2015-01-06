function blurField( el ){
			el.each(function () {
			    // store default value
			    var v = this.value;

			    $(this).blur(function () {
			        // if input is empty, reset value to default 
			        if (this.value.length == 0) this.value = v;
			    }).focus(function () {
			        // when input is focused, clear its contents
			        this.value = "";
			    }); 
			});
		}
		
		blurField( $('input, textarea, select').not(':input[type=button], :input[type=submit], :input[type=reset]') );