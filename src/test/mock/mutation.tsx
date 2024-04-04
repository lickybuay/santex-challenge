import { setItemToOrder } from "../../graphql/mutations";

export const resultItemToOrderMock = {
    addItemToOrder: {
        id: 'yourOrderId',
        createdAt: 'yourOrderCreationDate',
        code: 'yourOrderCode',
        totalQuantity: 1, // Total de productos en el pedido
        subTotal: 100, // Subtotal del pedido sin impuestos
        subTotalWithTax: 120, // Subtotal del pedido con impuestos
        currencyCode: 'USD', // Código de moneda
        total: 120, // Total del pedido sin impuestos
        totalWithTax: 120 // Total del pedido con impuestos
    }
};

export const setItemToOrderMock = ({
    data: {
      task: {
        data: resultItemToOrderMock
      },
    },
});
