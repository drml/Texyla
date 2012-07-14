/** Automaticky se zvetsujici textarea
 *
 * @author		Jan Pecha, <janpecha@email.cz>
 * @version		2012-07-14-1
 */

// Zvětšovací textarea
jQuery.texyla.initPlugin(function () {
	var _this = this;
	this.textarea.keyup(function(e) {
		autoResize();
	}).click(function(e) {
		autoResize();
	}).change(function(e) {
		autoResize();
	});
	
	function autoResize()
	{
		_this.textarea.height(_this.textarea.get(0).scrollHeight - /*padding*/(_this.textarea.innerHeight() - _this.textarea.height()));
	}
});
