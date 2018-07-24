$(document).ready(function(){
    /*................. EVENTS PAGE JQUERY .................*/
    var event1 = new Event('#timeline-panel-1','#timeline-body-1','#caret1');
    var event2 = new Event('#timeline-panel-2','#timeline-body-2','#caret2');
    var event3 = new Event('#timeline-panel-3','#timeline-body-3','#caret3');
    var event4 = new Event('#timeline-panel-4','#timeline-body-4','#caret4');
    var event5 = new Event('#timeline-panel-5','#timeline-body-5','#caret5');
    var event6 = new Event('#timeline-panel-6','#timeline-body-6','#caret6');
    var event7 = new Event('#timeline-panel-7','#timeline-body-7','#caret7');

    var events = [event1,event2,event3,event4,event5,event6,event7];
    events.forEach(function(event){
      $(event.panel).click(function(){
        $(event.caret).toggleClass('open-caret');
        $(event.body).slideToggle();
      });
    });
    /*............... END OF EVENTS PAGE JQUERY ..............*/

  });
//EVENT OBJECT
function Event(panel,body,caret){
  this.panel = panel;
  this.body = body;
  this.caret = caret;
}
