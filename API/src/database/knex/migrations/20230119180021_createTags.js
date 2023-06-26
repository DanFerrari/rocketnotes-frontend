
exports.up = knex => knex.schema.createTable("tags", table =>{

  table.increments("id");
  table.text("name").notNullable;
  
  table.integer("note_id").references("id").inTable("notes").onDelete("CASCADE");// onDelete é uma funcao que deleta as tags vinculadas as notas
  table.integer("user_id").references("id").inTable("users");
    
   
  });
  
  
  
  
  
  exports.down = knex => knex.schema.createTable("tags");
  