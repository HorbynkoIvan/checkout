export const initialStateCart = {
  dataCart: null,
  tabs: {
    isLogin: [
      { name: 'cart', title: 'Корзина' },
      { name: 'wishList', title: 'Желания' },
      { name: 'buyAgain', title: 'Купить снова' },
    ],
    notLogin: [{ name: 'cart', title: 'Корзина' }],
  },
  productsWithErrors: [],
  specialInfoBlockState: {
    hasOversizedProducts: true,
    addProductForFreeLogistic: true,
    freeLogistic: true,
    notAvailableProducts: true,
    gift: true,
  },
  wishlist: {
    data: [],
    productId: null,
    item: null,
  },
  applyLoyaltyPoints: 0,
};
