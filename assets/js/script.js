var saveBtn = document.getElementsByClassName("saveBtn");
var description = $(".description");
var currentHour = moment().hours();

$(saveBtn).click(function(){
    var input = $(this).siblings(".description").val()
    var id = $(this).parent().attr("id")
    localStorage.setItem(id, input)
})

$(".time-block").each(function(){
    var id = $(this).attr("id")
    var item = localStorage.getItem(id)
    $(this).find (description).val(item)
    if(id>currentHour) {
        $(this).addClass("future")
    }else if(id === currentHour){
        $(this).addClass("present")
    }else {
        $(this).addClass("past")
    }
})