
// função para as regras
function rules(){
    let container_a = document.getElementById('container-a');
    let container_b = document.getElementById('container-b');
    let img = document.getElementById('img');
    let oscar_p = document.getElementById('oscar-p');
    let rules = document.getElementById('rules');

    container_a.style.display = 'none';
    container_b.style.display = 'none';

    oscar_p.style.display = 'none';
    img.style.display = 'none';
    rules.style.display = 'block';  
}

function ranking(){
    window.location.href = "/ranking.html"
}
