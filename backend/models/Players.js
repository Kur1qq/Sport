const mongoose = require('mongoose');
const { Schema } = mongoose;

const TeamHistorySchema = new Schema({
  team_name: { type: String, required: true },
  logo_url: String,
  start_date: { type: Date, required: true },
  end_date: { type: Date, default: null }
}, { _id: false });

const PlayerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  nickname: {
    type: String,
    required: true,
    unique: true,
  },
  birth_date: Date,
  nationality: String,
  profile_image: String,

  current_team: {
    type: Schema.Types.ObjectId,
    ref: 'Team'
  },

  team_history: [TeamHistorySchema]

}, {
  timestamps: true
});

module.exports = mongoose.model('Player', PlayerSchema);
