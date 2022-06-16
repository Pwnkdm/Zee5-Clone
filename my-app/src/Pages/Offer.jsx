import { Button } from "@chakra-ui/react";
import React from "react";
import styles from "./offer.module.css";
import { useNavigate } from "react-router-dom";

const Offer = () => {
  const navigate = useNavigate();
  const click = () => {
    navigate("/carddetails");
  };
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h1>Watch Ad-Free with Premium!</h1>
        <div className={styles.flex}>
          <div>
            <img
              src="https://cdn-icons-png.flaticon.com/512/7381/7381543.png"
              alt="tikmark"
            />
          </div>
          <div>
            <p>2800+ Blockbuster Movies</p>
          </div>
          <div>
            <img
              src="https://cdn-icons.flaticon.com/png/512/4175/premium/4175189.png?token=exp=1655401865~hmac=74bba8ca453e4021826a16f4f1116bd0"
              alt="qmark"
            />
          </div>
        </div>
        <div className={styles.flex}>
          <div>
            <img
              src="https://cdn-icons-png.flaticon.com/512/7381/7381543.png"
              alt="tikmark"
            />
          </div>
          <p>250+ Web Series</p>
          <div>
            <img
              src="https://cdn-icons.flaticon.com/png/512/4175/premium/4175189.png?token=exp=1655401865~hmac=74bba8ca453e4021826a16f4f1116bd0"
              alt="qmark"
            />
          </div>
        </div>
        <div className={styles.flex}>
          <div>
            <img
              src="https://cdn-icons-png.flaticon.com/512/7381/7381543.png"
              alt="tikmark"
            />
          </div>
          <p>Live TV, Before TV</p>
          <div>
            <img
              src="https://cdn-icons.flaticon.com/png/512/4175/premium/4175189.png?token=exp=1655401865~hmac=74bba8ca453e4021826a16f4f1116bd0"
              alt="qmark"
            />
          </div>
        </div>
        <div className={styles.flex}>
          <div>
            <img
              src="https://cdn-icons-png.flaticon.com/512/7381/7381543.png"
              alt="tikmark"
            />
          </div>
          <p>Offer: Extra 10% OFF on Cards</p>
          <div>
            <img
              src="https://cdn-icons.flaticon.com/png/512/4175/premium/4175189.png?token=exp=1655401865~hmac=74bba8ca453e4021826a16f4f1116bd0"
              alt="qmark"
            />
          </div>
        </div>
        <div className={styles.flex}>
          <div>
            <img
              src="https://cdn-icons-png.flaticon.com/512/7381/7381543.png"
              alt="tikmark"
            />
          </div>
          <p>Watch on Mobile, TV, Laptop</p>
          <div>
            <img
              src="https://cdn-icons.flaticon.com/png/512/4175/premium/4175189.png?token=exp=1655401865~hmac=74bba8ca453e4021826a16f4f1116bd0"
              alt="qmark"
            />
          </div>
        </div>
        <div className={styles.flex}>
          <div>
            <img
              src="https://cdn-icons-png.flaticon.com/512/7381/7381543.png"
              alt="tikmark"
            />
          </div>
          <p>Eduaurra Competitive Exams Learning</p>
          <div>
            <img
              src="https://cdn-icons.flaticon.com/png/512/4175/premium/4175189.png?token=exp=1655401865~hmac=74bba8ca453e4021826a16f4f1116bd0"
              alt="qmark"
            />
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.box1}>
          <div className={styles.line}>
            <div className={styles.flex2}>
              <div className={styles.off}>
                <p>LIMITED PERIOD OFFER</p>
              </div>
              <div className={styles.off2}>SAVE 40%</div>
            </div>

            <div className={styles.flex3}>
              <div className={styles.price}>
                <h1>12 months plan</h1>
                <p>Effective price ₹50/month</p>
              </div>
              <div className={styles.price2}>
                <s>999</s>
                <h1
                  style={{
                    fontSize: "19px",
                    fontWeight: "bold",
                    marginRight: "5px",
                  }}
                >
                  599
                </h1>
                <div>
                  <img
                    width="20px"
                    height="10px"
                    src="https://cdn-icons.flaticon.com/png/512/4315/premium/4315445.png?token=exp=1655405356~hmac=76e1c40fa331eda264c710923e43e767"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.innerbox}>
            <img
              width="30px"
              height="30px"
              src="https://cdn-icons-png.flaticon.com/512/482/482478.png"
              alt=""
            />
            <p>Watch on 3 Screens at the same time</p>
          </div>
        </div>

        <div className={styles.box2}>
          <div className={styles.line}>
            <div className={styles.flex3}>
              <div className={styles.price}>
                <h1>3 months plan</h1>
              </div>
              <div className={styles.price2}>
                <h1
                  style={{
                    fontSize: "19px",
                    fontWeight: "bold",
                    marginRight: "5px",
                  }}
                >
                  599
                </h1>
              </div>
            </div>
          </div>
          <div className={styles.innerbox}>
            <img
              width="30px"
              height="30px"
              src="https://cdn-icons-png.flaticon.com/512/482/482478.png"
              alt=""
            />
            <p>Watch on 2 Screens at the same time</p>
          </div>
        </div>
        <div>
          <br />
          <br />
          <Button onClick={click} colorScheme="teal" w="90%" size="md">
            Continue with 599
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Offer;
