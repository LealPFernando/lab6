
$("#lista").on("click", ".butc", function(e){
    e.preventDefault()
    console.log("CK")
    $(this).parent().parent().toggleClass('line')
})

$("#lista").on("click", ".butd", function(e){
    e.preventDefault()
    console.log("D")
    $(this).parent().parent().parent().remove()
})

$("#button").on("click", function(e){
    e.preventDefault()
    var input = $("#input").val()
    console.log(input)
    $("ul").append(`<li> <div id="texto"> </div>${input} <div id="botones"><button class="butc" type="submit" id="check">check</button><button class="butd" type="submit" id="delete">delete</button></div></li>`)

})
