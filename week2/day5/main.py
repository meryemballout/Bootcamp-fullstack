from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, EmailStr, Field
from typing import Optional, List

import uvicorn
from user import User  # ta classe User avec la logique DB

app = FastAPI()

class UserCreate(BaseModel):
    username: str = Field(..., min_length=3)
    email: EmailStr
    password_hash: str = Field(..., min_length=6)
    full_name: Optional[str] = None
    role: Optional[str] = "user"

class UserRead(BaseModel):
    username: str
    email: EmailStr
    full_name: Optional[str]
    role: str
    is_active: bool

@app.get("/users", response_model=List[UserRead])
def get_all_users():
    users = User.all()
    return [
        UserRead(
            username=u.username,
            email=u.email,
            full_name=u.full_name,
            role=u.role,
            is_active=u.is_active,
        )
        for u in users
    ]

@app.get("/users/{username}", response_model=UserRead)
def get_user(username: str):
    user = User.get_by_username(username)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return UserRead(
        username=user.username,
        email=user.email,
        full_name=user.full_name,
        role=user.role,
        is_active=user.is_active,
    )

@app.post("/users", status_code=201)
def create_user(user_create: UserCreate):
    user = User(
        username=user_create.username,
        email=user_create.email,
        password_hash=user_create.password_hash,  # clair, sera hashé dans save()
        full_name=user_create.full_name,
        role=user_create.role,
    )
    user.save()
    return {"message": f"User '{user.username}' created."}

@app.put("/users/{username}")
def update_user(username: str, user_update: UserCreate):
    user = User.get_by_username(username)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    # On met à jour les champs, attention password à hasher si modifié
    update_data = user_update.dict(exclude_unset=True)
    if "password_hash" in update_data:
        import bcrypt 
        hashed = bcrypt.hshpw(update_data["password_hash"].encode(), bcrypt.gensalt()).decode()
        update_data["password_hash"] = hashed
    user.update(**update_data)
    return {"message": f"User '{username}' updated."}

@app.delete("/users/{username}")
def delete_user(username: str):
    user = User.get_by_username(username)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    user.delete()
    return {"message": f"User '{username}' deleted."}
if __name__ == "__main__":
    uvicorn.run("main:app", host="127.0.0.1", port=8000, reload=True)
