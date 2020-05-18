<template>
  <div>
    <h1>Checkout</h1>
    <div>
      <h4 class="pt-3 pb-3">Here is a summary of your products:</h4>
      <table class="table table-hover" v-if="cart.length">
        <caption class="text-right h3">
          <b>Total:</b>
          <price
            class="d-block text-success font-weight-light"
            :value="Number(cartTotal)"
          ></price>
          <p style="font-size: 0.5em" class="text-right">
            incl. MwSt. <br />
            shipping excl.
          </p>
        </caption>

        <thead>
          <tr>
            <th scope="col">Item</th>
            <th scope="col" class="text-center">Qty</th>
            <th scope="col" class="text-right">Price</th>
            <th scope="col" class="text-right">Sub-total</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in cart" :key="item.product.id">
            <th scope="row">{{ item.product.name }}</th>
            <td class="text-center">{{ item.qty }}</td>
            <td class="text-right">
              <price :value="Number(item.product.price)"></price>
            </td>
            <td class="text-right">
              <price :value="Number(item.qty * item.product.price)"></price>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="jumbotron">
      <h4 class="display-5">Please fill out the following informations:</h4>
      <p class="lead">To process your order, we need to know a few details.</p>
      <hr class="my-4" />
      <form>
        <div class="form-group">
          <label for="checkoutAnrede">Anrede</label>
          <select class="form-control" id="checkoutAnrede">
            <option>Frau</option>
            <option>Herr</option>
            <option>Divers</option>
          </select>
        </div>
        <div class="form-group form-row">
          <div class="col">
            <label for="checkoutFirstName">First Name</label>
            <input
              type="text"
              id="checkoutFirstName"
              class="form-control"
              placeholder="First name"
            />
          </div>
          <div class="col">
            <label for="checkoutLastName">Last Name</label>
            <input
              type="text"
              id="checkoutLastName"
              class="form-control"
              placeholder="Last name"
            />
          </div>
        </div>
          <h5>Shipping Adress:</h5>
        <div class="form-group">
          <label for="checkoutAdressShipping">Adress</label>
          <input
            type="password"
            class="form-control"
            id="checkoutAdressShipping"
            placeholder="Adress"
          />

          <div class="form-row">
            <div class="col-3">
              <label for="checkoutZipcodeShipping">Zipcode</label>
              <input
                type="text"
                id="checkoutZipcodeShipping"
                class="form-control"
                placeholder="Zipcode"
              />
            </div>
            <div class="col">
              <label for="checkoutCityShipping">City</label>
              <input
                type="text"
                id="checkoutCityShipping"
                class="form-control"
                placeholder="City"
              />
            </div>
          </div>
          <label class="my-1 mr-2" for="checkoutCountryShipping">Country</label>
          <select
            class="custom-select my-1 mr-sm-2"
            id="checkoutCountryShipping"
          >
            <option value="austria">Austria</option>
            <option value="germany">Germany</option>
            <option value="switzerland">Switzerland</option>
          </select>
        </div>
        <div class="custom-control custom-checkbox my-1 mr-sm-2 mb-3">
          <input v-model="oneAdress"
            type="checkbox"
            class="custom-control-input"
            id="checkoutSameBilling"
            checked
          />
          <label  class="custom-control-label" for="checkoutSameBilling">
              Rechnungsadresse entspricht Lieferadresse.
          </label>
        </div>
        <div v-if="!oneAdress" class="form-group ">
          <h5>Billing Adress:</h5>
          <label for="checkoutAdressBilling">Adress</label>
          <input
            type="password"
            class="form-control"
            id="checkoutAdressBilling"
            placeholder="Adress"
          />

          <div class="form-row">
            <div class="col-3">
              <label for="checkoutZipcodeBilling">Zipcode</label>
              <input
                type="text"
                id="checkoutZipcodeBilling"
                class="form-control"
                placeholder="Zipcode"
              />
            </div>
            <div class="col">
              <label for="checkoutCityBilling">City</label>
              <input
                type="text"
                id="checkoutCityBilling"
                class="form-control"
                placeholder="City"
              />
            </div>
          </div>
          <label class="my-1 mr-2" for="checkoutCountryBilling">Country</label>
          <select
            class="custom-select my-1 mr-sm-2"
            id="checkoutCountryBilling"
          >
            <option value="austria">Austria</option>
            <option value="germany">Germany</option>
            <option value="switzerland">Switzerland</option>
          </select>
        </div>

        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>

    <router-link
      class="btn btn-outline-warning text-dark font-weight-bold"
      to="/cart"
      >Back to the Cart</router-link
    >
    <router-link
      class="btn btn-outline-success text-dark font-weight-bold float-right"
      to="/paying"
      >Proceed</router-link
    >
  </div>
</template>

<script>
import Price from "./Price";
export default {
  name: "Checkout",
  props: ["cart", "cartTotal"],
  components: {
    Price
  },
    data: function() {
      return {
        oneAdress: true
    }

    }
};
</script>

<style scoped></style>
