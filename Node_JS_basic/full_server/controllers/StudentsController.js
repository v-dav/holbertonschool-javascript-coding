const readDatabase = require('../utils');

const path = process.argv[2].toString();

class StudentsController {
	static getAllStudents(request, response) {
		readDatabase(path)
			.then((data) => {
				const fields = Object.keys(data).sort();
				const results = ['This is the list of our students'];
				for (const field of fields) {
					const names = data[field];
					const count = names.length;
					const list = names.join(', ');
					results.push(`Number of students in ${field}: ${count}. List: ${list}`);
				}
				response.status(200);
				response.send(results.join('\n'));
			})
			.catch((err) => {
				response.status(500);
				response.send(err.message);
			});
	}

	static async getAllStudentsByMajor(request, response) {
		const { major } = request.params;

		if (major !== 'CS' && major !== 'SWE') {
			response.status(500).send('Major parameter must be CS or SWE');
			return;
		}

		try {
			const database = await readDatabase('./database.csv');
			const students = database[major.toUpperCase()] || [];

			response.status(200).send(`List: ${students.join(', ')}`);
		} catch (error) {
			response.status(500).send('Cannot load the database');
		}
	}
}
module.exports = StudentsController;
