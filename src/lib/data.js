// const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

// export const getAllRecipes = async () => {
//   try {
//     const res = await fetch(`${API_URL}/recipes`, {
//       cache: "no-store",
//     });

//     if (!res.ok) {
//       throw new Error("Failed to fetch recipes");
//     }

//     return await res.json();
//   } catch (error) {
//     console.error(error);
//     return [];
//   }
// };

// export const getRecipeById = async (id) => {
//   const res = await fetch(`${API_URL}/recipes/${id}`, {
//     cache: "no-store",
//   });

//   if (!res.ok) {
//     throw new Error("Recipe not found");
//   }

//   return res.json();
// };

// export const getMyRecipes = async (email) => {
//   try {
//     const res = await fetch(`${API_URL}/my-recipes?email=${email}`);

//     if (!res.ok) {
//       throw new Error("Failed to fetch recipes");
//     }

//     return await res.json();
//   } catch (error) {
//     console.error(error);
//     return [];
//   }
// };

// export const deleteMyRecipe = async (id) => {
//   try {
//     const res = await fetch(`${API_URL}/recipes/${id}`, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//       method: "DELETE",
//     });

//     if (!res.ok) {
//       throw new Error("Failed to delete recipe");
//     }

//     return await res.json();
//   } catch (error) {
//     console.error(error);
//     throw error;
//   }
// };

// //like btn toggle
// export const toggleLike = async (recipeId, userEmail) => {
//   const res = await fetch(`${API_URL}/recipes/${recipeId}/like`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       userEmail,
//     }),
//   });

//   if (!res.ok) {
//     throw new Error("Failed");
//   }

//   return res.json();
// };

// // get like status
// export const getLikeStatus = async (recipeId, userEmail) => {
//   const res = await fetch(
//     `${API_URL}/recipes/${recipeId}/like-status?userEmail=${userEmail}`,
//   );

//   return res.json();
// };

// // Toggle Favorite
// export const toggleFavorite = async (recipeId, userEmail) => {
//   const res = await fetch(`${API_URL}/recipes/${recipeId}/favorite`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       userEmail,
//     }),
//   });

//   if (!res.ok) {
//     throw new Error("Failed");
//   }

//   return res.json();
// };

// // Get Favorite Status
// export const getFavoriteStatus = async (recipeId, userEmail) => {
//   const res = await fetch(
//     `${API_URL}/recipes/${recipeId}/favorite-status?userEmail=${userEmail}`,
//   );

//   if (!res.ok) {
//     throw new Error("Failed");
//   }

//   return res.json();
// };

// // Add Recipe
// export const addRecipe = async (recipeData, ) => {
//   const res = await fetch(`${API_URL}/post-recipes`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(recipeData),
//   });

//   const data = await res.json();

//   if (!res.ok) {
//     throw new Error(data.message || "Failed to add recipe");
//   }

//   return data;
// };

// // Update Recipe
// export const updateRecipe = async (recipeId, recipeData) => {
//   const res = await fetch(`${API_URL}/recipes/${recipeId}`, {
//     method: "PATCH",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(recipeData),
//   });

//   const data = await res.json();

//   if (!res.ok) {
//     throw new Error(data.message || "Failed to update recipe");
//   }

//   return data;
// };

// export const getMyFavorites = async (userEmail) => {
//   const res = await fetch(`${API_URL}/my-favorites?userEmail=${userEmail}`, {

//     cache: "no-store",
//   });

//   if (!res.ok) {
//     throw new Error("Failed to fetch favorites");
//   }

//   return res.json();
// };

// export const getMyPurchases = async (userEmail) => {
//   const res = await fetch(`${API_URL}/my-purchases?userEmail=${userEmail}`, {

//   });

//   if (!res.ok) {
//     throw new Error("Failed");
//   }

//   return res.json();
// };

// export const getSubscription = async (data) => {
//   const res = await fetch(`${API_URL}/subscription`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data),
//   });

//   const resData = await res.json();
//   return resData;
// };

// export const savePurchasedRecipe = async (data) => {
//   const res = await fetch(`${API_URL}/purchase-recipe-payment`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data),
//   });

//   const resData = await res.json();

//   return resData;
// };

// export const getPurchasedRecipes = async (userId) => {
//   const res = await fetch(`${API_URL}/purchased-recipes/${userId}`, {
//     cache: "no-store",
//   });

//   return res.json();
// };

