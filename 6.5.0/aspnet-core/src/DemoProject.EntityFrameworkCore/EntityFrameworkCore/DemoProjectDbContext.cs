using Microsoft.EntityFrameworkCore;
using Abp.Zero.EntityFrameworkCore;
using DemoProject.Authorization.Roles;
using DemoProject.Authorization.Users;
using DemoProject.MultiTenancy;

namespace DemoProject.EntityFrameworkCore
{
    public class DemoProjectDbContext : AbpZeroDbContext<Tenant, Role, User, DemoProjectDbContext>
    {
        /* Define a DbSet for each entity of the application */
        
        public DemoProjectDbContext(DbContextOptions<DemoProjectDbContext> options)
            : base(options)
        {
        }
    }
}
