const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

export const getAllRecipes = async () => {
  try {
    const res = await fetch(`${API_URL}/recipes`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch recipes");
    }

    return await res.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getRecipeById = async (id) => {
  const res = await fetch(`${API_URL}/recipes/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Recipe not found");
  }

  return res.json();
};

export const getMyRecipes = async (email) => {
  try {
    const res = await fetch(`${API_URL}/my-recipes?email=${email}`);

    if (!res.ok) {
      throw new Error("Failed to fetch recipes");
    }

    return await res.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const deleteMyRecipe = async (id) => {
  try {
    const res = await fetch(`${API_URL}/recipes/${id}`, {
      method: "DELETE",
    });

    if (!res.ok) {
      throw new Error("Failed to delete recipe");
    }

    return await res.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// export const updateRecipe = async (id, updateData) => {
//   const res = await fetch(`${API_URL}/recipes/${id}`, {
//     method: "PATCH",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(updateData),
//   });

//   if (!res.ok) {
//     throw new Error("Failed to update recipe");
//   }

//   return res.json();
// };

//like btn toggle
export const toggleLike = async (recipeId, userEmail) => {
  const res = await fetch(`${API_URL}/recipes/${recipeId}/like`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userEmail,
    }),
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

// get like status  
export const getLikeStatus = async (recipeId, userEmail) => {
  const res = await fetch(
    `${API_URL}/recipes/${recipeId}/like-status?userEmail=${userEmail}`
  );

  return res.json();
};


// Toggle Favorite
export const toggleFavorite = async (recipeId, userEmail) => {
  const res = await fetch(`${API_URL}/recipes/${recipeId}/favorite`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userEmail,
    }),
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

// Get Favorite Status
export const getFavoriteStatus = async (recipeId, userEmail) => {
  const res = await fetch(
    `${API_URL}/recipes/${recipeId}/favorite-status?userEmail=${userEmail}`
  );

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};


// Add Recipe
export const addRecipe = async (recipeData) => {
  const res = await fetch(`${API_URL}/recipes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(recipeData),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Failed to add recipe");
  }

  return data;
};

// Update Recipe
export const updateRecipe = async (recipeId, recipeData) => {
  const res = await fetch(`${API_URL}/recipes/${recipeId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(recipeData),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Failed to update recipe");
  }

  return data;
};


export const getMyFavorites = async (userEmail) => {
  const res = await fetch(
    `${API_URL}/my-favorites?userEmail=${userEmail}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch favorites");
  }

  return res.json();
};



export const getMyPurchases = async (userEmail) => {
  const res = await fetch(
    `${API_URL}/my-purchases?userEmail=${userEmail}`
  );

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};


export const getSubscription = async (data) => {
  const res = await fetch(`${API_URL}/subscription`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const resData = await res.json();
  return resData;
};



// const recipes = [
//   {
//     _id: "1",
//     recipeName: "Chicken Biryani",
//     recipeImage:
//       "https://images.unsplash.com/photo-1701579231305-d84d8af9a3fd?q=80&w=1200",
//     category: "Rice",
//     cuisineType: "Bangladeshi",
//     difficultyLevel: "Medium",
//     preparationTime: 60,
//     ingredients: ["Chicken", "Basmati Rice", "Onion", "Garlic", "Ginger"],
//     instructions:
//       "Marinate chicken, cook rice separately, layer together and steam.",
//     authorId: "user_001",
//     authorName: "Rashid Islam",
//     authorEmail: "rashid@gmail.com",
//     likesCount: 245,
//     isFeatured: true,
//     status: "approved",
//     createdAt: "2026-06-20T10:00:00Z",
//     updatedAt: "2026-06-20T10:00:00Z",
//   },
//   {
//     _id: "2",
//     recipeName: "Beef Burger",
//     recipeImage:
//       "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1200",
//     category: "Fast Food",
//     cuisineType: "American",
//     difficultyLevel: "Easy",
//     preparationTime: 25,
//     ingredients: ["Beef Patty", "Burger Bun", "Cheese", "Lettuce"],
//     instructions: "Grill beef patty and assemble burger with toppings.",
//     authorId: "user_002",
//     authorName: "John Smith",
//     authorEmail: "john@gmail.com",
//     likesCount: 189,
//     isFeatured: false,
//     status: "approved",
//     createdAt: "2026-06-19T10:00:00Z",
//     updatedAt: "2026-06-19T10:00:00Z",
//   },
//   {
//     _id: "3",
//     recipeName: "Creamy Pasta",
//     recipeImage: "",
//     category: "Pasta",
//     cuisineType: "Italian",
//     difficultyLevel: "Easy",
//     preparationTime: 30,
//     ingredients: ["Pasta", "Cream", "Parmesan", "Garlic"],
//     instructions: "Boil pasta and mix with creamy garlic sauce.",
//     authorId: "user_003",
//     authorName: "Sarah Wilson",
//     authorEmail: "sarah@gmail.com",
//     likesCount: 320,
//     isFeatured: true,
//     status: "approved",
//     createdAt: "2026-06-18T10:00:00Z",
//     updatedAt: "2026-06-18T10:00:00Z",
//   },
//   {
//     _id: "4",
//     recipeName: "Margherita Pizza",
//     recipeImage:
//       "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1200",
//     category: "Pizza",
//     cuisineType: "Italian",
//     difficultyLevel: "Medium",
//     preparationTime: 45,
//     ingredients: ["Pizza Dough", "Tomato Sauce", "Mozzarella", "Basil"],
//     instructions: "Spread sauce, add cheese and basil, then bake.",
//     authorId: "user_004",
//     authorName: "David Lee",
//     authorEmail: "david@gmail.com",
//     likesCount: 275,
//     isFeatured: true,
//     status: "approved",
//     createdAt: "2026-06-17T10:00:00Z",
//     updatedAt: "2026-06-17T10:00:00Z",
//   },
//   {
//     _id: "5",
//     recipeName: "Thai Noodles",
//     recipeImage:
//       "https://images.unsplash.com/photo-1617093727343-374698b1b08d?q=80&w=1200",
//     category: "Noodles",
//     cuisineType: "Thai",
//     difficultyLevel: "Medium",
//     preparationTime: 35,
//     ingredients: ["Rice Noodles", "Egg", "Peanuts", "Soy Sauce"],
//     instructions: "Stir fry noodles with egg and sauce.",
//     authorId: "user_005",
//     authorName: "Emily Brown",
//     authorEmail: "emily@gmail.com",
//     likesCount: 156,
//     isFeatured: false,
//     status: "approved",
//     createdAt: "2026-06-16T10:00:00Z",
//     updatedAt: "2026-06-16T10:00:00Z",
//   },
//   {
//     _id: "6",
//     recipeName: "Grilled Salmon",
//     recipeImage:
//       "https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=1200",
//     category: "Seafood",
//     cuisineType: "Japanese",
//     difficultyLevel: "Hard",
//     preparationTime: 50,
//     ingredients: ["Salmon", "Lemon", "Garlic", "Olive Oil"],
//     instructions: "Season salmon and grill until tender.",
//     authorId: "user_006",
//     authorName: "Michael Scott",
//     authorEmail: "michael@gmail.com",
//     likesCount: 298,
//     isFeatured: true,
//     status: "approved",
//     createdAt: "2026-06-15T10:00:00Z",
//     updatedAt: "2026-06-15T10:00:00Z",
//   },
//   {
//     _id: "7",
//     recipeName: "Caesar Salad",
//     recipeImage:
//       "https://images.unsplash.com/photo-1546793665-c74683f339c1?q=80&w=1200",
//     category: "Salad",
//     cuisineType: "Mediterranean",
//     difficultyLevel: "Easy",
//     preparationTime: 15,
//     ingredients: ["Lettuce", "Croutons", "Parmesan", "Caesar Dressing"],
//     instructions: "Mix all ingredients and serve chilled.",
//     authorId: "user_007",
//     authorName: "Sophia Davis",
//     authorEmail: "sophia@gmail.com",
//     likesCount: 98,
//     isFeatured: false,
//     status: "approved",
//     createdAt: "2026-06-14T10:00:00Z",
//     updatedAt: "2026-06-14T10:00:00Z",
//   },
//   {
//     _id: "8",
//     recipeName: "Chocolate Lava Cake",
//     recipeImage:
//       "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1200",
//     category: "Dessert",
//     cuisineType: "French",
//     difficultyLevel: "Medium",
//     preparationTime: 40,
//     ingredients: ["Chocolate", "Butter", "Eggs", "Flour"],
//     instructions: "Bake until outside is set and center remains molten.",
//     authorId: "user_008",
//     authorName: "Emma Watson",
//     authorEmail: "emma@gmail.com",
//     likesCount: 412,
//     isFeatured: true,
//     status: "approved",
//     createdAt: "2026-06-13T10:00:00Z",
//     updatedAt: "2026-06-13T10:00:00Z",
//   },
//   {
//     _id: "9",
//     recipeName: "Chicken Tacos",
//     recipeImage:
//       "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?q=80&w=1200",
//     category: "Street Food",
//     cuisineType: "Mexican",
//     difficultyLevel: "Easy",
//     preparationTime: 20,
//     ingredients: ["Chicken", "Tortilla", "Lettuce", "Cheese"],
//     instructions: "Cook chicken and serve inside tortillas.",
//     authorId: "user_009",
//     authorName: "Carlos Mendez",
//     authorEmail: "carlos@gmail.com",
//     likesCount: 167,
//     isFeatured: false,
//     status: "approved",
//     createdAt: "2026-06-12T10:00:00Z",
//     updatedAt: "2026-06-12T10:00:00Z",
//   },
//   {
//     _id: "10",
//     recipeName: "Sushi Rolls",
//     recipeImage:
//       "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=1200",
//     category: "Seafood",
//     cuisineType: "Japanese",
//     difficultyLevel: "Hard",
//     preparationTime: 55,
//     ingredients: ["Sushi Rice", "Nori", "Salmon", "Avocado"],
//     instructions: "Roll ingredients tightly and slice into pieces.",
//     authorId: "user_010",
//     authorName: "Kenji Tanaka",
//     authorEmail: "kenji@gmail.com",
//     likesCount: 354,
//     isFeatured: true,
//     status: "approved",
//     createdAt: "2026-06-11T10:00:00Z",
//     updatedAt: "2026-06-11T10:00:00Z",
//   },
// ];
