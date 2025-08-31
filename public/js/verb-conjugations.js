// Portuguese Verb Conjugations Database
const verbConjugations = [
    {
        infinitive: "ir",
        english: "to go",
        type: "irregular",
        difficulty: "beginner",
        conjugations: {
            presente: {
                eu: "vou",
                voce_ele_ela: "vai",
                agente: "vai",
                nos: "vamos",
                voces_eles: "vão"
            },
            preterito: {
                eu: "fui",
                voce_ele_ela: "foi",
                agente: "foi", 
                nos: "fomos",
                voces_eles: "foram"
            },
            imperfeito: {
                eu: "ia",
                voce_ele_ela: "ia",
                agente: "ia",
                nos: "íamos", 
                voces_eles: "iam"
            },
            futuro: {
                eu: "irei",
                voce_ele_ela: "irá",
                agente: "vai",
                nos: "iremos",
                voces_eles: "irão"
            }
        },
        examples: {
            presente: "Eu vou ao trabalho todos os dias.",
            preterito: "Ontem eu fui ao cinema.",
            imperfeito: "Quando era criança, eu ia à praia no verão.",
            futuro: "Amanhã eu irei visitar minha avó."
        }
    },
    {
        infinitive: "ser",
        english: "to be",
        type: "irregular", 
        difficulty: "beginner",
        conjugations: {
            presente: {
                eu: "sou",
                voce_ele_ela: "é",
                agente: "é",
                nos: "somos",
                voces_eles: "são"
            },
            preterito: {
                eu: "fui",
                voce_ele_ela: "foi",
                agente: "foi",
                nos: "fomos",
                voces_eles: "foram"
            },
            imperfeito: {
                eu: "era",
                voce_ele_ela: "era",
                agente: "era",
                nos: "éramos",
                voces_eles: "eram"
            },
            futuro: {
                eu: "serei",
                voce_ele_ela: "será",
                agente: "vai ser",
                nos: "seremos",
                voces_eles: "serão"
            }
        },
        examples: {
            presente: "Eu sou professor.",
            preterito: "Ela foi muito gentil comigo.",
            imperfeito: "Ele era meu melhor amigo.",
            futuro: "Você será um grande médico."
        }
    },
    {
        infinitive: "estar",
        english: "to be (temporary state)",
        type: "irregular",
        difficulty: "beginner", 
        conjugations: {
            presente: {
                eu: "estou",
                voce_ele_ela: "está",
                agente: "está",
                nos: "estamos",
                voces_eles: "estão"
            },
            preterito: {
                eu: "estive",
                voce_ele_ela: "esteve",
                agente: "esteve",
                nos: "estivemos",
                voces_eles: "estiveram"
            },
            imperfeito: {
                eu: "estava",
                voce_ele_ela: "estava",
                agente: "estava",
                nos: "estávamos",
                voces_eles: "estavam"
            },
            futuro: {
                eu: "estarei",
                voce_ele_ela: "estará",
                agente: "vai estar",
                nos: "estaremos",
                voces_eles: "estarão"
            }
        },
        examples: {
            presente: "Eu estou feliz hoje.",
            preterito: "Ontem eu estive no hospital.",
            imperfeito: "Ela estava estudando quando cheguei.",
            futuro: "Amanhã estarei em casa."
        }
    },
    {
        infinitive: "ter",
        english: "to have",
        type: "irregular",
        difficulty: "beginner",
        conjugations: {
            presente: {
                eu: "tenho",
                voce_ele_ela: "tem",
                agente: "tem",
                nos: "temos",
                voces_eles: "têm"
            },
            preterito: {
                eu: "tive",
                voce_ele_ela: "teve",
                agente: "teve",
                nos: "tivemos",
                voces_eles: "tiveram"
            },
            imperfeito: {
                eu: "tinha",
                voce_ele_ela: "tinha",
                agente: "tinha",
                nos: "tínhamos",
                voces_eles: "tinham"
            },
            futuro: {
                eu: "terei",
                voce_ele_ela: "terá",
                agente: "vai ter",
                nos: "teremos",
                voces_eles: "terão"
            }
        },
        examples: {
            presente: "Eu tenho dois irmãos.",
            preterito: "Ontem eu tive uma reunião importante.",
            imperfeito: "Quando era jovem, eu tinha muitos sonhos.",
            futuro: "No próximo ano terei mais experiência."
        }
    },
    {
        infinitive: "fazer",
        english: "to do/make",
        type: "irregular",
        difficulty: "beginner",
        conjugations: {
            presente: {
                eu: "faço",
                voce_ele_ela: "faz",
                agente: "faz",
                nos: "fazemos",
                voces_eles: "fazem"
            },
            preterito: {
                eu: "fiz",
                voce_ele_ela: "fez",
                agente: "fez",
                nos: "fizemos",
                voces_eles: "fizeram"
            },
            imperfeito: {
                eu: "fazia",
                voce_ele_ela: "fazia",
                agente: "fazia",
                nos: "fazíamos",
                voces_eles: "faziam"
            },
            futuro: {
                eu: "farei",
                voce_ele_ela: "fará",
                agente: "vai fazer",
                nos: "faremos",
                voces_eles: "farão"
            }
        },
        examples: {
            presente: "Eu faço exercícios todos os dias.",
            preterito: "Ontem eu fiz o jantar.",
            imperfeito: "Ele sempre fazia as tarefas com cuidado.",
            futuro: "Amanhã farei uma surpresa para ela."
        }
    },
    {
        infinitive: "dizer",
        english: "to say/tell",
        type: "irregular",
        difficulty: "intermediate",
        conjugations: {
            presente: {
                eu: "digo",
                voce_ele_ela: "diz",
                agente: "diz",
                nos: "dizemos",
                voces_eles: "dizem"
            },
            preterito: {
                eu: "disse",
                voce_ele_ela: "disse",
                agente: "disse",
                nos: "dissemos",
                voces_eles: "disseram"
            },
            imperfeito: {
                eu: "dizia",
                voce_ele_ela: "dizia",
                agente: "dizia",
                nos: "dizíamos",
                voces_eles: "diziam"
            },
            futuro: {
                eu: "direi",
                voce_ele_ela: "dirá",
                agente: "vai dizer",
                nos: "diremos",
                voces_eles: "dirão"
            }
        },
        examples: {
            presente: "Eu sempre digo a verdade.",
            preterito: "Ela disse que viria hoje.",
            imperfeito: "Minha mãe sempre dizia para estudar.",
            futuro: "Eu direi tudo amanhã."
        }
    },
    {
        infinitive: "falar",
        english: "to speak/talk",
        type: "regular",
        difficulty: "beginner",
        conjugations: {
            presente: {
                eu: "falo",
                voce_ele_ela: "fala",
                agente: "fala",
                nos: "falamos",
                voces_eles: "falam"
            },
            preterito: {
                eu: "falei",
                voce_ele_ela: "falou",
                agente: "falou",
                nos: "falamos",
                voces_eles: "falaram"
            },
            imperfeito: {
                eu: "falava",
                voce_ele_ela: "falava",
                agente: "falava",
                nos: "falávamos",
                voces_eles: "falavam"
            },
            futuro: {
                eu: "falarei",
                voce_ele_ela: "falará",
                agente: "vai falar",
                nos: "falaremos",
                voces_eles: "falarão"
            }
        },
        examples: {
            presente: "Eu falo português e inglês.",
            preterito: "Ontem falei com meu chefe.",
            imperfeito: "Quando era criança, eu falava muito.",
            futuro: "Amanhã falarei com o médico."
        }
    },
    {
        infinitive: "comer",
        english: "to eat",
        type: "regular",
        difficulty: "beginner",
        conjugations: {
            presente: {
                eu: "como",
                voce_ele_ela: "come",
                agente: "come",
                nos: "comemos",
                voces_eles: "comem"
            },
            preterito: {
                eu: "comi",
                voce_ele_ela: "comeu",
                agente: "comeu",
                nos: "comemos",
                voces_eles: "comeram"
            },
            imperfeito: {
                eu: "comia",
                voce_ele_ela: "comia",
                agente: "comia",
                nos: "comíamos",
                voces_eles: "comiam"
            },
            futuro: {
                eu: "comerei",
                voce_ele_ela: "comerá",
                agente: "vai comer",
                nos: "comeremos",
                voces_eles: "comerão"
            }
        },
        examples: {
            presente: "Eu como frutas todos os dias.",
            preterito: "Ontem comi pizza no jantar.",
            imperfeito: "Quando era pequeno, eu comia muito doce.",
            futuro: "Amanhã comerei no restaurante novo."
        }
    },
    {
        infinitive: "viver",
        english: "to live",
        type: "regular",
        difficulty: "beginner",
        conjugations: {
            presente: {
                eu: "vivo",
                voce_ele_ela: "vive",
                agente: "vive",
                nos: "vivemos",
                voces_eles: "vivem"
            },
            preterito: {
                eu: "vivi",
                voce_ele_ela: "viveu",
                agente: "viveu",
                nos: "vivemos",
                voces_eles: "viveram"
            },
            imperfeito: {
                eu: "vivia",
                voce_ele_ela: "vivia",
                agente: "vivia",
                nos: "vivíamos",
                voces_eles: "viviam"
            },
            futuro: {
                eu: "viverei",
                voce_ele_ela: "viverá",
                agente: "vai viver",
                nos: "viveremos",
                voces_eles: "viverão"
            }
        },
        examples: {
            presente: "Eu vivo no Brasil.",
            preterito: "Ele viveu na França por dois anos.",
            imperfeito: "Nós vivíamos felizes naquela casa.",
            futuro: "Um dia viverei perto do mar."
        }
    },
    {
        infinitive: "poder",
        english: "to be able to/can",
        type: "irregular",
        difficulty: "intermediate",
        conjugations: {
            presente: {
                eu: "posso",
                voce_ele_ela: "pode",
                agente: "pode",
                nos: "podemos",
                voces_eles: "podem"
            },
            preterito: {
                eu: "pude",
                voce_ele_ela: "pôde",
                agente: "pôde",
                nos: "pudemos",
                voces_eles: "puderam"
            },
            imperfeito: {
                eu: "podia",
                voce_ele_ela: "podia",
                agente: "podia",
                nos: "podíamos",
                voces_eles: "podiam"
            },
            futuro: {
                eu: "poderei",
                voce_ele_ela: "poderá",
                agente: "vai poder",
                nos: "poderemos",
                voces_eles: "poderão"
            }
        },
        examples: {
            presente: "Eu posso ajudar você.",
            preterito: "Ontem eu pude terminar o trabalho.",
            imperfeito: "Quando era jovem, eu podia correr muito.",
            futuro: "Amanhã poderei sair mais cedo."
        }
    },
    {
        infinitive: "estudar",
        english: "to study",
        type: "regular",
        difficulty: "beginner",
        conjugations: {
            presente: {
                eu: "estudo",
                voce_ele_ela: "estuda",
                agente: "estuda",
                nos: "estudamos",
                voces_eles: "estudam"
            },
            preterito: {
                eu: "estudei",
                voce_ele_ela: "estudou",
                agente: "estudou",
                nos: "estudamos",
                voces_eles: "estudaram"
            },
            imperfeito: {
                eu: "estudava",
                voce_ele_ela: "estudava",
                agente: "estudava",
                nos: "estudávamos",
                voces_eles: "estudavam"
            },
            futuro: {
                eu: "estudarei",
                voce_ele_ela: "estudará",
                agente: "vai estudar",
                nos: "estudaremos",
                voces_eles: "estudarão"
            }
        },
        examples: {
            presente: "Eu estudo português todos os dias.",
            preterito: "Ontem estudei para a prova.",
            imperfeito: "Quando era jovem, eu estudava muito.",
            futuro: "Amanhã estudarei matemática."
        }
    },
    {
        infinitive: "trabalhar",
        english: "to work",
        type: "regular",
        difficulty: "beginner",
        conjugations: {
            presente: {
                eu: "trabalho",
                voce_ele_ela: "trabalha",
                agente: "trabalha",
                nos: "trabalhamos",
                voces_eles: "trabalham"
            },
            preterito: {
                eu: "trabalhei",
                voce_ele_ela: "trabalhou",
                agente: "trabalhou",
                nos: "trabalhamos",
                voces_eles: "trabalharam"
            },
            imperfeito: {
                eu: "trabalhava",
                voce_ele_ela: "trabalhava",
                agente: "trabalhava",
                nos: "trabalhávamos",
                voces_eles: "trabalhavam"
            },
            futuro: {
                eu: "trabalharei",
                voce_ele_ela: "trabalhará",
                agente: "vai trabalhar",
                nos: "trabalharemos",
                voces_eles: "trabalharão"
            }
        },
        examples: {
            presente: "Eu trabalho no centro da cidade.",
            preterito: "Ontem trabalhei até tarde.",
            imperfeito: "Ele trabalhava numa empresa grande.",
            futuro: "Amanhã trabalharei em casa."
        }
    },
    {
        infinitive: "acordar",
        english: "to wake up",
        type: "regular",
        difficulty: "beginner",
        conjugations: {
            presente: {
                eu: "acordo",
                voce_ele_ela: "acorda",
                agente: "acorda",
                nos: "acordamos",
                voces_eles: "acordam"
            },
            preterito: {
                eu: "acordei",
                voce_ele_ela: "acordou",
                agente: "acordou",
                nos: "acordamos",
                voces_eles: "acordaram"
            },
            imperfeito: {
                eu: "acordava",
                voce_ele_ela: "acordava",
                agente: "acordava",
                nos: "acordávamos",
                voces_eles: "acordavam"
            },
            futuro: {
                eu: "acordarei",
                voce_ele_ela: "acordará",
                agente: "vai acordar",
                nos: "acordaremos",
                voces_eles: "acordarão"
            }
        },
        examples: {
            presente: "Eu acordo às seis da manhã.",
            preterito: "Ontem acordei muito cedo.",
            imperfeito: "Quando era criança, eu acordava tarde.",
            futuro: "Amanhã acordarei mais cedo."
        }
    },
    {
        infinitive: "atrair",
        english: "to attract",
        type: "irregular",
        difficulty: "intermediate",
        conjugations: {
            presente: {
                eu: "atraio",
                voce_ele_ela: "atrai",
                agente: "atrai",
                nos: "atraímos",
                voces_eles: "atraem"
            },
            preterito: {
                eu: "atraí",
                voce_ele_ela: "atraiu",
                agente: "atraiu",
                nos: "atraímos",
                voces_eles: "atraíram"
            },
            imperfeito: {
                eu: "atraía",
                voce_ele_ela: "atraía",
                agente: "atraía",
                nos: "atraíamos",
                voces_eles: "atraíam"
            },
            futuro: {
                eu: "atrairei",
                voce_ele_ela: "atrairá",
                agente: "vai atrair",
                nos: "atrairemos",
                voces_eles: "atrairão"
            }
        },
        examples: {
            presente: "As flores atraem as abelhas.",
            preterito: "O evento atraiu muitas pessoas.",
            imperfeito: "Aquele lugar sempre atraía turistas.",
            futuro: "Esta promoção atrairá novos clientes."
        }
    },
    {
        infinitive: "beber",
        english: "to drink",
        type: "regular",
        difficulty: "beginner",
        conjugations: {
            presente: {
                eu: "bebo",
                voce_ele_ela: "bebe",
                agente: "bebe",
                nos: "bebemos",
                voces_eles: "bebem"
            },
            preterito: {
                eu: "bebi",
                voce_ele_ela: "bebeu",
                agente: "bebeu",
                nos: "bebemos",
                voces_eles: "beberam"
            },
            imperfeito: {
                eu: "bebia",
                voce_ele_ela: "bebia",
                agente: "bebia",
                nos: "bebíamos",
                voces_eles: "bebiam"
            },
            futuro: {
                eu: "beberei",
                voce_ele_ela: "beberá",
                agente: "vai beber",
                nos: "beberemos",
                voces_eles: "beberão"
            }
        },
        examples: {
            presente: "Eu bebo água todos os dias.",
            preterito: "Ontem bebi muito café.",
            imperfeito: "Quando era criança, eu bebia leite.",
            futuro: "Amanhã beberei suco de laranja."
        }
    },
    {
        infinitive: "aprender",
        english: "to learn",
        type: "regular",
        difficulty: "beginner",
        conjugations: {
            presente: {
                eu: "aprendo",
                voce_ele_ela: "aprende",
                agente: "aprende",
                nos: "aprendemos",
                voces_eles: "aprendem"
            },
            preterito: {
                eu: "aprendi",
                voce_ele_ela: "aprendeu",
                agente: "aprendeu",
                nos: "aprendemos",
                voces_eles: "aprenderam"
            },
            imperfeito: {
                eu: "aprendia",
                voce_ele_ela: "aprendia",
                agente: "aprendia",
                nos: "aprendíamos",
                voces_eles: "aprendiam"
            },
            futuro: {
                eu: "aprenderei",
                voce_ele_ela: "aprenderá",
                agente: "vai aprender",
                nos: "aprenderemos",
                voces_eles: "aprenderão"
            }
        },
        examples: {
            presente: "Eu aprendo português na escola.",
            preterito: "Ontem aprendi uma palavra nova.",
            imperfeito: "Quando era jovem, eu aprendia rápido.",
            futuro: "Amanhã aprenderei sobre história."
        }
    },
    {
        infinitive: "dormir",
        english: "to sleep",
        type: "irregular",
        difficulty: "beginner",
        conjugations: {
            presente: {
                eu: "durmo",
                voce_ele_ela: "dorme",
                agente: "dorme",
                nos: "dormimos",
                voces_eles: "dormem"
            },
            preterito: {
                eu: "dormi",
                voce_ele_ela: "dormiu",
                agente: "dormiu",
                nos: "dormimos",
                voces_eles: "dormiram"
            },
            imperfeito: {
                eu: "dormia",
                voce_ele_ela: "dormia",
                agente: "dormia",
                nos: "dormíamos",
                voces_eles: "dormiam"
            },
            futuro: {
                eu: "dormirei",
                voce_ele_ela: "dormirá",
                agente: "vai dormir",
                nos: "dormiremos",
                voces_eles: "dormirão"
            }
        },
        examples: {
            presente: "Eu durmo oito horas por noite.",
            preterito: "Ontem dormi muito bem.",
            imperfeito: "Quando era bebê, eu dormia muito.",
            futuro: "Hoje dormirei cedo."
        }
    },
    {
        infinitive: "querer",
        english: "to want",
        type: "irregular",
        difficulty: "beginner",
        conjugations: {
            presente: {
                eu: "quero",
                voce_ele_ela: "quer",
                agente: "quer",
                nos: "queremos",
                voces_eles: "querem"
            },
            preterito: {
                eu: "quis",
                voce_ele_ela: "quis",
                agente: "quis",
                nos: "quisemos",
                voces_eles: "quiseram"
            },
            imperfeito: {
                eu: "queria",
                voce_ele_ela: "queria",
                agente: "queria",
                nos: "queríamos",
                voces_eles: "queriam"
            },
            futuro: {
                eu: "quererei",
                voce_ele_ela: "quererá",
                agente: "vai querer",
                nos: "quereremos",
                voces_eles: "quererão"
            }
        },
        examples: {
            presente: "Eu quero aprender português.",
            preterito: "Ontem quis sair, mas choveu.",
            imperfeito: "Quando era criança, eu queria ser médico.",
            futuro: "Amanhã quererei descansar."
        }
    },
    {
        infinitive: "saber",
        english: "to know",
        type: "irregular",
        difficulty: "intermediate",
        conjugations: {
            presente: {
                eu: "sei",
                voce_ele_ela: "sabe",
                agente: "sabe",
                nos: "sabemos",
                voces_eles: "sabem"
            },
            preterito: {
                eu: "soube",
                voce_ele_ela: "soube",
                agente: "soube",
                nos: "soubemos",
                voces_eles: "souberam"
            },
            imperfeito: {
                eu: "sabia",
                voce_ele_ela: "sabia",
                agente: "sabia",
                nos: "sabíamos",
                voces_eles: "sabiam"
            },
            futuro: {
                eu: "saberei",
                voce_ele_ela: "saberá",
                agente: "vai saber",
                nos: "saberemos",
                voces_eles: "saberão"
            }
        },
        examples: {
            presente: "Eu sei falar português.",
            preterito: "Ontem soube da notícia.",
            imperfeito: "Eu não sabia que você morava aqui.",
            futuro: "Amanhã saberei o resultado."
        }
    },
    {
        infinitive: "dar",
        english: "to give",
        type: "irregular",
        difficulty: "intermediate",
        conjugations: {
            presente: {
                eu: "dou",
                voce_ele_ela: "dá",
                agente: "dá",
                nos: "damos",
                voces_eles: "dão"
            },
            preterito: {
                eu: "dei",
                voce_ele_ela: "deu",
                agente: "deu",
                nos: "demos",
                voces_eles: "deram"
            },
            imperfeito: {
                eu: "dava",
                voce_ele_ela: "dava",
                agente: "dava",
                nos: "dávamos",
                voces_eles: "davam"
            },
            futuro: {
                eu: "darei",
                voce_ele_ela: "dará",
                agente: "vai dar",
                nos: "daremos",
                voces_eles: "darão"
            }
        },
        examples: {
            presente: "Eu dou aulas de português.",
            preterito: "Ontem dei um presente para ela.",
            imperfeito: "Minha avó sempre dava conselhos.",
            futuro: "Amanhã darei uma resposta."
        }
    },
    {
        infinitive: "ver",
        english: "to see",
        type: "irregular",
        difficulty: "beginner",
        conjugations: {
            presente: {
                eu: "vejo",
                voce_ele_ela: "vê",
                agente: "vê",
                nos: "vemos",
                voces_eles: "veem"
            },
            preterito: {
                eu: "vi",
                voce_ele_ela: "viu",
                agente: "viu",
                nos: "vimos",
                voces_eles: "viram"
            },
            imperfeito: {
                eu: "via",
                voce_ele_ela: "via",
                agente: "via",
                nos: "víamos",
                voces_eles: "viam"
            },
            futuro: {
                eu: "verei",
                voce_ele_ela: "verá",
                agente: "vai ver",
                nos: "veremos",
                voces_eles: "verão"
            }
        },
        examples: {
            presente: "Eu vejo um pássaro na árvore.",
            preterito: "Ontem vi um filme muito bom.",
            imperfeito: "Quando era criança, eu via desenhos.",
            futuro: "Amanhã verei meus amigos."
        }
    },
    {
        infinitive: "abrir",
        english: "to open",
        type: "irregular",
        difficulty: "beginner",
        conjugations: {
            presente: {
                eu: "abro",
                voce_ele_ela: "abre",
                agente: "abre",
                nos: "abrimos",
                voces_eles: "abrem"
            },
            preterito: {
                eu: "abri",
                voce_ele_ela: "abriu",
                agente: "abriu",
                nos: "abrimos",
                voces_eles: "abriram"
            },
            imperfeito: {
                eu: "abria",
                voce_ele_ela: "abria",
                agente: "abria",
                nos: "abríamos",
                voces_eles: "abriam"
            },
            futuro: {
                eu: "abrirei",
                voce_ele_ela: "abrirá",
                agente: "vai abrir",
                nos: "abriremos",
                voces_eles: "abrirão"
            }
        },
        examples: {
            presente: "Eu abro a porta para você.",
            preterito: "Ontem abri todas as janelas.",
            imperfeito: "Ele sempre abria a loja cedo.",
            futuro: "Amanhã abriremos o novo restaurante."
        }
    },
    {
        infinitive: "partir",
        english: "to leave/depart",
        type: "regular",
        difficulty: "intermediate",
        conjugations: {
            presente: {
                eu: "parto",
                voce_ele_ela: "parte",
                agente: "parte",
                nos: "partimos",
                voces_eles: "partem"
            },
            preterito: {
                eu: "parti",
                voce_ele_ela: "partiu",
                agente: "partiu",
                nos: "partimos",
                voces_eles: "partiram"
            },
            imperfeito: {
                eu: "partia",
                voce_ele_ela: "partia",
                agente: "partia",
                nos: "partíamos",
                voces_eles: "partiam"
            },
            futuro: {
                eu: "partirei",
                voce_ele_ela: "partirá",
                agente: "vai partir",
                nos: "partiremos",
                voces_eles: "partirão"
            }
        },
        examples: {
            presente: "Eu parto para o trabalho às oito.",
            preterito: "Ontem parti de casa muito cedo.",
            imperfeito: "Quando morava lá, eu partia sempre tarde.",
            futuro: "Amanhã partirei para São Paulo."
        }
    },
    {
        infinitive: "morar",
        english: "to live/reside",
        type: "regular",
        difficulty: "beginner",
        conjugations: {
            presente: {
                eu: "moro",
                voce_ele_ela: "mora",
                agente: "mora",
                nos: "moramos",
                voces_eles: "moram"
            },
            preterito: {
                eu: "morei",
                voce_ele_ela: "morou",
                agente: "morou",
                nos: "moramos",
                voces_eles: "moraram"
            },
            imperfeito: {
                eu: "morava",
                voce_ele_ela: "morava",
                agente: "morava",
                nos: "morávamos",
                voces_eles: "moravam"
            },
            futuro: {
                eu: "morarei",
                voce_ele_ela: "morará",
                agente: "vai morar",
                nos: "moraremos",
                voces_eles: "morarão"
            }
        },
        examples: {
            presente: "Eu moro em Belém.",
            preterito: "Morei em Londrina por cinco anos.",
            imperfeito: "Quando era criança, eu morava com meus avós.",
            futuro: "No futuro morarei numa casa maior."
        }
    },
    {
        infinitive: "correr",
        english: "to run",
        type: "regular",
        difficulty: "beginner",
        conjugations: {
            presente: {
                eu: "corro",
                voce_ele_ela: "corre",
                agente: "corre",
                nos: "corremos",
                voces_eles: "correm"
            },
            preterito: {
                eu: "corri",
                voce_ele_ela: "correu",
                agente: "correu",
                nos: "corremos",
                voces_eles: "correram"
            },
            imperfeito: {
                eu: "corria",
                voce_ele_ela: "corria",
                agente: "corria",
                nos: "corríamos",
                voces_eles: "corriam"
            },
            futuro: {
                eu: "correrei",
                voce_ele_ela: "correrá",
                agente: "vai correr",
                nos: "correremos",
                voces_eles: "correrão"
            }
        },
        examples: {
            presente: "Eu corro no parque toda manhã.",
            preterito: "Ontem corri cinco quilômetros.",
            imperfeito: "Quando era jovem, eu corria muito rápido.",
            futuro: "Amanhã correrei na maratona."
        }
    },
    {
        infinitive: "entender",
        english: "to understand",
        type: "regular",
        difficulty: "beginner",
        conjugations: {
            presente: {
                eu: "entendo",
                voce_ele_ela: "entende",
                agente: "entende",
                nos: "entendemos",
                voces_eles: "entendem"
            },
            preterito: {
                eu: "entendi",
                voce_ele_ela: "entendeu",
                agente: "entendeu",
                nos: "entendemos",
                voces_eles: "entenderam"
            },
            imperfeito: {
                eu: "entendia",
                voce_ele_ela: "entendia",
                agente: "entendia",
                nos: "entendíamos",
                voces_eles: "entendiam"
            },
            futuro: {
                eu: "entenderei",
                voce_ele_ela: "entenderá",
                agente: "vai entender",
                nos: "entenderemos",
                voces_eles: "entenderão"
            }
        },
        examples: {
            presente: "Eu entendo português bem.",
            preterito: "Finalmente entendi a explicação.",
            imperfeito: "Antes eu não entendia nada.",
            futuro: "Com o tempo você entenderá melhor."
        }
    },
    {
        infinitive: "chegar",
        english: "to arrive",
        type: "regular",
        difficulty: "beginner",
        conjugations: {
            presente: {
                eu: "chego",
                voce_ele_ela: "chega",
                agente: "chega",
                nos: "chegamos",
                voces_eles: "chegam"
            },
            preterito: {
                eu: "cheguei",
                voce_ele_ela: "chegou",
                agente: "chegou",
                nos: "chegamos",
                voces_eles: "chegaram"
            },
            imperfeito: {
                eu: "chegava",
                voce_ele_ela: "chegava",
                agente: "chegava",
                nos: "chegávamos",
                voces_eles: "chegavam"
            },
            futuro: {
                eu: "chegarei",
                voce_ele_ela: "chegará",
                agente: "vai chegar",
                nos: "chegaremos",
                voces_eles: "chegarão"
            }
        },
        examples: {
            presente: "Eu chego em casa às seis.",
            preterito: "Ontem cheguei atrasado.",
            imperfeito: "Ele sempre chegava pontualmente.",
            futuro: "Amanhã chegarei mais cedo."
        }
    },
    {
        infinitive: "sair",
        english: "to leave/go out",
        type: "irregular",
        difficulty: "beginner",
        conjugations: {
            presente: {
                eu: "saio",
                voce_ele_ela: "sai",
                agente: "sai",
                nos: "saímos",
                voces_eles: "saem"
            },
            preterito: {
                eu: "saí",
                voce_ele_ela: "saiu",
                agente: "saiu",
                nos: "saímos",
                voces_eles: "saíram"
            },
            imperfeito: {
                eu: "saía",
                voce_ele_ela: "saía",
                agente: "saía",
                nos: "saíamos",
                voces_eles: "saíam"
            },
            futuro: {
                eu: "sairei",
                voce_ele_ela: "sairá",
                agente: "vai sair",
                nos: "sairemos",
                voces_eles: "sairão"
            }
        },
        examples: {
            presente: "Eu saio de casa às sete.",
            preterito: "Ontem saí com meus amigos.",
            imperfeito: "Quando era solteiro, eu saía muito.",
            futuro: "Hoje sairei mais tarde."
        }
    },
    {
        infinitive: "comprar",
        english: "to buy",
        type: "regular",
        difficulty: "beginner",
        conjugations: {
            presente: {
                eu: "compro",
                voce_ele_ela: "compra",
                agente: "compra",
                nos: "compramos",
                voces_eles: "compram"
            },
            preterito: {
                eu: "comprei",
                voce_ele_ela: "comprou",
                agente: "comprou",
                nos: "compramos",
                voces_eles: "compraram"
            },
            imperfeito: {
                eu: "comprava",
                voce_ele_ela: "comprava",
                agente: "comprava",
                nos: "comprávamos",
                voces_eles: "compravam"
            },
            futuro: {
                eu: "comprarei",
                voce_ele_ela: "comprará",
                agente: "vai comprar",
                nos: "compraremos",
                voces_eles: "comprarão"
            }
        },
        examples: {
            presente: "Eu compro frutas no mercado.",
            preterito: "Ontem comprei um livro novo.",
            imperfeito: "Antes eu comprava tudo online.",
            futuro: "Amanhã comprarei um presente."
        }
    },
    {
        infinitive: "vender",
        english: "to sell",
        type: "regular",
        difficulty: "intermediate",
        conjugations: {
            presente: {
                eu: "vendo",
                voce_ele_ela: "vende",
                agente: "vende",
                nos: "vendemos",
                voces_eles: "vendem"
            },
            preterito: {
                eu: "vendi",
                voce_ele_ela: "vendeu",
                agente: "vendeu",
                nos: "vendemos",
                voces_eles: "venderam"
            },
            imperfeito: {
                eu: "vendia",
                voce_ele_ela: "vendia",
                agente: "vendia",
                nos: "vendíamos",
                voces_eles: "vendiam"
            },
            futuro: {
                eu: "venderei",
                voce_ele_ela: "venderá",
                agente: "vai vender",
                nos: "venderemos",
                voces_eles: "venderão"
            }
        },
        examples: {
            presente: "Eu vendo carros usados.",
            preterito: "Ontem vendi minha bicicleta.",
            imperfeito: "Meu pai vendia frutas na feira.",
            futuro: "No futuro venderei minha casa."
        }
    },
    {
        infinitive: "pôr",
        english: "to put/place",
        type: "irregular",
        difficulty: "intermediate",
        conjugations: {
            presente: {
                eu: "ponho",
                voce_ele_ela: "põe",
                agente: "põe",
                nos: "pomos",
                voces_eles: "põem"
            },
            preterito: {
                eu: "pus",
                voce_ele_ela: "pôs",
                agente: "pôs",
                nos: "pusemos",
                voces_eles: "puseram"
            },
            imperfeito: {
                eu: "punha",
                voce_ele_ela: "punha",
                agente: "punha",
                nos: "púnhamos",
                voces_eles: "punham"
            },
            futuro: {
                eu: "porei",
                voce_ele_ela: "porá",
                agente: "vai pôr",
                nos: "poremos",
                voces_eles: "porão"
            }
        },
        examples: {
            presente: "Eu ponho sal na comida.",
            preterito: "Ontem pus os livros na estante.",
            imperfeito: "Ela sempre punha açúcar no café.",
            futuro: "Amanhã porei tudo em ordem."
        }
    },
    {
        infinitive: "gostar",
        english: "to like",
        type: "regular",
        difficulty: "beginner",
        conjugations: {
            presente: {
                eu: "gosto",
                voce_ele_ela: "gosta",
                agente: "gosta",
                nos: "gostamos",
                voces_eles: "gostam"
            },
            preterito: {
                eu: "gostei",
                voce_ele_ela: "gostou",
                agente: "gostou",
                nos: "gostamos",
                voces_eles: "gostaram"
            },
            imperfeito: {
                eu: "gostava",
                voce_ele_ela: "gostava",
                agente: "gostava",
                nos: "gostávamos",
                voces_eles: "gostavam"
            },
            futuro: {
                eu: "gostarei",
                voce_ele_ela: "gostará",
                agente: "vai gostar",
                nos: "gostaremos",
                voces_eles: "gostarão"
            }
        },
        examples: {
            presente: "Eu gosto muito de música brasileira.",
            preterito: "Gostei muito do filme ontem.",
            imperfeito: "Quando era criança, eu gostava de brincar.",
            futuro: "Tenho certeza que você gostará da comida."
        }
    },
    {
        infinitive: "precisar",
        english: "to need",
        type: "regular",
        difficulty: "beginner",
        conjugations: {
            presente: {
                eu: "preciso",
                voce_ele_ela: "precisa",
                agente: "precisa",
                nos: "precisamos",
                voces_eles: "precisam"
            },
            preterito: {
                eu: "precisei",
                voce_ele_ela: "precisou",
                agente: "precisou",
                nos: "precisamos",
                voces_eles: "precisaram"
            },
            imperfeito: {
                eu: "precisava",
                voce_ele_ela: "precisava",
                agente: "precisava",
                nos: "precisávamos",
                voces_eles: "precisavam"
            },
            futuro: {
                eu: "precisarei",
                voce_ele_ela: "precisará",
                agente: "vai precisar",
                nos: "precisaremos",
                voces_eles: "precisarão"
            }
        },
        examples: {
            presente: "Eu preciso estudar mais português.",
            preterito: "Ontem precisei sair mais cedo.",
            imperfeito: "Antes eu precisava de ajuda com isso.",
            futuro: "Amanhã precisarei acordar cedo."
        }
    },
    {
        infinitive: "ficar",
        english: "to stay/remain/become",
        type: "regular",
        difficulty: "beginner",
        conjugations: {
            presente: {
                eu: "fico",
                voce_ele_ela: "fica",
                agente: "fica",
                nos: "ficamos",
                voces_eles: "ficam"
            },
            preterito: {
                eu: "fiquei",
                voce_ele_ela: "ficou",
                agente: "ficou",
                nos: "ficamos",
                voces_eles: "ficaram"
            },
            imperfeito: {
                eu: "ficava",
                voce_ele_ela: "ficava",
                agente: "ficava",
                nos: "ficávamos",
                voces_eles: "ficavam"
            },
            futuro: {
                eu: "ficarei",
                voce_ele_ela: "ficará",
                agente: "vai ficar",
                nos: "ficaremos",
                voces_eles: "ficarão"
            }
        },
        examples: {
            presente: "Eu fico em casa nos fins de semana.",
            preterito: "Fiquei muito feliz com a notícia.",
            imperfeito: "Ele sempre ficava nervoso antes das provas.",
            futuro: "Vou ficar aqui até você voltar."
        }
    },
    {
        infinitive: "andar",
        english: "to walk",
        type: "regular",
        difficulty: "beginner",
        conjugations: {
            presente: {
                eu: "ando",
                voce_ele_ela: "anda",
                agente: "anda",
                nos: "andamos",
                voces_eles: "andam"
            },
            preterito: {
                eu: "andei",
                voce_ele_ela: "andou",
                agente: "andou",
                nos: "andamos",
                voces_eles: "andaram"
            },
            imperfeito: {
                eu: "andava",
                voce_ele_ela: "andava",
                agente: "andava",
                nos: "andávamos",
                voces_eles: "andavam"
            },
            futuro: {
                eu: "andarei",
                voce_ele_ela: "andará",
                agente: "vai andar",
                nos: "andaremos",
                voces_eles: "andarão"
            }
        },
        examples: {
            presente: "Eu ando no parque toda manhã.",
            preterito: "Ontem andei muito pela cidade.",
            imperfeito: "Quando era jovem, eu andava de bicicleta.",
            futuro: "Amanhã andarei até o trabalho."
        }
    },
    {
        infinitive: "perguntar",
        english: "to ask",
        type: "regular",
        difficulty: "beginner",
        conjugations: {
            presente: {
                eu: "pergunto",
                voce_ele_ela: "pergunta",
                agente: "pergunta",
                nos: "perguntamos",
                voces_eles: "perguntam"
            },
            preterito: {
                eu: "perguntei",
                voce_ele_ela: "perguntou",
                agente: "perguntou",
                nos: "perguntamos",
                voces_eles: "perguntaram"
            },
            imperfeito: {
                eu: "perguntava",
                voce_ele_ela: "perguntava",
                agente: "perguntava",
                nos: "perguntávamos",
                voces_eles: "perguntavam"
            },
            futuro: {
                eu: "perguntarei",
                voce_ele_ela: "perguntará",
                agente: "vai perguntar",
                nos: "perguntaremos",
                voces_eles: "perguntarão"
            }
        },
        examples: {
            presente: "Eu sempre pergunto quando não entendo.",
            preterito: "Perguntei o caminho para o hotel.",
            imperfeito: "Ela sempre perguntava sobre você.",
            futuro: "Amanhã perguntarei ao professor."
        }
    },
    {
        infinitive: "responder",
        english: "to answer/respond",
        type: "regular",
        difficulty: "beginner",
        conjugations: {
            presente: {
                eu: "respondo",
                voce_ele_ela: "responde",
                agente: "responde",
                nos: "respondemos",
                voces_eles: "respondem"
            },
            preterito: {
                eu: "respondi",
                voce_ele_ela: "respondeu",
                agente: "respondeu",
                nos: "respondemos",
                voces_eles: "responderam"
            },
            imperfeito: {
                eu: "respondia",
                voce_ele_ela: "respondia",
                agente: "respondia",
                nos: "respondíamos",
                voces_eles: "respondiam"
            },
            futuro: {
                eu: "responderei",
                voce_ele_ela: "responderá",
                agente: "vai responder",
                nos: "responderemos",
                voces_eles: "responderão"
            }
        },
        examples: {
            presente: "Eu respondo todas as mensagens.",
            preterito: "Respondi o email ontem à noite.",
            imperfeito: "Ele nunca respondia rapidamente.",
            futuro: "Responderei sua pergunta amanhã."
        }
    },
    {
        infinitive: "encontrar",
        english: "to find/meet",
        type: "regular",
        difficulty: "beginner",
        conjugations: {
            presente: {
                eu: "encontro",
                voce_ele_ela: "encontra",
                agente: "encontra",
                nos: "encontramos",
                voces_eles: "encontram"
            },
            preterito: {
                eu: "encontrei",
                voce_ele_ela: "encontrou",
                agente: "encontrou",
                nos: "encontramos",
                voces_eles: "encontraram"
            },
            imperfeito: {
                eu: "encontrava",
                voce_ele_ela: "encontrava",
                agente: "encontrava",
                nos: "encontrávamos",
                voces_eles: "encontravam"
            },
            futuro: {
                eu: "encontrarei",
                voce_ele_ela: "encontrará",
                agente: "vai encontrar",
                nos: "encontraremos",
                voces_eles: "encontrarão"
            }
        },
        examples: {
            presente: "Eu encontro meus amigos no shopping.",
            preterito: "Encontrei minha carteira perdida.",
            imperfeito: "Sempre encontrava pessoas interessantes lá.",
            futuro: "Encontrarei você no aeroporto."
        }
    },
    {
        infinitive: "deixar",
        english: "to leave/let/allow",
        type: "regular",
        difficulty: "intermediate",
        conjugations: {
            presente: {
                eu: "deixo",
                voce_ele_ela: "deixa",
                agente: "deixa",
                nos: "deixamos",
                voces_eles: "deixam"
            },
            preterito: {
                eu: "deixei",
                voce_ele_ela: "deixou",
                agente: "deixou",
                nos: "deixamos",
                voces_eles: "deixaram"
            },
            imperfeito: {
                eu: "deixava",
                voce_ele_ela: "deixava",
                agente: "deixava",
                nos: "deixávamos",
                voces_eles: "deixavam"
            },
            futuro: {
                eu: "deixarei",
                voce_ele_ela: "deixará",
                agente: "vai deixar",
                nos: "deixaremos",
                voces_eles: "deixarão"
            }
        },
        examples: {
            presente: "Eu deixo as chaves na mesa.",
            preterito: "Deixei meu celular em casa.",
            imperfeito: "Minha mãe sempre deixava a porta aberta.",
            futuro: "Deixarei tudo organizado para você."
        }
    },
    {
        infinitive: "esperar",
        english: "to wait/hope/expect",
        type: "regular",
        difficulty: "beginner",
        conjugations: {
            presente: {
                eu: "espero",
                voce_ele_ela: "espera",
                agente: "espera",
                nos: "esperamos",
                voces_eles: "esperam"
            },
            preterito: {
                eu: "esperei",
                voce_ele_ela: "esperou",
                agente: "esperou",
                nos: "esperamos",
                voces_eles: "esperaram"
            },
            imperfeito: {
                eu: "esperava",
                voce_ele_ela: "esperava",
                agente: "esperava",
                nos: "esperávamos",
                voces_eles: "esperavam"
            },
            futuro: {
                eu: "esperarei",
                voce_ele_ela: "esperará",
                agente: "vai esperar",
                nos: "esperaremos",
                voces_eles: "esperarão"
            }
        },
        examples: {
            presente: "Eu espero o ônibus na parada.",
            preterito: "Esperei você por uma hora.",
            imperfeito: "Ele sempre esperava com paciência.",
            futuro: "Esperarei sua resposta até amanhã."
        }
    },
    {
        infinitive: "começar",
        english: "to start/begin",
        type: "regular",
        difficulty: "beginner",
        conjugations: {
            presente: {
                eu: "começo",
                voce_ele_ela: "começa",
                agente: "começa",
                nos: "começamos",
                voces_eles: "começam"
            },
            preterito: {
                eu: "comecei",
                voce_ele_ela: "começou",
                agente: "começou",
                nos: "começamos",
                voces_eles: "começaram"
            },
            imperfeito: {
                eu: "começava",
                voce_ele_ela: "começava",
                agente: "começava",
                nos: "começávamos",
                voces_eles: "começavam"
            },
            futuro: {
                eu: "começarei",
                voce_ele_ela: "começará",
                agente: "vai começar",
                nos: "começaremos",
                voces_eles: "começarão"
            }
        },
        examples: {
            presente: "Eu começo a trabalhar às oito.",
            preterito: "Comecei o curso na semana passada.",
            imperfeito: "O filme sempre começava às nove.",
            futuro: "Começarei a estudar alemão no próximo ano."
        }
    },
    {
        infinitive: "terminar",
        english: "to finish/end",
        type: "regular",
        difficulty: "beginner",
        conjugations: {
            presente: {
                eu: "termino",
                voce_ele_ela: "termina",
                agente: "termina",
                nos: "terminamos",
                voces_eles: "terminam"
            },
            preterito: {
                eu: "terminei",
                voce_ele_ela: "terminou",
                agente: "terminou",
                nos: "terminamos",
                voces_eles: "terminaram"
            },
            imperfeito: {
                eu: "terminava",
                voce_ele_ela: "terminava",
                agente: "terminava",
                nos: "terminávamos",
                voces_eles: "terminavam"
            },
            futuro: {
                eu: "terminarei",
                voce_ele_ela: "terminará",
                agente: "vai terminar",
                nos: "terminaremos",
                voces_eles: "terminarão"
            }
        },
        examples: {
            presente: "Eu termino o trabalho às cinco.",
            preterito: "Terminei de ler o livro ontem.",
            imperfeito: "A aula sempre terminava tarde.",
            futuro: "Terminarei o projeto na próxima semana."
        }
    },
    {
        infinitive: "ajudar",
        english: "to help",
        type: "regular",
        difficulty: "beginner",
        conjugations: {
            presente: {
                eu: "ajudo",
                voce_ele_ela: "ajuda",
                agente: "ajuda",
                nos: "ajudamos",
                voces_eles: "ajudam"
            },
            preterito: {
                eu: "ajudei",
                voce_ele_ela: "ajudou",
                agente: "ajudou",
                nos: "ajudamos",
                voces_eles: "ajudaram"
            },
            imperfeito: {
                eu: "ajudava",
                voce_ele_ela: "ajudava",
                agente: "ajudava",
                nos: "ajudávamos",
                voces_eles: "ajudavam"
            },
            futuro: {
                eu: "ajudarei",
                voce_ele_ela: "ajudará",
                agente: "vai ajudar",
                nos: "ajudaremos",
                voces_eles: "ajudarão"
            }
        },
        examples: {
            presente: "Eu sempre ajudo minha mãe na cozinha.",
            preterito: "Ajudei meu amigo com a mudança.",
            imperfeito: "Ela sempre ajudava os vizinhos.",
            futuro: "Ajudarei você com o português."
        }
    },
    {
        infinitive: "pensar",
        english: "to think",
        type: "regular",
        difficulty: "beginner",
        conjugations: {
            presente: {
                eu: "penso",
                voce_ele_ela: "pensa",
                agente: "pensa",
                nos: "pensamos",
                voces_eles: "pensam"
            },
            preterito: {
                eu: "pensei",
                voce_ele_ela: "pensou",
                agente: "pensou",
                nos: "pensamos",
                voces_eles: "pensaram"
            },
            imperfeito: {
                eu: "pensava",
                voce_ele_ela: "pensava",
                agente: "pensava",
                nos: "pensávamos",
                voces_eles: "pensavam"
            },
            futuro: {
                eu: "pensarei",
                voce_ele_ela: "pensará",
                agente: "vai pensar",
                nos: "pensaremos",
                voces_eles: "pensarão"
            }
        },
        examples: {
            presente: "Eu penso muito antes de decidir.",
            preterito: "Pensei em você ontem.",
            imperfeito: "Ela sempre pensava positivo.",
            futuro: "Pensarei numa solução amanhã."
        }
    },
    {
        infinitive: "lembrar",
        english: "to remember",
        type: "regular",
        difficulty: "beginner",
        conjugations: {
            presente: {
                eu: "lembro",
                voce_ele_ela: "lembra",
                agente: "lembra",
                nos: "lembramos",
                voces_eles: "lembram"
            },
            preterito: {
                eu: "lembrei",
                voce_ele_ela: "lembrou",
                agente: "lembrou",
                nos: "lembramos",
                voces_eles: "lembraram"
            },
            imperfeito: {
                eu: "lembrava",
                voce_ele_ela: "lembrava",
                agente: "lembrava",
                nos: "lembrávamos",
                voces_eles: "lembravam"
            },
            futuro: {
                eu: "lembrarei",
                voce_ele_ela: "lembrará",
                agente: "vai lembrar",
                nos: "lembraremos",
                voces_eles: "lembrarão"
            }
        },
        examples: {
            presente: "Eu lembro do seu aniversário.",
            preterito: "Lembrei de comprar pão.",
            imperfeito: "Ele sempre lembrava das datas importantes.",
            futuro: "Lembrarei de te ligar amanhã."
        }
    },
    {
        infinitive: "esquecer",
        english: "to forget",
        type: "regular",
        difficulty: "beginner",
        conjugations: {
            presente: {
                eu: "esqueço",
                voce_ele_ela: "esquece",
                agente: "esquece",
                nos: "esquecemos",
                voces_eles: "esquecem"
            },
            preterito: {
                eu: "esqueci",
                voce_ele_ela: "esqueceu",
                agente: "esqueceu",
                nos: "esquecemos",
                voces_eles: "esqueceram"
            },
            imperfeito: {
                eu: "esquecia",
                voce_ele_ela: "esquecia",
                agente: "esquecia",
                nos: "esquecíamos",
                voces_eles: "esqueciam"
            },
            futuro: {
                eu: "esquecerei",
                voce_ele_ela: "esquecerá",
                agente: "vai esquecer",
                nos: "esqueceremos",
                voces_eles: "esquecerão"
            }
        },
        examples: {
            presente: "Eu sempre esqueço onde coloco as chaves.",
            preterito: "Esqueci de fazer a tarefa.",
            imperfeito: "Ela sempre esquecia o guarda-chuva.",
            futuro: "Nunca esquecerei deste dia."
        }
    },
    {
        infinitive: "sentir",
        english: "to feel",
        type: "irregular",
        difficulty: "intermediate",
        conjugations: {
            presente: {
                eu: "sinto",
                voce_ele_ela: "sente",
                agente: "sente",
                nos: "sentimos",
                voces_eles: "sentem"
            },
            preterito: {
                eu: "senti",
                voce_ele_ela: "sentiu",
                agente: "sentiu",
                nos: "sentimos",
                voces_eles: "sentiram"
            },
            imperfeito: {
                eu: "sentia",
                voce_ele_ela: "sentia",
                agente: "sentia",
                nos: "sentíamos",
                voces_eles: "sentiam"
            },
            futuro: {
                eu: "sentirei",
                voce_ele_ela: "sentirá",
                agente: "vai sentir",
                nos: "sentiremos",
                voces_eles: "sentirão"
            }
        },
        examples: {
            presente: "Eu sinto muito por isso.",
            preterito: "Senti uma dor no peito.",
            imperfeito: "Ela sempre sentia frio.",
            futuro: "Você sentirá a diferença."
        }
    },
    {
        infinitive: "ouvir",
        english: "to hear/listen",
        type: "irregular",
        difficulty: "intermediate",
        conjugations: {
            presente: {
                eu: "ouço",
                voce_ele_ela: "ouve",
                agente: "ouve",
                nos: "ouvimos",
                voces_eles: "ouvem"
            },
            preterito: {
                eu: "ouvi",
                voce_ele_ela: "ouviu",
                agente: "ouviu",
                nos: "ouvimos",
                voces_eles: "ouviram"
            },
            imperfeito: {
                eu: "ouvia",
                voce_ele_ela: "ouvia",
                agente: "ouvia",
                nos: "ouvíamos",
                voces_eles: "ouviam"
            },
            futuro: {
                eu: "ouvirei",
                voce_ele_ela: "ouvirá",
                agente: "vai ouvir",
                nos: "ouviremos",
                voces_eles: "ouvirão"
            }
        },
        examples: {
            presente: "Eu ouço música todos os dias.",
            preterito: "Ouvi uma notícia interessante.",
            imperfeito: "Ele sempre ouvia rádio no carro.",
            futuro: "Ouvirei sua explicação amanhã."
        }
    },
    {
        infinitive: "olhar",
        english: "to look",
        type: "regular",
        difficulty: "beginner",
        conjugations: {
            presente: {
                eu: "olho",
                voce_ele_ela: "olha",
                agente: "olha",
                nos: "olhamos",
                voces_eles: "olham"
            },
            preterito: {
                eu: "olhei",
                voce_ele_ela: "olhou",
                agente: "olhou",
                nos: "olhamos",
                voces_eles: "olharam"
            },
            imperfeito: {
                eu: "olhava",
                voce_ele_ela: "olhava",
                agente: "olhava",
                nos: "olhávamos",
                voces_eles: "olhavam"
            },
            futuro: {
                eu: "olharei",
                voce_ele_ela: "olhará",
                agente: "vai olhar",
                nos: "olharemos",
                voces_eles: "olharão"
            }
        },
        examples: {
            presente: "Eu olho para o céu todas as noites.",
            preterito: "Olhei pela janela e vi você.",
            imperfeito: "Ela sempre olhava no espelho.",
            futuro: "Olharei os documentos amanhã."
        }
    },
    {
        infinitive: "usar",
        english: "to use",
        type: "regular",
        difficulty: "beginner",
        conjugations: {
            presente: {
                eu: "uso",
                voce_ele_ela: "usa",
                agente: "usa",
                nos: "usamos",
                voces_eles: "usam"
            },
            preterito: {
                eu: "usei",
                voce_ele_ela: "usou",
                agente: "usou",
                nos: "usamos",
                voces_eles: "usaram"
            },
            imperfeito: {
                eu: "usava",
                voce_ele_ela: "usava",
                agente: "usava",
                nos: "usávamos",
                voces_eles: "usavam"
            },
            futuro: {
                eu: "usarei",
                voce_ele_ela: "usará",
                agente: "vai usar",
                nos: "usaremos",
                voces_eles: "usarão"
            }
        },
        examples: {
            presente: "Eu uso o computador para trabalhar.",
            preterito: "Usei sua caneta emprestada.",
            imperfeito: "Ele sempre usava óculos.",
            futuro: "Usarei o carro amanhã."
        }
    },
    {
        infinitive: "pagar",
        english: "to pay",
        type: "regular",
        difficulty: "beginner",
        conjugations: {
            presente: {
                eu: "pago",
                voce_ele_ela: "paga",
                agente: "paga",
                nos: "pagamos",
                voces_eles: "pagam"
            },
            preterito: {
                eu: "paguei",
                voce_ele_ela: "pagou",
                agente: "pagou",
                nos: "pagamos",
                voces_eles: "pagaram"
            },
            imperfeito: {
                eu: "pagava",
                voce_ele_ela: "pagava",
                agente: "pagava",
                nos: "pagávamos",
                voces_eles: "pagavam"
            },
            futuro: {
                eu: "pagarei",
                voce_ele_ela: "pagará",
                agente: "vai pagar",
                nos: "pagaremos",
                voces_eles: "pagarão"
            }
        },
        examples: {
            presente: "Eu pago as contas todo mês.",
            preterito: "Paguei a conta do restaurante.",
            imperfeito: "Ele sempre pagava à vista.",
            futuro: "Pagarei você na próxima semana."
        }
    },
    {
        infinitive: "ganhar",
        english: "to win/earn",
        type: "regular",
        difficulty: "beginner",
        conjugations: {
            presente: {
                eu: "ganho",
                voce_ele_ela: "ganha",
                agente: "ganha",
                nos: "ganhamos",
                voces_eles: "ganham"
            },
            preterito: {
                eu: "ganhei",
                voce_ele_ela: "ganhou",
                agente: "ganhou",
                nos: "ganhamos",
                voces_eles: "ganharam"
            },
            imperfeito: {
                eu: "ganhava",
                voce_ele_ela: "ganhava",
                agente: "ganhava",
                nos: "ganhávamos",
                voces_eles: "ganhavam"
            },
            futuro: {
                eu: "ganharei",
                voce_ele_ela: "ganhará",
                agente: "vai ganhar",
                nos: "ganharemos",
                voces_eles: "ganharão"
            }
        },
        examples: {
            presente: "Eu ganho bem no meu trabalho.",
            preterito: "Ganhei o jogo ontem.",
            imperfeito: "Ela sempre ganhava nas cartas.",
            futuro: "Ganharei mais experiência aqui."
        }
    },
    {
        infinitive: "perder",
        english: "to lose",
        type: "regular",
        difficulty: "beginner",
        conjugations: {
            presente: {
                eu: "perco",
                voce_ele_ela: "perde",
                agente: "perde",
                nos: "perdemos",
                voces_eles: "perdem"
            },
            preterito: {
                eu: "perdi",
                voce_ele_ela: "perdeu",
                agente: "perdeu",
                nos: "perdemos",
                voces_eles: "perderam"
            },
            imperfeito: {
                eu: "perdia",
                voce_ele_ela: "perdia",
                agente: "perdia",
                nos: "perdíamos",
                voces_eles: "perdiam"
            },
            futuro: {
                eu: "perderei",
                voce_ele_ela: "perderá",
                agente: "vai perder",
                nos: "perderemos",
                voces_eles: "perderão"
            }
        },
        examples: {
            presente: "Eu sempre perco as chaves.",
            preterito: "Perdi o ônibus hoje de manhã.",
            imperfeito: "Ele sempre perdia no futebol.",
            futuro: "Perderei peso se continuar a dieta."
        }
    },
    {
        infinitive: "trazer",
        english: "to bring",
        type: "irregular",
        difficulty: "intermediate",
        conjugations: {
            presente: {
                eu: "trago",
                voce_ele_ela: "traz",
                agente: "traz",
                nos: "trazemos",
                voces_eles: "trazem"
            },
            preterito: {
                eu: "trouxe",
                voce_ele_ela: "trouxe",
                agente: "trouxe",
                nos: "trouxemos",
                voces_eles: "trouxeram"
            },
            imperfeito: {
                eu: "trazia",
                voce_ele_ela: "trazia",
                agente: "trazia",
                nos: "trazíamos",
                voces_eles: "traziam"
            },
            futuro: {
                eu: "trarei",
                voce_ele_ela: "trará",
                agente: "vai trazer",
                nos: "traremos",
                voces_eles: "trarão"
            }
        },
        examples: {
            presente: "Eu trago o almoço de casa.",
            preterito: "Trouxe um presente para você.",
            imperfeito: "Ela sempre trazia flores.",
            futuro: "Trarei os documentos amanhã."
        }
    },
    {
        infinitive: "levar",
        english: "to take/carry",
        type: "regular",
        difficulty: "beginner",
        conjugations: {
            presente: {
                eu: "levo",
                voce_ele_ela: "leva",
                agente: "leva",
                nos: "levamos",
                voces_eles: "levam"
            },
            preterito: {
                eu: "levei",
                voce_ele_ela: "levou",
                agente: "levou",
                nos: "levamos",
                voces_eles: "levaram"
            },
            imperfeito: {
                eu: "levava",
                voce_ele_ela: "levava",
                agente: "levava",
                nos: "levávamos",
                voces_eles: "levavam"
            },
            futuro: {
                eu: "levarei",
                voce_ele_ela: "levará",
                agente: "vai levar",
                nos: "levaremos",
                voces_eles: "levarão"
            }
        },
        examples: {
            presente: "Eu levo meu filho à escola.",
            preterito: "Levei o carro para o conserto.",
            imperfeito: "Ele sempre levava o cachorro para passear.",
            futuro: "Levarei você ao aeroporto."
        }
    },
    {
        infinitive: "voltar",
        english: "to return/come back",
        type: "regular",
        difficulty: "beginner",
        conjugations: {
            presente: {
                eu: "volto",
                voce_ele_ela: "volta",
                agente: "volta",
                nos: "voltamos",
                voces_eles: "voltam"
            },
            preterito: {
                eu: "voltei",
                voce_ele_ela: "voltou",
                agente: "voltou",
                nos: "voltamos",
                voces_eles: "voltaram"
            },
            imperfeito: {
                eu: "voltava",
                voce_ele_ela: "voltava",
                agente: "voltava",
                nos: "voltávamos",
                voces_eles: "voltavam"
            },
            futuro: {
                eu: "voltarei",
                voce_ele_ela: "voltará",
                agente: "vai voltar",
                nos: "voltaremos",
                voces_eles: "voltarão"
            }
        },
        examples: {
            presente: "Eu volto para casa às seis.",
            preterito: "Voltei de viagem ontem.",
            imperfeito: "Ele sempre voltava tarde do trabalho.",
            futuro: "Voltarei em uma semana."
        }
    },
    {
        infinitive: "entrar",
        english: "to enter",
        type: "regular",
        difficulty: "beginner",
        conjugations: {
            presente: {
                eu: "entro",
                voce_ele_ela: "entra",
                agente: "entra",
                nos: "entramos",
                voces_eles: "entram"
            },
            preterito: {
                eu: "entrei",
                voce_ele_ela: "entrou",
                agente: "entrou",
                nos: "entramos",
                voces_eles: "entraram"
            },
            imperfeito: {
                eu: "entrava",
                voce_ele_ela: "entrava",
                agente: "entrava",
                nos: "entrávamos",
                voces_eles: "entravam"
            },
            futuro: {
                eu: "entrarei",
                voce_ele_ela: "entrará",
                agente: "vai entrar",
                nos: "entraremos",
                voces_eles: "entrarão"
            }
        },
        examples: {
            presente: "Eu entro na sala de aula.",
            preterito: "Entrei na universidade ano passado.",
            imperfeito: "Ela sempre entrava pela porta dos fundos.",
            futuro: "Entrarei no curso de medicina."
        }
    },
    {
        infinitive: "passar",
        english: "to pass/spend time",
        type: "regular",
        difficulty: "beginner",
        conjugations: {
            presente: {
                eu: "passo",
                voce_ele_ela: "passa",
                agente: "passa",
                nos: "passamos",
                voces_eles: "passam"
            },
            preterito: {
                eu: "passei",
                voce_ele_ela: "passou",
                agente: "passou",
                nos: "passamos",
                voces_eles: "passaram"
            },
            imperfeito: {
                eu: "passava",
                voce_ele_ela: "passava",
                agente: "passava",
                nos: "passávamos",
                voces_eles: "passavam"
            },
            futuro: {
                eu: "passarei",
                voce_ele_ela: "passará",
                agente: "vai passar",
                nos: "passaremos",
                voces_eles: "passarão"
            }
        },
        examples: {
            presente: "Eu passo muito tempo estudando.",
            preterito: "Passei as férias em Belém.",
            imperfeito: "Ele sempre passava por aqui.",
            futuro: "Passarei o fim de semana em Londrina."
        }
    },
    {
        infinitive: "conhecer",
        english: "to know/meet",
        type: "regular",
        difficulty: "beginner",
        conjugations: {
            presente: {
                eu: "conheço",
                voce_ele_ela: "conhece",
                agente: "conhece",
                nos: "conhecemos",
                voces_eles: "conhecem"
            },
            preterito: {
                eu: "conheci",
                voce_ele_ela: "conheceu",
                agente: "conheceu",
                nos: "conhecemos",
                voces_eles: "conheceram"
            },
            imperfeito: {
                eu: "conhecia",
                voce_ele_ela: "conhecia",
                agente: "conhecia",
                nos: "conhecíamos",
                voces_eles: "conheciam"
            },
            futuro: {
                eu: "conhecerei",
                voce_ele_ela: "conhecerá",
                agente: "vai conhecer",
                nos: "conheceremos",
                voces_eles: "conhecerão"
            }
        },
        examples: {
            presente: "Eu conheço bem esta cidade.",
            preterito: "Conheci minha esposa em Belém.",
            imperfeito: "Ele conhecia todos os vizinhos.",
            futuro: "Conhecerei o Brasil inteiro um dia."
        }
    },
    {
        infinitive: "chamar",
        english: "to call",
        type: "regular",
        difficulty: "beginner",
        conjugations: {
            presente: {
                eu: "chamo",
                voce_ele_ela: "chama",
                agente: "chama",
                nos: "chamamos",
                voces_eles: "chamam"
            },
            preterito: {
                eu: "chamei",
                voce_ele_ela: "chamou",
                agente: "chamou",
                nos: "chamamos",
                voces_eles: "chamaram"
            },
            imperfeito: {
                eu: "chamava",
                voce_ele_ela: "chamava",
                agente: "chamava",
                nos: "chamávamos",
                voces_eles: "chamavam"
            },
            futuro: {
                eu: "chamarei",
                voce_ele_ela: "chamará",
                agente: "vai chamar",
                nos: "chamaremos",
                voces_eles: "chamarão"
            }
        },
        examples: {
            presente: "Eu chamo meu filho para jantar.",
            preterito: "Chamei você várias vezes ontem.",
            imperfeito: "Minha mãe sempre me chamava de amor.",
            futuro: "Chamarei um táxi para nós."
        }
    },
    {
        infinitive: "mostrar",
        english: "to show",
        type: "regular",
        difficulty: "beginner",
        conjugations: {
            presente: {
                eu: "mostro",
                voce_ele_ela: "mostra",
                agente: "mostra",
                nos: "mostramos",
                voces_eles: "mostram"
            },
            preterito: {
                eu: "mostrei",
                voce_ele_ela: "mostrou",
                agente: "mostrou",
                nos: "mostramos",
                voces_eles: "mostraram"
            },
            imperfeito: {
                eu: "mostrava",
                voce_ele_ela: "mostrava",
                agente: "mostrava",
                nos: "mostrávamos",
                voces_eles: "mostravam"
            },
            futuro: {
                eu: "mostrarei",
                voce_ele_ela: "mostrará",
                agente: "vai mostrar",
                nos: "mostraremos",
                voces_eles: "mostrarão"
            }
        },
        examples: {
            presente: "Eu mostro as fotos para os amigos.",
            preterito: "Mostrei o caminho para ele.",
            imperfeito: "Ela sempre mostrava orgulho dos filhos.",
            futuro: "Mostrarei minha cidade natal para você."
        }
    },
    {
        infinitive: "explicar",
        english: "to explain",
        type: "regular",
        difficulty: "intermediate",
        conjugations: {
            presente: {
                eu: "explico",
                voce_ele_ela: "explica",
                agente: "explica",
                nos: "explicamos",
                voces_eles: "explicam"
            },
            preterito: {
                eu: "expliquei",
                voce_ele_ela: "explicou",
                agente: "explicou",
                nos: "explicamos",
                voces_eles: "explicaram"
            },
            imperfeito: {
                eu: "explicava",
                voce_ele_ela: "explicava",
                agente: "explicava",
                nos: "explicávamos",
                voces_eles: "explicavam"
            },
            futuro: {
                eu: "explicarei",
                voce_ele_ela: "explicará",
                agente: "vai explicar",
                nos: "explicaremos",
                voces_eles: "explicarão"
            }
        },
        examples: {
            presente: "Eu explico a lição para os alunos.",
            preterito: "Expliquei o problema para o chefe.",
            imperfeito: "O professor sempre explicava com paciência.",
            futuro: "Explicarei tudo quando chegar em casa."
        }
    },
    {
        infinitive: "contar",
        english: "to count/tell",
        type: "regular",
        difficulty: "beginner",
        conjugations: {
            presente: {
                eu: "conto",
                voce_ele_ela: "conta",
                agente: "conta",
                nos: "contamos",
                voces_eles: "contam"
            },
            preterito: {
                eu: "contei",
                voce_ele_ela: "contou",
                agente: "contou",
                nos: "contamos",
                voces_eles: "contaram"
            },
            imperfeito: {
                eu: "contava",
                voce_ele_ela: "contava",
                agente: "contava",
                nos: "contávamos",
                voces_eles: "contavam"
            },
            futuro: {
                eu: "contarei",
                voce_ele_ela: "contará",
                agente: "vai contar",
                nos: "contaremos",
                voces_eles: "contarão"
            }
        },
        examples: {
            presente: "Eu conto histórias para as crianças.",
            preterito: "Contei até dez e ele apareceu.",
            imperfeito: "Vovó sempre contava histórias antigas.",
            futuro: "Contarei tudo o que aconteceu."
        }
    },
    {
        infinitive: "escolher",
        english: "to choose",
        type: "regular",
        difficulty: "intermediate",
        conjugations: {
            presente: {
                eu: "escolho",
                voce_ele_ela: "escolhe",
                agente: "escolhe",
                nos: "escolhemos",
                voces_eles: "escolhem"
            },
            preterito: {
                eu: "escolhi",
                voce_ele_ela: "escolheu",
                agente: "escolheu",
                nos: "escolhemos",
                voces_eles: "escolheram"
            },
            imperfeito: {
                eu: "escolhia",
                voce_ele_ela: "escolhia",
                agente: "escolhia",
                nos: "escolhíamos",
                voces_eles: "escolhiam"
            },
            futuro: {
                eu: "escolherei",
                voce_ele_ela: "escolherá",
                agente: "vai escolher",
                nos: "escolheremos",
                voces_eles: "escolherão"
            }
        },
        examples: {
            presente: "Eu escolho sempre o melhor produto.",
            preterito: "Escolhi estudar português em Londrina.",
            imperfeito: "Ela sempre escolhia roupas coloridas.",
            futuro: "Escolherei uma profissão que me faça feliz."
        }
    },
    {
        infinitive: "decidir",
        english: "to decide",
        type: "regular",
        difficulty: "intermediate",
        conjugations: {
            presente: {
                eu: "decido",
                voce_ele_ela: "decide",
                agente: "decide",
                nos: "decidimos",
                voces_eles: "decidem"
            },
            preterito: {
                eu: "decidi",
                voce_ele_ela: "decidiu",
                agente: "decidiu",
                nos: "decidimos",
                voces_eles: "decidiram"
            },
            imperfeito: {
                eu: "decidia",
                voce_ele_ela: "decidia",
                agente: "decidia",
                nos: "decidíamos",
                voces_eles: "decidiam"
            },
            futuro: {
                eu: "decidirei",
                voce_ele_ela: "decidirá",
                agente: "vai decidir",
                nos: "decidiremos",
                voces_eles: "decidirão"
            }
        },
        examples: {
            presente: "Eu decido rapidamente o que comer.",
            preterito: "Decidi mudar de cidade.",
            imperfeito: "Ele nunca decidia nada sozinho.",
            futuro: "Decidiremos juntos o que fazer."
        }
    },
    {
        infinitive: "conseguir",
        english: "to get/achieve",
        type: "irregular",
        difficulty: "intermediate",
        conjugations: {
            presente: {
                eu: "consigo",
                voce_ele_ela: "consegue",
                agente: "consegue",
                nos: "conseguimos",
                voces_eles: "conseguem"
            },
            preterito: {
                eu: "consegui",
                voce_ele_ela: "conseguiu",
                agente: "conseguiu",
                nos: "conseguimos",
                voces_eles: "conseguiram"
            },
            imperfeito: {
                eu: "conseguia",
                voce_ele_ela: "conseguia",
                agente: "conseguia",
                nos: "conseguíamos",
                voces_eles: "conseguiam"
            },
            futuro: {
                eu: "conseguirei",
                voce_ele_ela: "conseguirá",
                agente: "vai conseguir",
                nos: "conseguiremos",
                voces_eles: "conseguirão"
            }
        },
        examples: {
            presente: "Eu consigo falar português bem.",
            preterito: "Consegui o emprego que queria.",
            imperfeito: "Ela sempre conseguia o que queria.",
            futuro: "Conseguirei terminar o curso este ano."
        }
    },
    {
        infinitive: "tentar",
        english: "to try",
        type: "regular",
        difficulty: "beginner",
        conjugations: {
            presente: {
                eu: "tento",
                voce_ele_ela: "tenta",
                agente: "tenta",
                nos: "tentamos",
                voces_eles: "tentam"
            },
            preterito: {
                eu: "tentei",
                voce_ele_ela: "tentou",
                agente: "tentou",
                nos: "tentamos",
                voces_eles: "tentaram"
            },
            imperfeito: {
                eu: "tentava",
                voce_ele_ela: "tentava",
                agente: "tentava",
                nos: "tentávamos",
                voces_eles: "tentavam"
            },
            futuro: {
                eu: "tentarei",
                voce_ele_ela: "tentará",
                agente: "vai tentar",
                nos: "tentaremos",
                voces_eles: "tentarão"
            }
        },
        examples: {
            presente: "Eu tento fazer exercício todo dia.",
            preterito: "Tentei ligar para você ontem.",
            imperfeito: "Ele sempre tentava me ajudar.",
            futuro: "Tentarei chegar mais cedo amanhã."
        }
    },
    {
        infinitive: "parar",
        english: "to stop",
        type: "regular",
        difficulty: "beginner",
        conjugations: {
            presente: {
                eu: "paro",
                voce_ele_ela: "para",
                agente: "para",
                nos: "paramos",
                voces_eles: "param"
            },
            preterito: {
                eu: "parei",
                voce_ele_ela: "parou",
                agente: "parou",
                nos: "paramos",
                voces_eles: "pararam"
            },
            imperfeito: {
                eu: "parava",
                voce_ele_ela: "parava",
                agente: "parava",
                nos: "parávamos",
                voces_eles: "paravam"
            },
            futuro: {
                eu: "pararei",
                voce_ele_ela: "parará",
                agente: "vai parar",
                nos: "pararemos",
                voces_eles: "pararão"
            }
        },
        examples: {
            presente: "Eu paro o carro no semáforo.",
            preterito: "Parei de fumar no ano passado.",
            imperfeito: "O ônibus sempre parava aqui.",
            futuro: "Pararei de trabalhar às cinco."
        }
    },
    {
        infinitive: "continuar",
        english: "to continue",
        type: "regular",
        difficulty: "intermediate",
        conjugations: {
            presente: {
                eu: "continuo",
                voce_ele_ela: "continua",
                agente: "continua",
                nos: "continuamos",
                voces_eles: "continuam"
            },
            preterito: {
                eu: "continuei",
                voce_ele_ela: "continuou",
                agente: "continuou",
                nos: "continuamos",
                voces_eles: "continuaram"
            },
            imperfeito: {
                eu: "continuava",
                voce_ele_ela: "continuava",
                agente: "continuava",
                nos: "continuávamos",
                voces_eles: "continuavam"
            },
            futuro: {
                eu: "continuarei",
                voce_ele_ela: "continuará",
                agente: "vai continuar",
                nos: "continuaremos",
                voces_eles: "continuarão"
            }
        },
        examples: {
            presente: "Eu continuo estudando português.",
            preterito: "Continuei trabalhando até tarde.",
            imperfeito: "A chuva continuava caindo.",
            futuro: "Continuarei morando em Belém."
        }
    },
    {
        infinitive: "acontecer",
        english: "to happen",
        type: "regular",
        difficulty: "intermediate",
        conjugations: {
            presente: {
                eu: "aconteço",
                voce_ele_ela: "acontece",
                agente: "acontece",
                nos: "acontecemos",
                voces_eles: "acontecem"
            },
            preterito: {
                eu: "aconteci",
                voce_ele_ela: "aconteceu",
                agente: "aconteceu",
                nos: "acontecemos",
                voces_eles: "aconteceram"
            },
            imperfeito: {
                eu: "acontecia",
                voce_ele_ela: "acontecia",
                agente: "acontecia",
                nos: "acontecíamos",
                voces_eles: "aconteciam"
            },
            futuro: {
                eu: "acontecerei",
                voce_ele_ela: "acontecerá",
                agente: "vai acontecer",
                nos: "aconteceremos",
                voces_eles: "acontecerão"
            }
        },
        examples: {
            presente: "Isso sempre acontece comigo.",
            preterito: "Aconteceu algo estranho ontem.",
            imperfeito: "Sempre acontecia a mesma coisa.",
            futuro: "O que acontecerá se chover?"
        }
    },
    {
        infinitive: "aparecer",
        english: "to appear",
        type: "regular",
        difficulty: "intermediate",
        conjugations: {
            presente: {
                eu: "apareço",
                voce_ele_ela: "aparece",
                agente: "aparece",
                nos: "aparecemos",
                voces_eles: "aparecem"
            },
            preterito: {
                eu: "apareci",
                voce_ele_ela: "apareceu",
                agente: "apareceu",
                nos: "aparecemos",
                voces_eles: "apareceram"
            },
            imperfeito: {
                eu: "aparecia",
                voce_ele_ela: "aparecia",
                agente: "aparecia",
                nos: "aparecíamos",
                voces_eles: "apareciam"
            },
            futuro: {
                eu: "aparecerei",
                voce_ele_ela: "aparecerá",
                agente: "vai aparecer",
                nos: "apareceremos",
                voces_eles: "aparecerão"
            }
        },
        examples: {
            presente: "Eu apareço na TV às vezes.",
            preterito: "Apareceu uma oportunidade ótima.",
            imperfeito: "Ele sempre aparecia sem avisar.",
            futuro: "Aparecerei na festa de surpresa."
        }
    },
    {
        infinitive: "crescer",
        english: "to grow",
        type: "regular",
        difficulty: "intermediate",
        conjugations: {
            presente: {
                eu: "cresço",
                voce_ele_ela: "cresce",
                agente: "cresce",
                nos: "crescemos",
                voces_eles: "crescem"
            },
            preterito: {
                eu: "cresci",
                voce_ele_ela: "cresceu",
                agente: "cresceu",
                nos: "crescemos",
                voces_eles: "cresceram"
            },
            imperfeito: {
                eu: "crescia",
                voce_ele_ela: "crescia",
                agente: "crescia",
                nos: "crescíamos",
                voces_eles: "cresciam"
            },
            futuro: {
                eu: "crescerei",
                voce_ele_ela: "crescerá",
                agente: "vai crescer",
                nos: "cresceremos",
                voces_eles: "crescerão"
            }
        },
        examples: {
            presente: "Eu cresço um pouco a cada ano.",
            preterito: "Cresci muito durante a adolescência.",
            imperfeito: "A cidade crescia rapidamente.",
            futuro: "Meu filho crescerá forte e saudável."
        }
    },
    {
        infinitive: "nascer",
        english: "to be born",
        type: "regular",
        difficulty: "intermediate",
        conjugations: {
            presente: {
                eu: "nasço",
                voce_ele_ela: "nasce",
                agente: "nasce",
                nos: "nascemos",
                voces_eles: "nascem"
            },
            preterito: {
                eu: "nasci",
                voce_ele_ela: "nasceu",
                agente: "nasceu",
                nos: "nascemos",
                voces_eles: "nasceram"
            },
            imperfeito: {
                eu: "nascia",
                voce_ele_ela: "nascia",
                agente: "nascia",
                nos: "nascíamos",
                voces_eles: "nasciam"
            },
            futuro: {
                eu: "nascerei",
                voce_ele_ela: "nascerá",
                agente: "vai nascer",
                nos: "nasceremos",
                voces_eles: "nascerão"
            }
        },
        examples: {
            presente: "Eu nasço para ser feliz.",
            preterito: "Nasci em Londrina, no Paraná.",
            imperfeito: "Naquela época, nascia muita gente aqui.",
            futuro: "Meu bebê nascerá em dezembro."
        }
    },
    {
        infinitive: "morrer",
        english: "to die",
        type: "irregular",
        difficulty: "intermediate",
        conjugations: {
            presente: {
                eu: "morro",
                voce_ele_ela: "morre",
                agente: "morre",
                nos: "morremos",
                voces_eles: "morrem"
            },
            preterito: {
                eu: "morri",
                voce_ele_ela: "morreu",
                agente: "morreu",
                nos: "morremos",
                voces_eles: "morreram"
            },
            imperfeito: {
                eu: "morria",
                voce_ele_ela: "morria",
                agente: "morria",
                nos: "morríamos",
                voces_eles: "morriam"
            },
            futuro: {
                eu: "morrerei",
                voce_ele_ela: "morrerá",
                agente: "vai morrer",
                nos: "morreremos",
                voces_eles: "morrerão"
            }
        },
        examples: {
            presente: "Eu morro de rir com suas piadas.",
            preterito: "Meu avô morreu no ano passado.",
            imperfeito: "Ele sempre morria de medo de trovão.",
            futuro: "Morrerei de velho, espero."
        }
    }
];

// Tense names in Portuguese and English
const tenseNames = {
    presente: { pt: "Presente", en: "Present" },
    preterito: { pt: "Pretérito Perfeito", en: "Simple Past" },
    imperfeito: { pt: "Pretérito Imperfeito", en: "Imperfect" },
    futuro: { pt: "Futuro", en: "Future" }
};

// Brazilian Portuguese pronoun labels
const pronounLabels = {
    eu: "eu",
    voce_ele_ela: "você/ele/ela",
    agente: "a gente",
    nos: "nós",
    voces_eles: "vocês/eles/elas"
};
