
        require([
            "dojo/parser",
             
            "dijit/form/DateTextBox",
            "dijit/form/NumberTextBox",
            "dojo/domReady!"
        ], function(parser,  DateTextBox, NumberTextBox){
            parser.parse();

            var daysToAdd = 90;
            var date = new Date(2018, 0,  4);
            var fromDate = new DateTextBox({
                value: date
            },"fromDate");
            fromDate.startup();
            
            var date2 = new Date(date.getFullYear(), date.getMonth(), date.getDate() + daysToAdd);
            var toDate = new DateTextBox({
                value: date2
            },"toDate"); 
            toDate.startup();


            var addedDays = new NumberTextBox({
                value: daysToAdd,
                onChange: function(v){
                    console.log("---------------- l@@K value changed ---------------",v);
                    console.log(fromDate.getValue().toISOString());
                    var xDate =  new Date(fromDate.getValue().getFullYear(), fromDate.getValue().getMonth(),   fromDate.getValue().getDate() + v );
                    console.log(xDate);
                    toDate.setValue(xDate);
                }
            }, "addedDays");
            addedDays.startup();

            // on(addedDays, "change", function(){
            //     toDate.set("value",  date.getDate() + addedDays.getValue());
            // });

   
        }); 
 