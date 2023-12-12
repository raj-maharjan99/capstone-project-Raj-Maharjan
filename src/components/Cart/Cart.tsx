import React from "react";
import { useDispatch, useSelector } from "react-redux";

function Cart() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);
  console.log(cartItems);
  return (
    <>
      <div className="container py-[50px] h-[100vh]">
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th className="text-center">Price</th>
              <th className="text-center">Total</th>
              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((a) => (
              <tr>
                <td className="col-sm-8 col-md-6">
                  <div className="media">
                    <a className="thumbnail pull-left" href="#">
                      {" "}
                      <img
                        className="media-object"
                        src={a.thumbnail}
                        style={{ width: 72, height: 72 }}
                      />{" "}
                    </a>
                    <div className="media-body">
                      <h4 className="media-heading">
                        <a href="#">{a.title}</a>
                      </h4>
                      <h5 className="media-heading">
                        {" "}
                        by <a href="#">{a.category}</a>
                      </h5>
                      <span>Status: </span>
                      <span className="text-success">
                        <strong>In Stock</strong>
                      </span>
                    </div>
                  </div>
                </td>
                <td
                  className="col-sm-1 col-md-1"
                  style={{ textAlign: "center" }}
                >
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    defaultValue={1}
                  />
                </td>
                <td className="col-sm-1 col-md-1 text-center">
                  <strong>${a.price}</strong>
                </td>
                <td className="col-sm-1 col-md-1 text-center">
                  <strong>$14.61</strong>
                </td>
                <td className="col-sm-1 col-md-1">
                  <button type="button" className="btn btn-danger">
                    <span className="glyphicon glyphicon-remove" /> Remove
                  </button>
                </td>
              </tr>
            ))}

            <tr>
              <td> &nbsp; </td>
              <td> &nbsp; </td>
              <td> &nbsp; </td>
              <td>
                <h3>Total</h3>
              </td>
              <td className="text-right">
                <h3>
                  <strong>$31.53</strong>
                </h3>
              </td>
            </tr>
            <tr>
              <td> &nbsp; </td>
              <td> &nbsp; </td>
              <td> &nbsp; </td>
              <td>
                <button type="button" className="btn btn-default">
                  <span className="glyphicon glyphicon-shopping-cart" />{" "}
                  Continue Shopping
                </button>
              </td>
              <td>
                {/* btn-success this bootstratp css effect same as hover */}
                <button type="button" className="btn bg-success text-white ">
                  Checkout
                  <span className="glyphicon glyphicon-play" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Cart;