// // admin api calls
// export const getDashboardOverview = async () => {
//   console.log("api called");
//   const res = await fetch(`${API_URL}/admin/dashboard`, {
//     cache: "no-store",
//   });

//   console.log(res.status);

//   const data = await res.json();

//   console.log(data);

//   return data;
// };

// // get all users
// export const getAllUsers = async () => {
//   const res = await fetch(`${API_URL}/admin/users`, {
//     cache: "no-store",
//   });

//   return res.json();
// };

// export const blockUser = async (id) => {
//   const res = await fetch(`${API_URL}/admin/users/block/${id}`, {
//     method: "PATCH",
//   });

//   return res.json();
// };

// export const unblockUser = async (id) => {
//   const res = await fetch(`${API_URL}/admin/users/unblock/${id}`, {
//     method: "PATCH",
//   });

//   return res.json();
// };

// export const getAllRecipesForAdmin = async () => {
//   const res = await fetch(`${API_URL}/admin/recipes`, {
//     cache: "no-store",
//   });

//   return res.json();
// };

// // delete recipe form all recipe
// export const deleteRecipe = async (id) => {
//   const res = await fetch(`${API_URL}/admin/recipes/${id}`, {
//     method: "DELETE",
//   });

//   return res.json();
// };

// // feature recipe add and delete toggle
// export const featureRecipeAddDelete = async (id) => {
//   const res = await fetch(`${API_URL}/recipes/${id}/feature`, {
//     method: "PATCH",
//   });

//   return res.json();
// };

// export const getFeatureRecipes = async () => {
//   const res = await fetch(`${API_URL}/featured-recipes`, {
//     next: { revalidate: 60 },
//   });

//   return res.json();
// };

