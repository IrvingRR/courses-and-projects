const Area = require('../models/area');

const createArea = async (req, res) => {

    try {
        
        const data = req.body;
        const area = new Area(data);

        await area.save();
        res.status(200).json(area);

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Server error'
        });
    }

};

const updateArea = async (req, res) => {

    try {
        const { id } = req.params;
        const data = req.body;

        const area = await Area.findByIdAndUpdate(id, data, { new: true });
        await area.save();

        res.status(200).json(area);

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Server error'
        });
    }

};

const deleteArea = async (req, res) => {
    try {
        const { id } = req.params;
        const area = await Area.findByIdAndUpdate(id, { isDeleted: true }, { new: true });

        await area.save();
        res.status(200).json(area);

    } catch (error) {
        res.status(500).json({
            msg: 'Server error'
        });
    }
};

const getAreas = async (req, res) => {
    try {
        const { limit = 5, start = 0 } = req.params;

        const query = { isDeleted: false };

        const requests = await Promise.all([
        Area.find(query).skip(start).limit(limit),
        Area.countDocuments(query) 
        ]);

        const [areas, total] = requests;
        
        res.json({
            total, areas
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Server error'
        });
    }
};

const getArea = async (req, res) => {
    try {
        const { id } = req.params;
        const area = await Area.findById(id);
        res.json(area);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Server error'
        });
    }
}

module.exports = {  
    createArea,
    updateArea,
    deleteArea,
    getAreas,
    getArea
};