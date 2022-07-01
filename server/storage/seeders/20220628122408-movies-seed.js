'use strict';
const movies = require('./movies.json');

module.exports = {
    async up(queryInterface, Sequelize) {
        const dbMovies = movies.movies.map(movie => {
            return {
                title: movie.title,
                img: movie.img,
                synopsis: movie.synopsis,
                rating: movie.rating,
                year: movie.year,
                createdAt: new Date(),
                updatedAt: new Date()
            };
        });
        await queryInterface.bulkInsert('Movies', dbMovies, {});
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('Movies', null, {});
    }
};
