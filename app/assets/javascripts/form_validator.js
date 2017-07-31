$('[required]').on('blur', function() {
	var $this = $(this);

	if ($this.val() == '' || $this.val().length < 5) {
		$this.parent().addClass('has-error')

	} else {
		$this.parent().removeClass('has-error')
	}
})
