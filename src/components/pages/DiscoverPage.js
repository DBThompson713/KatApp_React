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
          Well Kids is an online community for parents to find, make and add healthy recipes for their children. Well Kids rise above nutrition and diet misinformation that with the knowledge, tools and easy, practical recipe ideas to help our kids reach their greatest potential. We provide parents with the opportunity to share, respond, and further empower families to eat a balanced diet of nutrient rich, real food.
          </p>
        </div>
        <div>
          <h4>Who created Well Kids?</h4>
        <p>Kathryn (Kat) Eccles is a full-time primary school teacher currently completing her Health Science degree. Kat has a passion for kids health and wellness and shares her love of healthy cooking through this online community for parents and children.</p>
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
{/* List item dot points are turned off to protect the recipe ingredients form, <li></li> is replaced with <p>-</p> */}
          Every recipe added to Well Kids will need the following input (text).
          <p>- Title</p>
          <p>- Description</p>
          <p>- Ingredients (entered separately)</p>
          <p>- Steps (entered separately)</p>
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
        As a teacher with a passion for real food and nourishment for kids, I understand the importance of healthy, yet easy, school lunchbox ideas. Casey-Lee Lyons from Live Love Nourish outlines some amazing ideas in her online article “Easy and Healthy Back to School Lunch Box Ideas”.
        </p>
      <p className="paragraphBreak">
        Here is a quick summary of what to include in a healthy lunchbox that will ensure kids are satiated and focussed for the day. Follow <a href="https://www.livelovenourish.com.au/easy-healthy-back-to-school-lunch-box-ideas/" target="_blank">this link</a> to read the full article! 
        </p>
        <div>
        <h4>Important Tips</h4>
        <p>Some important tips before we get started:</p>
        <p>
          <p>- Food should be fun</p>
          <p>- Keep it simple</p>
          <p>- Stress Less</p>
        </p>
        <h4>Savoury Main Items</h4>
        <p>
          <h5>Frittata or egg and veggie muffins</h5>
          <h6>Fritters</h6>
          <p>You can make these with egg and veggies or for an egg free option use chick- pea our + water in place of eggs</p>
          <h6>Homemade sushi</h6>
          <p>You can make this with quinoa too. If using quinoa mash a small amount of hummus or avocado into the quinoa so it sticks together.</p>
          <h6>Spaghetti bolognese muffins</h6>
          <p>Make these by whisking leftover spaghetti bolognese with 1-2 eggs and bake in muffin trays). You can also do this to make a fried rice slice, mix fried rice with whisked egg and bake in a slice tray for a lunchbox friendly way to serve fried rice.</p>
        </p>
        <h5>Whole Fruit and Vegetables</h5>
        <p>
          <h6>Fun shapes</h6>
          <p>Cut fruit into fun shapes using a cookie cutter.</p>
          <h6>Fun name</h6>
          <p>Name veggie sticks in a fun way. Such as wizard swords for asparagus spears,</p>
          <h6>Almost raw</h6>
          <p>Lightly steam and cool some vegetable sticks. Some kids don’t like raw veggies but will eat softened carrot sticks or softened beans for example.</p>
          <h6>Prep together</h6>
          <p>Get kids to pick their favourite fruits or get them involved in chopping and preparing to encourage them to eat them.</p>
        </p>
        <h5>Snacks</h5>
        <p>
        <h6>Dips</h6>
          <p>These are a fun item in kid’s lunch boxes. Such a hummus, guacamole or their favourite. Serve with crackers or veggie sticks. WholeLife has a great range of organic and vegan dips.</p>
          <h6>Yoghurt with mixed berries</h6>
          <p>Choose a yogurt with no added sugar. We use unsweetened coconut yoghurt.</p>
          <h6>Pikelets</h6>
          <p>Pikelets are a great fun food ideal for little hands and when made with wholesome ingredients they can be a healthy option too. I make ours from buckwheat our and top with homemade chia seed jam or use this recipe here.</p>
          <h6>Mini muffins</h6>
          <p>Use whole fruit to sweeten vs adding re ned sugar. We love making these mini coconut banana muffins.</p>
        </p>
        <h5>Quick and Convenient</h5>
        <p>
          <h6>Snack bars</h6>
            <p>There are lots of healthy whole food bars available, just be mindful of a few key things to choose a healthier one. Look for no added refined sugars and preservatives.</p>
            <h6>Bliss balls</h6>
          <p>Typically bliss balls are made with nuts, seeds, coconut and dates or rice malt syrup. Look for ones without added preservatives and if your school is nut free, check the ingredient label. You can also make these at home!</p>
          <h6>Roasted chickpeas or fava beans</h6>
          <p>These are a tasty snack providing a source of protein and fibre.</p>
        </p>
        </div>
      </section>
    </>
  );
};

export default Discover;
