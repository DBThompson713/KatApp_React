import React from "react";
import "./../../styles/faqs.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Discover = () => {
  return (
    <>
      <section className="faqContainer">
        <h1>Discover</h1>
        <p>
        Our online FAQ is here to answer your questions. Explore frequently asked questions below.
        </p>
        <a id="siteInfoLink" href="#siteInfo">
          How do I use the site?
        </a>
        <a id="healthyLunchboxLink" href="#healthyLunchbox">
          What to include in a healthy lunchbox?
        </a>
        <hr />
        <div>
          <h4>What is Well Kids?</h4>
          <p>
          Well Kids is an online community for parents to find, make and add healthy recipes for their children. There are lots of healthy eating options for parents, but not as many as there should be for kids. Because of this, Well Kids makes finding and making healthy recipes easy.
          </p>
        </div>
        <div>
          <h4>What are the benefits of joining the Well Kids community?</h4>
          <p>
          Our community is a place for parents to discover recipes and build on your knowledge of healthy eating. Think about us as your one-stop-shop for kids dinners, lunches, breakfasts and snacks.
          </p>
        </div>
        <div>
          <h4>Does Well Kids have recipes children can make?</h4>
          <p>
          In the future Well Kids will support child-friendly recipes, which are recipes that have been specially designed so children may prepare food. An easy way to imagine this is by imagining a recipe step such as “cut apple in quarters”.
          </p>
          <p className="paragraphBreak">
          For an adult, the recipe step is simple to imagine, but for a child they might not understand what “quarters” means. In this way, our Kids Corner will have visual cues (images) to support recipe creation. For our example above, there would be an image of an apple cut into halves, another image of an apple with each half being cut in half again. Safety will be addressed too, meaning the child-friendly cutting knife will be strongly encouraged.
          </p>
        </div>
        <div id="siteInfo">
          <hr />
          <h1>How to use the site</h1>
          <h4>How can I add a recipe?</h4>
          <p>
          Click here to add a recipe.

          Every recipe added to Well Kids will need the following input (text).
          <ul>
            <li>Title</li>
            <li>Description</li>
            <li>Ingredients (entered separately)</li>
            <li>Steps (entered separately)</li>
          </ul>
          </p>
        </div>
        <div>
          <h4>What can I do if I find a recipe on Kids Well that has a spelling mistake, an unclear image or I don’t think is safe for kids?
</h4>
          <p id="healthyLunchbox">
          To report a recipe, please use the flag recipe form represented on reach recipe with a small flag icon. After clicking on the flag recipe icon, a form will show on your screen where you can enter the reporting details.
          </p>
        </div>
        <h4>Healthy Lunchbox Snacks by Live Love Nourish</h4>
        <p>
        As a teacher with a passion for real food and nourishment for kids, I understand the importance of healthy, yet easy, school lunchbox ideas. Casey-Lee Lyons from Live Love Nourish outlines some amazing ideas in her online article “Easy and Healthy Back to School Lunch Box Ideas”. Here is a quick summary of what to include in a healthy lunchbox that will ensure kids are satiated and focussed for the day. Follow <a href="https://www.livelovenourish.com.au/easy-healthy-back-to-school-lunch-box-ideas/" target="_blank">this link</a> to read the full article! 
        </p>
        <div>
        <h4>Important Tips</h4>
        <p>Some important tips before we get started:</p>
        <p>
        <ul>
          <li>Food should be fun</li>
          <li>Keep it simple</li>
          <li>Stress Less</li>
        </ul>
        </p>
        <h4>Savoury Main Items</h4>
        <p>
        <ul>
          <li>Frittata or egg and veggie muffins</li>
          <li>Fritters (you can make these with egg and veggies or for an egg free option use chick- pea our + water in place of eggs)</li>
          <li>Homemade sushi (you can make this with quinoa too. If using quinoa mash a small amount of hummus or avocado into the quinoa so it sticks together).</li>
          <li>Spaghetti bolognese muffins (make these by whisking leftover spaghetti bolognese with 1-2 eggs and bake in muffin trays). You can also do this to make a fried rice slice, mix fried rice with whisked egg and bake in a slice tray for a lunchbox friendly way to serve fried rice).</li>
        </ul>
        </p>
        <h4>Whole Fruit and Vegetables</h4>
        <p>
        <ul>
          <li>Cut fruit into fun shapes using a cookie cutter.</li>
          <li>Name veggie sticks in a fun way. Such as wizard swords for asparagus spears,</li>
          <li>Lightly steam and cool some vegetable sticks. Some kids don’t like raw veggies but will eat softened carrot sticks or softened beans for example.</li>
          <li>Get kids to pick their favourite fruits or get them involved in chopping and preparing to encourage them to eat them.</li>
        </ul>
        </p>
        <h4>Snacks</h4>
        <p>
        <ul>
          <li>Dips. These are a fun item in kid’s lunch boxes. Such a hummus, guacamole or their favourite. Serve with crackers or veggie sticks. WholeLife has a great range of organic and vegan dips.</li>
          <li>Yoghurt with mixed berries. Choose a yogurt with no added sugar. We use unsweetened coconut yoghurt.</li>
          <li>Pikelets are a great fun food ideal for little hands and when made with wholesome ingredients they can be a healthy option too. I make ours from buckwheat our and top with homemade chia seed jam or use this recipe here.</li>
          <li>Mini muffins. Use whole fruit to sweeten vs adding re ned sugar. We love making these mini coconut banana muffins.</li>
        </ul>
        </p>
        <h4>Quick and Convenient</h4>
        <p>
        <ul>
          <li>Snack bars – There are lots of healthy whole food bars available, just be mindful of a few key things to choose a healthier one. Look for no added refined sugars and preservatives.</li>
          <li>Bliss balls – Typically bliss balls are made with nuts, seeds, coconut and dates or rice malt syrup. Look for ones without added preservatives and if your school is nut free, check the ingredient label. You can also make these at home!</li>
          <li>Roasted chickpeas or fava beans – These are a tasty snack providing a source of protein and fibre.</li>
        </ul>
        </p>
        </div>
      </section>
    </>
  );
};

export default Discover;
