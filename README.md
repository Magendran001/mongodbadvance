# mongodbadvance

<!-- find all movies which are equal to movie_name -->

let x = await moviesdata
.find({ movie_name: { $eq: req.params.name } })
.lean()
.exec();
console.log(x);

<!--
find all movies which are not equal to movie_name -->

let x = await moviesdata
.find({ movie_name: { $not: { $eq: req.params.name } } })
.lean()
.exec();

<!-- // find all movies greater than and greater than equal to a budget -->

console.log(req.params.budget);
let x = await moviesdata
.find({ budget: { $gte: req.params.budget } })
.lean()
.exec();

<!-- find all movies less than and less than equal to a budget -->

let x = await moviesdata
.find({ budget: { $lte: req.params.budget } })
.lean()
.exec();

<!-- find all movies that are produced after 2000 with budget greater than 10000 -->

let x = await moviesdata
.find({
$and: [
{ "production_year ": { $gte: 2000 } },
{ budget: { $gte: 10000 } },
],
})
.lean()
.exec();

<!-- find all movies that are produced after 2000 or budget greater than 10000 -->

let x = await moviesdata
.find({
$or: [
{ "production_year ": { $gte: 2000 } },
{ budget: { $gte: 10000 } },
],
})
.lean()
.exec();

<!-- find all movies that were produced from 2000 to 2010. -->

let x = await moviesdata
.find({
$and: [
{ production_year: { $gte: 2000 } },
{ production_year: { $lte: 2010 } },
],
})
.lean()
.exec();

<!-- Sort all movies descending based on the production year and if the year is same then alphabetically for their movie_names -->

let x = await moviesdata
.find({})
.sort({ production_year: -1, movie_name: 1 })
.lean()
.exec();

<!-- find all movies that are neither produced after 2000 nor with budget greater than 10000. -->

let x = await moviesdata
.find({
$nor: [
{ production_year: { $gte: 2000 } },
{ budget: { $gte: 10000 } },
],
})
.lean()
.exec();

<!-- find all movies that are not produced in 2000 or they do not have budget of 10000 -->

let x = await moviesdata
.find({
$or: [
{ production_year: { $not: { $eq: 2000 } } },
{ budget: { $not: { $eq: 10000 } } },
],
})
.lean()
.exec();
