function showDescription(e){
    var parentElement = e.parentElement;
    
    var desc;
    
    for(var i=0; i < parentElement.childNodes.length; i++){
        if(parentElement.childNodes[i].className == "project-text"){
            desc = parentElement.childNodes[i];
            break;
        }
    }
    
    
    if(e.textContent == "Show description"){

        desc.style.display = "inline";
        e.textContent = "Hide description";
        
    }
    
    else{
        
        desc.style.display="none";
        e.textContent = "Show description";
        
    }
    
    
}