const seriesData = [
    {
        id: 1,
        title: 'Barreras del Corazón',
        image: process.env.PUBLIC_URL + '/BarrerasDelCorazon/Poster.webp',
        description: '«No importa cuánto tiempo pasemos juntos, nunca llegaré a ser especial para ti». Mejores amigos de la infancia. Dos mitades de un todo. El guay e inteligente que es bueno en casi todo, y su amigo mediocre y tonto que lucha por hacer algo bien: Yamato y Kakeru. Siempre al lado del otro, pero no juntos como realmente quisieran. Por mucho que lo intenten, sus corazones no llegan el uno al otro…',
        date: '27/09/2023',
        numChapters: 8,
        episodes: [
            {
                number: 1,
                thumbnail: process.env.PUBLIC_URL + '/BarrerasDelCorazon/Episodio01.webp',
                duration: '00:20:30',
                description: 'Un día, Kakeru —un estudiante al que no le va muy bien en la escuela— le hace una pregunta complicada a su mejor amigo y compañero de clase...'
            },
            {
                number: 2,
                thumbnail: process.env.PUBLIC_URL + '/BarrerasDelCorazon/Episodio02.webp',
                duration: '00:20:30',
                description: 'Después de la cita en grupo, las cosas se ponen incómodas entre los dos mejores amigos. Kakeru defiende con uñas y dientes a Yamato cuando sus compañeros de clase hablan mal de él.'
            },
            {
                number: 3,
                thumbnail: process.env.PUBLIC_URL + '/BarrerasDelCorazon/Episodio03.webp',
                duration: '00:20:30',
                description: 'Kakeru acompaña a su madre a hacer unas compras y se encuentra con Akane. Cuando Yamato los ve juntos, los celos lo impulsan a confrontar a Kakeru.'
            },
            {
                number: 4,
                thumbnail: process.env.PUBLIC_URL + '/BarrerasDelCorazon/Episodio04.webp',
                duration: '00:20:30',
                description: 'La actitud indiferente de Yamato deja confundido a Kakeru. Durante un viaje escolar a Kioto, los dos amigos se quedan juntos observando el cielo nocturno.'
            },
            {
                number: 5,
                thumbnail: process.env.PUBLIC_URL + '/BarrerasDelCorazon/Episodio05.webp',
                duration: '00:20:30',
                description: 'Ante la insistencia de Fujino, Kakeru acompaña a Akane en su paseo por Kioto, pero no deja de pensar en la promesa que le hizo a Yamato en la azotea de la escuela...'
            },
            {
                number: 6,
                thumbnail: process.env.PUBLIC_URL + '/BarrerasDelCorazon/Episodio06.webp',
                duration: '00:20:30',
                description: 'Al parecer, Yamato no recuerda que besó a Kakeru y le confesó sus sentimientos durante el viaje escolar. Desconcertado, Kakeru decide terminar con su amistad.'
            },
            {
                number: 7,
                thumbnail: process.env.PUBLIC_URL + '/BarrerasDelCorazon/Episodio07.webp',
                duration: '00:20:30',
                description: 'Yamato intenta animar a su inseguro amigo. Más tarde, Kakeru decide participar de una tradición escolar y expresar sus sentimientos a través de un regalo.'
            },
            {
                number: 8,
                thumbnail: process.env.PUBLIC_URL + '/BarrerasDelCorazon/Episodio08.webp',
                duration: '00:20:30',
                description: 'Yamato y Kakeru deciden darse una segunda oportunidad y tener una cita en Nochebuena. Pero un instante antes del encuentro, un nuevo obstáculo se interpone en el camino.'
            },
        ],
    },
    {
        id: 2,
        title: 'My School President',
        image: process.env.PUBLIC_URL + '/MySchoolPresident/Poster.webp',
        description: 'Descripción de My School President.',
        episodes: [
            {
                number: 1,
                thumbnail: process.env.PUBLIC_URL + 'https://1.vikiplatform.com/v/1231121v/f00c2a5a17.jpg',
                duration: '01:03:23',
            },
            // Agrega más episodios según sea necesario
        ],
    },
    {
        id: 3,
        title: 'Taikan Yohou',
        image: process.env.PUBLIC_URL + '/TaikanYohou/Poster.webp',
        description: 'El apuesto y popular meteorólogo Segasaki es en realidad un tirano en casa. Yoh, un artista de ero-manga en apuros lo sabe muy bien. Esto se debe a que los dos viven juntos. Más que eso, ¡es porque cocina y limpia para Segasaki! No es de extrañar que, a cambio de que se le proporcione comida, debe "obedecer todo lo que dice Segasaki". Lo que surge de tal contrato es?',
        date: '11/08/2023',
        numChapters: 8,
        episodes: [
            {
                number: 1,
                thumbnail: process.env.PUBLIC_URL + '/TaikanYohou/Episode1Thumbnail.webp',
                duration: '60 minutos',
            },
            // Agrega más episodios según sea necesario
        ],
    },
    {
        id: 4,
        title: 'Cherry Magic (Thailand)',
        image: process.env.PUBLIC_URL + '/CherryMagic(Thailand)/Poster.webp',
        description: 'Achi llegó a la edad de 30 años siendo virgen por lo que obtuvo el poder d leer la mente de las personas. Él es un empleado de oficina y accidentalmente toca a Karan, el chico guapo más conocido de la compañía, descubriendo asi que Karan está enamorado de él. Que hará ahora Achi?',
        date: '11/08/2023',
        numChapters: 8,
        episodes: [
            {
                number: 1,
                thumbnail: process.env.PUBLIC_URL + '/TaikanYohou/Episode1Thumbnail.webp',
                duration: '60 minutos',
            },
            // Agrega más episodios según sea necesario
        ],
    },
    {
        id: 4,
        title: 'Denji Sentai Megaranger',
        image: process.env.PUBLIC_URL + '/DenjiSentaiMegaranger/Poster.webp',
        description: 'Achi llegó a la edad de 30 años siendo virgen por lo que obtuvo el poder d leer la mente de las personas. Él es un empleado de oficina y accidentalmente toca a Karan, el chico guapo más conocido de la compañía, descubriendo asi que Karan está enamorado de él. Que hará ahora Achi?',
        date: '14/02/1997',
        numChapters: 51,
        episodes: [
            {
                number: 1,
                thumbnail: process.env.PUBLIC_URL + '/TaikanYohou/Episode1Thumbnail.webp',
                duration: '60 minutos',
            },
            // Agrega más episodios según sea necesario
        ],
    },
];

export default seriesData;