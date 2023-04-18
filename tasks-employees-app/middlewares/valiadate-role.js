const validateIsAdmin = (req, res, next) => {
    // Validating if user is authtenticate and if the token is valid
    if(!req.user) {
        return res.status(500).json({ 
            msg: 'You want to verify the role without validating the token first'
         });
    }

    const { role, name } = req.user;

    // verifying the role is admin or super admin
    
    if(role !== 'SUPER_ADMIN_ROLE' && role !== 'ADMIN_ROLE') {
        return res.status(401).json({
            msg: `${ name } is not an admin - Can't do this`
        });
    }

    next();
};

const validateIsSuperAdmin = (req, res, next) => {

    if(!req.user) {
        return res.status(500).json({ 
            msg: 'You want to verify the role without validating the token first'
         });
    }

    const { role, name } = req.user;

    // verifying the role is admin or super admin
    
    if(role !== 'SUPER_ADMIN_ROLE') {
        return res.status(401).json({
            msg: `${ name } is not an super admin - Can't do this`
        });
    }

    next();

};


module.exports = {
    validateIsAdmin,
    validateIsSuperAdmin
};