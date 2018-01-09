// nastavení
$.texyla.setDefaults({
	emoji: [
	    '😇',
        '😎',
        '😁',
        '😂',
        '😃',
        '😄',
        '😅',
        '😆',
        '😉',
        '😊',
        '😋',
        '😌',
        '😍',
        '😏',
        '😒',
        '😓',
        '😔',
        '😖',
        '😘',
        '😚',
        '😜',
        '😝',
        '😞',
        '😠',
        '😡',
        '😢',
        '😣',
        '😤',
        '😥',
        '😨',
        '😩',
        '😪',
        '😫',
        '😭',
        '😰',
        '😱',
        '😲',
        '😳',
        '😵',
        '😷',
        '😸',
        '😹',
        '😺',
        '😻',
        '😼',
        '😽',
        '😾',
        '😿',
        '🙀'
	]
});

$.texyla.initPlugin(function () {
});

$.texyla.addWindow("emoji", {
	createContent: function () {
		var _this = this;

		var emojis = $('<div></div>');
		var emoticonsEl = $('<div class="emoji"></div>').appendTo(emojis);

		// projít smajly
        for (var i = 0; i < this.options.emoji.length; i++) {
			function emClk(emoticon) {
				return function () {
					_this.texy.replace(emoticon);
                    emojis.dialog("close");

				}
			};

			$(
				"<button class='ui-state-default' style='font-size: 1.5em;'>" + this.options.emoji[i] + "</button>"
			)
				.hover(function () {
					$(this).addClass("ui-state-hover");
				}, function () {
					$(this).removeClass("ui-state-hover");
				})
				.click(emClk(this.options.emoji[i]))
				.appendTo(emoticonsEl);
		}

		return emojis;
	},

	dimensions: [300, 350]
});