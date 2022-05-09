using FirebaseAdmin;
using Google.Apis.Auth.OAuth2;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using ShopShop.DataAccess;

var builder = WebApplication.CreateBuilder(args);

var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";
// Add services to the container.

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: MyAllowSpecificOrigins,
                       policy =>
                       {
                           policy.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin();
                       });
});
builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddTransient<IAgentsRepository, AgentsRepository>();
builder.Services.AddTransient<IListingRepository, ListingsRepository>();
var FirebaseSDKPath = builder.Configuration["FirebaseSDKPath"];

//Firebase Authentication
FirebaseApp.Create(new AppOptions()
{
    Credential = GoogleCredential.FromFile(FirebaseSDKPath)
});

builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme).AddJwtBearer(options =>
{
    options.Authority = "https://securetoken.google.com/shop-shop-45841";
    options.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuer = true,
        ValidIssuer = "https://securetoken.google.com/shop-shop-45841",
        ValidateAudience = true,
        ValidAudience = "shop-shop-45841",
        ValidateLifetime = true
    };
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors( builder => { builder.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin(); });

app.UseAuthentication();

app.UseAuthorization();

app.MapControllers();

app.Run();
