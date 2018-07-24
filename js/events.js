$(document).ready(function(){
    /*................. EVENTS PAGE JQUERY .................*/
    var event1 = new Event('#timeline-panel-1','#timeline-body-1','#caret1');
    // var event2 = new Event('#timeline-panel-2','#timeline-body-2');
    // var event3 = new Event('#timeline-panel-3','#timeline-body-3');
    // var event4 = new Event('#timeline-panel-4','#timeline-body-4');
    // var event5 = new Event('#timeline-panel-5','#timeline-body-5');
    // var event6 = new Event('#timeline-panel-6','#timeline-body-6');
    // var event7 = new Event('#timeline-panel-7','#timeline-body-7');

    var events = [event1];
    events.forEach(function(event){
      $(event.panel).click(function(){
        $(event.body).slideToggle();
        $(event.caret).toggleClass('open-caret');
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
