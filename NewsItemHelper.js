({
	helperMethod : function(component) {
		var lang=component.get("v.lang");
        var category=component.get("v.category");
        var feeds=component.get("v.newses");
        feeds.length=0;
        component.set("v.newses",feeds);
        
        var action=component.get("c.getNews");
        action.setParams({lang:lang,
                          topic:category});
        action.setCallback(this,function(response){
            if(response.getState()=="SUCCESS"){
                component.set("v.newses",response.getReturnValue());
            }
        });
        $A.enqueueAction(action);
	}
})
