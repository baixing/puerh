$(function(){  

// highlight current page
!function(){
    var pathname = window.location.pathname,
        from = pathname.lastIndexOf('/') + 1,
        str = pathname.slice(from, -5),
        current = '#';
    switch(str){
        case 'index': current += 'index'; break;
        case 'css': current += 'css'; break;
        case 'javascript': current += 'javascript'; break;
    }
    $(current)[0] && $(current).addClass('current');
}();  


// # Modals
$('#tips').length && $('#tips').popover();


})