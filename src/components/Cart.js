import React from "react";

class Cart extends React.Component {
  render() {
    return (
      <section>
        <div class="row">
          <div class="col-lg-8">
            <div class="mb-3">
              <div class="pt-4 wish-list">
                <h5 class="mb-4">
                  Cart (<span>2</span> items)
                </h5>

                <div class="row mb-4">
                  <div class="col-md-5 col-lg-3 col-xl-3">
                    <div class="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
                      <a href="#!">
                        <div class="mask">
                          <img
                            class="img-fluid w-100"
                            src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12.jpg"
                          />
                          <div class="mask rgba-black-slight"></div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div class="col-md-7 col-lg-9 col-xl-9">
                    <div>
                      <div class="d-flex justify-content-between">
                        <div>
                          <h5>Blue denim shirt</h5>
                          <p class="mb-3 text-muted text-uppercase small">
                            Shirt - blue
                          </p>
                          <p class="mb-2 text-muted text-uppercase small">
                            Color: blue
                          </p>
                          <p class="mb-3 text-muted text-uppercase small">
                            Size: M
                          </p>
                        </div>
                        <div>
                          <div class="def-number-input number-input safari_only mb-0 w-100">
                            <button
                              onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                              class="minus decrease"
                            ></button>
                            <input
                              class="quantity"
                              min="0"
                              name="quantity"
                              value="1"
                              type="number"
                            />
                            <button
                              onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                              class="plus increase"
                            ></button>
                          </div>
                          <small
                            id="passwordHelpBlock"
                            class="form-text text-muted text-center"
                          >
                            (Note, 1 piece)
                          </small>
                        </div>
                      </div>
                      <div class="d-flex justify-content-between align-items-center">
                        <div>
                          <a
                            href="#!"
                            type="button"
                            class="card-link-secondary small text-uppercase mr-3"
                          >
                            <i class="fas fa-trash-alt mr-1"></i> Remove item{" "}
                          </a>
                          <a
                            href="#!"
                            type="button"
                            class="card-link-secondary small text-uppercase"
                          >
                            <i class="fas fa-heart mr-1"></i> Move to wish list{" "}
                          </a>
                        </div>
                        <p class="mb-0">
                          <span>
                            <strong id="summary">$17.99</strong>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>


                <div class="row">
  <div class="col-4">
    <div class="list-group" id="list-tab" role="tablist">
      <a class="list-group-item list-group-item-action active" id="list-home-list" data-bs-toggle="list" href="#list-home" role="tab" aria-controls="home">Home</a>
      <a class="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list" href="#list-profile" role="tab" aria-controls="profile">Profile</a>
      <a class="list-group-item list-group-item-action" id="list-messages-list" data-bs-toggle="list" href="#list-messages" role="tab" aria-controls="messages">Messages</a>
      <a class="list-group-item list-group-item-action" id="list-settings-list" data-bs-toggle="list" href="#list-settings" role="tab" aria-controls="settings">Settings</a>
    </div>
  </div>
  <div class="col-8">
    <div class="tab-content" id="nav-tabContent">
      <div class="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">...</div>
      <div class="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">...</div>
      <div class="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">...</div>
      <div class="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list">...</div>
    </div>
  </div>
</div>              </div>
            </div>

            <div class="mb-3">
              <div class="pt-4">
                <h5 class="mb-4">Expected shipping delivery</h5>

                <p class="mb-0"> Thu., 12.03. - Mon., 16.03.</p>
              </div>
            </div>

            <div class="mb-3">
              <div class="pt-4">
                <h5 class="mb-4">We accept</h5>

                <img
                  class="mr-2"
                  width="45px"
                  src="https://mdbootstrap.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                  alt="Visa"
                />
                <img
                  class="mr-2"
                  width="45px"
                  src="https://mdbootstrap.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                  alt="American Express"
                />
                <img
                  class="mr-2"
                  width="45px"
                  src="https://mdbootstrap.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                  alt="Mastercard"
                />
                <img
                  class="mr-2"
                  width="45px"
                  src="https://mdbootstrap.com/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.png"
                  alt="PayPal acceptance mark"
                />
              </div>
            </div>
          </div>

          <div class="col-lg-4">
            <div class="mb-3">
              <div class="pt-4">
                <h5 class="mb-3">The total amount of</h5>

                <ul class="list-group list-group-flush">
                  <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                    Temporary amount
                    <span>$25.98</span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                    Shipping
                    <span>Gratis</span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                    <div>
                      <strong>The total amount of</strong>
                      <strong>
                        <p class="mb-0">(including VAT)</p>
                      </strong>
                    </div>
                    <span>
                      <strong>$53.98</strong>
                    </span>
                  </li>
                </ul>

                <button type="button" class="btn btn-primary btn-block">
                  go to checkout
                </button>
              </div>
            </div>

            <div class="mb-3">
              <div class="pt-4">
                <a
                  class="dark-grey-text d-flex justify-content-between"
                  data-toggle="collapse"
                  href="#collapseExample"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  Add a discount code (optional)
                  <span>
                    <i class="fas fa-chevron-down pt-1"></i>
                  </span>
                </a>

                <div class="collapse" id="collapseExample">
                  <div class="mt-3">
                    <div class="md-form md-outline mb-0">
                      <input
                        type="text"
                        id="discount-code"
                        class="form-control font-weight-light"
                        placeholder="Enter discount code"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Cart;
