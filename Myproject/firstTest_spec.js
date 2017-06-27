var EC = protractor.ExpectedConditions;
var submitButton=element(by.id('submit'));
describe("Test the bank of the west form",function(){
    it("should open the form kya",function(){
        browser.get("https://formview.io/#/eevkhhxgkyejnzi/general-individual-kya?header=1");

        browser.wait(EC.presenceOf(submitButton), 10000);
    });
    it('should validate the loan form',function(){
        /*element.all(by.css('span[ng-click="$select.activate()"]')).get(0).click();
         element.all(by.repeater('item in $select.items')).then(function(elems){
         elems[0].click();
         browser.sleep(5000);
         });*/
        element(by.id('whattypeofaccountisbeingopened')).click();
        element(by.id('ui-select-choices-row-0-0')).click();
        browser.sleep(5000);
        element(by.id('whattypeofaccountisbeingopened')).getText().then(function(text){
            console.log(text);
        })

    });

});
