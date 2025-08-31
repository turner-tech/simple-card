// English Verb Conjugations Database
// Focus on most important English verbs for Brazilian Portuguese speakers

const englishVerbConjugations = [
    {
        infinitive: "be",
        portuguese: "ser/estar",
        type: "irregular",
        difficulty: "beginner",
        conjugations: {
            present: {
                i: "am",
                you: "are",
                he_she_it: "is",
                we: "are",
                they: "are"
            },
            past: {
                i: "was",
                you: "were",
                he_she_it: "was",
                we: "were",
                they: "were"
            },
            present_perfect: {
                i: "have been",
                you: "have been",
                he_she_it: "has been",
                we: "have been",
                they: "have been"
            },
            future: {
                i: "will be",
                you: "will be",
                he_she_it: "will be",
                we: "will be",
                they: "will be"
            }
        },
        examples: {
            present: "I am a student from Brazil.",
            past: "She was in Belém last year.",
            present_perfect: "We have been friends for years.",
            future: "They will be here tomorrow."
        }
    },
    {
        infinitive: "have",
        portuguese: "ter",
        type: "irregular",
        difficulty: "beginner",
        conjugations: {
            present: {
                i: "have",
                you: "have",
                he_she_it: "has",
                we: "have",
                they: "have"
            },
            past: {
                i: "had",
                you: "had",
                he_she_it: "had",
                we: "had",
                they: "had"
            },
            present_perfect: {
                i: "have had",
                you: "have had",
                he_she_it: "has had",
                we: "have had",
                they: "have had"
            },
            future: {
                i: "will have",
                you: "will have",
                he_she_it: "will have",
                we: "will have",
                they: "will have"
            }
        },
        examples: {
            present: "I have a car.",
            past: "We had dinner at seven.",
            present_perfect: "She has had this job for two years.",
            future: "You will have more opportunities."
        }
    },
    {
        infinitive: "do",
        portuguese: "fazer",
        type: "irregular",
        difficulty: "beginner",
        conjugations: {
            present: {
                i: "do",
                you: "do",
                he_she_it: "does",
                we: "do",
                they: "do"
            },
            past: {
                i: "did",
                you: "did",
                he_she_it: "did",
                we: "did",
                they: "did"
            },
            present_perfect: {
                i: "have done",
                you: "have done",
                he_she_it: "has done",
                we: "have done",
                they: "have done"
            },
            future: {
                i: "will do",
                you: "will do",
                he_she_it: "will do",
                we: "will do",
                they: "will do"
            }
        },
        examples: {
            present: "I do my homework every day.",
            past: "He did a great job yesterday.",
            present_perfect: "We have done this before.",
            future: "They will do their best."
        }
    },
    {
        infinitive: "go",
        portuguese: "ir",
        type: "irregular",
        difficulty: "beginner",
        conjugations: {
            present: {
                i: "go",
                you: "go",
                he_she_it: "goes",
                we: "go",
                they: "go"
            },
            past: {
                i: "went",
                you: "went",
                he_she_it: "went",
                we: "went",
                they: "went"
            },
            present_perfect: {
                i: "have gone",
                you: "have gone",
                he_she_it: "has gone",
                we: "have gone",
                they: "have gone"
            },
            future: {
                i: "will go",
                you: "will go",
                he_she_it: "will go",
                we: "will go",
                they: "will go"
            }
        },
        examples: {
            present: "I go to work by bus.",
            past: "She went to Londrina last month.",
            present_perfect: "They have gone to the store.",
            future: "We will go together."
        }
    },
    {
        infinitive: "get",
        portuguese: "conseguir/obter",
        type: "irregular",
        difficulty: "beginner",
        conjugations: {
            present: {
                i: "get",
                you: "get",
                he_she_it: "gets",
                we: "get",
                they: "get"
            },
            past: {
                i: "got",
                you: "got",
                he_she_it: "got",
                we: "got",
                they: "got"
            },
            present_perfect: {
                i: "have gotten",
                you: "have gotten",
                he_she_it: "has gotten",
                we: "have gotten",
                they: "have gotten"
            },
            future: {
                i: "will get",
                you: "will get",
                he_she_it: "will get",
                we: "will get",
                they: "will get"
            }
        },
        examples: {
            present: "I get up at seven every morning.",
            past: "He got a new job last week.",
            present_perfect: "We have gotten used to the weather.",
            future: "You will get better with practice."
        }
    },
    {
        infinitive: "make",
        portuguese: "fazer/criar",
        type: "irregular",
        difficulty: "beginner",
        conjugations: {
            present: {
                i: "make",
                you: "make",
                he_she_it: "makes",
                we: "make",
                they: "make"
            },
            past: {
                i: "made",
                you: "made",
                he_she_it: "made",
                we: "made",
                they: "made"
            },
            present_perfect: {
                i: "have made",
                you: "have made",
                he_she_it: "has made",
                we: "have made",
                they: "have made"
            },
            future: {
                i: "will make",
                you: "will make",
                he_she_it: "will make",
                we: "will make",
                they: "will make"
            }
        },
        examples: {
            present: "I make coffee every morning.",
            past: "She made a delicious cake.",
            present_perfect: "They have made great progress.",
            future: "We will make a decision soon."
        }
    },
    {
        infinitive: "know",
        portuguese: "saber/conhecer",
        type: "irregular",
        difficulty: "beginner",
        conjugations: {
            present: {
                i: "know",
                you: "know",
                he_she_it: "knows",
                we: "know",
                they: "know"
            },
            past: {
                i: "knew",
                you: "knew",
                he_she_it: "knew",
                we: "knew",
                they: "knew"
            },
            present_perfect: {
                i: "have known",
                you: "have known",
                he_she_it: "has known",
                we: "have known",
                they: "have known"
            },
            future: {
                i: "will know",
                you: "will know",
                he_she_it: "will know",
                we: "will know",
                they: "will know"
            }
        },
        examples: {
            present: "I know how to speak Portuguese.",
            past: "He knew the answer immediately.",
            present_perfect: "We have known each other since childhood.",
            future: "You will know the results tomorrow."
        }
    },
    {
        infinitive: "think",
        portuguese: "pensar/achar",
        type: "irregular",
        difficulty: "beginner",
        conjugations: {
            present: {
                i: "think",
                you: "think",
                he_she_it: "thinks",
                we: "think",
                they: "think"
            },
            past: {
                i: "thought",
                you: "thought",
                he_she_it: "thought",
                we: "thought",
                they: "thought"
            },
            present_perfect: {
                i: "have thought",
                you: "have thought",
                he_she_it: "has thought",
                we: "have thought",
                they: "have thought"
            },
            future: {
                i: "will think",
                you: "will think",
                he_she_it: "will think",
                we: "will think",
                they: "will think"
            }
        },
        examples: {
            present: "I think this is a good idea.",
            past: "She thought about moving to the US.",
            present_perfect: "We have thought about this problem.",
            future: "They will think of a solution."
        }
    },
    {
        infinitive: "take",
        portuguese: "levar/tomar",
        type: "irregular",
        difficulty: "beginner",
        conjugations: {
            present: {
                i: "take",
                you: "take",
                he_she_it: "takes",
                we: "take",
                they: "take"
            },
            past: {
                i: "took",
                you: "took",
                he_she_it: "took",
                we: "took",
                they: "took"
            },
            present_perfect: {
                i: "have taken",
                you: "have taken",
                he_she_it: "has taken",
                we: "have taken",
                they: "have taken"
            },
            future: {
                i: "will take",
                you: "will take",
                he_she_it: "will take",
                we: "will take",
                they: "will take"
            }
        },
        examples: {
            present: "I take the bus to work.",
            past: "He took a photo of the sunset.",
            present_perfect: "We have taken English classes.",
            future: "She will take care of everything."
        }
    },
    {
        infinitive: "come",
        portuguese: "vir",
        type: "irregular",
        difficulty: "beginner",
        conjugations: {
            present: {
                i: "come",
                you: "come",
                he_she_it: "comes",
                we: "come",
                they: "come"
            },
            past: {
                i: "came",
                you: "came",
                he_she_it: "came",
                we: "came",
                they: "came"
            },
            present_perfect: {
                i: "have come",
                you: "have come",
                he_she_it: "has come",
                we: "have come",
                they: "have come"
            },
            future: {
                i: "will come",
                you: "will come",
                he_she_it: "will come",
                we: "will come",
                they: "will come"
            }
        },
        examples: {
            present: "I come from Brazil.",
            past: "They came to visit us yesterday.",
            present_perfect: "He has come a long way.",
            future: "We will come back soon."
        }
    },
    {
        infinitive: "see",
        portuguese: "ver",
        type: "irregular",
        difficulty: "beginner",
        conjugations: {
            present: {
                i: "see",
                you: "see",
                he_she_it: "sees",
                we: "see",
                they: "see"
            },
            past: {
                i: "saw",
                you: "saw",
                he_she_it: "saw",
                we: "saw",
                they: "saw"
            },
            present_perfect: {
                i: "have seen",
                you: "have seen",
                he_she_it: "has seen",
                we: "have seen",
                they: "have seen"
            },
            future: {
                i: "will see",
                you: "will see",
                he_she_it: "will see",
                we: "will see",
                they: "will see"
            }
        },
        examples: {
            present: "I see the problem now.",
            past: "She saw a beautiful bird in the park.",
            present_perfect: "We have seen this movie before.",
            future: "You will see improvement soon."
        }
    },
    {
        infinitive: "want",
        portuguese: "querer",
        type: "regular",
        difficulty: "beginner",
        conjugations: {
            present: {
                i: "want",
                you: "want",
                he_she_it: "wants",
                we: "want",
                they: "want"
            },
            past: {
                i: "wanted",
                you: "wanted",
                he_she_it: "wanted",
                we: "wanted",
                they: "wanted"
            },
            present_perfect: {
                i: "have wanted",
                you: "have wanted",
                he_she_it: "has wanted",
                we: "have wanted",
                they: "have wanted"
            },
            future: {
                i: "will want",
                you: "will want",
                he_she_it: "will want",
                we: "will want",
                they: "will want"
            }
        },
        examples: {
            present: "I want to learn English.",
            past: "He wanted to visit Belém.",
            present_perfect: "We have wanted this for years.",
            future: "They will want to know the truth."
        }
    },
    {
        infinitive: "like",
        portuguese: "gostar",
        type: "regular",
        difficulty: "beginner",
        conjugations: {
            present: {
                i: "like",
                you: "like",
                he_she_it: "likes",
                we: "like",
                they: "like"
            },
            past: {
                i: "liked",
                you: "liked",
                he_she_it: "liked",
                we: "liked",
                they: "liked"
            },
            present_perfect: {
                i: "have liked",
                you: "have liked",
                he_she_it: "has liked",
                we: "have liked",
                they: "have liked"
            },
            future: {
                i: "will like",
                you: "will like",
                he_she_it: "will like",
                we: "will like",
                they: "will like"
            }
        },
        examples: {
            present: "I like Brazilian music.",
            past: "She liked the movie very much.",
            present_perfect: "We have liked this restaurant for years.",
            future: "You will like the new teacher."
        }
    },
    {
        infinitive: "need",
        portuguese: "precisar",
        type: "regular",
        difficulty: "beginner",
        conjugations: {
            present: {
                i: "need",
                you: "need",
                he_she_it: "needs",
                we: "need",
                they: "need"
            },
            past: {
                i: "needed",
                you: "needed",
                he_she_it: "needed",
                we: "needed",
                they: "needed"
            },
            present_perfect: {
                i: "have needed",
                you: "have needed",
                he_she_it: "has needed",
                we: "have needed",
                they: "have needed"
            },
            future: {
                i: "will need",
                you: "will need",
                he_she_it: "will need",
                we: "will need",
                they: "will need"
            }
        },
        examples: {
            present: "I need to study more English.",
            past: "He needed help with his homework.",
            present_perfect: "We have needed this for a long time.",
            future: "They will need more practice."
        }
    },
    {
        infinitive: "work",
        portuguese: "trabalhar",
        type: "regular",
        difficulty: "beginner",
        conjugations: {
            present: {
                i: "work",
                you: "work",
                he_she_it: "works",
                we: "work",
                they: "work"
            },
            past: {
                i: "worked",
                you: "worked",
                he_she_it: "worked",
                we: "worked",
                they: "worked"
            },
            present_perfect: {
                i: "have worked",
                you: "have worked",
                he_she_it: "has worked",
                we: "have worked",
                they: "have worked"
            },
            future: {
                i: "will work",
                you: "will work",
                he_she_it: "will work",
                we: "will work",
                they: "will work"
            }
        },
        examples: {
            present: "I work in downtown Londrina.",
            past: "She worked late yesterday.",
            present_perfect: "We have worked together for five years.",
            future: "He will work from home tomorrow."
        }
    },
    {
        infinitive: "live",
        portuguese: "viver/morar",
        type: "regular",
        difficulty: "beginner",
        conjugations: {
            present: {
                i: "live",
                you: "live",
                he_she_it: "lives",
                we: "live",
                they: "live"
            },
            past: {
                i: "lived",
                you: "lived",
                he_she_it: "lived",
                we: "lived",
                they: "lived"
            },
            present_perfect: {
                i: "have lived",
                you: "have lived",
                he_she_it: "has lived",
                we: "have lived",
                they: "have lived"
            },
            future: {
                i: "will live",
                you: "will live",
                he_she_it: "will live",
                we: "will live",
                they: "will live"
            }
        },
        examples: {
            present: "I live in Belém, Pará.",
            past: "They lived in São Paulo before.",
            present_perfect: "She has lived here all her life.",
            future: "We will live in the United States."
        }
    },
    {
        infinitive: "say",
        portuguese: "dizer",
        type: "irregular",
        difficulty: "beginner",
        conjugations: {
            present: {
                i: "say",
                you: "say",
                he_she_it: "says",
                we: "say",
                they: "say"
            },
            past: {
                i: "said",
                you: "said",
                he_she_it: "said",
                we: "said",
                they: "said"
            },
            present_perfect: {
                i: "have said",
                you: "have said",
                he_she_it: "has said",
                we: "have said",
                they: "have said"
            },
            future: {
                i: "will say",
                you: "will say",
                he_she_it: "will say",
                we: "will say",
                they: "will say"
            }
        },
        examples: {
            present: "I say 'good morning' every day.",
            past: "He said he would come later.",
            present_perfect: "We have said this many times.",
            future: "She will say yes to the proposal."
        }
    },
    {
        infinitive: "tell",
        portuguese: "contar/dizer",
        type: "irregular",
        difficulty: "beginner",
        conjugations: {
            present: {
                i: "tell",
                you: "tell",
                he_she_it: "tells",
                we: "tell",
                they: "tell"
            },
            past: {
                i: "told",
                you: "told",
                he_she_it: "told",
                we: "told",
                they: "told"
            },
            present_perfect: {
                i: "have told",
                you: "have told",
                he_she_it: "has told",
                we: "have told",
                they: "have told"
            },
            future: {
                i: "will tell",
                you: "will tell",
                he_she_it: "will tell",
                we: "will tell",
                they: "will tell"
            }
        },
        examples: {
            present: "I tell stories to my children.",
            past: "She told me about her trip to Brazil.",
            present_perfect: "They have told us the truth.",
            future: "He will tell you everything tomorrow."
        }
    },
    {
        infinitive: "ask",
        portuguese: "perguntar",
        type: "regular",
        difficulty: "beginner",
        conjugations: {
            present: {
                i: "ask",
                you: "ask",
                he_she_it: "asks",
                we: "ask",
                they: "ask"
            },
            past: {
                i: "asked",
                you: "asked",
                he_she_it: "asked",
                we: "asked",
                they: "asked"
            },
            present_perfect: {
                i: "have asked",
                you: "have asked",
                he_she_it: "has asked",
                we: "have asked",
                they: "have asked"
            },
            future: {
                i: "will ask",
                you: "will ask",
                he_she_it: "will ask",
                we: "will ask",
                they: "will ask"
            }
        },
        examples: {
            present: "I ask questions when I don't understand.",
            past: "He asked for directions to the hotel.",
            present_perfect: "We have asked for help many times.",
            future: "She will ask the teacher tomorrow."
        }
    },
    {
        infinitive: "help",
        portuguese: "ajudar",
        type: "regular",
        difficulty: "beginner",
        conjugations: {
            present: {
                i: "help",
                you: "help",
                he_she_it: "helps",
                we: "help",
                they: "help"
            },
            past: {
                i: "helped",
                you: "helped",
                he_she_it: "helped",
                we: "helped",
                they: "helped"
            },
            present_perfect: {
                i: "have helped",
                you: "have helped",
                he_she_it: "has helped",
                we: "have helped",
                they: "have helped"
            },
            future: {
                i: "will help",
                you: "will help",
                he_she_it: "will help",
                we: "will help",
                they: "will help"
            }
        },
        examples: {
            present: "I help my mother with cooking.",
            past: "They helped us move to our new house.",
            present_perfect: "She has helped many students learn English.",
            future: "We will help you with your Portuguese."
        }
    },
    {
        infinitive: "try",
        portuguese: "tentar",
        type: "regular",
        difficulty: "beginner",
        conjugations: {
            present: {
                i: "try",
                you: "try",
                he_she_it: "tries",
                we: "try",
                they: "try"
            },
            past: {
                i: "tried",
                you: "tried",
                he_she_it: "tried",
                we: "tried",
                they: "tried"
            },
            present_perfect: {
                i: "have tried",
                you: "have tried",
                he_she_it: "has tried",
                we: "have tried",
                they: "have tried"
            },
            future: {
                i: "will try",
                you: "will try",
                he_she_it: "will try",
                we: "will try",
                they: "will try"
            }
        },
        examples: {
            present: "I try to exercise every day.",
            past: "He tried to call you yesterday.",
            present_perfect: "We have tried this restaurant before.",
            future: "She will try to arrive earlier tomorrow."
        }
    },
    {
        infinitive: "feel",
        portuguese: "sentir",
        type: "irregular",
        difficulty: "intermediate",
        conjugations: {
            present: {
                i: "feel",
                you: "feel",
                he_she_it: "feels",
                we: "feel",
                they: "feel"
            },
            past: {
                i: "felt",
                you: "felt",
                he_she_it: "felt",
                we: "felt",
                they: "felt"
            },
            present_perfect: {
                i: "have felt",
                you: "have felt",
                he_she_it: "has felt",
                we: "have felt",
                they: "have felt"
            },
            future: {
                i: "will feel",
                you: "will feel",
                he_she_it: "will feel",
                we: "will feel",
                they: "will feel"
            }
        },
        examples: {
            present: "I feel happy today.",
            past: "She felt nervous before the presentation.",
            present_perfect: "We have felt this way before.",
            future: "You will feel better after some rest."
        }
    },
    {
        infinitive: "give",
        portuguese: "dar",
        type: "irregular",
        difficulty: "beginner",
        conjugations: {
            present: {
                i: "give",
                you: "give",
                he_she_it: "gives",
                we: "give",
                they: "give"
            },
            past: {
                i: "gave",
                you: "gave",
                he_she_it: "gave",
                we: "gave",
                they: "gave"
            },
            present_perfect: {
                i: "have given",
                you: "have given",
                he_she_it: "has given",
                we: "have given",
                they: "have given"
            },
            future: {
                i: "will give",
                you: "will give",
                he_she_it: "will give",
                we: "will give",
                they: "will give"
            }
        },
        examples: {
            present: "I give English lessons to Brazilian students.",
            past: "She gave me a beautiful gift from Belém.",
            present_perfect: "We have given you all the information.",
            future: "He will give a presentation tomorrow."
        }
    },
    {
        infinitive: "put",
        portuguese: "colocar/pôr",
        type: "irregular",
        difficulty: "beginner",
        conjugations: {
            present: {
                i: "put",
                you: "put",
                he_she_it: "puts",
                we: "put",
                they: "put"
            },
            past: {
                i: "put",
                you: "put",
                he_she_it: "put",
                we: "put",
                they: "put"
            },
            present_perfect: {
                i: "have put",
                you: "have put",
                he_she_it: "has put",
                we: "have put",
                they: "have put"
            },
            future: {
                i: "will put",
                you: "will put",
                he_she_it: "will put",
                we: "will put",
                they: "will put"
            }
        },
        examples: {
            present: "I put my keys on the table.",
            past: "He put the book back on the shelf.",
            present_perfect: "We have put a lot of effort into this project.",
            future: "She will put the documents in order."
        }
    },
    {
        infinitive: "find",
        portuguese: "encontrar/achar",
        type: "irregular",
        difficulty: "beginner",
        conjugations: {
            present: {
                i: "find",
                you: "find",
                he_she_it: "finds",
                we: "find",
                they: "find"
            },
            past: {
                i: "found",
                you: "found",
                he_she_it: "found",
                we: "found",
                they: "found"
            },
            present_perfect: {
                i: "have found",
                you: "have found",
                he_she_it: "has found",
                we: "have found",
                they: "have found"
            },
            future: {
                i: "will find",
                you: "will find",
                he_she_it: "will find",
                we: "will find",
                they: "will find"
            }
        },
        examples: {
            present: "I find English grammar challenging.",
            past: "They found a great restaurant in Londrina.",
            present_perfect: "She has found her passion for teaching.",
            future: "You will find the answer in this book."
        }
    },
    {
        infinitive: "look",
        portuguese: "olhar/parecer",
        type: "regular",
        difficulty: "beginner",
        conjugations: {
            present: {
                i: "look",
                you: "look",
                he_she_it: "looks",
                we: "look",
                they: "look"
            },
            past: {
                i: "looked",
                you: "looked",
                he_she_it: "looked",
                we: "looked",
                they: "looked"
            },
            present_perfect: {
                i: "have looked",
                you: "have looked",
                he_she_it: "has looked",
                we: "have looked",
                they: "have looked"
            },
            future: {
                i: "will look",
                you: "will look",
                he_she_it: "will look",
                we: "will look",
                they: "will look"
            }
        },
        examples: {
            present: "I look at the sky every night.",
            past: "He looked through the window and saw the rain.",
            present_perfect: "We have looked everywhere for the keys.",
            future: "She will look into this matter tomorrow."
        }
    },
    {
        infinitive: "use",
        portuguese: "usar",
        type: "regular",
        difficulty: "beginner",
        conjugations: {
            present: {
                i: "use",
                you: "use",
                he_she_it: "uses",
                we: "use",
                they: "use"
            },
            past: {
                i: "used",
                you: "used",
                he_she_it: "used",
                we: "used",
                they: "used"
            },
            present_perfect: {
                i: "have used",
                you: "have used",
                he_she_it: "has used",
                we: "have used",
                they: "have used"
            },
            future: {
                i: "will use",
                you: "will use",
                he_she_it: "will use",
                we: "will use",
                they: "will use"
            }
        },
        examples: {
            present: "I use this app to learn English.",
            past: "She used her phone to call a taxi.",
            present_perfect: "We have used this method before.",
            future: "They will use the new software next week."
        }
    },
    {
        infinitive: "call",
        portuguese: "chamar/ligar",
        type: "regular",
        difficulty: "beginner",
        conjugations: {
            present: {
                i: "call",
                you: "call",
                he_she_it: "calls",
                we: "call",
                they: "call"
            },
            past: {
                i: "called",
                you: "called",
                he_she_it: "called",
                we: "called",
                they: "called"
            },
            present_perfect: {
                i: "have called",
                you: "have called",
                he_she_it: "has called",
                we: "have called",
                they: "have called"
            },
            future: {
                i: "will call",
                you: "will call",
                he_she_it: "will call",
                we: "will call",
                they: "will call"
            }
        },
        examples: {
            present: "I call my family every Sunday.",
            past: "He called the doctor yesterday.",
            present_perfect: "We have called several times.",
            future: "She will call you back later."
        }
    },
    {
        infinitive: "start",
        portuguese: "começar",
        type: "regular",
        difficulty: "beginner",
        conjugations: {
            present: {
                i: "start",
                you: "start",
                he_she_it: "starts",
                we: "start",
                they: "start"
            },
            past: {
                i: "started",
                you: "started",
                he_she_it: "started",
                we: "started",
                they: "started"
            },
            present_perfect: {
                i: "have started",
                you: "have started",
                he_she_it: "has started",
                we: "have started",
                they: "have started"
            },
            future: {
                i: "will start",
                you: "will start",
                he_she_it: "will start",
                we: "will start",
                they: "will start"
            }
        },
        examples: {
            present: "I start work at eight o'clock.",
            past: "She started learning English last year.",
            present_perfect: "We have started a new project.",
            future: "The movie will start at seven."
        }
    },
    {
        infinitive: "stop",
        portuguese: "parar",
        type: "regular",
        difficulty: "beginner",
        conjugations: {
            present: {
                i: "stop",
                you: "stop",
                he_she_it: "stops",
                we: "stop",
                they: "stop"
            },
            past: {
                i: "stopped",
                you: "stopped",
                he_she_it: "stopped",
                we: "stopped",
                they: "stopped"
            },
            present_perfect: {
                i: "have stopped",
                you: "have stopped",
                he_she_it: "has stopped",
                we: "have stopped",
                they: "have stopped"
            },
            future: {
                i: "will stop",
                you: "will stop",
                he_she_it: "will stop",
                we: "will stop",
                they: "will stop"
            }
        },
        examples: {
            present: "I stop at the red light.",
            past: "He stopped smoking last month.",
            present_perfect: "We have stopped working for today.",
            future: "The rain will stop soon."
        }
    },
    {
        infinitive: "turn",
        portuguese: "virar/tornar",
        type: "regular",
        difficulty: "intermediate",
        conjugations: {
            present: {
                i: "turn",
                you: "turn",
                he_she_it: "turns",
                we: "turn",
                they: "turn"
            },
            past: {
                i: "turned",
                you: "turned",
                he_she_it: "turned",
                we: "turned",
                they: "turned"
            },
            present_perfect: {
                i: "have turned",
                you: "have turned",
                he_she_it: "has turned",
                we: "have turned",
                they: "have turned"
            },
            future: {
                i: "will turn",
                you: "will turn",
                he_she_it: "will turn",
                we: "will turn",
                they: "will turn"
            }
        },
        examples: {
            present: "I turn left at the corner.",
            past: "She turned 25 last week.",
            present_perfect: "The weather has turned cold.",
            future: "He will turn the music down."
        }
    },
    {
        infinitive: "move",
        portuguese: "mover/mudar",
        type: "regular",
        difficulty: "beginner",
        conjugations: {
            present: {
                i: "move",
                you: "move",
                he_she_it: "moves",
                we: "move",
                they: "move"
            },
            past: {
                i: "moved",
                you: "moved",
                he_she_it: "moved",
                we: "moved",
                they: "moved"
            },
            present_perfect: {
                i: "have moved",
                you: "have moved",
                he_she_it: "has moved",
                we: "have moved",
                they: "have moved"
            },
            future: {
                i: "will move",
                you: "will move",
                he_she_it: "will move",
                we: "will move",
                they: "will move"
            }
        },
        examples: {
            present: "I move to a new apartment next month.",
            past: "They moved from Belém to São Paulo.",
            present_perfect: "We have moved three times this year.",
            future: "She will move closer to work."
        }
    },
    {
        infinitive: "play",
        portuguese: "jogar/tocar",
        type: "regular",
        difficulty: "beginner",
        conjugations: {
            present: {
                i: "play",
                you: "play",
                he_she_it: "plays",
                we: "play",
                they: "play"
            },
            past: {
                i: "played",
                you: "played",
                he_she_it: "played",
                we: "played",
                they: "played"
            },
            present_perfect: {
                i: "have played",
                you: "have played",
                he_she_it: "has played",
                we: "have played",
                they: "have played"
            },
            future: {
                i: "will play",
                you: "will play",
                he_she_it: "will play",
                we: "will play",
                they: "will play"
            }
        },
        examples: {
            present: "I play soccer every weekend.",
            past: "She played the guitar beautifully.",
            present_perfect: "We have played this game before.",
            future: "They will play in the championship."
        }
    },
    {
        infinitive: "run",
        portuguese: "correr",
        type: "irregular",
        difficulty: "beginner",
        conjugations: {
            present: {
                i: "run",
                you: "run",
                he_she_it: "runs",
                we: "run",
                they: "run"
            },
            past: {
                i: "ran",
                you: "ran",
                he_she_it: "ran",
                we: "ran",
                they: "ran"
            },
            present_perfect: {
                i: "have run",
                you: "have run",
                he_she_it: "has run",
                we: "have run",
                they: "have run"
            },
            future: {
                i: "will run",
                you: "will run",
                he_she_it: "will run",
                we: "will run",
                they: "will run"
            }
        },
        examples: {
            present: "I run in the park every morning.",
            past: "He ran a marathon in Londrina.",
            present_perfect: "We have run out of time.",
            future: "She will run for president."
        }
    }
];

// English tense names
const englishTenseNames = {
    present: { en: "Present Simple", pt: "Presente Simples" },
    past: { en: "Past Simple", pt: "Passado Simples" },
    present_perfect: { en: "Present Perfect", pt: "Presente Perfeito" },
    future: { en: "Future Simple", pt: "Futuro Simples" }
};

// English pronoun labels
const englishPronounLabels = {
    i: { en: "I", pt: "eu" },
    you: { en: "you", pt: "você" },
    he_she_it: { en: "he/she/it", pt: "ele/ela" },
    we: { en: "we", pt: "nós/a gente" },
    they: { en: "they", pt: "eles/elas/vocês" }
};
