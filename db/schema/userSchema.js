const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  userId: String,
  name: String,
  email: String,
  password: String,
  phoneNo: String,
  isEmailVerified: Boolean,
  isPhoneNoVerified: Boolean,
  creationDate: Date,
  role: String,
  state: String,
  profiles: [{ profileId: String, name: String, active: Boolean }],
  watchHistory: [{
    showId: String,
    series: [
      {
        seriesId: String,
        episodes: [
          {
            videoId: String,
            watchTime: Number
          }
        ]
      }
    ]
  }]
});

module.exports = {
  UserSchema,
};


// "watchHistory": [
//   {
//     "showId": "123",
//     "series": [
//       {
//         "seriesId": "456",
//         "episodes": [
//           {
//             "videoId: "a123",
//             "watchTime": 800,
//           },
//           {
//             "videoId: "6123",
//             "watchTime": 800,
//           },
          
//         ]
//       }
//     ]
//   }
// ]