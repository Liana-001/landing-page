
import '@fortawesome/fontawesome-svg-core/styles.css';
import './style.css';




import './App.css'


import React, { useEffect } from 'react';
function App() {
 

  useEffect(() => {
    // Select the menu icon and nav links
    const menuIcon = document.querySelector('.header .nav-bar .menu-icon');
    const navLinks = document.querySelector('.header .nav-bar .nav-links');
  
    // Add an event listener to the menu icon
    menuIcon?.addEventListener('click', () => {
      navLinks?.classList.toggle('visible');
    });
  
    const quotes = [
      "Love is the master key that opens the gates of happiness.",
      "Where there is love, there is life.",
      "Love recognizes no barriers.",
      "The greatest happiness of life is the conviction that we are loved.",
      "You are the finest, loveliest, tenderest, and most beautiful person I have ever known.",
      "The best love is the kind that awakens the soul and makes us reach for more.",
      "You don't love someone because they're perfect, you love them in spite of the fact that they're not."
    ];
    
    let currentQuote = 0;
    
    setInterval(() => {
      
      document.getElementById("quote").innerHTML = quotes[currentQuote];
      
      currentQuote = (currentQuote + 1) % quotes.length;
    }, 5000); // Rotate quotes every 3 seconds

// Select all read more links, read less links, and hidden text elements
const readMoreLinks = document.querySelectorAll('.read-more');
const readLessLinks = document.querySelectorAll('.read-less');
const hiddenTextElements = document.querySelectorAll('.hidden-text');

// Loop through each read more link
readMoreLinks.forEach((readMoreLink, index) => {
  // Add an event listener to the read more link
  readMoreLink.addEventListener('click', (e) => {
    e.preventDefault();
    // Show the hidden text element corresponding to the current read more link
    hiddenTextElements[index].classList.add('show-hidden-text');
    // Hide the read more link
    readMoreLink.classList.add('read-more-hidden');
    // Show the read less link
    readLessLinks[index].classList.remove('hide');
  });
});

// Loop through each read less link
readLessLinks.forEach((readLessLink, index) => {
  // Add an event listener to the read less link
  readLessLink.addEventListener('click', (e) => {
    e.preventDefault();
    // Hide the hidden text element corresponding to the current read less link
    hiddenTextElements[index].classList.remove('show-hidden-text');
    // Show the read more link
    readMoreLinks[index].classList.remove('read-more-hidden');
    // Hide the read less link
    readLessLink.classList.add('hide');
  });
});

  // Select the image in the right section
  const image = document.querySelector('.right-section img');
  image?.addEventListener('click', () => {
    image!.classList.toggle('zoomed');



  });


}, []);

  

    
return (
   
  <div className="header">
  <div className="name">L I A N A</div>
  <div className="separator"></div>
  <div className="nav-bar">
<div className="menu-icon">
  <span></span>
  <span></span>
  <span></span>
</div>
<ul className="nav-links">
  <li><a href="#">Home</a></li>
  <li><a href="#">Blog</a></li>
  <li><a href="#">Love Stories</a></li>
  <li><a href="#">Events</a></li>
  <li><a href="#">Gallery</a></li>
 
  </ul>
</div>


  <div className="separator"></div>

  <div className="main-section">
<div className="left-section">
  <h1 className="main-heading">Unleash Your Potential 
</h1>

<h3>Own your uniqueness</h3>


<div className="elegance-text">
<p>"I welcome you to a power house of refinement and transformation where growth meets love and elegance unfolds. Cultivate poise, confidence, and inner beauty with us, and discover the transformative power of embracing your most refined and radiant self"</p>
<a href=" elegance" className="read-more">Read More <i className="arrow-icon"></i></a>
<div className="hidden-text">
<p>In Lianainspires.com the GLE Community, you've reached the Threshold of Transformation; Here, love, growth, and elegance converge to empower your journey. Unlock your full potential, and let your refined, radiant self shine. As you embark on this path, discover new depths of self-awareness, cultivate meaningful connections, and embody confidence that illuminates every aspect of your life. </p>


<a href="#" className="read-less ">Read Less <i className="arrow-icon-up"></i></a>
</div>
    </div>
  </div>

  <div className="right-section">

  <img src="./standing.jpg" alt="Woman raising hands" />
</div>
</div>



<div className="love-quotes">
  <p id="quote"></p>
</div>



 {/* New section */}
 <div className="new-section">
        <div className="container">
        <img src="./meta.jpg" alt="standing woman in a garden" />
          <div className="text-container">
            <h1 className="full-name">Liana Obika</h1>
            <h2 className="subtitle">LIFE STYLE COACH AND EXPERT</h2>

            <p className="elegance-text"> I'm Liana, a creative visionary
               with a passion for innovation and self-expression. With a heart full of kindness and a mind
                full of ideas, I'm always looking for new ways to grow and inspire others.
</p>
<a href="elegance" className="read-more">Click to read more about me <i className="arrow-icon"></i></a>
<div className="hidden-text">
  <p>As a writer, speaker, and lover of all things elegant, I'm passionate about spreading positivity and inspiring others.
     I believe that life is a journey of continuous growth, and that every experience is an opportunity to learn and evolve. 
     With a curious mind and a creative spirit, I'm dedicated to helping others discover their unique voice and live their most authentic lives.
"The greatest glory in living lies not in never falling, but in rising every time we fall." - Nelson Mandela
"Embracing growth, embracing elegance, embracing life - one beautiful moment at a time</p>
  <a href="#" className="read-less">Read Less <i className="arrow-icon-up"></i></a>
</div>

</div>
   </div>
 
 
</div>



<div className='section-C'>

<div className="right-">
        <button className="sign-up-button">Sign Up</button>
        <button className="subscribe-button">Subscribe Now</button>
      </div>
      <div className="left-">
        <h2>Personal growth tips: Empowering insights, inspiring stories, and practical advice</h2>
        <p>JOIN OUR MAILING LIST AND START YOUR DAY WITH A SPARK OF POSITIVITY</p>
      </div>

      </div>

      <section className="section-d">
  <div className="left-container">
    <div className="box">
      <h3 className="bold-text">Clarify Your Vision</h3>
      <p>A clear vision is the first step to turning your aspirations into reality, Shatter the lens of perception
      .</p>
    </div>
    <div className="box">
      <h3>Enhance your sense of self-worth
      </h3>
      <p>Trust yourself, trust your instincts, and trust the process. Your uniqueness is your superpower.</p>
    </div>
    <div className="box">
      <h3> Harmonious existence</h3>
      <p>Discover the art of integrated well-being. Where every aspect of life is in harmony with the others.</p>
    </div>
  </div>
  <div className="right-container">
  <img src="./affirm.jpg" alt="Section D Image" />

  </div>
  </section>





  <section className="educational-content">
<h2>Develop and Flourish</h2>
<p>Explore our collection of articles, resources, and tips on personal growth, love, and elegance.</p>
<div className="content-grid">

 
<div className="poise" id="article-1">
<h3>Article Title 1</h3>
<p>10 Morning Habits to Boost Productivity.</p>
<a href="#" className="read-more">Read More</a>
<div className="hidden-text">
<p>
1.  Wake up 30 minutes earlier than usual. This allows you to start your day with a sense of 
calm and control.


2. Drink a full glass of water to rehydrate after a night of sleep. Dehydration can impair focus and productivity.


3. Spend 10 minutes meditating to clear your mind. Meditation can help reduce stress and increase focus.


4. Get some natural sunlight to boost your mood. Exposure to sunlight can help regulate your circadian rhythms.


5. Eat a nutritious breakfast to fuel your body. A healthy breakfast can provide energy and support concentration.


6. Write down your top 3 goals for the day. Setting clear goals can help you stay focused and motivated.


7. Spend 10 minutes reviewing your schedule for the day. A quick review can help you prioritize tasks and manage your time effectively.


8. Take a short 10-minute walk outside to get some fresh air. Taking a short walk can help increase blood flow and oxygenation to the brain.


9. Practice deep breathing exercises to reduce stress. Deep breathing can help calm the mind and reduce feelings of anxiety.


10. Review your progress from the previous day. Reflecting on your progress can help you identify areas for improvement and stay motivated
</p>



<a href="#" className="read-less">Read Less</a>
</div>
</div>
<div className="poise" id="article-2">
<h3>Article Title 2</h3>
<p>Love Without Expectations: A Path to True Happiness.</p>
<a href="#" className="read-more">Read More</a>
<div className="hidden-text">
<p>

Love is a complex emotion that brings great joy and happiness into our lives. It's a feeling that can make us comfortable, create unending joy in our souls, and bring happiness even when we have little or nothing. Love is patient, love is kind, and love is life.
Love can be expressed in different ways, and people have unique love languages. For some, love is a person - a special someone who makes their heart skip a beat. For others, love is a feeling that transcends relationships. There are different levels and types of love, including agape, erotic, and filial love.

However, when we tie love to expectations, it can hurt. Expectations make us hold people to high standards, and when they don't meet those standards, we become angry and resentful.
Loving without expectations means letting go of the need for a specific outcome or response from the person we love. It means loving unconditionally, without attachment to how the other person feels or behaves. When we love without expectations, we're free to love for the sake of loving, rather than for what we can get out of it.

This approach helps us create genuine love and happiness. It allows us to see clearly when our partners treat us well and when we're getting the same love in return. Loving without expectations increases freedom, reduces stress and anxiety, and leads to greater happiness.

By letting go of attachment and focusing on the present moment, we can experience deeper connections and greater joy in our relationships. Remember, love is a gift, not a transaction. By loving without expectations, we can cultivate a more authentic, generous, and loving heart.</p>
<a href="#" className="read-less">Read Less</a>
</div>
</div>
<div className="poise" id="article-3">
<h3>Article Title 3</h3>
<p>Simplifying Your Life and Style: Effortless Chic tips for a Timeless Wardrobe.</p>
<a href="#" className="read-more">Read More</a>
<div className="hidden-text">
<p>


As women, we often find ourselves caught up in fast fashion trends and the
 pressure to constantly update our wardrobes to be on-trend and look our best.
  However, this can lead to looking unpolished and tacky. It's not just about 
  buying the most expensive outfit; it's about buying the right outfit and
   pairing them the right way.

Embracing an effortless chic style can be incredibly liberating. 
Not only does it simplify our lives, but it also helps us build a timeless
 wardrobe that exudes elegance and sophistication. An effortless chic style
  embodies a carefree, yet polished approach to fashion. It's about looking and
   feeling great without appearing to try too hard.

Effortless chic women prioritize quality over quantity, focusing on timeless
 pieces that can be mixed and matched to create a variety of outfits.
  Here are some tips for building a timeless wardrobe:

1. Invest in quality over quantity. Rather than buying cheap, 
trendy materials that may quickly go out of style, invest in high-quality, 
timeless items that will stand the test of time.

2. Focus on neutral colors. Neutral colors like black, white, beige,
 and navy are versatile and can be easily mixed and matched to create a variety of outfits.

3. Develop a personal style. Take the time to discover what works best for your body,
 lifestyle, and personal taste. This will help you make informed purchasing decisions 
 and ensure that your wardrobe is cohesive.

4. Don't overdo it with expensive brands. Wearing expensive brands from head to toe 
can make you look cheap and tacky. Instead, use expensive brands sparingly to add a 
touch of elegance to your outfit.

5. Mix textures. Mixing different textures like smooth, rough, soft, and hard can
 add depth and interest to your outfit.

6. Take care of your clothes. Properly caring for your clothes will help extend
 their lifespan and ensure that they continue to look great.

7. Edit your wardrobe. Be ruthless when it comes to editing your wardrobe. 
Get rid of items that no longer fit, are worn out, or don't make you feel great.

8. Accessorize wisely. Accessories can make or break an outfit.
 Invest in a few high-quality accessories and learn how to pair them with your outfits.

The benefits of having an effortless chic wardrobe include:

- Saving time
- Reducing decision fatigue
- Saving money
- Increasing confidence

In conclusion, embracing an effortless chic style can be incredibly liberating.
 By prioritizing quality over quantity, focusing on neutral colors, 
 and developing a personal style, you can build a timeless wardrobe that exudes elegance 
 and sophistication. Remember, effortless chic is all about looking and feeling great without
  appearing to try too hard. By simplifying your life and style, you'll be able to enjoy
   the freedom and confidence that comes with it.
</p>
<a href="#" className="read-less">Read Less</a>



</div>
</div>
</div>

<button className="call-to-action">Explore Our Resources</button>
</section>






<div className="book-advertisement">
  <h2>Get Your Copy of...</h2>
  <h1>From Ordinary to Extraordinary</h1>
  <h3>Transforming Your Life with Growth, Love, and Elegance</h3>
  <p>Discover the secrets to unlocking your full potential and living an extraordinary life.</p>
  <button className="order-now-button">Order Now</button>
</div>



     {/* Add the new code here */}
 
     <div className="picture-container">
  <div className="pictures">
    <img src="./bag.jpg" alt="Picture 1" className="picturea" />
    <img src="./food.jpg" alt="Picture 2" className="pictureb" />
    <img src="./inspire.jpg" alt="Picture 3" className="picturec" />

  </div>
          
</div>


<button id="sign-up-btn">Sign Up</button>


<div className='nom'>
<p>L I A N A</p>
   </div>


<div className="footer">
<div className="social-icons">
  <a href="#" target="_blank" title="Facebook">
    <i className="fa-brands fa-facebook-f"></i>
  </a>
  <a href="#" target="_blank" title="Twitter">
    <i className="fa-brands fa-twitter"></i>
  </a>
  <a href="#" target="_blank" title="Instagram">
    <i className="fa-brands fa-instagram"></i>
  </a>
  <a href="#" target="_blank" title="WhatsApp">
    <i className="fa-brands fa-whatsapp"></i>
  </a>
  <a href="#" target="_blank" title="YouTube">
    <i className="fa-brands fa-youtube"></i>
  </a>
 

</div>
  <div className="footer-links">
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Offer</a></li>
      <li><a href="#">Services</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </div>
</div>
 </div>


);
}


export default App
