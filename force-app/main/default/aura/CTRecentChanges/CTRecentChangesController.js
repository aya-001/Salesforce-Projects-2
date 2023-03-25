({
    doInit : function(component,event, helper) {
        //show the searching result on table 
        const scope = component.get("v.scope");
        if(scope === "person"){
            component.set("v.columns", [
                {label: "Name", fieldName: "Name", type: "text"},
                {label: "Phone", fieldName: "Mobile__c", type: "text"},
                {label: "Token", fieldName: "Token__c", type: "text"},
                {label: "Health Status", fieldName: "Health_Status__c", type: "text"},
                {label: "Status Update Date", fieldName: "Status_Update_Date__c", type: "date"}
            
            ]);
        }else{
            component.set("v.columns", [
                {label: "Name", fieldName: "Name", type: "text"},
                {label: "Status", fieldName: "Status__c", type: "text"},
                {label: "Pincode", fieldName: "Pincode__c", type: "text"},
                {label: "Adress", fieldName: "Address__c", type: "text"},
                {label: "Red Score", fieldName: "Red_Score__c", type: "number"},
                {label: "Status Update Date", fieldName: "Status_Update_Date__c", type: "date"}
            
            ]);
        }
        helper.fetchRecentHealthChanges(component);

    }
});
