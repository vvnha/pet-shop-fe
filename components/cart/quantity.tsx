import { CartItemType } from '@/models';
import { Add, Remove } from '@mui/icons-material';
import { IconButton, Stack, TextField } from '@mui/material';
import * as React from 'react';

export interface QuantityComponentProps {
  initialQty?: number;
  onChangeQty?: Function;
}

export default function QuantityComponent({ initialQty = 1, onChangeQty }: QuantityComponentProps) {
  const [qty, setQty] = React.useState(initialQty);

  const onIncreaseClick = () => {
    setQty((qty) => qty + 1);
    onChangeQty?.(qty + 1);
  };

  const onDecreaseClick = () => {
    if (qty <= 0) return;

    setQty((qty) => qty - 1);
    onChangeQty?.(qty - 1);
  };

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQty(Number(e.target.value));
    onChangeQty?.(Number(e.target.value));
  };

  function handleKeyDown(event: React.KeyboardEvent) {
    function isValidNumber(qty: any) {
      return !!(!isNaN(qty) && !isNaN(parseInt(qty)));
    }

    function isSpace(str: any) {
      return str === ' ';
    }

    function isWhitelistedKey(key: any) {
      const whitelistedActions = [
        'Backspace',
        'ArrowLeft',
        'ArrowRight',
        'ArrowUp',
        'ArrowDown',
        'Tab',
        'Delete',
        '.', //decimal separator
      ];

      return whitelistedActions.includes(key);
    }

    if (isWhitelistedKey(event.key)) {
      // let it through
    } else if (isSpace(event.key) || !isValidNumber(event.key)) {
      event.preventDefault();
    }
  }

  return (
    <Stack direction="row" spacing={0.5} maxWidth="120px">
      <IconButton size="small" onClick={onIncreaseClick}>
        <Add />
      </IconButton>
      <TextField
        id="outlined-size-small"
        value={qty}
        size="small"
        onChange={handleChangeInput}
        InputProps={{
          inputProps: {
            style: {
              maxHeight: '16px',
            },
          },
        }}
        type="text"
        onKeyDown={handleKeyDown}
        sx={{
          width: '70px',
          height: '16px',
        }}
      />
      <IconButton size="small" onClick={onDecreaseClick}>
        <Remove />
      </IconButton>
    </Stack>
  );
}
