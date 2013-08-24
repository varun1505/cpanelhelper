var editor = CodeMirror.fromTextArea(document.getElementById("codewindow"), {
    lineNumbers: true,
    matchBrackets: true,
    mode: "application/x-httpd-php",
    indentUnit: 4,
    indentWithTabs: true,
    enterMode: "keep",
    tabMode: "shift",
    lineWrapping: true
});

//editor.setSize("100%", "100%");

$(function(){

    var title = $('input#path').val();
    //alert(title);
    title=title.split("/");
    //alert(title[title.length-1]);
    window.document.title = title[title.length-1];


    $('.CodeMirror').keydown(function(e){
       // alert('called');
        if(e.ctrlKey && (e.which == 83)) {
            e.preventDefault();
            //alert('Ctrl+S');
            $('#sform_submit').trigger('click');
            return false;
        }
    });
});