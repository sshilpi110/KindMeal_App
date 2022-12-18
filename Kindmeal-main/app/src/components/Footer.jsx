import React from "react";
import { Flex, FooterLayout, Heddline, P, Para } from "./Styled";

const Footer = () => {
  return (
    <FooterLayout>
      <Flex>
        <div>
          <Heddline>General</Heddline>
          <P>Home</P>
          <P>Sign Up</P>
          <P>Businesses / Restaurateurs</P>
          <P>Advertising</P>
          <P>About KindMeal.my</P>
          <P>Help & FAQ</P>
          <P>Terms & Conditions</P>
          <P>Inspiring Partners</P>
          <P>Lifestyle Ambassadors</P>
          <P>Jobs Ambassadors</P>
          <P>Contact Us</P>
        </div>
        <div>
          <Heddline>Features</Heddline>
          <P>Meat-Free Deals</P>
          <P>Tasty Menus</P>
          <P>Kind Moments</P>
          <P>Meat-Free Recipes</P>
          <P>Member Recommendations</P>
          <P>Featured Restaurants</P>
          <P>Vegetarian & Vegan Directory</P>
          <P>Food Map</P>
          <P>Become A Superhero</P>
          <P>Vegan News & Vegetarian Articles</P>
          <P>Latest Comments</P>
        </div>
        <div>
          <Heddline>Social Media</Heddline>
          <P>KindMeal Widget</P>
          <P>Facebook</P>
          <P>Twitter</P>
          <P>Instagram</P>
        </div>
        <div>
          <Heddline>Mobile</Heddline>
          <P>iPhone & iPod App</P>
          <P>Android App</P>
          <br />
          <Heddline>Exciting Promos</Heddline>
          <P>Gadhimai: Ending Mass Slaughter</P>
          <P>Free Meals</P>
          <P>Food Bloggers</P>
          <P>Uber CHIRP</P>
          <P>Jane Goodall Contest</P>
          <P>Win Digi iPhone 6</P>
          <P>Feed The Poor</P>
          <P>Win Superhero Gifts</P>
          <P>Win an iPad Mini 3</P>
        </div>
        <div>
          <Heddline>PetFinder.my</Heddline>
          <P>Adopt A Pet</P>
          <P>Smartphone Apps</P>
          <P>WaGazine</P>
          <P>Discussion Forum</P>
          <P>Medical Fund</P>
        </div>
      </Flex>

      <Para>Copyright © KindMeal.my, 2014 - 2022. All rights reserved.</Para>
      <Para>
        This website promotes compassionate, meat-free dining experience. Some
        food may contain eggs, dairy products or alcohol, please view individual
        listings for details.
      </Para>
    </FooterLayout>
  );
};

export default Footer;
