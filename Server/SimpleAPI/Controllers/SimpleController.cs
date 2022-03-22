using Microsoft.AspNetCore.Mvc;

namespace SimpleAPI.Controllers;

[ApiController]
[Route("[controller]")]
public class SimpleController : ControllerBase
{
    private readonly ILogger<SimpleController> _logger;

    public SimpleController(ILogger<SimpleController> logger)
    {
        _logger = logger;
    }

    [HttpGet("AmIAlive")]
    public bool Get()
    {
        _logger.Log(LogLevel.Information, "Just telling someone that I'm alive.");
        return true;
    }
}