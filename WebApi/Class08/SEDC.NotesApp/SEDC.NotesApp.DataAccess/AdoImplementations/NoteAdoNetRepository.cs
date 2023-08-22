using Microsoft.Data.SqlClient;
using SEDC.NotesApp.Domain.Enums;
using SEDC.NotesApp.Domain.Models;

namespace SEDC.NotesApp.DataAccess.AdoImplementations
{
    public class NoteAdoNetRepository : IRepository<Note>
    {
        private readonly string _connectionString;

        public NoteAdoNetRepository(string connectionString)
        {
            _connectionString = connectionString;
        }

        // 1. po implement interface => da gi preuredam metodite posebno READ posebno WRITE akcii
        // 2. Dependency Injection

        // SqlConnection => used to establish connection to a database / begin transaction
        // SqlCommand => execute SQL queries, stored procedures, and other database commands
        // SqlDataReader => read data from a database

        public List<Note> GetAll()
        {
            var notes = new List<Note>();

            // 1. Establish the conneciton to the Database

            // BAD WAY
            // SqlConnection sqlConnection = new SqlConnection(_connectionString)
            // sqlConnection.Open();
            // .....
            // sqlConnection.Close();
            using (SqlConnection sqlConnection = new SqlConnection(_connectionString))
            {
                sqlConnection.Open();

                string query = "SELECT n.Id, n.Text, n.Priority, n.Tag, n.UserId FROM dbo.Notes n";

                // 2. Create sql command 
                using SqlCommand sqlCommand = new SqlCommand(query, sqlConnection);
                //sqlCommand.CommandText = query;
                //sqlCommand.Connection = sqlConnection;

                // 3. Execute the sql command
                using SqlDataReader sqlDataReader = sqlCommand.ExecuteReader();
                // 4. Read the data from the executed query
                while (sqlDataReader.Read())
                {
                    // 5. Map manually the retrieved properties to Note object
                    var note = new Note
                    {
                        Id = sqlDataReader.GetInt32(0),
                        Text = sqlDataReader.GetString(1),
                        Priority = (Priority)sqlDataReader.GetInt32(2),
                        Tag = (Tag)sqlDataReader["Tag"],
                        UserId = sqlDataReader.GetInt32(4),
                        // if we want to take the whole user than we will need to JOIN the Users table, and then map the properties accordingly
                        //User = new User
                        //{
                        //    FirstName = sqlDataReader.GetString(5),
                        //}
                    };
                    notes.Add(note);
                }
            }

            return notes;
        }

        public Note GetById(int id)
        {
            // implementation for this method will be provided by the awesome students in G2 :)
            //throw new NotImplementedException();

            using (var connection = new SqlConnection(_connectionString))
            {
                connection.Open();

                string selectQuery = "SELECT Id, Text, Priority, Tag, UserId " +
                                     "FROM Notes WHERE Id = @NoteId";

                using var command = new SqlCommand(selectQuery, connection);
                command.Parameters.AddWithValue("@NoteId", id);

                using var reader = command.ExecuteReader();
                if (reader.Read())
                {
                    var note = new Note
                    {
                        Id = reader.GetInt32(0),
                        Text = reader.GetString(1),
                        Priority = (Priority)reader.GetInt32(2),
                        Tag = (Tag)reader.GetInt32(3),
                        UserId = reader.GetInt32(4)
                    };
                    return note;
                }
                return null;
            }
        }

        public void Add(Note entity)
        {
            // 1. Establish the conneciton to the Database
            using (var connection = new SqlConnection(_connectionString))
            {
                connection.Open();

                // Q: Ima li nekoj ideja kako da go kreirame kverito za insert ?

                string query = "INSERT INTO dbo.Notes (Text, Priority, Tag, UserId)" +
                               $"VALUES ({entity.Text}, {entity.Priority}, {entity.Tag}, {entity.UserId})";
                // BAD EXAMPLE => POSSIBLE SQL INJECTION VULNERABILITY

                // SQL INJECTION => koga nekoj se pravi HACKMAN i ti isprakja kverinja vo nekoja FORMA od aplikacijata so cel da ti ja zezne cela aplikacija, da ti dropne baza, da ti ukrade podatoci itn itn... 

                // SQL INJECTION => Malicious users can manipulate the input data to execute unintended SQL commands, potentially compromising your database and data.

                string insertQuery = "INSERT INTO Notes (Text, Priority, TagId, UserId) " +
                                     "VALUES (@Text, @Priority, @TagId, @UserId)";

                // 2. Create sql command 
                using (var command = new SqlCommand(insertQuery, connection))
                {
                    // 3. Map the values
                    command.Parameters.AddWithValue("@Text", entity.Text);
                    command.Parameters.AddWithValue("@Priority", (int)entity.Priority);
                    command.Parameters.AddWithValue("@TagId", entity.Tag);
                    command.Parameters.AddWithValue("@UserId", entity.UserId);

                    // 4. Execute the query
                    var rowsAffected = command.ExecuteNonQuery();
                    //command.ExecuteNonQuery();
                }
            }
        }

        public void Update(Note entity)
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                connection.Open();

                string query = "UPDATE dbo.Notes n" +
                               "SET Text = @Text, Priority = @Priority, Tag = @Tag, UserId = @UserId " +
                               "WHERE Id = @NoteId";

                using (var command = new SqlCommand(query, connection))
                {
                    command.Parameters.AddWithValue("@Text", entity.Text);
                    command.Parameters.AddWithValue("@Priority", (int)entity.Priority);
                    command.Parameters.AddWithValue("@TagId", entity.Tag);
                    command.Parameters.AddWithValue("@UserId", entity.UserId);
                    command.Parameters.AddWithValue("@NoteId", entity.Id);

                    command.ExecuteNonQuery();
                }
            }
        }

        public void Delete(Note entity)
        {
            // NOTE: in real case scenario we don't/rarely perform HARD delete to records in our Database, instead we use SOFT delete (ex. set model's property IsDeleted to true)
            // implementation for this method will be provided by the awesome students in G2 :)
            throw new NotImplementedException();
        }

    }
}
