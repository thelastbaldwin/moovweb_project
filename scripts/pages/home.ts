$("./body"){
	add_class('mw-home')
}


$(".//div[@id='Wrapper']"){
	
	$(".//span[contains(@class, 'FeedLink')]"){
		remove()
	}

	$(".//br"){
		remove()
	}

	$("./div[contains(@class, 'Right')]"){
		remove()
	}

	$("./div[contains(@class, 'Content')]"){
		%carouselParent = this()
		$("./div[contains(@class, 'FeaturedProducts')]"){
			$("./div[contains(@class,'BlockContent')]"){
				ur_attribute("set", "carousel")
				insert("div"){
					ur_attribute("carousel-component", "dots")
				}
				$('./ul'){
					attr('data-ur-carousel-component', 'scroll_container')
					$('./li'){
						attr('data-ur-carousel-component', 'item')
					}
				}
			}
		}

		$("./div[contains(@class, 'NewProducts')]"){
			$("./div[contains(@class,'BlockContent')]"){
				ur_attribute("set", "carousel")
				insert("div"){
					ur_attribute("carousel-component", "dots")
				}
				$('./ul'){
					attr('data-ur-carousel-component', 'scroll_container')
					$('./li'){
						attr('data-ur-carousel-component', 'item')
					}
				}
			}
		}
	}

	$("./div[@id='LayoutColumn1']"){
		remove();
	}
}
