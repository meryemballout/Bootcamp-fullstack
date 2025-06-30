import { ADD_CATEGORY, ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from "./actions";

const initialState = {
  categories: {
    // Exemple:
    // "Travail": [{ id: 1, text: "Préparer réunion", completed: false }, ...]
  },
  nextTodoId: 1, // pour générer un id unique
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CATEGORY: {
      const { categoryName } = action.payload;
      if (state.categories[categoryName]) {
        // catégorie existe déjà, on ne fait rien
        return state;
      }
      return {
        ...state,
        categories: {
          ...state.categories,
          [categoryName]: [],
        },
      };
    }

    case ADD_TODO: {
      const { categoryName, todoText } = action.payload;
      const todos = state.categories[categoryName];
      if (!todos) {
        // catégorie inexistante, on ignore l'action
        return state;
      }
      const newTodo = {
        id: state.nextTodoId,
        text: todoText,
        completed: false,
      };
      return {
        ...state,
        categories: {
          ...state.categories,
          [categoryName]: [...todos, newTodo],
        },
        nextTodoId: state.nextTodoId + 1,
      };
    }

    case TOGGLE_TODO: {
      const { categoryName, todoId } = action.payload;
      const todos = state.categories[categoryName];
      if (!todos) return state;

      return {
        ...state,
        categories: {
          ...state.categories,
          [categoryName]: todos.map((todo) =>
            todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
          ),
        },
      };
    }

    case REMOVE_TODO: {
      const { categoryName, todoId } = action.payload;
      const todos = state.categories[categoryName];
      if (!todos) return state;

      return {
        ...state,
        categories: {
          ...state.categories,
          [categoryName]: todos.filter((todo) => todo.id !== todoId),
        },
      };
    }

    default:
      return state;
  }
}
