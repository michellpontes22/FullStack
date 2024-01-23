/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
const bcrypt = require('bcrypt');
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('professores').del()
  await knex('professores').insert([
    {nome: 'Chico bateu no bode', email: 'teste3@email.com', telefone: '(84)998762203', nascimento: '2024-12-23'},
    {nome: 'Bateu no bode', email: 'teste2@email.com', telefone: '(84)998762202', nascimento: '2022-12-22'},
    {nome: 'Chico bateu', email: 'teste1@email.com', telefone: '(84)998762201', nascimento: '2023-12-21'},
    
  ]);
};
