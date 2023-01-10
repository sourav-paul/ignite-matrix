using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.IO;
using System.Collections.Generic;
using System.Linq;
using Newtonsoft.Json;

namespace IgniteMatrix.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MatrixController : ControllerBase
    {
        private readonly ILogger<MatrixController> _logger;

        public MatrixController(ILogger<MatrixController> logger)
        {
            _logger = logger;
        }
        
        [HttpGet]
        public string GetMatrixData()
        {
            var providerInfo = JsonConvert.DeserializeObject<ProviderInfo>(System.IO.File.ReadAllText(@"Data/data.json"));
            
            return JsonConvert.SerializeObject(providerInfo);
        }
    }
}
