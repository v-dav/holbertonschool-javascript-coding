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

  static getAllStudentsByMajor(request, response) {
    const requestUrl = request.params.major;
    const match = requestUrl.match(/CS|SWE/);
    if (!match) {
      response.status(500);
      response.send('Major parameter must be CS or SWE');
    }
    readDatabase(path)
      .then((data) => {
				const namesList = data[match];
				response.status(200);
        response.send(`List: ${namesList.join(', ')}`);
      })
      .catch((err) => {
        response.status(500);
        response.send(err.message);
      });
  }
}
module.exports = StudentsController;
