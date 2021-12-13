import { ServiceCart } from '../services/ServiceCart';

export async function updateCartOnCheckout(
  deliveryMethod,
  paymentMethod,
  addressId
) {
  try {
    const { data } = await ServiceCart.update(
      deliveryMethod,
      paymentMethod,
      addressId
    );
    return data;
  } catch (e) {
    console.log('ServiceCart.update', e);
  }
}
