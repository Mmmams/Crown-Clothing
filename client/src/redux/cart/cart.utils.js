export const addItemToCart = (cartItems, cartItemToAdd) => {
  const exisitingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );
  if (exisitingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, itemToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === itemToRemove.id
  );
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== itemToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === itemToRemove.id
      ? { ...cartItem, quantity: itemToRemove.quantity - 1 }
      : cartItem
  );
};
// Тут мы берем наш массив товаров который добавлен в корзину, берем из стейта, find проверяем есть ли совпадение товара по айдишник,
//если есть то вернут true и пройдемся еще раз по этому массиву методом map, если в методое map найдем соответсвие по айдишник уже сущетсвующего товара(так как find вернул true)
//то увеличит его quantity что покажет что товар добавлен два раза, если find вернет false, то просто возвращаем новый массив в котором есть все ранее добавленные товары + наш новый
