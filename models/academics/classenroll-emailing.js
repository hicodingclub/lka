let replacement = {
  name: 'user',
};

const templates = [
  {
    templateName: 'New Class Enrollment Received (admin)',
    //fromEmail: '', // use default one
    toEmails: ['sampleemailxibinliu@gmail.com'],
    subject: 'New Class Enrollment Received',
    content: `
  Hello<br/>
  A new class {{enrollment}} has been received!<br/><br/>

  Class: {{class}}<br/>
  Student(s): {{students}}
  <br/><br/>

  Please process the enrollment.
  <br/><br/>
  LKA
  `,
    tag: 'academic-classenroll-received-admin',
  },
  {
    templateName: 'New Class Enrollment Received (user)',
    //fromEmail: '', // use default one
    toEmails: ['sampleemailxibinliu@gmail.com'],
    subject: 'New Class Enrollment Received',
    content: `
  Hello {{user}}<br/>
  Your new class {{enrollment}} has been received!<br/><br/>

  Class: {{class}}<br/>
  Student(s): {{students}}<br/><br/>

  We are processing the enrollment. Please make payment if you haven't done it yet.
  <br/><br/>
  Thank you!<br/>
  LKA
  `,
    tag: 'academic-classenroll-received-user',
  },
];

const tab = '&nbsp;&nbsp;&nbsp;&nbsp;';
function getPubLink(moduleName, schemaName, obj) {
  // obj is an array with [text, id]
  return `<a href="${process.env.SERVER_URL}/${moduleName}/${schemaName}/details/${obj[1]}">${obj[0]}</a>`
}
function getAdmLink(moduleName, schemaName, obj) {
  // obj is an array with [text, id]
  return `<a href="${process.env.ADMIN_SERVER_URL}/${moduleName}/${schemaName}/details/${obj[1]}">${obj[0]}</a>`
}

async function sendEmailsForEnroll(
  emailer,
  data,
  replacement,
  emailerObj,
  restController
) {
  let studentIDs = data['student'];
  let classID = data['class'];
  let memberID = data['member']
  if (!studentIDs || !classID || !memberID) {
    console.error('enrollment data is incomplete.');
    return;
  }

  let enrollment = ['enrollment', data['_id']];
  let students = [];
  let clas;
  let member;
  let memberEmail;
  try {
    for (let [i, id] of studentIDs.entries()) {
      let s = await restController.ModelExecute(
        'Student',
        'findOne',
        { _id: id } //search criteria
      );
      students[i] = [`${s['first_name']} ${s['last_name']}`, s['_id']];
    }
    let c = await restController.ModelExecute(
      'Class',
      'findOne',
      { _id: classID } //search criteria
    );
    clas = [c['title'], c['_id']];
    let m = await restController.ModelExecute(
      'Member',
      'findOne',
      { _id: memberID } //search criteria
    );
    member = [`${m['firstname'] || 'user'}`, m['_id']];
    memberEmail = m['email'];
  } catch (err) {
    console.error('failed to fetch class, students, or member: ', err);
    return;
  }
  // send emails to admin
  let tagAdmin = 'academic-classenroll-received-admin';
  let objAdmin = {
    class: getAdmLink('academics', 'class', clas),
    students: students.map(x=>getAdmLink('academics', 'student', x)).join(', '),
    enrollment: getAdmLink('academics', 'classenroll', enrollment),
  };
  // don't specify the "to" email. Use the configured ones from the template.
  emailer
    .sendEmailTemplate([], tagAdmin, replacement, [objAdmin])
    .then(
      // result: {success: 1, fail: 0, pending: 0, errors: []}
      (result) => {
        if (result.errors.length > 0) {
          console.error('Error to send email: ', result.errors);
        }
      }
    )
    .catch((err) => {
      console.error('Error to send email: ', err);
    });
  
  // send emails to user
  let tagUser = 'academic-classenroll-received-user';
  let objUser = {
    user: member[0],
    class: getPubLink('academics', 'class', clas),
    students: students.map(x=>getPubLink('academics', 'student', x)).join(', '),
    enrollment: getPubLink('academics', 'classenroll', enrollment),
  };
  emailer
    .sendEmailTemplate([memberEmail], tagUser, replacement, [objUser])
    .then(
      // result: {success: 1, fail: 0, pending: 0, errors: []}
      (result) => {
        if (result.errors.length > 0) {
          console.error('Error to send email: ', result.errors);
        }
      }
    )
    .catch((err) => {
      console.error('Error to send email: ', err);
    });  
}

const emailer = {
  replacement,
  templates,
  hooks: {
    insert: async (emailer, data, replacement, emailerObj, restController) => {
      sendEmailsForEnroll(
        emailer,
        data,
        replacement,
        emailerObj,
        restController
      );
    },
    update: undefined,
  },
};

module.exports = {
  emailer,
};
