# remove product zoom script
# edit: seems to cause more problems than it solves
# $("//script[contains(@src, 'jquery.jqzoom-core.js?')]"){
# 	remove()
# }

$("./body"){
	add_class('mw-product')
}

$(".//div[@id='LayoutColumn1']"){
	remove()
}

$(".//div[@id='LayoutColumn2']"){
	$(".//div[contains(@class, 'Breadcrumb')]"){
		remove()
	}

	$(".//div[contains(@class, 'PrimaryProductDetails')]"){
		$("./div//div[contains(@class, 'AddThisButtonBox')]"){
			remove()
		}

		$(".//div[contains(@class, 'ProductThumb')]"){
			$(".//div[contains(@class, 'ImageCarouselBox')]"){
				$("./a"){
					remove()
				}
			}

			$(".//div[contains(@class, 'ProductThumbImage')]"){
				$('./a'){
					attr('onclick'){
						remove()
					}
				}
			}

		}

		$(".//div[contains(@class, 'AddCartButton')]"){
			remove_class("Value")

			$('./div//input'){
				attribute("type", "button")
				attribute("value", "Add to Cart")
				attribute("src"){
					remove()
				}
				attribute("alt"){
					remove();
				}
			}

			$('./span'){
				remove_class("FloatLeft")
				attribute("style"){
					remove();
				}
				%myspan = this()
				$("../../..//div[contains(@class, 'QuantityInput')]"){
					move(%myspan, this(), position("after"))
				}
			}
		}
	}
	$(".//div[@id='ProductByCategory']"){
		remove()
	}

	$("./div[@id='ProductReviews']"){
		remove()
	}

	$("./div[@id='SimilarProductsByCustomerViews']"){
		$('./div'){
			ur_attribute("set", "carousel")

			$('.//ul'){
				ur_attribute("carousel-component", "scroll_container")
				$('./li'){
					ur_attribute("carousel-component", "item")
				}
			}
		}
	}
}

$(".//div[@id='LayoutColumn3']"){
	remove()
}