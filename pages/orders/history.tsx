import { MainLayout } from '@/components/layouts';
import OrderList from '@/components/order/order-list';
import { ApiResponseData, Order, OrderItemType } from '@/models';
import { Box, Container, Stack, Typography } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import _throttle from 'lodash/throttle';
import { orderApi } from '@/services/order';
import _get from 'lodash/get';
import { toast } from 'react-toastify';

export interface HistoryOrderPageProps {}

const tempOrder: Order['product_list'] = [
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
    priceAtBuyTime: 123.0,
    promotion: [],
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
    quantity: 2,
    priceAtBuyTime: 123.0,
    promotion: [],
  },
  {
    product: {
      _id: '3',
      name: 'Drools | 3KG',
      description: 'Adult chicken and egg Egg, Chicken 3 kg Dry Adult Dog Food',
      price: 123.0,
      pet_list: [],
      promotion_list: [],
      image_list: [],
    },
    quantity: 1,
    priceAtBuyTime: 123.0,
    promotion: [],
  },
  {
    product: {
      _id: '4',
      name: 'Drools | 3KG',
      description: 'Adult chicken and egg Egg, Chicken 3 kg Dry Adult Dog Food',
      price: 123.0,
      pet_list: [],
      promotion_list: [],
      image_list: [],
    },
    quantity: 3,
    priceAtBuyTime: 123.0,
    promotion: [],
  },
];

export default function HistoryOrderPage(props: HistoryOrderPageProps) {
  const [orderList, setOrderList] = useState<Order['product_list']>(tempOrder);
  const scrollRef = useRef<HTMLDivElement>();
  const [isFetching, setIsFetching] = useState(false);
  const [orderParams, setOrderParams] = useState({
    _page: 1,
    _limit: 10,
  });
  const [maxPage, setMaxPage] = useState(2);

  useEffect(() => {
    (async () => {
      try {
        if (!orderParams._page) return;
        if (orderParams._page > maxPage) return;

        const response = await orderApi.getHistoryOrder(orderParams);
        const orders: Order[] = _get(response, 'values', []);

        const resTotalRows: number = _get(
          response,
          'pagination._totalRows',
          Number.POSITIVE_INFINITY
        );
        setMaxPage(Math.ceil(resTotalRows / orderParams._limit));

        const newOrderList: Order['product_list'] = [];
        if (orders.length > 0) {
          orders.forEach((orderItem) => {
            newOrderList.push(...orderItem.product_list);
          });
        }

        if (orderParams._page === 1) {
          setOrderList(newOrderList);
        }

        if (orderParams._page > 1) {
          setOrderList((currentOrderList) => [...currentOrderList, ...newOrderList]);
        }
      } catch (error) {
        toast.error((error as Error).message);
      }
    })();
  }, [orderParams]);

  const handleScroll = async () => {
    if (!scrollRef.current) return;

    const { scrollTop, scrollHeight } = scrollRef.current;

    if (window.innerHeight + window.scrollY >= scrollHeight - scrollTop - 200) {
      if (orderParams._page > maxPage) return;

      setOrderParams({
        _page: orderParams._page++,
        _limit: orderParams._limit,
      });
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
    <Box py={2}>
      <Container>
        <Stack
          direction="column"
          sx={{
            position: 'relative',
          }}
        >
          <Typography
            sx={{
              fontFamily: 'Pangolin',
              fontWeight: '500',
              fontStyle: 'normal',
              fontSize: '28px',
              lineHeight: '35px',
            }}
          >
            Your orders
          </Typography>
          <OrderList scrollRef={scrollRef} orderList={orderList} />
        </Stack>
      </Container>
    </Box>
  );
}

HistoryOrderPage.Layout = MainLayout;
