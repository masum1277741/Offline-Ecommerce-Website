function search() {
    let filter = document.getElementById('find').value.toUpperCase();
    let items = document.querySelectorAll('.box');
    
    for (var i = 0; i < items.length; i++) {
        let titleElement = items[i].querySelector('p');
        let title = titleElement.innerHTML || titleElement.innerText || titleElement.textContent;
        
        if (title.toUpperCase().indexOf(filter) > -1) {
            items[i].style.display = "";
        } else {
            items[i].style.display = "none";
        }
    }
}