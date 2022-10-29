const R = require("ramda");
const { Shows } = require("../db/model/showModel");

function findByShowId(showId) {
  return Shows.find({ showId }).exec();
}

// function findSeriesByKey(showId, seriesId) {
//   return ShowAccessor.findByShowId(showId)
//     .then((shows) => shows[0])
//     .then((show) => {
//       if (!R.isNil(show)) {
//         return show.series.find((series) => series.seriesId === seriesId);
//       } else {
//         return null;
//       }
//     });
// }

module.exports = {
  findByShowId,
//   findSeriesByKey,
};
