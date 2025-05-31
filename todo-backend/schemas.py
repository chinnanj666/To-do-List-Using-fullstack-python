from pydantic import BaseModel
from typing import List

# Schema for a Todo
class TodoBase(BaseModel):
    task: str
    done: bool

class TodoCreate(TodoBase):
    pass

class Todo(TodoBase):
    id: int

    class Config:
        orm_mode = True

# Schema for the response
class TodoList(BaseModel):
    todos: List[Todo]
