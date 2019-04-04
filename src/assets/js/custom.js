$(document).ready(function () {
    $('#dtBasicExample').DataTable();
    $('.dataTables_length').addClass('bs-select');
   });
   

   $(document).ready( function(){
    $('#toggle-button').click( function() {
        var toggleWidth = $("#toggle").width() == 100 ? "200px" : "100px";
        $('#toggle').animate({ width: toggleWidth });
    });
});