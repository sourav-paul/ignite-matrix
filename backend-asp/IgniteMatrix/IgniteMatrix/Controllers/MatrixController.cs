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

        public ProviderInfo Provider { get; set; }
        
        public MatrixController(ILogger<MatrixController> logger)
        {
            Provider = JsonConvert.DeserializeObject<ProviderInfo>(System.IO.File.ReadAllText(@"Data/data.json"));
            
            _logger = logger;
        }
        
        [HttpGet("/GetMatrixData")]
        public string GetMatrixData()
        {
            return JsonConvert.SerializeObject(Provider);
        }
        [HttpGet("/GetEss")]
        public string GetEss()
        {
            return JsonConvert.SerializeObject(GetFixedEss());
        }
        
        private List<List<decimal?>> GetFixedEss()
        {
            List<List<decimal?>> fixedEss = new List<List<decimal?>>();

            foreach (var ess in Provider.rows[0].values)
            {
                var fixedSet = new List<decimal?>();

                foreach (var item in ess)
                {
                    if (item == null) break;
                    else fixedSet.Add(item);
                }

                if (fixedSet.Count == 3) fixedEss.Add(fixedSet);
            }

            return fixedEss;
        }
    }
}
