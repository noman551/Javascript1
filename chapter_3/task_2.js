VisitCounter();
NewNamer();

function VisitCounter(){

    var visits = GetCookie("counter");
    
    if (!visits) { visits = 1;
    
    document.write("By the way, this is your first time here.");
    
    }
    
    else {
    
    visits = parseInt(visits) + 1;
    
    document.write("I note, you have been here " + visits + " times.");}
    
    setCookie("counter", visits,expdate);