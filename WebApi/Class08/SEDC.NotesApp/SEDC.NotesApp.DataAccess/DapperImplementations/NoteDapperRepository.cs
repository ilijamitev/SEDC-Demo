using Dapper;
using Microsoft.Data.SqlClient;
using SEDC.NotesApp.Domain.Models;

namespace SEDC.NotesApp.DataAccess.DapperImplementations
{
    public class NoteDapperRepository : IRepository<Note>
    {
        private readonly string _connectionString;

        public NoteDapperRepository(string connectionString)
        {
            _connectionString = connectionString;
        }

        public List<Note> GetAll()
        {
            using SqlConnection dbConnection = new SqlConnection(_connectionString);
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
