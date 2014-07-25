$("./body"){
	add_class('mw-category')
}


$(".//div[@id='Wrapper']"){
	%wrapperNode = this()

	$(".//span[contains(@class, 'FeedLink')]"){
		remove()
	}

	$(".//div[contains(@class,'NewsletterSubscription')]"){
		remove()
	}

	$("./div[@id='LayoutColumn1']"){
		$("./div[@id='SideLiveChatServices']"){
			remove();
		}

		$('./div'){
			//set up "accordions"	
			ur_attribute("set", "toggler")
			$("./h2"){
				ur_attribute("toggler-component", "button")
			}
			$('./div'){
				ur_attribute("toggler-component", "content")
			}
		}
	}

	$("./div[contains(@class, 'Content')]"){
		$(".//br[contains(@class, 'Clear')]"){
			remove()
		}

		$(".//div[contains(@class, 'Breadcrumb')]"){
			remove()
		}

		$(".//div[contains(@class, 'CompareButton')]"){
			remove()
		}

		$(".//ul[contains(@class, 'ProductList')]/li"){
			$("//div[contains(@class, 'ProductImage')]"){
				remove_class('QuickView')
			}

			$("//div[contains(@class, 'ProductCompareButton')]"){
				remove()
			}

			$(".//div[contains(@class, 'ProductDetails')]"){
				//get contents of strong tag and put into div
				insert("div", class:"productTitle")
				$("./strong"){
					# Why are the move functions different?!
					# How to fetch a node?!
					move_to("../div", "top")
				}

			}

			$$(".ProductPriceRating"){
				move_to("../div[contains(@class, 'ProductDetails')]", "bottom")
			}
			
			$$(".ProductActionAdd"){
				move_to("../div[contains(@class, 'ProductDetails')]", "bottom")
			}
		}
		

		$("./div[@id='CategoryHeading']"){
			$(".//h2"){
				move(this(), %wrapperNode, position('top'))
			}
			$(".//div[contains(@class, 'CategoryDescription')]"){
				remove();
			}

			$(".//div[contains(@class, 'SubCategoryList')]"){
				remove();
			}
		}
	}

	$("./div[@id='LayoutColumn3']"){
		$(".//span[contains(@class, 'FeedLink')]"){
			remove()
		}

		$(".//ul[contains(@class, 'ProductList')]/li"){
			$("//div[contains(@class, 'ProductImage')]"){
				remove_class('QuickView')
			}

			$("//div[contains(@class, 'ProductCompareButton')]"){
				remove()
			}

			$(".//div[contains(@class, 'ProductDetails')]"){
				//get contents of strong tag and put into div
				insert("div", class:"productTitle")
				$("./strong"){
					# Why are the move functions different?!
					# How to fetch a node?!
				}

			}

			$$(".ProductPriceRating"){
				move_to("../div[contains(@class, 'ProductDetails')]", "bottom")
			}
			
			$$(".ProductActionAdd"){
				move_to("../div[contains(@class, 'ProductDetails')]", "bottom")
			}
		}

	}
}