const cart = [];

export const cartReducer = (state = cart, action) => {


    switch(action.type) {
        case 'ADD_TO_CART' : {
            const cartItem = {...action.itemIDClick,soLuong:1};

            /**Kiểm tra sản phẩm có trong giỏ hàng chưa */
            let cartUpdate = state;
            let productCart = cartUpdate.find((product)=>product.maSP===cartItem.maSP);
            if (productCart) {
                productCart.soLuong += 1;
            } else {
                cartUpdate.push(cartItem)
            }

            /**Immutable (tính bất biến, object phải trả về object mới, 
             * arr phải trả về arr mới) */
            return [...cartUpdate]; /**trả về state mới(Lưu ý: kiểu dữ liệu 
                state trả về phải giống kiểu dữ liệu state cũ) */
        }

        case 'DELETE_ITEM' : {
          const cartUpdate = state.filter(product=>
             product.maSP !== action.productIDClick);


             return [...cartUpdate];
        }

        case 'ADJ_QTY': {
            let cartUpdate = [...state];

            let cartItem = cartUpdate.find(product=>product.maSP
                === action.productIDClick);
                if (cartItem) {
                    cartItem.soLuong += action.soLuong;
                    if (cartItem.soLuong < 1) {
                        alert('Số lượng tối thiểu là 1 !');
                        cartItem.soLuong -= action.soLuong;
                    }
                }
                return [...cartUpdate];
        }

        default: return state
    }
    // return state
  }