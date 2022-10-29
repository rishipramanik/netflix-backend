const R = require("ramda");
const ShowService = require("../srevice/showService");

function getShowById(req, res) {
  const showId = req.params.showId;
  if (R.isNil(showId)) {
    res.status(400).send({ errorCode: "SHOW_ID_NOT_EXISTS" });
  }
  ShowService.findByShowId(showId).then((show) => {
    if (!R.isNil(show)) {
      res.status(200).send(show);
    } else {
      res.status(400).send({ errorCode: "INVALID_SHOW_ID" });
    }
  });
}

function findSeriesByKey(req, res) {
  const showId = req.params.showId;
  const seriesId = req.params.seriesId;

  if (R.isNil(showId) || R.isNil(seriesId)) {
    res.status(400).send({ errorCode: "PARAMS_NULL" });
  }

  ShowService.findSeriesByKey(showId, seriesId).then((series) => {
    if (!R.isNil(series)) {
      res.status(200).send(series);
    } else {
      res.status(400).send({ errorCode: "INVALID_SHOW_SERIES_COMBINATION" });
    }
  });
}

module.exports = {
  getShowById,
  findSeriesByKey,
};
