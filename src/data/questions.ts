export type Question = {
	id: string;
	prompt: string;
	choices: string[];
	correctIndex: number;
	feedbackCorrect: string;
	feedbackIncorrect: string;
	reference?: string;
};

const questions: Question[] = [
	{
		id: 'q1',
		prompt: '¿Cuál es la combinación ideal que ayuda a disminuir eficazmente los síntomas físicos relacionados con el ciclo menstrual, como la tensión mamaria y la sensación de hinchazón?',
		choices: [
			'Drospirenona 3 mg + etinilestradiol 0,03 mg',
			'Dienogest 2 mg + etinilestradiol 0,03 mg',
			'Drospirenona 3 mg + etinilestradiol 0,02 mg'
		],
		correctIndex: 0,
		feedbackIncorrect: '¡Intenta de nuevo!',
		feedbackCorrect:
			'¡Correcto! La combinación de drospirenona 3 mg + etinilestradiol 0,03 mg, gracias al efecto antimineralocorticoide de la drospirenona, que disminuye los efectos relacionados con el sistema renina-angiotensina-aldosterona (SRAA) de retención de sodio y agua, ayuda a disminuir la tensión mamaria y la sensación de hinchazón.',
		reference:
			'Machado RB, Pompei Lde M, Giribela AG, et al. Drospirenone/ethinylestradiol: a review on efficacy and noncontraceptive benefits. Womens Health (Lond). 2011;7(1):19-30.'
	},
	{
		id: 'q2',
		prompt: '¿Cuál es la combinación hormonal que ayuda a disminuir la cantidad y duración de los sangrados menstruales?',
		choices: [
			'Dienogest 2 mg + etinilestradiol 0,03 mg',
			'Drospirenina 3 mg + etinilestradiol 0,02 mg',
			'Drospirenina 3 mg + etinilestradiol 0,03 mg'
		],
		correctIndex: 0,
		feedbackIncorrect: '¡Intenta de nuevo!',
		feedbackCorrect:
			'¡Correcto! Las usuarias de dienogest + etinilestradiol tienen una reducción en los días y la cantidad de sangrado gracias a la acción antiproliferativa sobre el endometrio, lo que beneficia a las mujeres con sangrados menstruales abundantes.',
		reference:
			'Pérez-Campos EF. Dienogest/etinilestradiol, anticonceptivo oral combinado. Cuestiones clínicas y prácticas. En información terapéutica. Siete Días Médicos. Revista de Atención Primaria. 2016;866:13-16.'
	},
	{
		id: 'q3',
		prompt: '¿Qué combinación hormonal es recomendable para las adolescentes, principalmente las que tienen mayor posibilidad de desapego al tratamiento?',
		choices: [
			'Drospirenona + etinilestradiol en forma oral',
			'Enantato de noretisterona + valerato de estradiol en forma inyectable mensual',
			'Acetato de ciproterona + etinilestradiol en forma oral'
		],
		correctIndex: 1,
		feedbackIncorrect: '¡Intenta de nuevo!',
		feedbackCorrect:
			'¡Correcto! Un estudio demostró que el inyectable mensual que combina enantato de noretisterona + valerato de estradiol tiene un muy buen perfil de aceptabilidad entre las adolescentes.',
		reference:
			'Vallejo-Maldonado MS. Anticonceptivos inyectables combinados. Ginecol Obstet Mex. 2020;88(Supl 1):S32-S41.'
	},
	{
		id: 'q4',
		prompt: '¿Cuál es el componente progestagénico con mayor potencia antiandrogénica, es decir, con la mayor capacidad de bloquear la acción de las hormonas masculinas, como la testosterona, en el cuerpo?',
		choices: ['Dienogest', 'Drospirenona', 'Acetato de ciproterona'],
		correctIndex: 2,
		feedbackIncorrect: '¡Intenta de nuevo!',
		feedbackCorrect:
			'¡Correcto! El acetato de ciproterona es la que tiene la mayor actividad antiandrogénica entre todas las progestinas, por eso, su uso está indicado en mujeres que presentan síntomas relacionados con el exceso de andrógenos, como el acné moderado-severo, el hirsutismo, la alopecia y la seborrea.',
		reference:
			'Bitzer J, Römer T, Lopes da Silva Filho A. The use of cyproterone acetate/ethinyl estradiol in hyperandrogenic skin symptoms – a review. Eur J Contracept Reprod Health Care. 2017;22(3):172-182.'
	},
	{
		id: 'q5',
		prompt: '¿Cuál es la combinación hormonal que evita fluctuaciones en el peso corporal?',
		choices: [
			'Acetato de ciproterona 2 mg + etinilestradiol 0,035 mg',
			'Drospirenona 3 mg + etinilestradiol 0,03 mg',
			'Dienogest 2 mg + etinilestradiol 0,02 mg'
		],
		correctIndex: 1,
		feedbackIncorrect: '¡Intenta de nuevo!',
		feedbackCorrect:
			'¡Correcto! La combinación de drospirenona 3 mg + etinilestradiol 0,03 mg ayuda a contrarrestar la influencia de la retención de líquidos inducida por estrógenos, lo que evita las fluctuaciones del peso corporal.',
		reference:
			'Machado RB, Pompei Lde M, Giribela AG, et al. Drospirenone/ethinylestradiol: a review on efficacy and noncontraceptive benefits. Womens Health (Lond). 2011;7(1):19-30.'
	},
	{
		id: 'q6',
		prompt: '¿Cuál es la combinación hormonal que ayuda a disminuir considerablemente el dolor menstrual y los sangrados intermenstruales?',
		choices: [
			'Drospirenona 3 mg + etinilestradiol 0,02 mg',
			'Acetato de ciproterona + etinilestradiol 0,03 mg',
			'Dienogest 2 mg + etinilestradiol 0,02 mg'
		],
		correctIndex: 2,
		feedbackIncorrect: '¡Intenta de nuevo!',
		feedbackCorrect:
			'¡Correcto! Las usuarias de dienogest + etinilestradiol notan una rápida mejoría del dolor menstrual incapacitante y una importante reducción de los sangrados intermenstruales. De hecho, con el uso continuo, el ciclo se regulariza.',
		reference:
			'Pérez E. Ethinylestradiol/Dienogest in Oral Contraception 2010. Drugs. 2010;70 (6):681-9.'
	},
	{
		id: 'q7',
		prompt: 'Estas son las principales razones por las cuales el inyectable mensual de enantato de noretisterona + valerato de estradiol tiene un buen perfil de tolerabilidad y aceptabilidad:',
		choices: [
			'No afecta el peso corporal, disminuye el dolor menstrual y no produce efectos negativos sobre los niveles de colesterol.',
			'Reduce los dolores de cabeza y protege contra las infecciones de transmisión sexual.',
			'No interfiere con la sexualidad y tiene efectos beneficiosos sobre la memoria.'
		],
		correctIndex: 0,
		feedbackIncorrect: '¡Intenta de nuevo!',
		feedbackCorrect:
			'¡Correcto! Además de la excelente eficacia anticonceptiva, enantato de noretisterona + valerato de estradiol se caracteriza por no influir negativamente en el metabolismo de los lípidos y reducir significativamente el dolor menstrual a lo largo de los ciclos de uso.',
		reference:
			'Von Kesseru E, Aydinlik S, Etchepareborda JJ. Multicentred, phase III clinical trial of norethisterone enanthate 50 mg plus estradiol valerate 5 mg as a monthly injectable contraceptive; final three-year report. Contraceptio. 1994;50(4):329-37.'
	},
	{
		id: 'q8',
		prompt: 'En mujeres con síndrome de ovario poliquístico, ¿cuál es la combinación hormonal que ayuda a disminuir el exceso de andrógenos?',
		choices: ['Dienogest + etinilestradiol', 'Acetato de ciproterona + etinilestradiol', 'Drospirenona + etinilestradiol'],
		correctIndex: 1,
		feedbackIncorrect: '¡Intenta de nuevo!',
		feedbackCorrect:
			'¡Correcto! Si bien la drospirenona y el dienogest tienen actividad antiandrogénica, el acetato de ciproterona, en combinación con etinilestradiol, proporciona un tratamiento eficaz para los síntomas cutáneos hiperandrogénicos relacionados con el síndrome de ovario poliquístico (SOP).',
		reference:
			'Ruan X, Kubba A, Aguilar A, et al. Use of cyproterone acetate/ethinylestradiol in polycystic ovary syndrome: rationale and practical aspects. Eur J Contracept Reprod Health Care. 2017 Jun;22(3):183-190.'
	},
	{
		id: 'q9',
		prompt: '¿Cuál es la combinación hormonal aprobada por la FDA para el tratamiento de los síntomas emocionales y físicos del trastorno disfórico premenstrual en mujeres que desean utilizar anticonceptivos hormonales?',
		choices: [
			'Dienogest 2 mg + etinilestradiol 0,02 mg',
			'Drospirenona 3 mg + etinilestradiol 0,02 mg',
			'Dienogest 2 mg + etinilestradiol 0,03 mg'
		],
		correctIndex: 1,
		feedbackIncorrect: '¡Intenta de nuevo!',
		feedbackCorrect:
			'¡Correcto! La combinación de drospirenona 3 mg + etinilestradiol 0,02 mg ha demostrado ser eficaz tanto para disminuir los síntomas como para mejorar el funcionamiento diario de las mujeres con trastorno disfórico premenstrual. Además, el esquema 24/4 proporciona un nivel más estable de hormonas exógenas a lo largo del ciclo, lo que contribuye a una mayor estabilidad emocional.',
		reference:
			'Bachmann G, Kopacz S. Drospirenone/ethinyl estradiol 3 mg/20 µg (24/4 day regimen): hormonal contraceptive choices - use of a fourth-generation progestin. Patient Prefer Adherence. 2009;3:259-64. Rapkin AJ, McDonald M, Winer SA. Ethinyl estradiol/drospirenone for the treatment of the emotional and physical symptoms of premenstrual dysphoric disorder. Womens Health (Lond). 2007;3(4):395-408.'
	},
	{
		id: 'q10',
		prompt: '¿Con cuál combinación hormonal las mujeres logran un control adecuado del ciclo menstrual y la mejoría de los signos de androgenización, como el acné leve-moderado, con menos efectos secundarios relacionados con los estrógenos?',
		choices: [
			'Dienogest 2 mg + etinilestradiol 0,02 mg',
			'Drospirenona 3 mg + etinilestradiol 0,03 mg',
			'Acetato de ciproterona + etinilestradiol 0,035 mg'
		],
		correctIndex: 0,
		feedbackIncorrect: '¡Intenta de nuevo!',
		feedbackCorrect:
			'¡Correcto! Las usuarias de dienogest + etinilestradiol, con una menor carga estrogénica (0,02 mg), logran un excelente control del ciclo menstrual y la reducción significativa de las lesiones de acné leve-moderado.',
		reference:
			'Palacio J, Caicedo D. Clinical behavior of a cohort of adult women with facial acne treated with combined oral contraceptive: ethinylestradiol 20 μg/dienogest 2 mg. Inter J Women Health. 2017;9:835-42.'
	}
];

export default questions;

