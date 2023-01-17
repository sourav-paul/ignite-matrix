from fastapi.middleware.cors import CORSMiddleware

origins = [ "http://127.0.0.1:1234", "http://localhost:1234"]

def addCors(app):
    app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
