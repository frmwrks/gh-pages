// Created by iWeb 3.0.4 local-build-20190828


function onPageLoad() {
	loadMozillaCSS('Guidelines_files/GuidelinesMoz.css')
	adjustLineHeightIfTooBig('id1');
	adjustFontSizeIfTooBig('id1');
	adjustLineHeightIfTooBig('id2');
	adjustFontSizeIfTooBig('id2');
	adjustLineHeightIfTooBig('id3');
	adjustFontSizeIfTooBig('id3');
	adjustLineHeightIfTooBig('id4');
	adjustFontSizeIfTooBig('id4');
	Widget.onload();
	fixupAllIEPNGBGs();
	fixAllIEPNGs('Media/transparent.gif');
	applyEffects()
}
