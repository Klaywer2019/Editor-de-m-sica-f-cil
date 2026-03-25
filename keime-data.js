// O Cérebro do Keime - Banco de Dados Expandido (Versão Mentor Gemini)
const keimeConhecimento = {
    // Gírias de rua e vivência (Brasil)
    girias_br: [
        "progresso", "vivência", "foco no milhão", "visão de cria", 
        "na régua", "sem neurose", "corre", "malote", "as nota voando",
        "papo de visão", "frequência alta", "de ponta a ponta", "no sapatinho"
    ],
    
    // Estética e Lifestyle (Gringa)
    estetica_en: [
        "lifestyle", "hype", "dripping", "cash", "ice on my neck", 
        "mainstage", "blessed", "real trap", "no cap", "top tier",
        "making history", "gold medal vibe", "no limits"
    ],
    
    // Conexões de autoridade que o Mestre ensinou
    autoridade: [
        "sou gigante", "legado imortal", "imparável no game", 
        "protagonista da cena", "construindo o castelo", 
        "transformando suor em diamante"
    ],

    // Mixagem de idiomas para o verso fluir
    conexoes_mix: [
        { br: "foco no sucesso", en: "keep the focus on success" },
        { br: "gelo no pescoço", en: "too much ice on me" },
        { br: "venci na vida", en: "now I'm winning" },
        { br: "papo reto", en: "real talk" },
        { br: "seguindo o plano", en: "following the plan" },
        { br: "sem olhar pra trás", en: "never looking back" }
    ],

    // Temas para profundidade e hype
    temas_profundos: ["cicatrizes", "superação", "origem", "família", "lealdade", "fé", "raízes"],
    temas_hype: ["revoada", "baile", "sete cordas", "luxo", "ostentação", "topo do mundo"]
};

// Função para o Keime sortear conhecimento (com inteligência de reserva)
function puxarInspiracao(tipo) {
    const lista = keimeConhecimento[tipo];
    if (!lista) return "visão"; // Fallback para não dar erro
    return lista[Math.floor(Math.random() * lista.length)];
}

// Nova função que o Mestre ensinou: Mistura Bilíngue Aleatória
function misturarIdiomas() {
    const conexao = keimeConhecimento.conexoes_mix[Math.floor(Math.random() * keimeConhecimento.conexoes_mix.length)];
    const chance = Math.random();
    // 50% de chance de vir em PT ou EN pra dar variedade
    return chance > 0.5 ? `${conexao.br} ... ${keimeConhecimento.estetica_en[0]}` : `${conexao.en} ... ${keimeConhecimento.girias_br[0]}`;
}
