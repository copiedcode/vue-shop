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

      <!-- PRODUCT REVIEW -->
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
    <div id="customerForm" class="jumbotron" v-if="!finishedForm">
      <h4 class="display-5">Please fill out the following informations:</h4>
      <p class="lead">To process your order, we need to know a few details.</p>
      <hr class="my-4" />
      <form @submit.prevent="saveCustomer">
        <div class="form-group">
          <label for="checkoutAnrede" >Anrede</label>
          <select class="form-control" id="checkoutAnrede" v-model="customer.gender">
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
              v-model="customer.firstName"
              required
            />
          </div>
          <div class="col">
            <label for="checkoutLastName">Last Name</label>
            <input
              type="text"
              id="checkoutLastName"
              class="form-control"
              placeholder="Last name"
              v-model="customer.lastName"
              required
            />
          </div>
        </div>
        <h5>Shipping Adress:</h5>
        <div class="form-group">
          <label for="checkoutAdressShipping">Adress</label>
          <input
            type="text"
            class="form-control"
            id="checkoutAdressShipping"
            placeholder="Adress"
            v-model="customer.shipAdress"
            required
          />

          <div class="form-row">
            <div class="col-3">
              <label for="checkoutZipcodeShipping">Zipcode</label>
              <input
                type="text"
                id="checkoutZipcodeShipping"
                class="form-control"
                placeholder="Zipcode"
                v-model="customer.shipZipcode"
                required
              />
            </div>
            <div class="col">
              <label for="checkoutCityShipping">City</label>
              <input
                type="text"
                id="checkoutCityShipping"
                class="form-control"
                placeholder="City"
                v-model="customer.shipCity"
                required
              />
            </div>
          </div>
          <label class="my-1 mr-2" for="checkoutCountryShipping">Country</label>
          <select
            class="custom-select my-1 mr-sm-2"
            id="checkoutCountryShipping"
            v-model="customer.shipCountry"
            required
          >
            <option value="austria">Austria</option>
            <option value="germany">Germany</option>
            <option value="switzerland">Switzerland</option>
          </select>
        </div>
        <div class="custom-control custom-checkbox my-1 mr-sm-2 mb-3">
          <input
            v-model="oneAdress"
            type="checkbox"
            class="custom-control-input"
            id="checkoutSameBilling"
            checked
          />
          <label class="custom-control-label" for="checkoutSameBilling">
            Rechnungsadresse entspricht Lieferadresse.
          </label>
        </div>
        <div v-if="!oneAdress" class="form-group ">
          <h5>Billing Adress:</h5>
          <label for="checkoutAdressBilling">Adress</label>
          <input
            type="text"
            class="form-control"
            id="checkoutAdressBilling"
            placeholder="Adress"
            v-model="customer.billAdress"
            required
          />

          <div class="form-row">
            <div class="col-3">
              <label for="checkoutZipcodeBilling">Zipcode</label>
              <input
                type="text"
                id="checkoutZipcodeBilling"
                class="form-control"
                placeholder="Zipcode"
                v-model="customer.billZipcode"
                required
              />
            </div>
            <div class="col">
              <label for="checkoutCityBilling">City</label>
              <input
                type="text"
                id="checkoutCityBilling"
                class="form-control"
                placeholder="City"
                v-model="customer.billCity"
                required
              />
            </div>
          </div>
          <label class="my-1 mr-2" for="checkoutCountryBilling">Country</label>
          <select
            class="custom-select my-1 mr-sm-2"
            id="checkoutCountryBilling"
            v-model="customer.billCountry"
            required
          >
            <option value="austria">Austria</option>
            <option value="germany">Germany</option>
            <option value="switzerland">Switzerland</option>
          </select>
        </div>

        <button type="submit" class="btn btn-primary" >Submit</button>
      </form>
    </div>


    <div class="jumbotron"  v-else>
      <h4 class="display-5">Please confirm your data:</h4>
      <p class="lead">That is the last step, we promise.</p>
      <hr class="my-4">
      <p class="my-1"> <b>{{this.customer.gender }} {{ this.customer.firstName }} {{this.customer.lastName}}</b></p>
      <hr style="margin-right: 70%">
      <h6 class="text-uppercase">Shipping Adress:</h6>
      <p class="my-1">{{ this.customer.shipAdress }}</p>
      <p class="my-1">{{ this.customer.shipZipcode }}, {{ this.customer.shipCity }}</p>
      <p class="my-1 text-capitalize">{{ this.customer.shipCountry }}</p>
      <hr style="margin-right: 70%">
      <h6 class="text-uppercase">Billing Adress:</h6>
      <div v-if="!oneAdress">
      <p class="my-1">{{ this.customer.billAdress }}</p>
      <p class="my-1">{{ this.customer.billZipcode }}, {{ this.customer.billCity }}</p>
      <p class="my-1 text-capitalize">{{ this.customer.billCountry }}</p>
      </div>
      <p v-else> Same as shipping address.</p>
      <hr style="margin-right: 70%">
      <button type="button" class="mt-2 btn btn-warning btn-sm" @click="finishedForm = !finishedForm">Something wrong ? Click here to change.</button>
    </div>
    <router-link
      class="btn btn-outline-warning text-dark font-weight-bold"
      to="/cart"
      >Back to the Cart</router-link
    >

    <router-link v-if="finishedForm"
      class="btn btn-success text-dark font-weight-bold float-right"
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
      finishedForm: false,
      oneAdress: true,
      customer: {
        gender: "",
        firstName: "",
        lastName: "",
        shipAdress: "",
        shipZipcode: "",
        shipCity: "",
        shipCountry: "",
        billAdress: "",
        billZipcode: "",
        billCity: "",
        billCountry: ""
      }
    };
  },
  methods: {
    saveCustomer: function(){
      this.finishedForm = true;
    }
  }
};
</script>

<style scoped></style>
