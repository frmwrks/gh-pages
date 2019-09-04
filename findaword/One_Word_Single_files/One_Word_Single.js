// Created by iWeb 3.0.4 local-build-20190822

setTransparentGifURL('Media/transparent.gif');

function applyEffects() {
	var registry=IWCreateEffectRegistry();
	registry.registerEffects( { 
		stroke_0:new IWStrokeParts( [ {
			rect:new IWRect(-2,2,4,398),
					url:'Guidelines_files/stroke.png'
				},{
					rect:new IWRect(-2,-2,4,4),
					url:'Guidelines_files/stroke_1.png'
				},{
					rect:new IWRect(2,-2,268,4),
					url:'Guidelines_files/stroke_2.png'
				},{
					rect:new IWRect(270,-2,4,4),
					url:'Guidelines_files/stroke_3.png'
				},{
					rect:new IWRect(270,2,4,398),
					url:'Guidelines_files/stroke_4.png'
				},{
					rect:new IWRect(270,400,4,4),
					url:'Guidelines_files/stroke_5.png'
				},{
					rect:new IWRect(2,400,268,4),
					url:'Guidelines_files/stroke_6.png'
				},{
					rect:new IWRect(-2,400,4,4),
					url:'Guidelines_files/stroke_7.png'
				}
			],
			new IWSize(272,402)
		),
	} );
	registry.applyEffects();
}

function hostedOnDM() {
	return false;
}

function onPageLoad() {
	loadMozillaCSS('One_Word_Single_files/One_Word_SingleMoz.css')
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

function onPageUnload() {
	Widget.onunload();
}
