import { useState } from "react";
import { Link } from "react-router-dom";
import Catalog from "../../assets/catalog.json";

import img from "../../assets/images/catalog/poster_mars_front_a.jpg";

import { OuterContainer, Container, MainImage, ItemDetails } from "./styles";
import { Button } from "../../components/Button/Button.js";

function ShopItem({ itemId, addItemToCart }) {
  const [showCheckoutBtn, setShowCheckoutBtn] = useState(false);

  const item = Catalog.find((i) => i.id == itemId);

  function handleClick() {
    addItemToCart({ ...item, quantity: 1 });
    setShowCheckoutBtn(true);
  }

  const images = require.context("../../assets/images/catalog", true);
  let img = images("./" + item.imgs[0]).default;

  return (
    <OuterContainer
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
    >
      <Container>
        <MainImage src={img} alt="" />

        <ItemDetails>
          <h1>{item.name}</h1>
          <span>{item.product_type}</span>

          <p>
            <strong>About the image: </strong>
            {item.description ||
              "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
          </p>

          <div className="buttons-wrapper">
            <Button primary onClick={handleClick}>
              Add to cart
            </Button>

            <div>
              {showCheckoutBtn && (
                <Button primary small>
                  <Link to="/checkout">Go to checkout</Link>
                </Button>
              )}

              <Button small>
                <Link to="/shop">Go back</Link>
              </Button>
            </div>
          </div>
        </ItemDetails>
      </Container>
    </OuterContainer>
  );
}

export default ShopItem;
