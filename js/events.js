$(document).ready(function(){
    /*................. EVENTS PAGE JQUERY .................*/
    var panels = ['#timeline-panel-1','#timeline-panel-2'];
    var panelBodies =['#timeline-body-1','#timeline-body-2'];

    var event1 = new Event('#timeline-panel-1','#timeline-body-1');
    var event2 = new Event('#timeline-panel-2','#timeline-body-2');
    var event3 = new Event('#timeline-panel-3','#timeline-body-3');
    var event4 = new Event('#timeline-panel-4','#timeline-body-4');
    var event5 = new Event('#timeline-panel-5','#timeline-body-5');
    var event6 = new Event('#timeline-panel-6','#timeline-body-6');
    var event7 = new Event('#timeline-panel-7','#timeline-body-7');

    var events = [event1,event2,event3,event4,event5,event6,event7];
    events.forEach(function(event){
      $(event.panel).click(function(){
        $(event.body).slideToggle();
      });
    });
    /*............... END OF EVENTS PAGE JQUERY ..............*/

  });
//EVENT OBJECT
function Event(panel,body){
  this.panel = panel;
  this.body = body;
}
