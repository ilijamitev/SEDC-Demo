using Microsoft.EntityFrameworkCore;
using SEDC.NoteApp.Domain.Models;

namespace SEDC.NoteApp.DataAccess.EntityImplementation
{
    public class NoteRepository : IRepository<Note>
    {
        private readonly NoteAppDbContext _noteAppDbContext;
        public NoteRepository(NoteAppDbContext noteAppDbContext)
        {
            _noteAppDbContext = noteAppDbContext;
        }

        public void Add(Note entity)
        {
            // debagiranje za add note prvo i koga ke se izvrsi kverito
            _noteAppDbContext.Notes.Add(entity);
            _noteAppDbContext.SaveChanges();
        }

        public void Delete(Note entity)
        {
            _noteAppDbContext.Notes.Remove(entity);
            _noteAppDbContext.SaveChanges();
        }

        public List<Note> GetAll()
        {
            // DA GO RAZLOZIME KVERITO ZA DA SFATIME KAKO RABOTI EF
            //return _noteAppDbContext.Notes
            //            .Include(x => x.User)
            //            .ToList();

            // EF behind scenes
            // form the query in C#
            var query = _noteAppDbContext.Notes
                        .Include(x => x.User); 
            var translatedQuery = query.ToQueryString(); // way to check your LINQ to SQL translation
            // when calling ToList() our query is translated into SQL query => executed in the database => retrives data
            var materializedQuery = query.ToList(); 
            // EntityFramework Executable methods: ToList(), FirstOrDefault(), Any(), SingleOrDefault(), Count()...
            return materializedQuery;
        }

        public Note GetById(int id)
        {
            return _noteAppDbContext.Notes
                        .Include(x => x.User)
                        .SingleOrDefault(note => note.Id == id);
        }

        public void Update(Note entity)
        {
            _noteAppDbContext.Notes.Update(entity);
            _noteAppDbContext.SaveChanges();
        }
    }
}