// // recipe data for testing purpose
// // [
// //   {
// //     "recipeName": "Classic Chicken Biryani",
// //     "recipeImage": "https://i.ibb.co.com/273nBD0y/rice-1.jpg" ,
// //     "category": "Rice",
// //     "cuisineType": "Bangladeshi",
// //     "difficultyLevel": "Medium",
// //     "preparationTime": 60,
// //     "ingredients": [
// //       "Basmati Rice",
// //       "Chicken",
// //       "Yogurt",
// //       "Onion",
// //       "Biryani Masala",
// //       "Ghee"
// //     ],
// //     "instructions": "Cook chicken with spices. Layer with cooked rice and steam for 20 minutes.",
// //     "authorId": "user_001",
// //     "authorName": "Rashid Khan",
// //     "authorEmail": "rashid@gmail.com",
// //     "likesCount": 145,
// //     "favoriteCount": 35,
// //     "status": "approved",
// //     "pirce": "5",
// //     "createdAt": "2026-06-20T09:00:00.000Z",
// //     "updatedAt": "2026-06-20T09:00:00.000Z"
// //   },
// //   {
// //     "recipeName": "Crispy Beef Burger",
// //     "recipeImage": "https://i.ibb.co.com/Q7CjHY2p/bb.jpg",
// //     "category": "Fast Food",
// //     "cuisineType": "American",
// //     "difficultyLevel": "Easy",
// //     "preparationTime": 25,
// //     "ingredients": [
// //       "Burger Bun",
// //       "Beef Patty",
// //       "Cheese",
// //       "Lettuce",
// //       "Tomato",
// //       "Mayonnaise"
// //     ],
// //     "instructions": "Grill beef patty and assemble burger with vegetables and sauce.",
// //     "authorId": "user_002",
// //     "authorName": "John Smith",
// //     "authorEmail": "john@gmail.com",
// //     "likesCount": 280,
// //     "favoriteCount": 48,
// //     "status": "approved",
// //     "pirce": "4",
// //     "createdAt": "2026-06-21T11:00:00.000Z",
// //     "updatedAt": "2026-06-21T11:00:00.000Z"
// //   },
// //   {
// //     "recipeName": "Chocolate Lava Cake",
// //     "recipeImage": "https://i.ibb.co.com/PGYp22r7/3-3.jpg",
// //     "category": "Dessert",
// //     "cuisineType": "French",
// //     "difficultyLevel": "Medium",
// //     "preparationTime": 40,
// //     "ingredients": [
// //       "Dark Chocolate",
// //       "Butter",
// //       "Eggs",
// //       "Sugar",
// //       "Flour"
// //     ],
// //     "instructions": "Mix ingredients, bake for 12 minutes and serve warm.",
// //     "authorId": "user_003",
// //     "authorName": "Emma Brown",
// //     "authorEmail": "emma@gmail.com",
// //     "likesCount": 390,
// //     "favoriteCount": 80,
// //     "status": "approved",
// //     "pirce": "6",
// //     "createdAt": "2026-06-22T10:00:00.000Z",
// //     "updatedAt": "2026-06-22T10:00:00.000Z"
// //   },
// //   {
// //     "recipeName": "Margherita Pizza",
// //     "recipeImage": "https://i.ibb.co.com/GvTsShLc/4-4.jpg",
// //     "category": "Pizza",
// //     "cuisineType": "Italian",
// //     "difficultyLevel": "Medium",
// //     "preparationTime": 45,
// //     "ingredients": [
// //       "Pizza Dough",
// //       "Mozzarella",
// //       "Tomato Sauce",
// //       "Basil"
// //     ],
// //     "instructions": "Spread sauce, add cheese and basil, bake until golden.",
// //     "authorId": "user_004",
// //     "authorName": "Luca Rossi",
// //     "authorEmail": "luca@gmail.com",
// //     "likesCount": 310,
// //     "favoriteCount": 72,
// //     "status": "approved",
// //     "pirce": "5",
// //     "createdAt": "2026-06-23T09:30:00.000Z",
// //     "updatedAt": "2026-06-23T09:30:00.000Z"
// //   },
// //   {
// //     "recipeName": "Garlic Butter Shrimp",
// //     "recipeImage": "https://i.ibb.co.com/0jgNcjwD/6-6.jpg",
// //     "category": "Seafood",
// //     "cuisineType": "Mediterranean",
// //     "difficultyLevel": "Easy",
// //     "preparationTime": 20,
// //     "ingredients": [
// //       "Shrimp",
// //       "Garlic",
// //       "Butter",
// //       "Parsley",
// //       "Lemon"
// //     ],
// //     "instructions": "Cook shrimp in garlic butter and garnish with parsley.",
// //     "authorId": "user_005",
// //     "authorName": "Sophia Lee",
// //     "authorEmail": "sophia@gmail.com",
// //     "likesCount": 198,
// //     "favoriteCount": 41,
// //     "status": "approved",
// //     "pirce": "7",
// //     "createdAt": "2026-06-24T08:00:00.000Z",
// //     "updatedAt": "2026-06-24T08:00:00.000Z"
// //   },
// //   {
// //     "recipeName": "Creamy Mushroom Soup",
// //     "recipeImage": "https://i.ibb.co.com/wxx68yX/7-7.jpg",
// //     "category": "Soup",
// //     "cuisineType": "European",
// //     "difficultyLevel": "Easy",
// //     "preparationTime": 35,
// //     "ingredients": [
// //       "Mushroom",
// //       "Cream",
// //       "Onion",
// //       "Garlic",
// //       "Butter"
// //     ],
// //     "instructions": "Cook vegetables, blend, add cream and simmer.",
// //     "authorId": "user_006",
// //     "authorName": "David Green",
// //     "authorEmail": "david@gmail.com",
// //     "likesCount": 165,
// //     "favoriteCount": 28,
// //     "status": "approved",
// //     "pirce": "3",
// //     "createdAt": "2026-06-25T07:30:00.000Z",
// //     "updatedAt": "2026-06-25T07:30:00.000Z"
// //   },
// //   {
// //     "recipeName": "Greek Salad",
// //     "recipeImage": "https://i.ibb.co.com/PZhHjp20/8-8.jpg",
// //     "category": "Salad",
// //     "cuisineType": "Greek",
// //     "difficultyLevel": "Easy",
// //     "preparationTime": 15,
// //     "ingredients": [
// //       "Tomato",
// //       "Cucumber",
// //       "Olives",
// //       "Feta Cheese",
// //       "Olive Oil"
// //     ],
// //     "instructions": "Mix vegetables with cheese and olive oil dressing.",
// //     "authorId": "user_007",
// //     "authorName": "Maria White",
// //     "authorEmail": "maria@gmail.com",
// //     "likesCount": 176,
// //     "favoriteCount": 33,
// //     "status": "approved",
// //     "pirce": "2",
// //     "createdAt": "2026-06-25T12:00:00.000Z",
// //     "updatedAt": "2026-06-25T12:00:00.000Z"
// //   },
// //   {
// //     "recipeName": "Honey Garlic Chicken",
// //     "recipeImage": "https://i.ibb.co.com/997Znym6/9-9.jpg",
// //     "category": "Chicken",
// //     "cuisineType": "Asian",
// //     "difficultyLevel": "Easy",
// //     "preparationTime": 30,
// //     "ingredients": [
// //       "Chicken Breast",
// //       "Honey",
// //       "Garlic",
// //       "Soy Sauce"
// //     ],
// //     "instructions": "Cook chicken and coat with honey garlic sauce.",
// //     "authorId": "user_008",
// //     "authorName": "James Miller",
// //     "authorEmail": "james@gmail.com",
// //     "likesCount": 290,
// //     "favoriteCount": 61,
// //     "status": "approved",
// //     "pirce": "4",
// //     "createdAt": "2026-06-26T09:00:00.000Z",
// //     "updatedAt": "2026-06-26T09:00:00.000Z"
// //   },
// //   {
// //     "recipeName": "Beef Steak",
// //     "recipeImage": "https://i.ibb.co.com/20qGKWgj/10-10.jpg",
// //     "category": "Beef",
// //     "cuisineType": "American",
// //     "difficultyLevel": "Medium",
// //     "preparationTime": 35,
// //     "ingredients": [
// //       "Beef Steak",
// //       "Butter",
// //       "Garlic",
// //       "Black Pepper"
// //     ],
// //     "instructions": "Season steak and cook to desired doneness.",
// //     "authorId": "user_009",
// //     "authorName": "Michael Scott",
// //     "authorEmail": "michael@gmail.com",
// //     "likesCount": 340,
// //     "favoriteCount": 70,
// //     "status": "approved",
// //     "pirce": "8",
// //     "createdAt": "2026-06-27T10:30:00.000Z",
// //     "updatedAt": "2026-06-27T10:30:00.000Z"
// //   },
// //   {
// //     "recipeName": "Spicy Mutton Curry",
// //     "recipeImage": "https://i.ibb.co.com/kzFymBf/11-11.jpg",
// //     "category": "Mutton",
// //     "cuisineType": "Indian",
// //     "difficultyLevel": "Hard",
// //     "preparationTime": 90,
// //     "ingredients": [
// //       "Mutton",
// //       "Onion",
// //       "Tomato",
// //       "Spices",
// //       "Yogurt"
// //     ],
// //     "instructions": "Slow cook mutton with spices until tender.",
// //     "authorId": "user_010",
// //     "authorName": "Ali Hassan",
// //     "authorEmail": "ali@gmail.com",
// //     "likesCount": 400,
// //     "favoriteCount": 95,
// //     "status": "approved",
// //     "pirce": "9",
// //     "createdAt": "2026-06-28T08:00:00.000Z",
// //     "updatedAt": "2026-06-28T08:00:00.000Z"
// //   },
// //   {
// //     "recipeName": "Vegetable Stir Fry",
// //     "recipeImage": "https://i.ibb.co.com/NnNjGFRG/12-12.jpg",
// //     "category": "Vegetarian",
// //     "cuisineType": "Chinese",
// //     "difficultyLevel": "Easy",
// //     "preparationTime": 20,
// //     "ingredients": [
// //       "Broccoli",
// //       "Carrot",
// //       "Bell Pepper",
// //       "Soy Sauce",
// //       "Garlic"
// //     ],
// //     "instructions": "Stir fry vegetables with garlic and soy sauce.",
// //     "authorId": "user_011",
// //     "authorName": "Linda Parker",
// //     "authorEmail": "linda@gmail.com",
// //     "likesCount": 160,
// //     "favoriteCount": 27,
// //     "status": "approved",
// //     "price": "3",
// //     "createdAt": "2026-06-29T09:00:00.000Z",
// //     "updatedAt": "2026-06-29T09:00:00.000Z"
// //   },
// //   {
// //     "recipeName": "Fluffy Pancakes",
// //     "recipeImage": "https://i.ibb.co.com/b55dm0js/13-13.jpg",
// //     "category": "Breakfast",
// //     "cuisineType": "American",
// //     "difficultyLevel": "Easy",
// //     "preparationTime": 20,
// //     "ingredients": [
// //       "Flour",
// //       "Egg",
// //       "Milk",
// //       "Sugar",
// //       "Butter"
// //     ],
// //     "instructions": "Mix batter, cook on a pan and serve with maple syrup.",
// //     "authorId": "user_012",
// //     "authorName": "Olivia Clark",
// //     "authorEmail": "olivia@gmail.com",
// //     "likesCount": 255,
// //     "favoriteCount": 52,
// //     "status": "approved",
// //     "pirce": "2",
// //     "createdAt": "2026-06-30T07:00:00.000Z",
// //     "updatedAt": "2026-06-30T07:00:00.000Z"
// //   }
// // ]

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

