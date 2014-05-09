var mongoose = require('mongoose')
    , env = process.env.NODE_ENV || 'development'
    , config = require('../../config/config')[env]
    , Schema = mongoose.Schema;

var LeagueSchema = new Schema({
    restaurant: {type: String},
    phonenumber: {type: String},
        item1: {type: String},
        item2: {type: String},
        item3: {type: String},
        item4: {type: String},
        item5: {type: String},
        item6: {type: String},
        item7: {type: String},
        item8: {type: String},
        item9: {type: String},
        item10: {type: String},
        item11: {type: String},
        item12: {type: String},
        item13: {type: String},
        item14: {type: String},
        item15: {type: String},

    commissioner: {type: Schema.ObjectId, ref: 'User'}
});

LeagueSchema.statics = {
    load: function (id, cb) {
        this.findOne({ _id : id }).populate('commissioner').exec(cb);
    }
};

mongoose.model('League', LeagueSchema);
