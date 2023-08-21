import tableBook from '../assets/tabler_book.svg';
import Arrow2 from '../assets/Arrow2.svg';

const MiddleSection = () => (
  <section className="middle-Section">
    <div className="OurValues">
      <h2>Our Values</h2>
      <p>
        Our Values form the bedrock of our culture and define how we work
        together to serve out stakeholders
      </p>
    </div>
    <div className="value1">
      <img src={tableBook} alt="tabler Book" />
      <h3>Start with a point of view</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quisquam,
        provident autem inventore molestias a harum voluptatum. Excepturi vel magnam
        ex cum labore nostrum, repellat cumque odit rem eaque ea.
      </p>
    </div>
    <div className="value2">
      <img src={tableBook} alt="tabler Book" />
      <h3>Make a Difference</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ab
        in ipsam velit, harum officia adipisci at praesentium ratione eius
        natus iure totam rem, odio labore eum ea nobis fugit?
      </p>
    </div>
    <div className="value3">
      <img src={tableBook} alt="tabler Book" />
      <h3>Act with Integrity</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, assumenda,
        ullam eligendi perspiciatis modi impedit earum repudiandae incidunt,
        est reprehenderit similique non
        iste qui magni amet aut natus? Est, odio.
      </p>
    </div>
    <div className="value4">
      <img src={tableBook} alt="tabler Book" />
      <h3>Work as one</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Reprehenderit fugiat, cupiditate facere quod aspernatur impedit molestias
        voluptatibus nulla perspiciatis delectus? Quod beatae dignissimos odio labore
        excepturi quibusdam ad, nemo voluptatibus.
      </p>

    </div>
    <div className="value5">
      <img src={tableBook} alt="tabler Book" />
      <h3>Always Strive, never Settle</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, deleniti aliquam
        reiciendis odit iusto tempore quis quaerat porro optio impedit officiis nulla tempora
        repellendus laudantium hic reprehenderit qui esse blanditiis.
      </p>

    </div>
    <div className="value6">
      <img src={tableBook} alt="tabler Book" />
      <h3>Do the right thing</h3>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Pariatur consectetur beatae adipisci, tempora in dicta magnam ab ullam asperiores commodi.
        Ex expedita quis ad incidunt unde at
        dicta corrupti numquam.
      </p>
      <div className="CEO">
        <h4>Lorem ipsum dolor sit</h4>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus dolor
          libero sequi dicta quos praesentium reiciendis doloribus modi quis,
          minima rerum incidunt suscipit esse non commodi? Earum culpa similique suscipit!
        </p>
        <h4>Christopher Torrest</h4>
        <p>Global Chairman & CEO</p>
        <button>Read the full story</button>
        <img src={Arrow2} alt="arrow image" />
      </div>

    </div>

  </section>
);

export default MiddleSection;