// ---------------- GET / fetch functions ----------------

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
  console.log("getMyRecipes called with email:", email);
  try {
    const res = await fetch(`${API_URL}/my-recipes?email=${email}`);
 
    // if (!res.ok) {
    //   throw new Error("Failed to fetch recipes");
    // }
 console.log("Response status:", res.status);
    return await res.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getLikeStatus = async (recipeId, userEmail) => {
  const res = await fetch(
    `${API_URL}/recipes/${recipeId}/like-status?userEmail=${userEmail}`,
  );

  if (!res.ok) {
    throw new Error("Failed to fetch like status");
  }

  return res.json();
};

export const getFavoriteStatus = async (recipeId, userEmail) => {
  const res = await fetch(
    `${API_URL}/recipes/${recipeId}/favorite-status?userEmail=${userEmail}`,
  );

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

export const getMyFavorites = async (userEmail) => {
  const res = await fetch(`${API_URL}/my-favorites?userEmail=${userEmail}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch favorites");
  }

  return res.json();
};

export const getMyPurchases = async (userEmail) => {
  const res = await fetch(`${API_URL}/my-purchases?userEmail=${userEmail}`);

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

export const getPurchasedRecipes = async (userId) => {
  const res = await fetch(`${API_URL}/purchased-recipes/${userId}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch purchased recipes");
  }

  return res.json();
};

export const getFeatureRecipes = async () => {
  const res = await fetch(`${API_URL}/featured-recipes`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch featured recipes");
  }

  return res.json();
};




// ---------------- Recipe actions ----------------

// NOTE: token is required — pass it from your auth context / session
export const deleteMyRecipe = async (id, token) => {
  try {
    const res = await fetch(`${API_URL}/recipes/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
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

// like btn toggle
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

// Add Recipe
export const addRecipe = async (recipeData) => {
  const res = await fetch(`${API_URL}/post-recipes`, {
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

// ---------------- Subscription / purchase actions ----------------

export const getSubscription = async (data) => {
  const res = await fetch(`${API_URL}/subscription`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Failed to get subscription");
  }

  return res.json();
};

export const savePurchasedRecipe = async (data) => {
  const res = await fetch(`${API_URL}/purchase-recipe-payment`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Failed to save purchased recipe");
  }

  return res.json();
};




// ---------------- Admin API calls ----------------
// NOTE: these routes are typically protected on the backend.
// If your server requires an admin token, pass it in and add:
// headers: { Authorization: `Bearer ${token}` }

export const getDashboardOverview = async () => {
  const res = await fetch(`${API_URL}/admin/dashboard`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch dashboard overview");
  }

  return res.json();
};

// get all users
export const getAllUsers = async () => {
  const res = await fetch(`${API_URL}/admin/users`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch users");
  }

  return res.json();
};

export const blockUser = async (id) => {
  const res = await fetch(`${API_URL}/admin/users/block/${id}`, {
    method: "PATCH",
  });

  if (!res.ok) {
    throw new Error("Failed to block user");
  }

  return res.json();
};

export const unblockUser = async (id) => {
  const res = await fetch(`${API_URL}/admin/users/unblock/${id}`, {
    method: "PATCH",
  });

  if (!res.ok) {
    throw new Error("Failed to unblock user");
  }

  return res.json();
};

export const getAllRecipesForAdmin = async () => {
  const res = await fetch(`${API_URL}/admin/recipes`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch recipes");
  }

  return res.json();
};

// delete recipe from all recipes
export const deleteRecipe = async (id) => {
  const res = await fetch(`${API_URL}/admin/recipes/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    throw new Error("Failed to delete recipe");
  }

  return res.json();
};

// feature recipe add and delete toggle
export const featureRecipeAddDelete = async (id) => {
  const res = await fetch(`${API_URL}/recipes/${id}/feature`, {
    method: "PATCH",
  });

  if (!res.ok) {
    throw new Error("Failed to toggle feature status");
  }

  return res.json();
};