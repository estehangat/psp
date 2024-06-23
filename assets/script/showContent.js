function showContent(id) {
    var contents = document.querySelectorAll('.content');
    contents.forEach(function(content) {
        content.classList.add('hidden');
    });
    document.getElementById(id).classList.remove('hidden');
}