({
	doInit : function(component, event, helper) {
		helper.helperMethod(component);
	},
    onCategoryClick : function(component,event,helper){
        var lable=event.getSource().get("v.labelWhenHover");
        component.set("v.category",lable);
		helper.helperMethod(component);
    },
    onLangClick : function(component,event,helper){
        var lang=event.getSource().get("v.labelWhenOff");
        component.set("v.lang",(lang.valueOf()=="ENGLISH"?"ENGLISH":
                                lang.valueOf()=="हिंदी"?"HINDI":
                                lang.valueOf()=="తెలుగు"?"TELUGU":"ENGLISH"));
		helper.helperMethod(component);
    },
    onNewsClick : function(component,event,helper){
        var site=event.getSource().get("v.value");
        window.open(site);
    }
})
