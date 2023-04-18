const { searchUsers, searchAreas, searchRoles, searchTasks, searchJobs } = require('../helpers/searchs');

const validCollections  = [
    'users',
    'areas',
    'roles',
    'jobs',
    'tasks'
];

const search = async (req, res) => {

    const { collection, term } = req.params;

    if(!validCollections.includes(collection)) {
        return res.status(400).json({ msg: `The valid collections are: ${validCollections}` });
    }

    switch (collection) {
        case 'users':
            searchUsers(term, res);
        break;

        case 'areas':
            searchAreas(term, res);
        break;

        case 'roles':
            searchRoles(term, res);
        break;

        case 'jobs':
            searchJobs(term, res);
        break;

        case 'tasks':
            searchTasks(term, res);
        break;
    
        default:
            res.status(500).json('I forgot create this validation');
            break;
    }

};

module.exports = {
    search
};