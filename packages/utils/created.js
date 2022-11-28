// A js function which returns the work created
//
// @param {string} name - The name of the work
// @param {string} author - The author of the work
// @param {string} year - The year of the work
// @param {string} genre - The genre of the work
// @param {string} description - The description of the work
// @param {string} image - The image of the work
// @param {string} link - The link of the work
// @param {string} type - The type of the work
// @param {string} id - The id of the work
// @param {string} createdAt - The createdAt of the work
// @param {string} updatedAt - The updatedAt of the work
// @param {string} deletedAt - The deletedAt of the work
// @param {string} deleted - The deleted of the work
// @param {string} version - The version of the work
// @param {string} createdBy - The createdBy of the work

// @returns {object} - The created work
function createdWork(
  name,
  author,
  year,
  genre,
  description,
  image,
  link,
  type,
  id,
  createdAt,
  updatedAt,
  deletedAt,
  deleted,
  version,
  createdBy
) {
  return {
    name,
    author,
    year,
    genre,
    description,
    image,
    link,
    type,
    id,
    createdAt,
    updatedAt,
    deletedAt,
    deleted,
    version,
    createdBy,
  };
}
