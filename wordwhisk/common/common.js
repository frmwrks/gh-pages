/* Common JS */

setTransparentGifURL('Media/transparent.gif');

function applyEffects() {
	var registry=IWCreateEffectRegistry();
	registry.registerEffects( { 
		stroke_0:new IWStrokeParts( [ {
			rect:new IWRect(-2,2,4,398),
					url:'common/stroke/stroke.png'
				},{
					rect:new IWRect(-2,-2,4,4),
					url:'common/stroke/stroke_1.png'
				},{
					rect:new IWRect(2,-2,268,4),
					url:'common/stroke/stroke_2.png'
				},{
					rect:new IWRect(270,-2,4,4),
					url:'common/stroke/stroke_3.png'
				},{
					rect:new IWRect(270,2,4,398),
					url:'common/stroke/stroke_4.png'
				},{
					rect:new IWRect(270,400,4,4),
					url:'common/stroke/stroke_5.png'
				},{
					rect:new IWRect(2,400,268,4),
					url:'common/stroke/stroke_6.png'
				},{
					rect:new IWRect(-2,400,4,4),
					url:'common/stroke/stroke_7.png'
				}
			],
			new IWSize(272,404)
		),
	} );
	registry.applyEffects();
}

function hostedOnDM() {
	return false;
}

function onPageUnload() {
	Widget.onunload();
}

