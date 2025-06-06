function enviarMensagem() {
    console.log("Botão clicado!");
    event.preventDefault();
    const nome = document.getElementById("nome").value;
    const mensagem = document.getElementById("mensagem").value;
    const texto = `Olá, meu nome é ${nome}. ${mensagem}`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=554499907886&text=${encodeURIComponent(texto)}`;
    window.open(whatsappUrl, '_blank');
    ;

}

const troca = document.getElementById("troca-idioma");

function traduzir(lang) {
    fetch(`json/lang/${lang}.json`)
        .then(res => res.json())
        .then(data => {
            document.querySelectorAll("[data-i18n]").forEach(el => {
                const key = el.getAttribute("data-i18n");
                if (data[key]) {
                    el.textContent = data[key];
                }
            });
        });
}

troca.addEventListener("change", e => traduzir(e.target.value));
traduzir("pt");


const repositorios = document.querySelector(".repositorios");
function getApiGithub() {
    fetch("https://api.github.com/users/ClaudirFantuci/repos")
        .then(async (res) => {
            if (!res.ok) {
                throw new Error("Erro ao carregar os repositórios");
            }
            let dados = await res.json();
            console.log(dados);
            let teste = document.createElement("h2");
            teste.textContent = "Veja também minhas ultimas contribuições no github.";
            repositorios_grade.appendChild(teste);

            dados.slice(dados.length - 3, dados.length).map(item => {
                let projetos = document.createElement("a");
                projetos.href = item.html_url;
                projetos.target = "_blank";
                projetos.innerHTML = `
                <section class="repositorios_card">
                    <div class="repositorios_card_interno_esquerdo">
                        <h1 class="titulo-repositorio">${item.name}</h1>
                        <p class="url-repositorio">${item.html_url}</p>
                    </div>
                    <div class="repositorios_card_interno_direito">
                        <p class="ano">${Intl.DateTimeFormat("pt-BR").format(new Date(item.created_at))}</p>
                        <p class="linguagem">${item.language}</p>
                    </div>
                </section>`;
                repositorios.appendChild(projetos);
            });
        });
}
getApiGithub();

