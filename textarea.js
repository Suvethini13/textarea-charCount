var textarea = document.getElementById("text-input")
var charcount = document.getElementById("char-count")
var maxchar = 200

textarea.addEventListener("input",function(){
    var currentChar = textarea.value.length
    charcount.textContent = currentChar

    if(currentChar >= maxchar)
    {
        textarea.classList.add("limit-reached")
    }
    else{
        textarea.classList.remove("limit-reached")
    }
})