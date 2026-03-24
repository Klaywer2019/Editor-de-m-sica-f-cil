// conhecimento.js
const dicionarioMix = {
    termos: ["no cap", "lifestyle", "hype", "real trap", "dripping"],
    conexoes: ["na batida", "no topo", "vivendo a fase", "sem limite"]
};

function misturarIdiomas() {
    const termo = dicionarioMix.termos[Math.floor(Math.random() * dicionarioMix.termos.length)];
    const conexao = dicionarioMix.conexoes[Math.floor(Math.random() * dicionarioMix.conexoes.length)];
    return `${conexao} ... ${termo}`;
}
