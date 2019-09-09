// Created by iWeb 3.0.4 local-build-20190822

function onPageLoad() {
	loadMozillaCSS('Two_Words_files/Two_WordsMoz.css')
	adjustLineHeightIfTooBig('id1');
	adjustFontSizeIfTooBig('id1');
	adjustLineHeightIfTooBig('id2');
	adjustFontSizeIfTooBig('id2');
	adjustLineHeightIfTooBig('id3');
	adjustFontSizeIfTooBig('id3');
	adjustLineHeightIfTooBig('id4');
	adjustFontSizeIfTooBig('id4');
	Widget.onload();
	fixAllIEPNGs('Media/transparent.gif');
	applyEffects()
	performPostEffectsFixups()
}
