function addingEventListener() {
    let input = document.getElementById("input")
        input.addEventListener("click", clickAlert)

        function clickAlert (){
            alert('I was clicked')
        }
}

addingEventListener();