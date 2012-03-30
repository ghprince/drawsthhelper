function wordfinder()
{
    var wordlength=$("#wordlength").val();
    var letters=$("#letters").val().toLowerCase();
    $("#result").html("Loading...");
    $.post('guess', {letters: letters, length: wordlength}, function(data) {
        $("#result").empty().append($(data).filter("#result_table"));
        if ($("#result_table").html().length <= 2) {
            $("#result").html("Sorry, no result found.<br />对不起，没猜出来(′・ω・`)");
        }
        $("#counter").empty().append($(data).filter("#result_counter"));
    });
}