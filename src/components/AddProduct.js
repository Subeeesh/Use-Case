import React, { useState } from "react";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
export default function AddUser() {
  const validationSchema = Yup.object({
    productId: Yup.number().required("Product is mandatory"),
    productName: Yup.string().required("productName is mandatory"),
    supplierName: Yup.string().required("SupplierName is mandatory"),
    quantity: Yup.number().required("Qunantity is mandatory"),
    expiryDate: Yup.string().required("expiryDate is mandatory"),
    arrivalDate: Yup.string().required("arrivalDate is mandatory"),
  });
  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      productId: "",
      productName: "",
      supplierName: "",
      quantity: "",
      expiryDate: "",
      arrivalDate: "",
    },
    validationSchema,
    onSubmit(values) {
      axios
        .post("http://localhost:8080/addproduct/add", values)
        .then((res) => res.data)
        .then((data) => {
          alert("Product added");
          console.log("=============Submitted");
          console.log(data);
        })
        .catch((err) => {
          console.log("err");
        });
    },
  });

  return (
    <div>
      <div className="container-md ">
        <div className="col-sm-13">
          <div className="card">
            <div className="card-header">
              <h4>ADD PRODUCTS</h4>
            </div>
            <form onSubmit={handleSubmit} noValidate>
              <div class="form-row">
                <div class="col-md-4 mb-3">
                  <label for="validationDefault01">Product Id</label>
                  <input
                    type="text"
                    class="form-control"
                    id="validationDefault01"
                    name="productId"
                    value={values.productId}
                    onChange={handleChange}
                  />
                  {errors.productId ? errors.firstname : null}
                </div>

                <div class="col-md-4 mb-3">
                  <label for="validationDefault02">Product name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="validationDefault02"
                    name="productName"
                    value={values.productName}
                    onChange={handleChange}
                  />
                  {errors.productName ? errors.productName : null}
                </div>

                <div class="col-md-4 mb-3">
                  <label for="validationDefaultUsername">Supplier name</label>
                  <div class="input-group">
                    <input
                      type="text"
                      class="form-control"
                      id="validationDefaultUsername"
                      aria-describedby="inputGroupPrepend2"
                      name="supplierName"
                      value={values.supplierName}
                      onChange={handleChange}
                    />
                    {errors.SupplierName ? errors.SupplierName : null}
                  </div>
                </div>
              </div>

              <div class="form-row">
                <div class="col-md-6 mb-3">
                  <label for="validationDefault03">Quantity</label>
                  <input
                    type="text"
                    class="form-control"
                    id="validationDefault03"
                    name="quantity"
                    value={values.quantity}
                    onChange={handleChange}
                  />
                  {errors.quantity ? errors.quantity : null}
                </div>

                <div class="col-md-3 mb-3">
                  <label for="validationDefault04">Expiry Date</label>
                  <input
                    type="text"
                    class="form-control"
                    id="validationDefault04"
                    name="expiryDate"
                    value={values.expiryDate}
                    onChange={handleChange}
                  />
                  {errors.expiryDate ? errors.expiryDate : null}
                </div>

                <div class="col-md-3 mb-3">
                  <label for="validationDefault05">Arrival Date</label>
                  <input
                    type="text"
                    class="form-control"
                    id="validationDefault05"
                    name="arrivalDate"
                    value={values.arrivalDate}
                    onChange={handleChange}
                  />
                  {errors.arrivalDate ? errors.arrivalDate : null}
                </div>
              </div>

              <button class="btn btn-primary" type="submit">
                Add Product
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
