$("./body//div[@id='Footer']") {
  insert("footer", "Powered by Moovweb", class: "mw-footer") {
	text(){
		clear()
	}    
	inject("Powered by: <div class=\"mw-logo\">Moovweb</div>")
  }

  $('./p'){
  	$('./a'){
  		remove();
  	}
  	text(){
  		replace(/\s*\|\s*by Bigcommerce/, "")
  	}
  }
}
