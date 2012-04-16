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
        case 'getting-start': current += 'getting-start'; break;
    }
    $(current)[0] && $(current).addClass('current');
}();  


// # Modals
$('#myModal').on('shown', function(){
	//$('.modal-open .modal-backdrop')[0].style.height = $('html').height() + 'px';
})


// # Tips
$('#tips').length && $('#tips').popover();


})