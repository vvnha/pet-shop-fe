import { FormEvent } from 'react';
import PropTypes from 'prop-types';
import { PaymentElement, useStripe, useElements, Elements } from '@stripe/react-stripe-js';
import { Button, Dialog, DialogContent, DialogTitle, Stack, TextField } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export interface PaymentFormProps {
  open: boolean;
  onClose: Function;
  onPay: Function;
}

function PaymentForm(props: PaymentFormProps) {
  const elements = useElements();
  const stripe = useStripe();
  const { open, onClose, onPay } = props;
  const url = process.env.NEXT_PUBLIC_URL;

  //   const formik = useFormik({
  //     enableReinitialize: true,
  //     initialValues: {
  //       email: '',
  //       name: '',
  //     },
  //     validationSchema: Yup.object({
  //       email: Yup.string().email().required('Please fill your email!'),
  //       password: Yup.string().required('Please fill your name!'),
  //     }),
  //     onSubmit: (values) => {
  //       handleLoginClick(values);
  //     },
  //   });

  const onCloseDialog = () => {
    onClose(false);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const result = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      elements,
      confirmParams: {
        return_url: `${url}/cart`,
      },
      redirect: 'if_required',
    });

    onPay();

    if (result.error) {
      // Show error to your customer (for example, payment details incomplete)
      console.log(result.error.message);
    } else {
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }
  };

  return (
    <Dialog onClose={onCloseDialog} open={open}>
      <DialogTitle>PAYING METHOD</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <Stack direction="column" alignItems="center" justifyContent="center" spacing={1} mt={1}>
            {/* <TextField
              fullWidth
              id="outlined-name"
              label="Email"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              error={Boolean(formik.errors.email)}
              helperText={formik.errors.email}
            />
            <TextField
              fullWidth
              id="outlined-name"
              label="Name"
              name="name"
              onChange={formik.handleChange}
              value={formik.values.name}
              error={Boolean(formik.errors.name)}
              helperText={formik.errors.name}
            /> */}
            <PaymentElement />
            {elements && stripe && (
              <Button fullWidth variant="contained" type="submit" size="large">
                PAY
              </Button>
            )}
          </Stack>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default PaymentForm;
