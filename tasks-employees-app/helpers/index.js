const validateAreas = require('./validate-areas');
const validateRoles = require('./validate-roles');
const validateJobs = require('./validate-jobs');
const validateUsers = require('./validate-users');
const validateTasks = require('./validate-tasks');
const validateMessages = require('./validate-messages');

module.exports = {
    ...validateAreas,
    ...validateRoles,
    ...validateJobs,
    ...validateUsers,
    ...validateTasks,
    ...validateMessages
};