using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using MyWebApi.Models;

namespace MyWebApi.Controllers
{
    [Route("api/")]
    public class ValuesController : ControllerBase
    {
        private const string V = "Connection failed";
        private readonly MyWebApiContext _context;

public ValuesController(MyWebApiContext context)
{
    _context=context;
    
}       

[HttpGet]
public async Task<IEnumerable<User>> GetUsers()
{
    return await _context.Users.ToListAsync();
}

// GET: api/Todo/5
[HttpGet("{id}")]
public async Task<User> GetUser(int id)
{
    var todoItem = await _context.Users.FindAsync(id);

    return todoItem;
}

[HttpPost]
public string Save([FromBody]FbData fbData)
{
    //validate user 
    if(fbData.Email == null)
    {
                return "Connection Failed";
    
    }
    else
    {
    _context.Users.Add(new User{ Name=fbData.Name, Email=fbData.Email, Password=fbData.Token, });
    _context.SaveChanges();
    return "Data is Posted Successfully";
    }
}
    }
        public class FbData
    {
        public string Name{get;set;}
        public string Email{get;set;}
        public string Token{get;set;}
    }
}
