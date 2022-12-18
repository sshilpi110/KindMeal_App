import React from "react";
import "../Styles/Help.css";

const Help = () => {
  return (
    <div>
      <div id="bodybox9">
        <div id="helpleft">
          <div>
            <img src="https://www.kindmeal.my/images/join_normal.png" alt="a" />
            <h5>General Help</h5>
          </div>
          <div>
            <img src="https://www.kindmeal.my/images/join_shop.png" alt="a" />
            <h5>Merchant Help</h5>
          </div>
          <div>
            <img
              src="https://www.kindmeal.my/images/icon-megaphone.png"
              alt="a"
            />
            <h5>Advertising</h5>
          </div>
          <div>
            <img src="https://www.kindmeal.my/images/about_us.png" alt="a" />
            <h5>About KindMeal</h5>
          </div>
          <div>
            <img src="https://www.kindmeal.my/images/about_hero.png" alt="a" />
            <h5>Superhero Guide</h5>
          </div>
          <div>
            <img src="https://www.kindmeal.my/images/contact.png" alt="a" />
            <h5>Contact Us</h5>
          </div>
        </div>
        <div id="helpright">
          <div className="heading">General Help</div>
          <br />
          <p>
            Wish to find out more on how to use KindMeal? Please check out our
            frequently-asked questions below. If you are unable to find your
            answer here, please <span> contact us</span> for further assistance.
          </p>
          <br />
          <br />
          <hr />
          <br />
          <br />
          <div className="sub-heading">What is KindMeal?</div>
          <p>
            KindMeal is Malaysia's (and possibly the world's!) pioneering
            meat-free lifestyle platform. We provide an effective platform to
            promote compassionate dining in a fun and effective way, that would
            allow you to save precious animal lives, improve your health, enjoy
            a cleaner environment and of course, save your hard-earned money.
          </p>
          <div className="sub-heading">What is Meat-Free?</div>
          <p>
            Meat-free means that the food does not contain any meat, or
            ingredients derived from meat. However, it may contain some elements
            that people of certain diet do not consume, such as eggs, dairy /
            milk, or alcohol. Please refer to the details within each specific
            shop / deal for further information.
          </p>
          <div className="sub-heading">
            How do I sign up to KindMeal? Is it free?
          </div>
          <p>
            Yes, it is absolutely free. To join our community of food lovers and
            grab awesome deals, please <span> sign up here</span>.
          </p>
          <br />
          <p>
            If you are a merchant that wish to promote your business for FREE,
            please proceed to our<span> Businesses Page</span>.
          </p>
          <div className="sub-heading">What is a Username?</div>
          <p>
            A Username is a nickname exclusively used to identify your profile.
            It will be used to access your Public Page, such as{" "}
            <span>https://KindMeal.my/MyUsername</span>, and it will also be
            displayed when you share KindMoments, comments and reviews.
          </p>
          <br />
          <div className="sub-heading">How do KindMeal deals work?</div>
          <p>
            Restaurants create attractive deals within KindMeal, which you can
            obtain coupons for. Our coupons differ from other conventional deal
            sites in that you do not need to make any upfront payment at
            KindMeal, and you can easily present our LiveCoupon via computer,
            mobile or laptop without any print coupons. For restaurants that do
            not require advance reservations, you can even use the LiveCoupon
            immediately! After all, eating is an impulsive decision, right?
          </p>
          <div className="sub-heading">How do I get a KindMeal coupon?</div>
          <p>
            Just browse to a deal you like, select the corresponding outlet
            location (if the restaurant has multiple locations), then click on
            Get Coupon. Please note that the outlet location cannot be changed
            after the coupon is obtained.
          </p>
          <br />
          <p>
            Each member is limited to 5 active coupons only. You must use the
            coupons before you can obtain additional ones. Unused coupons will
            automatically expire upon reaching its due date.
          </p>
          <div className="sub-heading">What is KindWords?</div>
          <p>
            KindWords is a great way to tell your friends about the great food
            and instantly get more discount.
          </p>
          <br />
          <p>
            For deals with KindWords enabled, you can enjoy DOUBLE the discount
            if you share the deal on Facebook or Twitter. Once you successfully
            share it, you will immediately receive the exclusive discount for
            your deal. If you prefer not to take advantage of KindWords, you can
            still proceed to get the deal at the normal discount price. Please
            note that not all deals support KindWords - it depends on the
            merchant.
          </p>
          <div className="sub-heading">
            How do I use my KindMeal LiveCoupon?
          </div>
          <p>
            Once a coupon is received, you can access the LiveCoupon and use it
            via one of the following ways. An Internet connection is required.
          </p>
          <br />
          <ul>
            <li>
              At KindMeal website, under Account-{" "}
              <span> My Coupons section</span>
            </li>
            <li>
              With our KindMeal mobile app, under Deals
              <span> My Coupons section</span>
            </li>
          </ul>
          <br />
          <p>
            You should only activate the LiveCoupon when you are at the
            restaurant, and upon informing the merchant. Some merchants may
            require that you activate it during the ordering process, while some
            will be during the payment process. Please inform the merchant first
            when you are ordering to ensure they are aware of your KindMeal
            LiveCoupon.
          </p>
          <br />
          <p>
            Once an active LiveCoupon is loaded, you will see a timer counting
            down the time remaining to use it. To activate it, click on Use
            LiveCoupon. Please ensure that you only activate it upon the request
            of the merchant. Activating it ahead of time may void your coupon
            and deal.
          </p>
          <div className="sub-heading">
            What if I don't have a mobile device or Internet connection, can I
            use a Print Coupon?
          </div>
          <p>
            This depends on the specific deal. If the merchant allows it, you
            can also choose to print out the coupon and bring it along. Please
            refer to the deal's Terms & Conditions to check if print coupons are
            allowed, and if any prior reservation and usage delay are required.
          </p>
          <br />
          <p>
            To print your coupon, first access it via KindMeal website at the
            Account- Account - My Coupons section, then click on Print Coupon at
            the corresponding coupon. If the Print Coupon button is not
            available, it means that only LiveCoupons are accepted for the deal.
          </p>
          <div className="sub-heading">
            What is a Print Coupon's Usage Delay?
          </div>
          <p>
            Some merchants may not have the facilities available to verify Print
            Coupons instantly, so they may impose a Usage Delay of a certain
            number of days to first print out a cross-checking reference list.
            If there is a 3-Day delay, it means that you can only use the Print
            Coupon 3 days after obtaining the coupon.
          </p>
          <br />
          <p>
            You may wish to check with the merchant first before using it. We
            strongly suggest using a LiveCoupon instead, which is immediate with
            no usage delays.
          </p>
          <br />
          <div className="sub-heading">
            How do I create a shop and offer deals?
          </div>
          <p>
            You need to first sign up a <span> merchant account</span>. If you
            have an existing food lover account, we can upgrade it for you to
            enable the Merchant functions. To do so, please{" "}
            <span> contact us</span> and tell us more about your shop.
          </p>{" "}
          <br />
          <p>
            Once your merchant account is activated, you can find out more
            details at the <span>Merchant Help</span> section.
          </p>
          <br />
          <div className="sub-heading">
            Do I need to make any payments to get the deal coupons?
          </div>
          <p>
            No, absolutely no payment is required at KindMeal to obtain your
            coupon. You will only need to make payment at the restaurant when
            you use the coupon to purchase your food.
          </p>
          <br />
          <div className="sub-heading">What is a KindMoment?</div>
          <p>
            A KindMoment is a food selfie, a photo moment of your delicious food
            for sharing with the world, and to encourage meat-free dining.
            Sharing a KindMoment is extremely quick and easy, similar to other
            social photo sharing websites or mobile apps.
          </p>{" "}
          <br />
          <p>
            If you link your KindMeal account with Facebook, you can also
            automatically publish your latest KindMoments there. On top of that,
            you can also manually share on Facebook and Twitter.
          </p>
          <br />
          <p>
            The public can like and comment on your KindMoments, and you can
            also edit the KindMoment after publication.
          </p>
          <br />
          <div className="sub-heading">What is Food Menu?</div>
          <p>
            Restaurants can additionally showcase meat-free dishes and menu
            items. These items are different from deals, and there may not be
            offers available for them. You can discover interesting new food
            through our menu listings, and browse the corresponding restaurants
            for more information. To search for specific types of food or
            restaurants, go to the search section at the bottom of the page. You
            can click on a menu item to launch the gallery, where you will have
            a quick view of the corresponding shop's details. Click into a
            specific
          </p>
          <br />
          <div className="sub-heading">What are Superhero Rankings?</div>
          <p>
            Superheroes save lives. So can you. By trying out meat-free meals,
            sharing delicious moments and encouraging friends to do so, you can
            earn yourself cool Superhero ranks on KindMeal and win awesome
            prizes! Check out the <span> Superhero Guide for more</span>{" "}
            Superhero Guide for more information.
          </p>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Help;
