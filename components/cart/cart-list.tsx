import { CartItemType, OrderInputType } from '@/models';
import { BottomNavigation, Box, Button, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import CartItem from './cart-item';
import _throttle from 'lodash/throttle';

export interface CartListProps {
  cartList?: CartItemType[];
  onOrderChange?: Function;
  scrollRef?: any;
  onSelectedChange?: Function;
  onCartChange?: Function;
}

const tempCart: CartItemType[] = [
  {
    product: {
      _id: '1',
      name: 'Drools | 3KG',
      description: 'Adult chicken and egg Egg, Chicken 3 kg Dry Adult Dog Food',
      price: 123.0,
      pet_list: [],
      promotion_list: [],
      image_list: [],
    },
    quantity: 1,
  },
  {
    product: {
      _id: '2',
      name: 'Drools | 3KG',
      description: 'Adult chicken and egg Egg, Chicken 3 kg Dry Adult Dog Food',
      price: 123.0,
      pet_list: [],
      promotion_list: [],
      image_list: [],
    },
    quantity: 1,
  },
];

export default function CartList({
  cartList = tempCart,
  onOrderChange,
  onSelectedChange,
  scrollRef,
  onCartChange,
}: CartListProps) {
  const [currentCartList, setCurrentCartList] = useState<CartItemType[]>(cartList);

  const [totalPrice, setTotalPrice] = useState(0);
  const [selectedItemList, setSelectedItemList] = useState<CartItemType[]>([]);

  useEffect(() => {
    if (Array.isArray(cartList)) {
      setCurrentCartList(cartList);
    }
  }, [cartList]);

  useEffect(() => {
    // any changes in currentCartList and cartItem is existed in  selectedItemList => update total price

    if (selectedItemList) {
      const newTotalPrice = selectedItemList.reduce((value, item) => {
        value += (item.product?.price || 0) * item.quantity;
        return value;
      }, 0);

      setTotalPrice(newTotalPrice);

      const newRemainItemList = updateRemainingItemList(currentCartList, selectedItemList);
      onSelectedChange?.(newRemainItemList);
    }
  }, [selectedItemList]);

  const updateRemainingItemList = (cartList: CartItemType[], selectedItemList: CartItemType[]) => {
    const remainItemList = cartList.map((item) => ({
      product: item.product?._id,
      quantity: item.quantity,
    }));

    const selectedItemIdList = selectedItemList.map((item) => item.product?._id);

    const newRemainItemList = remainItemList.filter(
      (item) => !selectedItemIdList.includes(item.product)
    );

    return newRemainItemList;
  };

  const deleteCartItem = (cartItem: CartItemType) => {
    if (!cartItem.product) return;

    const currentCartItemIndex = currentCartList.findIndex(
      (item) => item.product?._id === cartItem.product?._id && cartItem.product !== null
    );

    if (currentCartItemIndex < 0) return;

    const newCurrentCartList: CartItemType[] = [...currentCartList];
    newCurrentCartList.splice(currentCartItemIndex, 1);

    setCurrentCartList(newCurrentCartList);

    //update cart to api

    const newCartInputList = updateRemainingItemList(newCurrentCartList, []);

    onCartChange?.(newCartInputList);

    //update in selectedItemList if cartItem is existed in selectedItemList
    const cartItemIndex = selectedItemList.findIndex(
      (item) => item.product?._id === cartItem.product?._id && cartItem.product !== null
    );

    if (cartItemIndex < 0) return;

    const newSelectedItemList = [...selectedItemList];
    newSelectedItemList.splice(cartItemIndex, 1);

    setSelectedItemList(newSelectedItemList);
  };

  const handleChangeQty = (cartItem: CartItemType) => {
    if (!cartItem.product) return;

    if (cartItem.quantity === 0) {
      deleteCartItem(cartItem);
      return;
    }

    const currentCartItemIndex = currentCartList.findIndex(
      (item) => item.product?._id === cartItem.product?._id && cartItem.product !== null
    );

    if (currentCartItemIndex < 0) return;

    const newCurrentCartList: CartItemType[] = [...currentCartList];
    newCurrentCartList[currentCartItemIndex] = cartItem;

    setCurrentCartList(newCurrentCartList);

    //update cart to api

    const newCartInputList = updateRemainingItemList(newCurrentCartList, []);

    onCartChange?.(newCartInputList);

    //update in selectedItemList if cartItem is existed in selectedItemList
    const cartItemIndex = selectedItemList.findIndex(
      (item) => item.product?._id === cartItem.product?._id && cartItem.product !== null
    );

    if (cartItemIndex < 0) return;

    const newSelectedItemList = [...selectedItemList];
    newSelectedItemList[cartItemIndex] = cartItem;

    setSelectedItemList(newSelectedItemList);
  };

  const handleClickItem = (cartItem: CartItemType) => {
    if (!cartItem.product) return;

    const cartItemIndex = selectedItemList.findIndex(
      (item) => item.product?._id === cartItem.product?._id && cartItem.product !== null
    );

    const newSelectedItemList: CartItemType[] = [...selectedItemList];
    //if index >= 0 remove, else => add cartItem to selectedItemList
    if (cartItemIndex > -1) {
      newSelectedItemList.splice(cartItemIndex, 1);
    } else {
      newSelectedItemList.push(cartItem);
    }
    setSelectedItemList(newSelectedItemList);
  };

  const onBuyButtonClick = () => {
    const productList = selectedItemList.map((item) => ({
      product: item.product?._id,
      promotion: [],
      quantity: item.quantity,
    }));

    const order = {
      product_list: productList,
      promotion_list: [],
    };

    onOrderChange?.(order);
  };

  const handleDeleteItem = (cartItem: CartItemType) => {
    deleteCartItem(cartItem);
  };

  const handleScroll = () => {
    const { scrollTop, scrollHeight } = scrollRef.current;

    if (window.innerHeight + window.scrollY >= scrollHeight - scrollTop - 200) {
      // setCurrentCartList((prevCart) => [...prevCart, ...tempCart]);
    }
  };

  useEffect(() => {
    window.addEventListener(
      'scroll',
      _throttle(() => {
        handleScroll();
      }, 1000)
    );

    return () => {
      window.removeEventListener(
        'scroll',
        _throttle(() => {
          handleScroll();
        }, 1000)
      );
    };
  }, []);

  return (
    <Box py={2} ref={scrollRef}>
      {currentCartList.map((cartItem) => (
        <CartItem
          key={cartItem.product?._id || ''}
          onClickItem={handleClickItem}
          onChangeQty={handleChangeQty}
          onDeleteItem={handleDeleteItem}
          cartItem={cartItem}
        />
      ))}
      <Box sx={{ position: 'sticky', bottom: 0, left: 0, right: 0 }}>
        <BottomNavigation
          sx={{
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Stack direction="column">
            <Typography>Total:</Typography>
            <Typography
              sx={{
                fontFamily: 'Rubik',
                fontWeight: '400',
                fontStyle: 'normal',
                fontSize: '18px',
                lineHeight: '18px',
                color: 'primary.main',
                display: 'inline',
              }}
            >
              {`$${totalPrice.toFixed(2)}`}
            </Typography>
          </Stack>
          <Stack>
            <Button variant="contained" size="large" onClick={onBuyButtonClick}>
              Buy
            </Button>
          </Stack>
        </BottomNavigation>
      </Box>
    </Box>
  );
}
