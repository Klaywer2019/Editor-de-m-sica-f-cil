// O Cérebro do Keime - Banco de Dados Expandido
const keimeConhecimento = {
    girias_br: ["progresso", "vivência", "foco no milhão", "visão de cria", "na régua", "sem neurose", "corre", "malote", "as nota voando"],
    estetica_en: ["lifestyle", "hype", "dripping", "cash", "ice on my neck", "mainstage", "blessed", "real trap", "no cap"],
    
    conexoes_mix: [
        { br: "foco no sucesso", en: "keep the focus on success" },
        { br: "gelo no pescoço", en: "too much ice on me" },
        { br: "venci na vida", en: "now I'm winning" },
        { br: "papo reto", en: "real talk" }
    ],

    // Milhares de palavras podem entrar aqui depois...
    temas_profundos: ["cicatrizes", "superação", "origem", "família", "lealdade", "fé"],
    temas_hype: ["revoada", "baile", "sete cordas", "luxo", "ostentação"]
};

// Função para o Keime sortear conhecimento
function puxarInspiracao(tipo) {
    const lista = keimeConhecimento[tipo];
    return lista[Math.floor(Math.random() * lista.length)];
}
