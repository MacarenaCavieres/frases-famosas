let citas = [
    {
        texto: "No hay que ir para atrás ni para darse impulso",
        autor: "Lao Tsé",
    },
    {
        texto: "No hay caminos para la paz; la paz es el camino ",
        autor: "Mahatma Gandhi",
    },
    {
        texto: "Haz el amor y no la guerra ",
        autor: "John Lennon",
    },
    {
        texto: "Para trabajar basta estar convencido de una cosa: que trabajar es menos aburrido que divertirse ",
        autor: "Charles Baudelaire",
    },
    {
        texto: "Lo peor que hacen los malos es obligarnos a dudar de los buenos ",
        autor: "Jacinto Benavente",
    },
    {
        texto: "Las guerras seguirán mientras el color de la piel siga siendo más importante que el de los ojos ",
        autor: "Bob Marley",
    },
    {
        texto: "Aprende a vivir y sabrás morir bien ",
        autor: "Confucio",
    },
    {
        texto: "Cada día sabemos más y entendemos menos ",
        autor: "Albert Einstein",
    },
    {
        texto: "El mundo no está en peligro por las malas personas sino por aquellas que permiten la maldad ",
        autor: "Albert Einstein",
    },
    {
        texto: "La medida del amor es amar sin medida ",
        autor: "San Agustín",
    },
    {
        texto: "No hay nada que un hombre no sea capaz de hacer cuando una mujer le mira ",
        autor: "Casanova",
    },
    {
        texto: "Dar el ejemplo no es la principal manera de influir sobre los demás; es la única manera",
        autor: "Albert Einstein",
    },
    {
        texto: " El dinero no puede comprar la vida",
        autor: "Bob Marley",
    },
    {
        texto: "Si es bueno vivir, todavía es mejor soñar, y lo mejor de todo, despertar",
        autor: "Antonio Machado",
    },
    {
        texto: "La mayor declaración de amor es la que no se hace; el hombre que siente mucho, habla poco ",
        autor: "Platón",
    },
    {
        texto: "Si das pescado a un hombre hambriento lo nutres durante una jornada. Si le enseñas a pescar, le nutrirás toda su vida ",
        autor: "Lao Tsé",
    },
    {
        texto: "El poder no cambia a las personas, solo revela quiénes son realmente ",
        autor: "Meryl Streep",
    },
    {
        texto: "Ningún hombre es lo bastante bueno para gobernar a otros sin su consentimiento",
        autor: "Abraham Lincoln",
    },
    {
        texto: "Todo lo que se come sin necesidad se roba al estómago de los pobres",
        autor: "Mahatma Gandhi",
    },
    {
        texto: "Vivir sola es como estar en una fiesta donde nadie te hace caso",
        autor: "Marilyn Monroe",
    },
    {
        texto: "El cuerpo humano es el carruaje; el yo, el hombre que lo conduce; el pensamiento son las riendas, y los sentimientos, los caballos",
        autor: "Platón",
    },
    {
        texto: "Estar preparado es importante, saber esperarlo es aún más, pero aprovechar el momento adecuado es la clave de la vida",
        autor: "Arthur Schnitzler",
    },
    {
        texto: "No estoy tan enamorado de mis propias opiniones que ignore lo que los demás puedan pensar acerca de ellas ",
        autor: "Copérnico",
    },
    {
        texto: "La más estricta justicia no creo que sea siempre la mejor política",
        autor: "Abraham Lincoln",
    },
    {
        texto: "El sabio no dice nunca todo lo que piensa, pero siempre piensa todo lo que dice",
        autor: "Aristóteles",
    },
    {
        texto: "Hay dos cosas que son infinitas: el universo y la estupidez humana; de la primera no estoy muy seguro",
        autor: "Albert Einstein",
    },
    {
        texto: "El nacimiento y la muerte no son dos estados distintos, sino dos aspectos del mismo estado",
        autor: "Mahatma Gandhi",
    },
    {
        texto: "Lo que importa verdaderamente en la vida no son los objetivos que nos marcamos, sino los caminos que seguimos para lograrlo",
        autor: "Peter Bamm",
    },
    {
        texto: "El mundo es bello, pero tiene un defecto llamado hombre",
        autor: "Friedrich Nietzsche",
    },
    {
        texto: "La pereza viaja tan despacio que la pobreza no tarda en alcanzarla",
        autor: "Benjamin Franklin",
    },
    {
        texto: "Una velada en que todos los presentes estén absolutamente de acuerdo es una velada perdida",
        autor: "Albert Einstein",
    },
    {
        texto: "Pienso, luego existo",
        autor: "René Descartes",
    },
    {
        texto: "Lo que no te mata, te hace más fuerte",
        autor: "Friedrich Nietzsche",
    },
    {
        texto: "No abras los labios si no estás seguro de que lo que vas a decir es más hermoso que el silencio",
        autor: "Proverbio árabe",
    },
    {
        texto: "De todos los animales de la creación el hombre es el único que bebe sin tener sed, come sin tener hambre y habla sin tener nada que decir",
        autor: "John Steinbeck",
    },
    {
        texto: "La esperanza es un estimulante vital muy superior a la suerte",
        autor: "Friedrich Nietzsche",
    },
    {
        texto: "Un hermano puede no ser un amigo, pero un amigo será siempre un hermano",
        autor: "Benjamin Franklin",
    },
    {
        texto: "Sólo puede ser feliz siempre el que sepa ser feliz con todo",
        autor: "Confucio",
    },
    {
        texto: "Ninguna persona merece tus lágrimas, y quien se las merezca no te hará llorar",
        autor: "Gabriel García Márquez",
    },
    {
        texto: "De humanos es errar y de necios permanecer en el error",
        autor: "Marco Tulio Cicerón",
    },
    {
        texto: "Algunas personas son tan falsas que ya no distinguen que lo que piensan es justamente lo contrario de lo que dicen",
        autor: "Marcel Aymé",
    },
    {
        texto: "La verdadera sabiduría está en reconocer la propia ignorancia",
        autor: "Sócrates",
    },
    {
        texto: "La peor experiencia es la mejor maestra",
        autor: "Kovo",
    },
    {
        texto: "La Educación es el pasaporte hacia el futuro, el mañana pertenece a aquellos que se preparan para él en el día de hoy",
        autor: "Malcolm X",
    },
    {
        texto: "Los amigos se convierten con frecuencia en ladrones de nuestro tiempo",
        autor: "Platón",
    },
    {
        texto: "No permitas que ningún ser humano te haga caer tan bajo como para odiarle",
        autor: "Martin Luther King",
    },
    {
        texto: "No puedo esperar a hacerlo, quiero hacerlo ahora, quiero que ocurra si va a ocurrir",
        autor: "Georgia O'Keeffe",
    },
    {
        texto: "Un amigo de todos es una amigo de nadie",
        autor: "Aristóteles",
    },
    {
        texto: "Hace falta toda una vida para aprender a vivir",
        autor: "Séneca",
    },
    {
        texto: "No pain no gain",
        autor: "Benjamín Franklin",
    },
];
