'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('authors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      status: {
        type: Sequelize.INTEGER
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }).then(function() {
        return queryInterface.addColumn('blogs', 'authorId', {
            type: Sequelize.INTEGER,
            after: 'id'
        });
    }).then(function() {
        return queryInterface.addConstraint('blogs', [ 'authorId' ], {
            type: 'FOREIGN KEY',
            name: 'authors',
            references: {
                table: 'authors',
                field: 'id'
            },
            onDelete: 'cascade'
        });
    });
  },
  down: function (queryInterface, Sequelize) {
      return queryInterface.removeConstraint('blogs', 'authors').then(function() {
          return queryInterface.removeColumn('blogs', 'authorId');
      }).then(function() {
          return queryInterface.dropTable('authors');
      });
  }
};
