import { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import PropTypes from "prop-types";

import Table from "react-bootstrap/Table";

export const Checkout = (props) => {
  console.log(props.cartItem);
  const [show, setShow] = useState(false);
  const handleClose = () => {
    props.useModalEffect(false);
  };

  useEffect(() => {
    setShow(props.show);
  }, [props.show, props.useModalEffect]);

  return (
    <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      size="lg"
      keyboard={false}
      style={{ display: "block", position: "end" }}
    >
      <Modal.Header closeButton>
        <Modal.Title>Enjoy Your Shopping</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {props.cartItem.length > 0 ? (
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>Product Title</th>
                <th>Qty</th>
                <th>Price</th>
                <th>TOtal Price</th>
              </tr>
            </thead>
            <tbody>
              {props.cartItem.length > 0 &&
                props.cartItem.map((item, index) => (
                  <tr key={index}>
                    <td>{item.title}</td>
                    <td>{item.qty}</td>
                    <td>&#8377; {item.price}</td>
                    <td>&#8377; {item.price * item.qty}</td>
                  </tr>
                ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="3">
                  <b>Total Breakdown</b>
                </td>
                <td>
                  &#8377;{" "}
                  {props.cartItem.reduce(
                    (total, item) => total + item.price * item.qty,
                    0
                  )}
                </td>
              </tr>
            </tfoot>
          </Table>
        ) : (
          <h5 className="center pr-5">your cart is empty</h5>
        )}
      </Modal.Body>
    </Modal>
  );
};

Checkout.propTypes = {
  show: PropTypes.bool.isRequired,
  useModalEffect: PropTypes.func.isRequired,
  cartItem: PropTypes.array.isRequired,
};
