$(".//div[@id='Header']"){
	$("./div[@id='Logo']"){
		# Move top menu into #Logo container
		move_here("../../../div[@id='TopMenu']", "bottom"){
			# remove unwanted top menu items from upper menu
			remove(".//li[not(contains(@class, 'CartLink') or contains(@class, 'First'))]")
			$("./br"){
				remove()
			}
			$(".//li[2]"){
				move_to("..//li[1]", "before"){
					remove_class("First")
					add_class("Account")
				}
			}
		}
	}

	$("./div[@id='SearchForm']"){
		$('./form'){
			$('./label'){
				remove();
			}

			$("./input[@type='image']"){
				attr('type', 'button')
				attr('src'){
					remove()
				}
			}
		}
		$('./p'){
			remove()
		}
	}

	$('./br'){
		remove()
	}

	$("../div[@id='Menu']"){
		attr("data-ur-set", "toggler")
		$('./ul'){
			remove()
		}
		insert('div', data-ur-toggler-component: "button", class: "menu-toggle")
		%menuNode = this()
		$("..//div[@id='Wrapper']/div[@class='Left']/div[contains(@class, 'CategoryList')]"){
			attr("data-ur-toggler-component", "content")
			move(this(), %menuNode, position("bottom"))
		}
		move_to("..//div[@id='SearchForm']", "bottom")

		$(".//div[contains(@class, 'NewsletterSubscription')]"){
			remove()
		}
	}
}
