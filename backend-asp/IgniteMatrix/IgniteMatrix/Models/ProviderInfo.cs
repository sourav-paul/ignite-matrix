using System;
using System.Collections.Generic;

namespace IgniteMatrix
{
    public class Column
    {
        public string field;
        public string key;
        public Meta meta;
        public List<decimal?> totals;
        public string type;
    }

    public class Meta
    {
        public bool? is_total;
        public Int64? supplier_id;
    }

    public class ProviderInfo
    {
        public List<Row> rows;
        public List<Column> columns;
    }

    public class Row
    {
        public string field;
        public string key;
        public Meta meta;
        public List<decimal?> totals;
        public string type;
        public List<List<decimal?>> values;
    }

    public class ESS
    {
        public decimal EbitMargin;
        public decimal ShareOfWallet;
        public decimal Spend;
    }
}
