using Dapper;
using Dapper.Contrib.Extensions;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using SEDC.NoteApp.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SEDC.NoteApp.DataAccess.DapperImplementation
{
    public class NoteDapperRepository : IRepository<Note>
    {
        private readonly string _connectionString;

        public NoteDapperRepository(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("DefaultConnection");
        }

        // Micro ORM koj bukvalno gi extendnuva SQLConnection metodite
        // prednost => avtomatsko mapiranje na objekti

        public List<Note> GetAll()
        {
            using SqlConnection dbConnection = new SqlConnection(_connectionString);
            // da vlezeme vo Query za da vidat
            return dbConnection.Query<Note>("SELECT * FROM Notes").ToList();
        }

        public Note GetById(int id)
        {
            using SqlConnection dbConnection = new SqlConnection(_connectionString);
            string sql = "SELECT * FROM Notes WHERE Id = @Id";
            return dbConnection.QueryFirstOrDefault<Note>(sql, new { Id = id });
        }

        public void Add(Note entity)
        {
            using SqlConnection dbConnection = new SqlConnection(_connectionString);
            string sql = "INSERT INTO Notes (Text, Priority, Tag, UserId) " +
                         "VALUES (@Text, @Priority, @Tag, @UserId)";
            //dbConnection.Insert(entity); // also available
            var rowsAffected = dbConnection.Execute(sql, entity);
        }

        public void Update(Note entity)
        {
            using SqlConnection dbConnection = new SqlConnection(_connectionString);
            string sql = "UPDATE Notes " +
                         "SET Text = @Text, Priority = @Priority, Tag = @Tag, UserId = @UserId " +
                         "WHERE Id = @Id";
            dbConnection.Execute(sql, entity);
        }

        public void Delete(Note entity)
        {
            using SqlConnection dbConnection = new SqlConnection(_connectionString);
            dbConnection.Execute("DELETE FROM Notes WHERE Id = @id", new { id = entity.Id });
        }
    }
}
