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
		prompt: '¿Cuál anticonceptivo oral ayuda mejor a disminuir la hinchazón y el dolor en los senos durante el ciclo menstrual?',
		choices: [
			'MIA (drospirenona 3 mg + etinilestradiol 0,03 mg)',
			'Bellaface (dienogest 2 mg + etinilestradiol 0,03 mg)',
			'PostDay 1 (levonorgestrel 1,5 mg)'
		],
		correctIndex: 0,
		feedbackIncorrect: '¡Intenta de nuevo!',
		feedbackCorrect:
			'¡Correcto! La combinación de drospirenona + etinilestradiol, en dosis normal, evita que el cuerpo retenga líquidos, lo que reduce la molestia en los senos y la sensación de hinchazón.',
		reference:
			'Machado RB, Pompei Lde M, Giribela AG, et al. Drospirenone/ethinylestradiol: a review on efficacy and noncontraceptive benefits. Womens Health (Lond). 2011;7(1):19-30.'
	},
	{
		id: 'q2',
		prompt: '¿Qué anticonceptivo oral ayuda a que los sangrados menstruales sean más cortos y menos abundantes?',
		choices: [
			'Bellaface (dienogest 2 mg + etinilestradiol 0,03 mg)',
			'MIA (drospirenona 3 mg + etinilestradiol 0,03 mg)',
			'PostDay 1 (levonorgestrel 1,5 mg)'
		],
		correctIndex: 0,
		feedbackIncorrect: '¡Intenta de nuevo!',
		feedbackCorrect:
			'¡Correcto! El dienogest, en combinación con etinilestradiol, disminuye la cantidad de sangrado y los días de período menstrual.',
		reference:
			'Pérez-Campos EF. Dienogest/etinilestradiol, anticonceptivo oral combinado. Cuestiones clínicas y prácticas. En información terapéutica. Siete Días Médicos. Revista de Atención Primaria. 2016;866:13-16.'
	},
	{
		id: 'q3',
		prompt: '¿Qué opción anticonceptiva es más práctica para las adolescentes que suelen olvidar las pastillas?',
		choices: [
			'MIA (drospirenona 3 mg + etinilestradiol 0,03 mg)',
			'Nofertyl (inyectable mensual de noretisterona 50 mg + valerato de estradiol 5 mg)',
			'Bellaface (dienogest 2 mg + etinilestradiol 0,03 mg)'
		],
		correctIndex: 1,
		feedbackIncorrect: '¡Intenta de nuevo!',
		feedbackCorrect:
			'¡Correcto! Es más fácil de cumplir porque solo se aplica una vez al mes, lo cual se traduce en un muy buen perfil de aceptabilidad entre las adolescentes.',
		reference:
			'Vallejo-Maldonado MS. Anticonceptivos inyectables combinados. Ginecol Obstet Mex. 2020;88(Supl 1):S32-S41.'
	},
	{
		id: 'q4',
		prompt: '¿Cuál opción está indicada como anticonceptivo de emergencia dentro de las 72 horas luego de haber mantenido relaciones sexuales sin protección?',
		choices: [
			'MIA 20 (drospirenona 3 mg + etinilestradiol 0,02 mg)',
			'Bellaface (dienogest 2 mg + etinilestradiol 0,03 mg)',
			'PostDay 1 (levonorgestrel 1,5 mg)'
		],
		correctIndex: 2,
		feedbackIncorrect: '¡Intenta de nuevo!',
		feedbackCorrect:
			'¡Correcto! PostDay (levonorgestrel 1,5 mg) es un método anticonceptivo de emergencia que ayuda a prevenir el embarazo antes de que comience, siempre y cuando se tome dentro de las 72 horas siguientes luego de haber mantenido relaciones sexuales sin protección o cuando el anticonceptivo habitual ha fallado. Debido a que es un método de respaldo, no debe utilizarse como un método anticonceptivo habitual.',
		reference:
			'International Consortium for Emergency Contraception, International Federation of Gynecology and Obstetrics. Emergency Contraceptive Pills. Medical and Service Delivery Guidance. 2018.'
	},
	{
		id: 'q5',
		prompt: '¿Cuál anticonceptivo oral ayuda a evitar cambios de peso relacionados con la retención de líquidos?',
		choices: [
			'PostDay 1 (levonorgestrel 1,5 mg)',
			'MIA (drospirenona 3 mg + etinilestradiol 0,03 mg)',
			'Bellaface (dienogest 2 mg + etinilestradiol 0,03 mg)'
		],
		correctIndex: 1,
		feedbackIncorrect: '¡Intenta de nuevo!',
		feedbackCorrect:
			'¡Correcto! La combinación de drospirenona 3 mg + etinilestradiol 0,03 mg previene la retención de líquidos, lo que ayuda a mantener el peso más estable durante todo el ciclo.',
		reference:
			'Machado RB, Pompei Lde M, Giribela AG, et al. Drospirenone/ethinylestradiol: a review on efficacy and noncontraceptive benefits. Womens Health (Lond). 2011;7(1):19-30.'
	},
	{
		id: 'q6',
		prompt: '¿Qué anticonceptivo oral ayuda a disminuir el dolor menstrual fuerte y los sangrados fuera del período?',
		choices: [
			'MIA 20 (drospirenona 3 mg + etinilestradiol 0,02 mg)',
			'MIA (drospirenona 3 mg + etinilestradiol 0,03 mg)',
			'Bellaface (dienogest 2 mg + etinilestradiol 0,03 mg)'
		],
		correctIndex: 2,
		feedbackIncorrect: '¡Intenta de nuevo!',
		feedbackCorrect:
			'¡Correcto! Las usuarias de dienogest + etinilestradiol notan una rápida mejoría del dolor menstrual incapacitante y una importante reducción de los sangrados fuera del período. De hecho, con el uso continuo, el ciclo se regulariza.',
		reference:
			'Pérez E. Ethinylestradiol/Dienogest in Oral Contraception 2010. Drugs. 2010;70 (6):681-9.'
	},
	{
		id: 'q7',
		prompt: '¿Por qué el inyectable mensual Nofertyl (noretisterona + valerato de estradiol) es bien aceptado?',
		choices: [
			'No altera el peso, disminuye el dolor menstrual y no afecta el colesterol.',
			'Reduce los dolores de cabeza y protege contra las infecciones de transmisión sexual.',
			'No interfiere con la sexualidad y tiene efectos beneficiosos sobre la memoria.'
		],
		correctIndex: 0,
		feedbackIncorrect: '¡Intenta de nuevo!',
		feedbackCorrect:
			'¡Correcto! Además de la excelente eficacia anticonceptiva, Nofertyl no afecta negativamente el metabolismo y ayuda a reducir el dolor menstrual.',
		reference:
			'Von Kesseru E, Aydinlik S, Etchepareborda JJ. Multicentred, phase III clinical trial of norethisterone enanthate 50 mg plus estradiol valerate 5 mg as a monthly injectable contraceptive; final three-year report. Contraceptio. 1994;50(4):329-37.'
	},
	{
		id: 'q8',
		prompt: '¿Cómo actúa el método anticonceptivo de emergencia PostDay (levonorgestrel 1,5 mg)?',
		choices: [
			'Interfiriendo con el desarrollo del embarazo.',
			'Retrasando la ovulación.',
			'Interfiriendo con el proceso de implantación.'
		],
		correctIndex: 1,
		feedbackIncorrect: '¡Intenta de nuevo!',
		feedbackCorrect:
			'¡Correcto! PostDay (levonorgestrel 1,5 mg) retrasa temporalmente la ovulación. Esto quiere decir que actúa impidiendo la liberación de un óvulo, de tal manera que este no entre en contacto con el espermatozoide. Al no haber óvulo, no se produce la fertilización y, por lo tanto, no hay embarazo.',
		reference:
			'International Consortium for Emergency Contraception, International Federation of Gynecology and Obstetrics. Emergency Contraceptive Pills. Medical and Service Delivery Guidance. 2018.'
	},
	{
		id: 'q9',
		prompt: '¿Cuál es el anticonceptivo oral aprobado por la FDA para el tratamiento de los síntomas emocionales y físicos del trastorno disfórico premenstrual?',
		choices: [
			'MIA (drospirenona 3 mg + etinilestradiol 0,03 mg)',
			'MIA 20 (drospirenona 3 mg + etinilestradiol 0,02 mg)',
			'Bellaface (dienogest 2 mg + etinilestradiol 0,03 mg)'
		],
		correctIndex: 1,
		feedbackIncorrect: '¡Intenta de nuevo!',
		feedbackCorrect:
			'¡Correcto! La drospirenona, en combinación con dosis baja de etinilestradiol, ayuda a mejorar tanto los síntomas físicos como emocionales del trastorno disfórico premenstrual, al mantener niveles hormonales más estables.',
		reference:
			'Bachmann G, Kopacz S. Drospirenone/ethinyl estradiol 3 mg/20 µg (24/4 day regimen): hormonal contraceptive choices - use of a fourth-generation progestin. Patient Prefer Adherence. 2009;3:259-64. Rapkin AJ, McDonald M, Winer SA. Ethinyl estradiol/drospirenone for the treatment of the emotional and physical symptoms of premenstrual dysphoric disorder. Womens Health (Lond). 2007;3(4):395-408.'
	},
	{
		id: 'q10',
		prompt: '¿Con cuál anticonceptivo las mujeres logran un buen control del ciclo, con menos días de duración y cantidad de sangrado y la mejoría del acné leve-moderado?',
		choices: [
			'Bellaface (dienogest 2 mg + etinilestradiol 0,03 mg)',
			'MIA (drospirenona 3 mg + etinilestradiol 0,03 mg)',
			'Nofertyl (inyectable mensual de noretisterona 50 mg + valerato de estradiol 5 mg)'
		],
		correctIndex: 0,
		feedbackIncorrect: '¡Intenta de nuevo!',
		feedbackCorrect:
			'¡Correcto! Las usuarias de dienogest + etinilestradiol, logran un excelente control del ciclo menstrual y la mejoría del acné leve-moderado gracias a las propiedades del dionegest sobre el endometrio y la piel.',
		reference:
			'Pérez-Campos EF. Dienogest/etinilestradiol, anticonceptivo oral combinado. Cuestiones clínicas y prácticas. En información terapéutica. Siete Días Médicos. Revista de Atención Primaria. 2016;866:13-16.'
	}
];

export default questions;

