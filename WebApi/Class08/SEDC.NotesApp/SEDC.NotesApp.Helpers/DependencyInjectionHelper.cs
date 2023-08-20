using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using SEDC.NotesApp.DataAccess;
using SEDC.NotesApp.DataAccess.AdoImplementations;
using SEDC.NotesApp.DataAccess.DapperImplementations;
using SEDC.NotesApp.DataAccess.Implementations;
using SEDC.NotesApp.Domain.Models;
using SEDC.NotesApp.Services.Implementations;
using SEDC.NotesApp.Services.Interfaces;

namespace SEDC.NotesApp.Helpers
{
    public static class DependencyInjectionHelper
    {
        public static void InjectDbContext(IServiceCollection services, string connectionString)
        {
            //services.AddDbContext<NotesAppDbContext>(x =>
            //x.UseSqlServer("Server=10.10.10.10;Database=NotesAppDb;Trusted_Connection=True"));
            //x.UseSqlServer("Server=.\\SQLEXPRESS;Database=NotesAppDb;Trusted_Connection=True"));

            services.AddDbContext<NotesAppDbContext>(x =>
            x.UseSqlServer(connectionString));
        }

        public static void InjectRepositories(IServiceCollection services, string connectionString)
        {
            // Use ADO.NET repository
            //services.AddTransient<IRepository<Note>>(s => new NoteAdoNetRepository(connectionString));
            // Use DAPPER repository
            //services.AddTransient<IRepository<Note>>(s => new NoteDapperRepository(connectionString));

            services.AddTransient<IRepository<Note>, NoteRepository>();
            services.AddTransient<IRepository<User>, UserRepository>();
        }

        public static void InjectServices(IServiceCollection services)
        {
            services.AddTransient<INoteService, NoteService>();
        }

    }
}
