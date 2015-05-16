var f1=function(){$('#reproducirVideo').click(function () {
    var src="http://www.youtube.com/embed/dP15zlyra3c?html5=1";
	var src2="https://www.youtube.com/embed/DuaRBHC5EBw";
    $('#video iframe').attr('src', src2);
});
}


var f2=function(){$('#myModal5 button.close').click(function () {
    $('#video iframe').removeAttr('src');
});
}

var f3=function(){

	f1();
	f2();
}

$(document).ready(f3());