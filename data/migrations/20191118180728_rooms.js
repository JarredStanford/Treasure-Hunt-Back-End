
exports.up = function (knex) {
    return knex.schema
        .createTable('rooms', tbl => {
            tbl.increments();
            tbl.integer('room_id')
                .unique()
                .notNullable()
            tbl.text('description')
            tbl.text('title')
            tbl.integer('x')
            tbl.integer('y')
            tbl.integer('n')
            tbl.integer('s')
            tbl.integer('e')
            tbl.integer('w')
            tbl.text('elevation')
            tbl.text('terrain')
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('rooms')
};
