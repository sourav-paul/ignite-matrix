
from pydantic import BaseModel

# Pydantic data model containing necessary ESS set with the provider name
class Ess(BaseModel):
    ProviderName: str
    EbitMargin: float
    ShapeOfWallet: float
    Spend: float
