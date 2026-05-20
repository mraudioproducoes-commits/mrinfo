export const getPixMessage = (productName, priceInCentavos) => {
  const formattedPrice = (priceInCentavos / 100).toFixed(2).replace('.', ',');
  return `Olá, gostaria de comprar o ${productName} por R$ ${formattedPrice} via PIX`;
};