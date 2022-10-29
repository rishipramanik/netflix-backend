const R = require("ramda");
const ShowAccessor = require("../accesssor/showAccessor");

function findByShowId(showId) {
  return ShowAccessor.findByShowId(showId).then((shows) => shows[0]);
}

function findSeriesByKey(showId, seriesId) {
  return ShowAccessor.findByShowId(showId)
    .then((shows) => shows[0])
    .then((show) => {
      if (!R.isNil(show)) {
        return show.series.find((series) => series.seriesId === seriesId);
      } else {
        return null;
      }
    });
}

module.exports = {
  findByShowId,
  findSeriesByKey,
};
