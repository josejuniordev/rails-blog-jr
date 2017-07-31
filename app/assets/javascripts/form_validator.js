$(function() {

	var enviar = true;

	$('[required]').on('blur', function() {
		var $this = $(this);

		if ($this.val() == '' || $this.val().length < 5) {
			highlightField($this.parent(), true)
			enviar = false;

		} else {
			highlightField($this.parent(), false)
			enviar = true;
		}
	})

	$('.requiredForm').on('submit', function(e) {
		$requireds = $('[required]', this)

		if ($requireds) {
			$requireds.each(function($el) {
				if ($el.val() == '' || $el.val().length < 5) {
					highlightField($el.parent(), true)
					enviar = false;

				} else {
					highlightField($el.parent(), false)
				}
			})
		}

		if (!enviar) {
			return false;
		}
	})

	function highlightField($element, show) {
		show = show || false;

		if (show) {
			$element.addClass('has-error')
		} else {
			$element.removeClass('has-error')
		}

	}

	document.addEventListener("DOMContentLoaded", function() {
		var elements = document.getElementsByTagName("INPUT");
		for (var i = 0; i < elements.length; i++) {
			elements[i].oninvalid = function(e) {
				e.target.setCustomValidity("");
				if (!e.target.validity.valid) {
					e.target.setCustomValidity("Este campo não pode ser vazio!");
				}
			};
			elements[i].oninput = function(e) {
				e.target.setCustomValidity("");
			};
		}
	})

})
