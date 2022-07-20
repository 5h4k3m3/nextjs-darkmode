export default function Home() {
  return (
    <div>
      <div className="container">
        <nav>
          <div className="title">My Portfolio</div>
          <div>
            <form action="#">
              <label className="switch">
                <input type="checkbox" />
                <span className="slider"></span>
              </label>
            </form>
          </div>
        </nav>
        <section>
          <div className="content">
            <h1>Salmon Portfolio</h1>
            <h3>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam,
              voluptatum?
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores molestiae obcaecati error odit eaque natus nihil
              deleniti quo voluptatibus. Vitae.
            </p>
            <button className="primary-btn">Contact</button>
          </div>
        </section>
      </div>
    </div>
  );
}
